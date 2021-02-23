import React, { createRef } from "react";

const FocusInput = () => {
  const inputEl = createRef();
  //const [name, setName] = useState('');

  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </>
  );
};

export default FocusInput;
