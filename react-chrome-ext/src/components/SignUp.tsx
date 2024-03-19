import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

interface Field {
  id: string;
}

const fields = signupFields;
let fieldsState: { [key: string]: string } = {};
fields.forEach((field: Field) => (fieldsState[field.id] = ""));

fields.forEach((field) => (fieldsState[field.id] = ""));

const SignUp = () => {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e: { target: { id: string; value: string } }) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            customClass={""}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}

export default SignUp;
