import React from "react";
import { BasketItem } from "./BasketItem";

export const Basket = ({ basket, product, total, resetBasket }) => {
  return (
    <>
      <div className="basket-container container">
        <h3>Alışveriş Detayları</h3>
        <ul>
          {basket.map((item, index) => (
            <BasketItem
              key={index}
              item={item}
              product={product.find((p) => p.id === item.id)}
            />
          ))}
        </ul>

        <div className="total">
            Toplam: {total}</div>
        <button 
        className="basket-reset-btn"
        onClick={resetBasket}>Sepeti Sıfırla</button>
      </div>
    </>
  );
};
