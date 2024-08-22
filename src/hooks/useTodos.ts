import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () => {
    const fetchTodos = () =>
        axios
          .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.data);
    
      const {
        data,
        error,
        isLoading,
      } = useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
      });
    
    return {data, error,isLoading}
}

export default useTodos
