import { useNavigate } from "react-router";
import { useState } from "react";
import { useLocation } from "react-router";

import Breadcrumb from "../components/Breadcrumb";
import "../style/Edit.css";
import useUpdateTodo from "../hooks/useUpdateTodo";

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "編集" },
];

export const Edit = () => {
  // 画面遷移用のフック
  const navigation = useNavigate();

  // 選択されたtodoを受け取る
  const { targetTodo } = useLocation().state;

  // todoデータ
  const [todo, setTodo] = useState(targetTodo);

  // Todo更新用カスタムフック
  const { updateTodo, deleteTodo } = useUpdateTodo();

  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <div className="edit__input-form">
        <dl>
          <div className="edit__input-list">
            <dt>
              <label htmlFor="task-title" className="edit__label">
                タスク名：
              </label>
            </dt>
            <dd>
              <input
                id="task-title"
                className="edit__input edit__input-title"
                type="text"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              />
            </dd>
          </div>
          <div className="edit__input-list">
            <dt>
              <label
                htmlFor="task-detail"
                className="edit__label edit__label-detail"
              >
                内容：
              </label>
            </dt>
            <dd>
              <textarea
                id="task-detail"
                className="edit__input edit__input-detail"
                rows="10"
                value={todo.detail}
                onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
              ></textarea>
            </dd>
          </div>
          <div className="edit__input-list">
            <dt>
              <label className="edit__label">ステータス：</label>
            </dt>
            <dd>
              <select
                className="edit__input edit__select-status"
                value={todo.status}
                onChange={(e) => setTodo({ ...todo, status: e.target.value })}
              >
                <option value="完了">完了</option>
                <option value="作業中">作業中</option>
                <option value="未着手">未着手</option>
              </select>
            </dd>
          </div>
          <div className="edit__input-list">
            <dt>
              <label className="edit__label">優先度：</label>
            </dt>
            <dd>
              <select
                className="edit__input edit__select-priority"
                value={todo.priority}
                onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
              >
                <option value="高">高</option>
                <option value="中">中</option>
                <option value="低">低</option>
              </select>
            </dd>
          </div>
        </dl>
        <div className="edit__btn-area">
          <button
            className="edit__btn edit__btn-delete"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            削除
          </button>
          <button
            className="edit__btn edit__btn-return"
            onClick={() => {
              navigation("/");
            }}
          >
            戻る
          </button>
          <button
            className="edit__btn edit__btn-save"
            onClick={() => {
              updateTodo(todo.id, todo);
            }}
          >
            保存
          </button>
        </div>
      </div>
    </>
  );
};
