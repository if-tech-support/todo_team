import useUpdateTodoState from "../hooks/useUpdateTodoState";

const PriorityButton = ({ todo }) => {
  // ステータス更新用カスタムフック
  const { updateTodoPriority } = useUpdateTodoState();
  return (
    <>
      {todo.priority === "高" && (
        <button
          className="table-content-priority table-content-priority-high"
          onClick={() => {
            updateTodoPriority(todo.id);
          }}
        >
          {todo.priority}
        </button>
      )}
      {todo.priority === "中" && (
        <button
          className="table-content-priority table-content-priority-normal"
          onClick={() => {
            updateTodoPriority(todo.id);
          }}
        >
          {todo.priority}
        </button>
      )}
      {todo.priority === "低" && (
        <button
          className="table-content-priority table-content-priority-low"
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
