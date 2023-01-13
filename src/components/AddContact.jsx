import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { contactContext } from "../context/ContactContextProvaider";

const initialState = {
  image: "",
  name: "",
  text: "",
  number: "",
};
const AddContact = ({ setShowAddInps }) => {
  const [addInpValue, setAddInpValue] = useState(initialState);
  const { addContact } = useContext(contactContext);
  const handleChange = (e) => {
    let obj = {
      ...addInpValue,
      [e.target.name]: e.target.value,
    };
    setAddInpValue(obj);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (
      addInpValue.name.length < 1 ||
      addInpValue.text.length < 1 ||
      addInpValue.number.length < 1 ||
      addInpValue.image.length < 1
    ) {
      alert("Заполните поле");
      return;
    }
    addContact(addInpValue);
    setAddInpValue(initialState);
    setShowAddInps(false);
  };

  return (
    <div className="wrapper">
      <div className="add-contact">
        <input
          onChange={handleChange}
          value={addInpValue.image}
          type="text"
          name="image"
          placeholder="url"
        />
        <input
          onChange={handleChange}
          value={addInpValue.name}
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          onChange={handleChange}
          value={addInpValue.text}
          type="text"
          name="text"
          placeholder="text"
        />
        <input
          onChange={handleChange}
          value={addInpValue.number}
          type="number"
          name="number"
          placeholder="number"
        />
      </div>

      <button className="save-btn" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default AddContact;
