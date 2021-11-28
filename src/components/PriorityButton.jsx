import { PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_NORMAL } from "../constants";
import useUpdateTodoState from "../hooks/useUpdateTodoState";

const PriorityButton = ({ todo }) => {
  // ステータス更新用カスタムフック
  const { updateTodoPriority } = useUpdateTodoState();
  const ButtonStyle = {
    高: PRIORITY_HIGH,
    中: PRIORITY_NORMAL,
    低: PRIORITY_LOW,
  };
  return (
    <>
      <button
        className={ButtonStyle[todo.priority]}
        onClick={() => {
          updateTodoPriority(todo.id);
        }}
      >
        {todo.priority}
      </button>
    </>
  );
};

export default PriorityButton;
