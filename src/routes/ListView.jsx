import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms/atom";

import "../style/ListView.css";
import Breadcrumb from "../components/Breadcrumb";
import StatusButton from "../components/StatusButton";
import PriorityButton from "../components/PriorityButton";
import { Link } from "react-router-dom";

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [{ id: 1, title: "ホーム" }];

export const ListView = () => {
  // todoリストデータ
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <main>
        <div className="task-info-area">
          <p className="task-info">
            進行中のタスクは<span>3個</span>あります
          </p>
          <Link to="create">
            <button className="btn-add">
              <span>+</span>タスクを追加
            </button>
          </Link>
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
              value=""
              onChange={(e) => {}}
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
            {todoList.map((todo) => {
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
                    <StatusButton todo={todo} />
                  </td>
                  <td>
                    <PriorityButton todo={todo} />
                  </td>
                  <td>{todo.createdAt}</td>
                  <td>{todo.updatedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};
