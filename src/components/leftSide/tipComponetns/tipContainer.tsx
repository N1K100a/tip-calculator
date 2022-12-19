import React, { useEffect } from "react";
import "./tipContainer.css";
import { useState } from "react";

interface Props {
  setTip: React.Dispatch<React.SetStateAction<number | undefined>>;
  tip: number | undefined;
  customValue: number | undefined;
  setCustomValue: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function TipContainer({
  setTip,
  tip,
  customValue,
  setCustomValue,
}: Props) {
  useEffect(() => {
    if (customValue && customValue > 200) {
      setCustomValue(200);
      setTip(2);
    }
    if (customValue && customValue < 0) {
      setCustomValue(undefined);
      setTip(undefined);
    }
  }, [customValue]);
  const btnClick = (number: number) => {
    if (tip && number === tip * 100) {
      setTip(0);
    } else {
      setTip(number / 100);
      setCustomValue(0);
    }
  };

  const percent = [5, 10, 15, 25, 50];
  const btns = percent.map((number) => {
    return (
      <button
        key={number}
        className={`tip-btn ${tip && number === tip * 100 ? "active-btn" : ""}`}
        onClick={() => {
          btnClick(number);
        }}>
        {number + "%"}
      </button>
    );
  });

  return (
    <div className="tip-container">
      {btns}
      <input
        className={`tip-custom ${customValue ? "custom-active" : ""}`}
        placeholder="Custom"
        type="number"
        value={customValue ? customValue : ""}
        onChange={(e) => {
          setCustomValue(e.target.valueAsNumber);
          setTip(e.target.valueAsNumber / 100);
        }}
      />
    </div>
  );
}
