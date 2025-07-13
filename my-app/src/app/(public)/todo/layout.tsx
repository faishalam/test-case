"use client";

import { TodoProviders } from "./hooks";

type TProps = {
  children: React.ReactNode;
};
const TodoLayout: React.FC<TProps> = ({ children }) => {
  return <TodoProviders>{children}</TodoProviders>;
};
export default TodoLayout;
