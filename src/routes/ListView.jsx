import "../style/ListView.css";
import Breadcrumb from "../components/Breadcrumb";

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

// ダミーコンポーネント
export const ListView = () => {
  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <main>
        <div className="task-info-area">
          <p className="task-info">
            進行中のタスクは<span>3個のタスク</span>
            <br />
            があります
          </p>
          <button className="btn-add">
            <span>+</span>タスクを追加
          </button>
        </div>
        <div className="search-area">
          <input
            className="search-task-box"
            type="text"
            placeholder="🔍検索したいタスクを入力"
          />
        </div>
        <div className="bulk-exection-area">
          <label className="bulk-exection-label">まとめて操作：</label>
          <select className="bulk-exection-selection">
            <option value="">------------</option>
            <option value="complete">完了</option>
            <option value="delete">削除</option>
          </select>
          <button className="btn-bulk-exection">実行</button>
        </div>
        <table className="todo-table">
          <thead className="todo-table-header">
            <tr>
              <th></th>
              <th>タスク名</th>
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
                  <td>
                    {todo.title}
                    <button className="btn-edit">✎</button>
                  </td>
                  <td>
                    {todo.status === "未着手" && (
                      <p className="status status-pending">{todo.status}</p>
                    )}
                    {todo.status === "作業中" && (
                      <p className="status status-working">{todo.status}</p>
                    )}
                    {todo.status === "完了" && (
                      <p className="status status-done">{todo.status}</p>
                    )}
                  </td>
                  <td>
                    {todo.priority === "高" && (
                      <p className="priority-high">{todo.priority}</p>
                    )}
                    {todo.priority === "中" && (
                      <p className="priority-normal">{todo.priority}</p>
                    )}
                    {todo.priority === "低" && (
                      <p className="priority-low">{todo.priority}</p>
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
