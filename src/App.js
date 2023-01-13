import "./App.css";
import ContactList from "./components/ContactList";
import { Route, Routes } from "react-router-dom";
import Heandler from "./components/Heandler";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="container">
      <div className="bg">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/manasmap-461bd.appspot.com/o/photo_2022-11-02_11-03-04.jpg?alt=media&token=0b3859d2-0db0-43de-a3a9-a2ec551bfa38"
          }
          alt=""
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Heandler />
              <ContactList />
            </>
          }
        ></Route>
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
