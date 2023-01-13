import React from "react";

import AddContact from "./AddContact";
import { useState } from "react";

const Heandler = () => {
  const [showAddInps, setShowAddInps] = useState(false);

  return (
    <div>
      <div className="heandler">
        <img
          className="title_img"
          src={
            "https://firebasestorage.googleapis.com/v0/b/manasmap-461bd.appspot.com/o/photo_2022-11-02_11-10-23.jpg?alt=media&token=e2aecc78-0344-46f6-8d94-27d4aca6bebc"
          }
          alt=""
        />

        <h2 className="title">_$ainful$oul_List_</h2>
        <button
          className="title_btn"
          onClick={() => setShowAddInps(!showAddInps)}
        >
          New $weet_L1st
        </button>
      </div>
      {showAddInps ? <AddContact setShowAddInps={setShowAddInps} /> : <></>}
    </div>
  );
};

export default Heandler;
