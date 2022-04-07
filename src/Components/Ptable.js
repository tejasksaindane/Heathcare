import React, { useState } from "react";
import "../Styles/Table.css";
// import data from "../Json/mock.data.json";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Ptable = () => {
  // const [contacts, setContacts] = useState(data);
  const [items, setItems] = useState(getLocalItems());
  return (
    <div className="Tab-container">
      <h4>Appointment Table</h4>
      <table>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Name</th>
            <th>City</th>
            <th>Phone No</th>
            <th>Age</th>
            <th>gender</th>
            {/* <th>fees</th>
            <th>Paid</th> */}
          </tr>
        </thead>
        <tbody>
          {/* {items.map((item) => ( */}
          <tr>
            {/* <td>{contact.id}</td> */}
            <td>{localStorage.getItem("Name")}</td>
            {/* <td>{item.Name}</td> */}
            <td>{localStorage.getItem("City")}</td>
            <td>{localStorage.getItem("Phone")}</td>
            <td>{localStorage.getItem("Age")}</td>
            <td>{localStorage.getItem("Gender")}</td>
            {/* <td>{contact.fees}</td>
              // <td>{contact.paid}</td> */}
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Ptable;
