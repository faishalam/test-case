"use client";

type TProps = {
  children?: React.ReactNode;
};
const PublicLayout: React.FC<TProps> = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>{children}</div>
    </div>
  );
};
export default PublicLayout;
