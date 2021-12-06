import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const inputState = atom({
  key: "inputState",
  default: "test",
  effects_UNSTABLE: [persistAtom],
});

export const todoListState = atom({
  key: "todoState",
  default: [
    // TodoListダミーデータ
    {
      id: 1,
      title: "Github上に静的サイトをホスティングする",
      detail: "ハンズオンに従って実装してみる",
      status: "未着手",
      priority: "低",
      createAt: "2020-11-8 18:55:07",
      updateAt: "2020-11-8 18:55:07",
    },
    {
      id: 2,
      title: "ReactでTodoサイトを作成する",
      detail: "ハンズオンに従って実装してみる",
      status: "完了",
      priority: "中",
      createAt: "2020-11-8 18:55:07",
      updateAt: "2020-11-8 18:55:07",
    },
    {
      id: 3,
      title: "Todoサイトで画面遷移をできるようにする",
      detail:
        "ハンズオンに従って実装してみる、余裕があればカスタマイズしてみる",
      status: "作業中",
      priority: "高",
      createAt: "2020-11-8 18:55:07",
      updateAt: "2020-11-8 18:55:07",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
