"use client";
import InputSection from "./components/InputSection";
import CardSection from "./components/CardSection";

const TodoPage: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        padding: "40px",
        backgroundColor: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80vh",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            flex: "0 0 auto",
          }}
        >
          <InputSection />
        </div>

        <div
          style={{
            flex: "1 1 0",
            borderRadius: "10px",
            padding: "10px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <CardSection />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
