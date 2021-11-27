import "../style/ListView.css";
import Breadcrumb from "../components/Breadcrumb";
import { useRecoilValue, useRecoilState } from "recoil";
import { inputState } from "../atoms/atom";
import { useState } from "react";

// ダミーデータ
const dummyTodoData = [
  {
    id: 1,
    title: "Github上に静的サイトをホスティングする",
    status: "未着手",
    priority: "低",
    createAt: "2020-11-8 18:55:07",
    updateAt: "2020-11-8 18:55:07",
  },
  {
    id: 2,
    title: "ReactでTodoサイトを作成する",
    status: "完了",
    priority: "中",
    createAt: "2020-11-8 18:55:07",
    updateAt: "2020-11-8 18:55:07",
  },
  {
    id: 3,
    title: "Todoサイトで画面遷移をできるようにする",
    status: "作業中",
    priority: "高",
    createAt: "2020-11-8 18:55:07",
    updateAt: "2020-11-8 18:55:07",
  },
];

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [{ id: 1, title: "ホーム" }];

export const ListView = () => {
  const input = useRecoilValue(inputState);
  console.log(input);
  const [todo, setTodo] = useRecoilState(inputState);
  console.log(todo);
  
  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <main>
        <div className="task-info-area">
          <p className="task-info">
            進行中のタスクは<span>3個</span>あります
          </p>
          <button className="btn-add">
            <span>+</span>タスクを追加
          </button>
        </div>
        <div className="search-area">
          <div className="search-keyword-area">
            <label className="label-search-area" htmlFor="search-keyword-box">
              キーワード
            </label>
            <input
              id="search-keyword-box"
              className="search-box"
              type="text"
              placeholder="キーワードを入力"
              value={todo}
              onChange={(e)=> {setTodo(e.target.value)}}

            />
          </div>
          <div className="search-priority-area">
            <label className="label-search-area">ステータス</label>
            <select className="search-box">
              <option defaultValue="all">すべて</option>
              <option value="complete">完了</option>
              <option value="working">作業中</option>
              <option value="pending">未着手</option>
            </select>
          </div>
          <div className="search-status-area">
            <label className="label-search-area">優先度</label>
            <select className="search-box">
              <option defaultValue="all">すべて</option>
              <option value="high">高</option>
              <option value="normal">中</option>
              <option value="low">低</option>
            </select>
          </div>
        </div>
        <div className="bulk-exection-area">
          <label className="label-bulk-exection">まとめて操作：</label>
          <select className="bulk-exection-selection">
            <option defaultValue="">------------</option>
            <option value="complete">完了</option>
            <option value="delete">削除</option>
          </select>
          <button className="btn-bulk-exection">実行</button>
        </div>
        <table className="todo-table">
          <thead className="todo-table-header">
            <tr>
              <th colSpan="3" className="todo-table-header-title">
                タスク名
              </th>
              <th>ステータス</th>
              <th>優先度</th>
              <th>作成日時</th>
              <th>更新日時</th>
            </tr>
          </thead>
          <tbody>
            {/* ダミーデータを表示 */}
            {dummyTodoData.map((todo) => {
              return (
                <tr key={todo.id} className="todo-table-body-row">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="table-content-title">{todo.title}</td>
                  <td>
                    <button className="btn-edit">✎</button>
                  </td>
                  <td>
                    {todo.status === "未着手" && (
                      <p className="table-content-status table-content-status-pending">
                        {todo.status}
                      </p>
                    )}
                    {todo.status === "作業中" && (
                      <p className="table-content-status table-content-status-working">
                        {todo.status}
                      </p>
                    )}
                    {todo.status === "完了" && (
                      <p className="table-content-status table-content-status-done">
                        {todo.status}
                      </p>
                    )}
                  </td>
                  <td>
                    {todo.priority === "高" && (
                      <p className="table-content-priority-high">
                        {todo.priority}
                      </p>
                    )}
                    {todo.priority === "中" && (
                      <p className="table-content-priority-normal">
                        {todo.priority}
                      </p>
                    )}
                    {todo.priority === "低" && (
                      <p className="table-content-priority-low">
                        {todo.priority}
                      </p>
                    )}
                  </td>
                  <td>{todo.createAt}</td>
                  <td>{todo.updateAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};
