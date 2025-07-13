"use client";
import React from "react";
import "./Checkbox.css";

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  label?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="custom-checkbox" />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;
