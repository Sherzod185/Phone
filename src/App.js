import React from "react";
import { useState } from "react";
import contacts from "./img/contact.svg"
import phone from "./img/phone.svg";

const App = () => {
  const [count, setCount] = useState(0);
  const [edits, setEdit] = useState(0);
  const [contact, setContact] = useState([
    {
      id: 1,
      username: "Sherzod",
      tell: "917812001",
    },
    {
      id: 2,
      username: "Behzod",
      tell: "942569922",
    },
    {
      id: 3,
      username: "Azizbek",
      tell: "938565544",
    },
    {
      id: 4,
      username: "Asliddin",
      tell: "907889566",
    },
    {
      id: 5,
      username: "Chingiz",
      tell: "999002020",
    },
    {
      id: 6,
      username: "Samandar",
      tell: "949656444",
    },
    {
      id: 7,
      username: "Mirkomil",
      tell: "935454155",
    },
    {
      id: 8,
      username: "Jo'rabek",
      tell: "904545455",
    },
    {
      id: 9,
      username: "Dilshod",
      tell: "917888888",
    },
    {
      id: 10,
      username: "Diyor",
      tell: "949888994",
    },
    {
      id: 11,
      username: "Xusniddin",
      tell: "931111111",
    },
    {
      id: 12,
      username: "Abdulaziz",
      tell: "907777777",
    },
  ]);
  const minus=()=>{
    if(count<=0){
return count
    }
    return setCount(count - 1);
  }


  const change=()=>{
setEdit(Math.floor(Math.random() * 12));
  }
  return (
    <div className="container">
      <div className="card">
        <h2
          style={{
            display: "flex",
            color: "#003",
            alignItems: "center",
            position: "relative",
          }}
        >
          <i
            className="bx bxs-message-dots"
            style={{ color: "#ff930a", marginRight: "6px" }}
          ></i>
          <span className="spancha">{count}</span>
          Messages:{count}
        </h2>
        <hr />

        <div className="block">
          <h3 style={{ display: "flex", color: "#003", alignItems: "center" }}>
            <img style={{ marginRight: "5px" }} src={contacts} alt="contact" />
            <div className="block2">
              {contact[edits].username}{" "}
              <div className="spannn">+998{contact[edits].tell}</div>
            </div>
          </h3>
          <div onClick={change} className="edit">
            <i className="bx bxs-pencil"></i>
            <span>edit</span>
          </div>
          <a href={`tel:+998${+contact[edits].tell}`}>
            <img src={phone} alt="phone" />
          </a>
        </div>
        <hr />
        <button className="btn btn1" onClick={() => setCount(count + 1)}>
          Add
        </button>
        <button className="btn btn2" onClick={minus}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default App;
