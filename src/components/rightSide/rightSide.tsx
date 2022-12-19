import React from "react";
import "./rightSide.css";

interface Props {
  bill: number | undefined;
  tip: number | undefined;
  people: number | undefined;
  total: string | false;
  tipAmount: string | false;
  setTip: React.Dispatch<React.SetStateAction<number | undefined>>;
  setBill: React.Dispatch<React.SetStateAction<number | undefined>>;
  setPeople: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCustomValue: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function RightSide({
  bill,
  tip,
  people,
  total,
  tipAmount,
  setCustomValue,
  setTip,
  setBill,
  setPeople,
}: Props) {
  return (
    <div className="right-side">
      <div>
        <div className="calc-value-con">
          <div className="calc-left">
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <div className="calc-right">
            $
            {tipAmount && tipAmount !== "NaN" && tipAmount !== "Infinity"
              ? tipAmount
              : "0.00"}
          </div>
        </div>
        <div className="calc-value-con">
          <div className="calc-left">
            <p>Total</p>
            <span>/ person</span>
          </div>
          <div className="calc-right">
            ${total && total !== "NaN" && total !== "Infinity" ? total : "0.00"}
          </div>
        </div>
      </div>
      <button
        className={`reset ${bill || tip || people ? "reset-can" : ""}`}
        onClick={() => {
          if (bill || tip || people) {
            setCustomValue(undefined);
            setTip(undefined);
            setBill(undefined);
            setPeople(undefined);
          }
        }}>
        RESET
      </button>
    </div>
  );
}
