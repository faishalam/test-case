import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { NetworkAPIError } from "@/utils/response-type";
import { NTodoRepository } from "./types";
import { HeroServices } from "../HeroServices";
import { useState } from "react";

type TuseTodoListProps = {
  onSuccess?: (data: NTodoRepository.TMasterTodo) => void;
  onError?: (error: AxiosError<NetworkAPIError> | Error) => void;
  params?: NTodoRepository.TTodoParams;
};

const useTodoList = (props?: TuseTodoListProps) => {
  const [todoList, setTodoList] = useState<NTodoRepository.TMasterTodo[]>([]);
  const useTodoListFn = async () => {
    try {
      const response = await HeroServices.get<NTodoRepository.TMasterTodo[]>(
        "/todos"
      );

      const { status } = response;

      if (status !== 200) return;

      setTodoList(response.data);

      return response.data;
    } catch (error) {
      const err = error as AxiosError<NetworkAPIError>;
      throw err?.response?.data?.message || "Unknown error";
    }
  };

  const query = useQuery({
    queryKey: ["useTodoList", props?.params],
    queryFn: useTodoListFn,
    staleTime: Infinity,
    enabled: !!props?.params,
  });

  return { ...query, todoList, setTodoList };
};

export default useTodoList;
