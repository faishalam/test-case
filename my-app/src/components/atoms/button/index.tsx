const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "danger" | "success";
  style?: React.CSSProperties;
}> = ({ children, onClick, type = "button", variant = "primary", style = {} }) => {
  const baseStyle: React.CSSProperties = {
    padding: "12px 20px",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    ...style
  };

  const variants = {
    primary: { backgroundColor: "#4f46e5", color: "white" },
    secondary: { backgroundColor: "#f1f5f9", color: "#475569" },
    danger: { backgroundColor: "#ef4444", color: "white" },
    success: { backgroundColor: "#22c55e", color: "white" }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant] }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
      }}
    >
      {children}
    </button>
  );
};

export default Button;