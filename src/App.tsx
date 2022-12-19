import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.svg";
import RightSide from "./components/rightSide/rightSide";
import LeftSide from "./components/leftSide/leftSide";

function App() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number | undefined>(undefined);

  const alright =
    bill !== undefined && people !== undefined && tip !== undefined;

  const total = alright && ((bill * (1 + tip)) / people).toFixed(2);
  const tipAmount = alright && ((bill * tip) / people).toFixed(2);

  const [customValue, setCustomValue] = useState<number | undefined>(undefined);

  return (
    <div className="App">
      <div className="splitter-img">
        <img src={logo} alt="22" />
      </div>
      <div className="calculator-con">
        <LeftSide
          bill={bill}
          tip={tip}
          people={people}
          setBill={setBill}
          customValue={customValue}
          setTip={setTip}
          setPeople={setPeople}
          setCustomValue={setCustomValue}
        />
        <RightSide
          bill={bill}
          tip={tip}
          people={people}
          total={total}
          tipAmount={tipAmount}
          setBill={setBill}
          setTip={setTip}
          setPeople={setPeople}
          setCustomValue={setCustomValue}
        />
      </div>
    </div>
  );
}

export default App;
