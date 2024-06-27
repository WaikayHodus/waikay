import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const [height, setHeigth] = useState("");
  const [width, setWidth] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState("");

  const handleResult = (e) => {
    e.preventDefault();
    const cal = Math.round((height * width * quantity * rate) / 144);
    const result = setResult(cal);
  };
  // useEffect = () => {
  //   let username = sessionStorage.getItem("username");
  // };

  return (
    <div className="cal">
      <form onSubmit={handleResult}>
        <h5>
          Inches{" "}
          <button className="btn-switch">
            <Link to="/Feet">switch</Link>
          </button>
        </h5>
        <p>Height</p>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeigth(e.target.value)}
          required
        />
        <p>Width</p>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
        <p>Quantity</p>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <p>Rate</p>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
        />
        <p></p>
        <button className="btn">Submit</button>
      </form>
      <h2 className="calResult">{result}</h2>
    </div>
  );
};

export default Home;
