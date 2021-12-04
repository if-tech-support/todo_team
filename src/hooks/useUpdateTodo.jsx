import { todoListState } from "../atoms/atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router";
import { createUpdateTime } from "../utilities/createUpdateTime";

const useUpdateTodo = () => {
  // todoリストデータ
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // 画面遷移用のフック
  const navigation = useNavigate();

  // リストアイテムの更新
  const updateTodo = (id, todo) => {
    // todoデータのインデックス
    const index = todoList.findIndex((todo) => todo.id === Number(id));

    const newTodoList = [...todoList];
    newTodoList[index] = { ...todo, updateAt: createUpdateTime() };
    setTodoList(newTodoList);

    // ビュー画面へ戻る
    navigation("/");
  };

  // リストアイテムの削除
  const deleteTodo = (id) => {
    // todoデータのインデックス
    const index = todoList.findIndex((todo) => todo.id === Number(id));

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);

    // ビュー画面へ戻る
    navigation("/");
  };

  return { updateTodo, deleteTodo };
};

export default useUpdateTodo;
