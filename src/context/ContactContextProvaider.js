import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const contactContext = createContext();
const API = "http://localhost:8001/contacts";
const ContactContextProvaider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [currentProd, setCurrentProd] = useState({
    image: "",
    name: "",
    text: "",
    number: "",
  });

  const getContacts = async () => {
    const { data } = await axios.get(API);
    setContacts(data);
  };

  const addContact = async (newContact) => {
    await axios.post(API, newContact);
    getContacts();
  };
  const listDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContacts();
  };
  async function getOneProd(id) {
    let res = await axios.get(`${API}/${id}`);
    setCurrentProd(res.data);
  }
  async function updateProduct(id, newProd) {
    axios.patch(`${API}/${id}`, newProd);
    getContacts();
  }

  const values = {
    contacts,
    getContacts,
    addContact,
    listDelete,
    getOneProd,
    updateProduct,
    currentProd,
  };
  return (
    <contactContext.Provider value={values}>{children}</contactContext.Provider>
  );
};

export default ContactContextProvaider;
