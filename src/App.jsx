import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import product from "./Products.json";
import { Product } from "./components/Product";
import { Basket } from "./components/Basket";

function App() {
  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * product.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const resetBasket = () => {
    setBasket([]);
  };
  return (
    <>
      <Header money={money} total={total} />
      <div className="container products">
      {product.map((product, index) => (
        <Product
          key={index}
          basket={basket}
          setBasket={setBasket}
          product={product}
          total={total}
          money={money}
        />
      ))}
      </div>
      {total > 0 && (
        <>
          <Basket
            product={product}
            basket={basket}
            total={total}
            resetBasket={resetBasket}
          />
        </>
      )}
    </>
  );
}

export default App;
