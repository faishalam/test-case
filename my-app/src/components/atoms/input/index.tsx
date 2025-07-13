const Input: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  style?: React.CSSProperties;
}> = ({ value, onChange, placeholder, type = "text", style = {} }) => (
  <input
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    style={{
      padding: "12px 16px",
      border: "2px solid #e1e5e9",
      borderRadius: "12px",
      fontSize: "14px",
      outline: "none",
      color: "black",
      transition: "all 0.3s ease",
      backgroundColor: "#fff",
      ...style,
    }}
    onFocus={(e) => {
      e.target.style.borderColor = "#4f46e5";
      e.target.style.boxShadow = "0 0 0 3px rgba(79, 70, 229, 0.1)";
    }}
    onBlur={(e) => {
      e.target.style.borderColor = "#e1e5e9";
      e.target.style.boxShadow = "none";
    }}
  />
);

export default Input;
