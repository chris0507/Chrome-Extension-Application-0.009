import React from "react";

const TermsCheckBox = () => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        // checked={isTermsAccepted}
        // onChange={handleCheckboxChange}
        className="form-checkbox h-4 w-4 text-indigo-600"
      />
      <span className="text-sm text-gray-700">
        I agree to the{" "}
        <a href="#" className="text-blue-500">
          Terms of Service
        </a>
      </span>
    </label>
  );
};

export default TermsCheckBox;
