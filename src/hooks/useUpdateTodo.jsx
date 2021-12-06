import { todoListState } from "../atoms/atom";
import { useRecoilState } from "recoil";
import { currentDateFormatter } from "../utils/currentDateFormatter";

const useUpdateTodo = () => {
  // todoリストデータ
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // リストアイテムの更新
  const updateTodo = (id, todo) => {
    // todoデータのインデックス
    const index = todoList.findIndex((todo) => todo.id === Number(id));

    const newTodoList = [...todoList];
    newTodoList[index] = { ...todo, updateAt: currentDateFormatter() };
    setTodoList(newTodoList);
  };

  return { updateTodo };
};

export default useUpdateTodo;
