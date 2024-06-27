import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
//import {FaSearch} from 'react-icons/fa'
//import Login from "./Login";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/* Input*/
function Table(props) {
  const [data, setData] = useState([]);
  // const [Udata, setUData] = useState([]);
  // const history = useHistory();
  const [date, setDate] = useState("");
  const [type, setType] = useState("4ft Flex");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [editId, setEditId] = useState(-1);

  // const [search, setSearch] = useState('')
  const { id } = useParams();

  /* Update */
  const [udate, usetDate] = useState("");
  const [utype, usetType] = useState("");
  const [uheight, usetHeight] = useState("");
  const [uwidth, usetWidth] = useState("");
  const [uquantity, usetQuantity] = useState("");
  const [urate, usetRate] = useState("");
  const [uamount, usetAmount] = useState("");
  const [unote, usetNote] = useState("");

  // /*date*/
  //    const showDate = () => {
  //     const date = new Date();
  //     const displayDate = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()
  //     return (
  //         displayDate
  //     )
  // }

  useEffect(() => {
    axios
      .get("http://localhost:8000/Record")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/User")
  //     .then((res) => setUData(res.Udata))
  //     .catch((err) => console.log(err));
  // }, []);

  /* Submit*/
  const handleSubmit = (e) => {
    e.preventDefault();

    //Auto Increament not working correctly
    //const intData = parseInt(data)
    //const id = data[data.length-1].id+1;
    //const id = data.length + 1

    axios
      .post("http://localhost:8000/Record", {
        id: id,
        date: date,
        type: type,
        height: parseInt(height),
        width: parseInt(width),
        quantity: parseInt(quantity),
        rate: parseInt(rate),
        amount: parseInt(amount),
        note: parseInt(note),
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  /* Delete*/

  const handleDelete = (id) => {
    // let username = sessionStorage.getItem("username");

    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      axios
        .delete("http://localhost:8000/Record/" + id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  /* Edit*/
  const handleEdit = (id) => {
    axios
      .get("http://localhost:8000/Record/" + id)
      .then((res) => {
        usetDate(res.data.date);
        usetType(res.data.type);
        usetHeight(res.data.height);
        usetWidth(res.data.width);
        usetQuantity(res.data.quantity);
        usetRate(res.data.rate);
        usetAmount(res.data.amount);
        usetNote(res.data.note);
      })
      .catch((err) => console.log(err));
    setEditId(id);
  };

  /*Update*/
  const handleUpdate = () => {
    axios
      .put("http://localhost:8000/Record/" + editId, {
        //id: editId,
        date: udate,
        type: utype,
        height: parseInt(uheight),
        width: parseInt(uwidth),
        quantity: parseInt(uquantity),
        rate: parseInt(urate),
        amount: parseInt(uamount),
        note: parseInt(unote),
      })
      .then((res) => {
        window.location.reload();
        setEditId(-1);
      })
      .catch((err) => console.log(err));
  };

  /*search*/
  // const fetchDate = (value) => {
  //     fetch('http://localhost:8000/Record' + id {
  //                 id: id,
  //                 date: date,
  //                 type: type,
  //                 height: parseInt(height),
  //                 width: parseInt(width),
  //                 quantity:parseInt(quantity),
  //                 rate: parseInt(rate),
  //                 amount: parseInt(amount)
  //     })
  //     .then((res) => res.json())
  //     .then((json) => {
  //         const sResult = json.filter((info) => {
  //             return value && info.type.includes(value);

  //         });

  //     })
  //     .catch(err => console.log(err));
  // };
  // const handleSearch = (value) => {
  //     setSearch(value)
  //     fetchDate(value)
  // }

  return (
    <div>
      {/* date display
            <p className='date'>{showDate()}</p> */}
      <>
        {props.success ? (
          <div>
            <p>Login Successful</p>
          </div>
        ) : (
          <div></div>
        )}
      </>
      <form onSubmit={handleSubmit} className="acc-form">
        <nav className="container">
          <div className="container-div">
            <label id="label" className="type">
              Date
            </label>
            <input
              className="l-input"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label id="label" className="type">
              Type
            </label>
            <select
              className="l-input"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="3ft Flex"> 3ft Flex </option>
              <option value="4ft Flex"> 4ft Flex </option>
              <option value="5ft Flex"> 5ft Flex </option>
              <option value="6ft Flex"> 6ft Flex </option>
              <option value="3ft SAV"> 3ft SAV </option>
              <option value="4ft SAV"> 4ft SAV </option>
              <option value="5ft SAV"> 5ft SAV </option>
            </select>
            {/* <select className="l-input" type="text" value={type} onChange={e => setType(e.target.value)} required/> */}
            <label id="label" className="height">
              Height
            </label>
            <input
              className="l-input"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
            <label id="label" className="width">
              Width
            </label>
            <input
              className="l-input"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              required
            />
            <label id="label" className="quantity">
              Quantity
            </label>
            <input
              className="l-input"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <label id="label" className="rate">
              Rate
            </label>
            <input
              className="l-input"
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              required
            />
            <label id="label">Amount</label>
            <input
              className="l-input"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <label id="label">Note</label>
            <input
              className="l-input"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <button className="btn">Add Up</button>
          </div>
        </nav>
      </form>
      {/* <div className='search' >
            <FaSearch className='search-icon' />
            <input className='isearch' type="text" placeholder='search'value={search} onChange={e => handleSearch(e.target.value)}/>
            </div> */}

      <table className="table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>TYPE</th>
            <th>HEIGHT</th>
            <th>WIDTH</th>
            <th>QUANTITY</th>
            <th>RATE</th>
            <th>AMOUNT</th>
            <th>NOTE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, id) =>
            user.id === editId ? (
              <tr>
                <td>
                  <input
                    className="l-input"
                    type="text"
                    value={udate}
                    onChange={(e) => usetDate(e.target.value)}
                  />
                </td>
                <select
                  className="l-input"
                  value={utype}
                  onChange={(e) => usetType(e.target.value)}
                  required
                >
                  <option value="3ft Flex"> 3ft Flex </option>
                  <option value="4ft Flex"> 4ft Flex </option>
                  <option value="5ft Flex"> 5ft Flex </option>
                  <option value="6ft Flex"> 6ft Flex </option>
                  <option value="3ft SAV"> 3ft SAV </option>
                  <option value="4ft SAV"> 4ft SAV </option>
                  <option value="5ft SAV"> 5ft SAV </option>
                </select>
                <td>
                  <input
                    className="l-input"
                    type="number"
                    value={parseInt(uheight)}
                    onChange={(e) => usetHeight(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="l-input"
                    type="number"
                    value={parseInt(uwidth)}
                    onChange={(e) => usetWidth(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="l-input"
                    type="number"
                    value={parseInt(uquantity)}
                    onChange={(e) => usetQuantity(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="l-input"
                    type="number"
                    value={parseInt(urate)}
                    onChange={(e) => usetRate(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="l-input"
                    type="number"
                    value={parseInt(uamount)}
                    onChange={(e) => usetAmount(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="l-input"
                    type="text"
                    value={unote}
                    onChange={(e) => usetNote(e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={handleUpdate} className="btn">
                    Update
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={parseInt(id)}>
                <td>{user.date}</td>
                <td>{user.type}</td>
                <td>{user.height}</td>
                <td>{user.width}</td>
                <td>{user.quantity}</td>
                <td>{user.rate}</td>
                <td>{user.amount}</td>
                <td>{user.note}</td>

                <td>
                  <button
                    id="acc-btn"
                    className="btn"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    id="acc-btn"
                    className="btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

/*npx json-server --watch data/db.json --port 8000*/
export default Table;
