"use client";

import { useState } from "react";
import styles from "./sequencer.module.css";

export default function Sequencer() {
  const [sequenceLength, setSequenceLength] = useState(8);
  const [numberOfInstruments, setNumberOfInstruments] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Convert the slider value to an integer
    const intValue = parseInt(event.target.value, 10);
    setSequenceLength(intValue);
  };

  const handleAddInstrument = (event: React.MouseEvent) => {
    setNumberOfInstruments(numberOfInstruments + 1);
  };
  const renderedSequenceItems = [];
  for (let i = 0; i < sequenceLength; i++) {
    renderedSequenceItems.push(<li className={styles['sequence-list-item']} key={i}></li>);
  }

  const renderedInstruments = [];
  for (let i = 0; i < numberOfInstruments; i++) {
    let instrumentRow = [];
    for (let k = 0; k < sequenceLength; k++) {
        instrumentRow.push(<div className={styles["instrument-step"]}></div>)
    }
    renderedInstruments.push(<div className={styles["instrument-list"]}>{instrumentRow}</div>);
  }
  return (
    <>
      <input
        name="slider"
        id="slider"
        type="range"
        min="0"
        max="16"
        value={sequenceLength}
        onChange={handleSliderChange}
      />
      <div>
        <label htmlFor="slider">Sequence Length: </label>
        {sequenceLength}
      </div>
      <button onClick={handleAddInstrument}>Add Instrument</button>
      <ul className={styles['sequence-list']}>{renderedSequenceItems}</ul>
      <ul>{renderedInstruments}</ul>
    </>
  );
}
