import { useRef } from "react";
import useAddTodo from "../hooks/useAddTodo";

const TodoForm = () => {
  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current?.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              userId: 1,
              completed: false,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={addTodo.isPending}
          >
            {addTodo.isPending ? "Adding.." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
