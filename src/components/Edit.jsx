import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../context/ContactContextProvaider";

const Edit = () => {
  const { currentProd, getOneProd, updateProduct } = useContext(contactContext);
  const [addInpValue, setAddInpValue] = useState(currentProd);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProd(params.id);
  }, []);

  useEffect(() => {
    setAddInpValue(currentProd);
  }, [currentProd]);

  const handleChange = (e) => {
    let obj = {
      ...addInpValue,
      [e.target.name]: e.target.value,
    };

    setAddInpValue(obj);
  };
  const handleSubmit = (e) => {
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
    updateProduct(params.id, addInpValue);
    navigate("/");
  };
  const closeEdit = () => {
    navigate("/");
  };

  return (
    <div className="wrapper">
      <button onClick={closeEdit} className="close-btn">
        X
      </button>
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

export default Edit;
