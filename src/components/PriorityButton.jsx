import useUpdateTodoState from "../hooks/useUpdateTodoState";
import { TODO_PRIORITY } from "../constants";

const PriorityButton = ({ todo }) => {
  // ステータス更新用カスタムフック
  const { updateTodoPriority } = useUpdateTodoState();
  const ButtonStyle = {
    [TODO_PRIORITY.HIGH]: "table-content-priority table-content-priority-high",
    [TODO_PRIORITY.NORMAL]:
      "table-content-priority table-content-priority-normal",
    [TODO_PRIORITY.LOW]: "table-content-priority table-content-priority-normal",
  };
  return (
    <>
      {todo.priority === TODO_PRIORITY.HIGH && (
        <button
          className={ButtonStyle[TODO_PRIORITY.HIGH]}
          onClick={() => {
            updateTodoPriority(todo.id);
          }}
        >
          {todo.priority}
        </button>
      )}
      {todo.priority === TODO_PRIORITY.NORMAL && (
        <button
          className={ButtonStyle[TODO_PRIORITY.NORMAL]}
          onClick={() => {
            updateTodoPriority(todo.id);
          }}
        >
          {todo.priority}
        </button>
      )}
      {todo.priority === TODO_PRIORITY.LOW && (
        <button
          className={ButtonStyle[TODO_PRIORITY.LOW]}
          onClick={() => {
            updateTodoPriority(todo.id);
          }}
        >
          {todo.priority}
        </button>
      )}
    </>
  );
};

export default PriorityButton;
