import { TTodoInput } from "@/app/(public)/todo/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { NetworkAPIError } from "@/utils/response-type";
import { HeroServices } from "../HeroServices";

type TusePostTodoProps = {
  onSuccess?: (data: string) => void;
  onError?: (error: AxiosError<NetworkAPIError> | Error) => void;
};

const usePostTodo = (props: TusePostTodoProps) => {
  const usePostTodoFn = async (body: TTodoInput) => {
    try {
      if (!body?.id) return;
      const response = await HeroServices.post(`/todos`, body);

      if (response.status !== 200) return;

      return response.data;
    } catch (error) {
      const err = error as AxiosError<NetworkAPIError>;
      throw err?.response?.data?.message || "Unknown error";
    }
  };

  const mutation = useMutation({
    mutationKey: ["usePostTodo"],
    mutationFn: usePostTodoFn,
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

export default usePostTodo;
