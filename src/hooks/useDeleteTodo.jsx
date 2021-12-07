import { todoListState } from "../atoms/atom";
import { useRecoilState } from "recoil";

const useDeleteTodo = () => {
  // todoリストデータ
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // リストアイテムの削除
  const deleteTodo = (id) => {
    // todoデータのインデックス
    const index = todoList.findIndex((todo) => todo.id === Number(id));

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return { deleteTodo };
};

export default useDeleteTodo;
