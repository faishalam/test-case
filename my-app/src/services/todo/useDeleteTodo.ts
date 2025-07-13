import { useMutation } from "@tanstack/react-query";
import { NTodoRepository } from "./types";
import { AxiosError } from "axios";
import { NetworkAPIError } from "@/utils/response-type";
import { HeroServices } from "../HeroServices";

type TuseTodoListProps = {
  onSuccess?: (data: NTodoRepository.TMasterTodo) => void;
  onError?: (error: AxiosError<NetworkAPIError> | Error) => void;
  params?: NTodoRepository.TTodoParams;
};

const useDeleteTodo = (props?: TuseTodoListProps) => {
  const useDeleteTodoFn = async (id: number) => {
    try {
      const response = await HeroServices.delete(`/todos/${id}`);

      if (response.status !== 200) return;

      return response.data;
    } catch (error) {
      const err = error as AxiosError<NetworkAPIError>;
      throw err?.response?.data?.message || "Unknown error";
    }
  };

  const mutation = useMutation({
    mutationKey: ["useDeleteTodo"],
    mutationFn: useDeleteTodoFn,
    onSuccess: (response) => {
      if (response) {
        props?.onSuccess?.(response);
      }
    },
    onError: (error) => {
      if (props?.onError) {
        props.onError(error);
      }
    },
  });

  return { ...mutation };
};

export default useDeleteTodo;
