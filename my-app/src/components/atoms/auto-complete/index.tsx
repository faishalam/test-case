"use client";

type AutoCompleteOption = {
  label: string;
  value: boolean | null;
};

const AutoComplete: React.FC<{
  label?: string;
  name?: string;
  value: boolean | null;
  onChange: (value: boolean | null) => void;
  options: AutoCompleteOption[];
  style?: React.CSSProperties;
}> = ({ label, name, value, onChange, options, style = {} }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
    {label && (
      <label htmlFor={name} style={{ fontSize: "14px", fontWeight: "bold" }}>
        {label}
      </label>
    )}
    <select
      id={name}
      name={name}
      value={value === null ? "null" : value.toString()}
      onChange={(e) => {
        const val = e.target.value;
        if (val === "true") onChange(true);
        else if (val === "false") onChange(false);
        else onChange(null);
      }}
      style={{
        padding: "12px 16px",
        border: "2px solid #e1e5e9",
        borderRadius: "12px",
        color: "black",
        fontSize: "14px",
        outline: "none",
        backgroundColor: "#fff",
        cursor: "pointer",
        ...style,
      }}
    >
      {options.map((option) => (
        <option
          key={option.label}
          value={option.value === null ? "null" : option.value.toString()}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default AutoComplete;
