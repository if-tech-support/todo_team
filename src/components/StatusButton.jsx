import useUpdateTodoState from "../hooks/useUpdateTodoState";
import { TODO_STATUS } from "../constants";

const StatusButton = ({ todo }) => {
  // ステータス更新用カスタムフック
  const { updateTodoStatus } = useUpdateTodoState();
  const ButtonStyle = {
    [TODO_STATUS.PENDING]: "table-content-status table-content-status-pending",
    [TODO_STATUS.WORKING]: "table-content-status table-content-status-working",
    [TODO_STATUS.DONE]: "table-content-status table-content-status-done",
  };
  return (
    <>
      {todo.status === TODO_STATUS.PENDING && (
        <button
          className={ButtonStyle[TODO_STATUS.PENDING]}
          onClick={() => {
            updateTodoStatus(todo.id);
          }}
        >
          {todo.status}
        </button>
      )}
      {todo.status === TODO_STATUS.WORKING && (
        <button
          className={ButtonStyle[TODO_STATUS.WORKING]}
          onClick={() => {
            updateTodoStatus(todo.id);
          }}
        >
          {todo.status}
        </button>
      )}
      {todo.status === TODO_STATUS.DONE && (
        <button
          className={ButtonStyle[TODO_STATUS.DONE]}
          onClick={() => {
            updateTodoStatus(todo.id);
          }}
        >
          {todo.status}
        </button>
      )}
    </>
  );
};

export default StatusButton;
