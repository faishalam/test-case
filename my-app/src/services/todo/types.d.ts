export namespace NTodoRepository {
  export type TMasterTodo = {
    id: number | null;
    userId: number | null;
    title: string;
    completed: boolean;
  };

  export type TTodoParams = {
    id?: number;
    enabled?: boolean;
  };
}
