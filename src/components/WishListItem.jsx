import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import { FiCheckCircle } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import Status from "./shared/Status";

function WishListItem({ item, handleDelete }) {
  const [version, setVersion] = useState("");
  const handleDone = (e) => {
    e.preventDefault();
    setVersion("done");
  };

  return (
    <div className="BoxStyle">
      <Status version={version} />
      <Card>
        <div className="buttons">
          <button className="doneButton" onClick={handleDone} title="Wish Fulfilled">
            <FiCheckCircle />
          </button>
          <button
            className="deleteButton"
            onClick={() => handleDelete(item.id)}
            title="Delete Wish"
          >
            <FiXCircle />
          </button>
        </div>
        <div>{item.text}</div>
      </Card>
    </div>
  );
}

export default WishListItem;
