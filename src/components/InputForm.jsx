import React from "react";
import { useState } from "react";
import Button from "./shared/Button";

function InputForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      const newWish = {
        text,
      };
      handleAdd(newWish);
      setText("");
    }
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <h2>Add a wish to your WishList</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="review"
            onChange={handleTextChange}
            value={text}
          ></input>
          <Button type="submit" isDisabled={btnDisabled}>
            SAVE
          </Button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
