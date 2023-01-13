import React, { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { contactContext } from "../context/ContactContextProvaider";

const ContactList = () => {
  const { contacts, getContacts, listDelete } = useContext(contactContext);

  useEffect(() => {
    getContacts();
  }, []);
  console.log(contacts);

  return (
    <div
      style={{
        padding: "1rem 10rem",

        display: "flex",
        gap: "3rem",
      }}
    >
      {contacts.length > 0 &&
        contacts.map((item) => (
          <div className="list-card" style={{ color: "white" }} key={item.id}>
            <img src={item.image} />
            <p>{item.name}</p>
            <p>{item.text}</p>
            <p>{item.number}</p>
            <button onClick={() => listDelete(item.id)}>Delete</button>
            <Link to={`/edit/${item.id}`}>
              <button>EDIT</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ContactList;
