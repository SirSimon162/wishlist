import React from "react";
import WishListItem from "./WishListItem";

function WishList({ wish, handleDelete }) {
  if (!wish || wish.length === 0) {
    return <p>Damn! No Wish Yet!!!</p>;
  }
  return (
    <div className="wishlist">
      {wish.map((item) => (
        <WishListItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default WishList;
