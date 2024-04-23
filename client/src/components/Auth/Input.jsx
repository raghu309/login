import React, { useState } from "react";

function Input({label, type, placeholder, textColor='white', onTextChange}) {
    const [text, setText] = useState("");

    function handleTextChange(e) {
        const newText = e.target.value;
        setText(newText);
        if(onTextChange) {
            onTextChange(newText);
        }
    }

  return (
    <div className="m-4">
      <label
        style={{color: textColor}}
        className="block font-medium dark:text-gray-200 text-xl"
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        onChange={handleTextChange}
        value={text}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white p-2"
      />
    </div>
  );
}

export default Input;
