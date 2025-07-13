import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { HeroServices } from "../HeroServices";
import { NetworkAPIError } from "@/utils/response-type";
import { NTodoRepository } from "./types";

type TuseTodoListByIdProps = {
  onSuccess?: (data: NTodoRepository.TMasterTodo) => void;
  onError?: (error: AxiosError<NetworkAPIError> | Error) => void;
  params?: NTodoRepository.TTodoParams;
};

const useTodoListById = (props?: TuseTodoListByIdProps) => {
  const useTodoListByIdFn = async () => {
    try {
      const response = await HeroServices.get<NTodoRepository.TMasterTodo>(
        `/todos/${props?.params?.id}`
      );

      const { status } = response;

      if (status !== 200) return;

      return response.data;
    } catch (error) {
      const err = error as AxiosError<NetworkAPIError>;
      throw err?.response?.data?.message || "Unknown error";
    }
  };

  const query = useQuery({
    queryKey: ["useTodoListById", props?.params],
    queryFn: useTodoListByIdFn,
    staleTime: Infinity,
    enabled: !!props?.params,
  });

  return { ...query };
};

export default useTodoListById;
