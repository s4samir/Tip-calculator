import React from "react";
import "./App.scss";
import TipSelector from "./components/TipSelector/TipSelector";
import SplitSnap from "./components/SplitSnap/SplitSnap";
import BillAmt from "./components/BillAmt/BillAmt";
import PeopleCount from "./components/PeopleCount/PeopleCount";

function App() {
  return (
    <div className="app">
      <div className={"app-header"}/>
      <div className={"form-body"}>
        <BillAmt />
        <TipSelector />
        <PeopleCount />
        <SplitSnap />
      </div>
    </div>
  );
}

export default App;
