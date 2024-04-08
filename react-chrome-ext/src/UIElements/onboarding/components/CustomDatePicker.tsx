import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const CustomDatePicker = () => {
  const [show, setShow] = useState(false);
  const options = {
    title: "",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-white dark:bg-[#343434]",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-[#c6c6c6]",
      input: "bg-[#343434] dark:bg-[#343434] rounded-full text-white",
      inputIcon: "none",
      selected: "",
    },
    icons: {
      prev: () => (
        <span>
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </span>
      ),
      next: () => (
        <span>
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </span>
      ),
    },
    datepickerClassNames: "top-12",
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Start Date",
  };

  const handleChangeDob = (selectedDate: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const selectedDateString = selectedDate.toLocaleDateString(
      "en-US",
      options
    );
    console.log(selectedDateString);
    // setValue("dob", selectedDateString, { shouldValidate: true });
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <Datepicker
      options={options}
      onChange={handleChangeDob}
      show={show}
      setShow={handleClose}
    />
  );
};

export default CustomDatePicker;
