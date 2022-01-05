import React, { useState } from "react";
import "../Styles/Table.css";
import data from "../Json/mock.data.json";

const Ptable = () => {
  const [contacts, setContacts] = useState(data);
  return (
    <div className="Tab-container">
      <h4>Appointment Table</h4>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            <th>Phone No</th>
            <th>Age</th>
            <th>gender</th>
            <th>fees</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.city}</td>
              <td>{contact.Phoneno}</td>
              <td>{contact.age}</td>
              <td>{contact.gender}</td>
              <td>{contact.fees}</td>
              <td>{contact.paid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ptable;
