import { todoListState } from "../atoms/atom";
import { useRecoilState } from "recoil";

// ステータス、優先度更新用カスタムフック
const useUpdateTodoState = () => {
  // todoリストデータ
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // ステータス更新
  const updateTodoStatus = (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    setTodoList(() => {
      switch (todoList[index].status) {
        case "未着手":
          return replaceItemAtIndex(todoList, index, {
            ...todoList[index],
            status: "作業中",
          });
        case "作業中":
          return replaceItemAtIndex(todoList, index, {
            ...todoList[index],
            status: "完了",
          });
        case "完了":
          return replaceItemAtIndex(todoList, index, {
            ...todoList[index],
            status: "未着手",
          });
        default:
          return todoList;
      }
    });
  };

  // 優先度更新
  const updateTodoPriority = (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    setTodoList(() => {
      switch (todoList[index].priority) {
        case "低":
          return replaceItemAtIndex(todoList, index, {
            ...todoList[index],
            priority: "中",
          });
        case "中":
          return replaceItemAtIndex(todoList, index, {
            ...todoList[index],
            priority: "高",
          });
        case "高":
          return replaceItemAtIndex(todoList, index, {
            ...todoList[index],
            priority: "低",
          });
        default:
          return todoList;
      }
    });
  };

  // 選択されたtodoを新しいtodoに入れ替える処理
  const replaceItemAtIndex = (todoList, index, newValue) => {
    return [
      ...todoList.slice(0, index),
      newValue,
      ...todoList.slice(index + 1),
    ];
  };

  return { updateTodoStatus, updateTodoPriority };
};

export default useUpdateTodoState;
