import useUpdateTodoState from "../hooks/useUpdateTodoState";

const StatusButton = ({ todo }) => {
  // ステータス更新用カスタムフック
  const { updateTodoStatus } = useUpdateTodoState();
  return (
    <>
      {todo.status === "未着手" && (
        <button
          className="table-content-status table-content-status-pending"
          onClick={() => {
            updateTodoStatus(todo.id);
          }}
        >
          {todo.status}
        </button>
      )}
      {todo.status === "作業中" && (
        <button
          className="table-content-status table-content-status-working"
          onClick={() => {
            updateTodoStatus(todo.id);
          }}
        >
          {todo.status}
        </button>
      )}
      {todo.status === "完了" && (
        <button
          className="table-content-status table-content-status-done"
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
