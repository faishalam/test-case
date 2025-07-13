import Input from "@/components/atoms/input";
import useTodo from "../hooks";
import AutoComplete from "@/components/atoms/auto-complete";
import Button from "@/components/atoms/button";

const InputSection: React.FC = () => {
  const {
    handleSubmitTodo,
    inputTodo,
    setInputTodo,
    setFilter,
    filter,
    completedOptions,
  } = useTodo();

  return (
    <div
      style={{
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        📝 My Todo List
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputTodo.title.trim()) {
            handleSubmitTodo(inputTodo);
            setInputTodo({
              id: 0,
              title: "",
              userId: 1,
              completed: false,
            });
          }
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <Input
            value={inputTodo.title}
            onChange={(val) => setInputTodo({ ...inputTodo, title: val })}
            placeholder="Add a new task..."
            style={{ flex: 1 }}
          />

          <Button type="submit" variant="success">
            Add Task
          </Button>
        </div>
      </form>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", flex: 1, minWidth: "200px" }}>
          <Input
            value={filter.search}
            onChange={(val) => setFilter((prev) => ({ ...prev, search: val }))}
            placeholder="Search tasks..."
            style={{ paddingLeft: "40px", width: "100%" }}
          />
        </div>
        <AutoComplete
          value={filter.completed}
          onChange={(val) => setFilter((prev) => ({ ...prev, completed: val }))}
          options={completedOptions}
          style={{ minWidth: "140px", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default InputSection;
