import React, { useEffect } from "react";
import "./leftSide.css";
import TipContainer from "./tipComponetns/tipContainer";
import peopleIcon from "./../../images/icon-person.svg";

interface Props {
  bill: number | undefined;
  tip: number | undefined;
  people: number | undefined;
  customValue: number | undefined;
  setTip: React.Dispatch<React.SetStateAction<number | undefined>>;
  setBill: React.Dispatch<React.SetStateAction<number | undefined>>;
  setPeople: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCustomValue: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function LeftSide({
  tip,
  people,
  bill,
  customValue,
  setCustomValue,
  setTip,
  setBill,
  setPeople,
}: Props) {
  useEffect(() => {
    if (people && people < 0) {
      setPeople(undefined);
    }
  }, [setPeople]);
  return (
    <div className="left-side">
      <span className="span">Bill</span>
      <div className="bill-input-con">
        <span>$</span>
        <input
          type="number"
          value={bill ? bill : ""}
          placeholder="0"
          onChange={(e) => setBill(e.target.valueAsNumber)}
        />
      </div>
      <span className="span">Select Tip %</span>
      <TipContainer
        setTip={setTip}
        tip={tip}
        customValue={customValue}
        setCustomValue={setCustomValue}
      />
      <span className="span">Number of People</span>
      <div className="people-input-con">
        <img src={peopleIcon} alt="11" />
        <input
          type="number"
          placeholder="0"
          value={people ? people : ""}
          onChange={(e) => {
            setPeople(e.target.valueAsNumber);
          }}
        />
      </div>
    </div>
  );
}
