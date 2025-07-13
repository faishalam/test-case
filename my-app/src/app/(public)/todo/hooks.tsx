"use client";
import useTodoList from "@/services/todo/useTodoList";
import { createContext, useContext, useMemo, useState } from "react";
import { TTodoInput } from "./types";
import { toast } from "react-toastify";
import { NTodoRepository } from "@/services/todo/types";

const useTodoHooks = () => {
  const [inputTodo, setInputTodo] = useState<NTodoRepository.TMasterTodo>({
    id: null,
    userId: null,
    title: "",
    completed: false,
  });
  const [editTodo, setEditTodo] = useState<TTodoInput | null>(null);
  const [onUpdate, setOnUpdate] = useState<boolean>(false);

  const [filter, setFilter] = useState<{
    search: string;
    completed: boolean | null;
  }>({
    search: "",
    completed: null,
  });

  const {
    todoList,
    isPending: isLoadingDataTodo,
    setTodoList,
  } = useTodoList({
    params: {
      enabled: true,
    },
  });

  const dataTodoList = useMemo(() => {
    const dataFilter = todoList?.filter((x) => {
      const search1 = x.title
        .toLowerCase()
        .includes(filter.search.toLowerCase());
      const search2 = x.completed
        .toString()
        .toLowerCase()
        .includes(filter.search.toLowerCase());

      const search = search1 || search2;

      const byCompleted =
        filter.completed !== null ? x.completed === filter.completed : true;

      return search && byCompleted;
    });
    return dataFilter.reverse();
  }, [todoList, filter]);

  const handleUpdateStatus = (id: number) => {
    setTodoList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    });
    setOnUpdate(false);
    toast.success("Todo updated status successfully");
  };

  const handleUpdateTodo = (data: TTodoInput) => {
    setOnUpdate(false);
    setEditTodo(null);
    if (!data) return;
    setTodoList((prev) => {
      return prev.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            ...data,
          };
        }
        return item;
      });
    });
    toast.success("Todo updated successfully");
  };

  const handleDeleteTodo = (id: number) => {
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
    toast.success("Todo deleted successfully");
  };

  const handleSubmitTodo = (data: TTodoInput) => {
    if (!data) return;
    setTodoList((prev) => {
      return [...prev, data];
    });
    toast.success("Todo added successfully");
  };

  const completedOptions = [
    { label: "Selesai", value: true },
    { label: "Belum Selesai", value: false },
    { label: "Semua", value: null },
  ];

  return {
    completedOptions,
    handleSubmitTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleUpdateStatus,
    setTodoList,
    dataTodoList,
    setFilter,
    filter,
    inputTodo,
    setInputTodo,
    todoList,
    isLoadingDataTodo,
    onUpdate,
    setOnUpdate,
    editTodo,
    setEditTodo,
  };
};

const useTodoContext = createContext<
  ReturnType<typeof useTodoHooks> | undefined
>(undefined);

export const TodoProviders: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const value = useTodoHooks();
  return (
    <useTodoContext.Provider value={value}>{children}</useTodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(useTodoContext);
  if (context === undefined) {
    throw new Error("useTodoContext must be used within an TodoProviders");
  }
  return context;
};
export default useTodo;
