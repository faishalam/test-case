import Checkbox from "@/components/atoms/checkbox";
import useTodo from "../hooks";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import { Edit2, Trash2, Check, X, Loader } from "lucide-react";

const CardSection: React.FC = () => {
  const {
    dataTodoList,
    handleUpdateStatus,
    handleUpdateTodo,
    handleDeleteTodo,
    onUpdate,
    setOnUpdate,
    editTodo,
    setEditTodo,
    isLoadingDataTodo,
  } = useTodo();

  if (dataTodoList.length === 0) {
    return (
      <>
        {isLoadingDataTodo && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#64748b",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>📋</div>
            <Loader size={40} />
          </div>
        )}
      </>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      }}
    >
      {dataTodoList.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            border: "1px solid #f1f5f9",
            transition: "all 0.3s ease",
            transform: "translateY(0)",
            opacity: item.completed ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <button
              onClick={() => handleUpdateStatus(item.id as number)}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                border: `2px solid ${item.completed ? "#22c55e" : "#d1d5db"}`,
                backgroundColor: item.completed ? "#22c55e" : "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
            >
              {item.completed && (
                <Checkbox
                  checked={item.completed}
                  onChange={() => {
                    handleUpdateStatus(item.id as number);
                  }}
                />
              )}
            </button>

            <div style={{ flex: 1 }}>
              {editTodo?.id === item.id && onUpdate ? (
                <Input
                  value={editTodo.title}
                  onChange={(val) =>
                    setEditTodo((prev) => ({ ...prev!, title: val }))
                  }
                  placeholder="Edit task..."
                  style={{ width: "100%" }}
                />
              ) : (
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      fontWeight: "500",
                      color: item.completed ? "#9ca3af" : "#1f2937",
                      textDecoration: item.completed ? "line-through" : "none",
                    }}
                  >
                    {item.title}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#64748b",
                      }}
                    >
                      Task #{item.id}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {!item.completed && (
              <div style={{ display: "flex", gap: "8px" }}>
                <Button
                  variant="secondary"
                  onClick={() => {
                    if (editTodo?.id === item.id) {
                      if (editTodo) {
                        handleUpdateTodo(editTodo);
                      }
                    } else {
                      setOnUpdate(true);
                      setEditTodo(item);
                    }
                  }}
                  style={{ minWidth: "auto", padding: "8px 16px" }}
                >
                  {editTodo?.id === item.id ? (
                    <Check size={16} />
                  ) : (
                    <Edit2 size={16} />
                  )}
                  {editTodo?.id === item.id ? "Save" : "Edit"}
                </Button>

                <Button
                  variant="danger"
                  onClick={() => {
                    if (editTodo?.id === item.id) {
                      setOnUpdate(false);
                      setEditTodo(null);
                    } else {
                      handleDeleteTodo(item.id as number);
                    }
                  }}
                  style={{ minWidth: "auto", padding: "8px 16px" }}
                >
                  {editTodo?.id === item.id ? (
                    <X size={16} />
                  ) : (
                    <Trash2 size={16} />
                  )}
                  {editTodo?.id === item.id ? "Cancel" : "Delete"}
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
