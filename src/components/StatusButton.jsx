import { STATUS_DONE, STATUS_PENDING, STATUS_WORKING } from "../constants";
import useUpdateTodoState from "../hooks/useUpdateTodoState";

const StatusButton = ({ todo }) => {
  // ステータス更新用カスタムフック
  const { updateTodoStatus } = useUpdateTodoState();
  const ButtonStyle = {
    未着手: STATUS_PENDING,
    作業中: STATUS_WORKING,
    完了: STATUS_DONE,
  };
  return (
    <>
      <button
        className={ButtonStyle[todo.status]}
        onClick={() => {
          updateTodoStatus(todo.id);
        }}
      >
        {todo.status}
      </button>
    </>
  );
};

export default StatusButton;
