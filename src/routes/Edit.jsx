import Breadcrumb from "../components/Breadcrumb";
import "../style/Edit.css";

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "編集" },
];

export const Edit = () => {
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
              ></textarea>
            </dd>
          </div>
          <div className="edit__input-list">
            <dt>
              <label className="edit__label">ステータス：</label>
            </dt>
            <dd>
              <select className="edit__input edit__select-status">
                <option value="high">高</option>
                <option value="normal">中</option>
                <option value="low">低</option>
              </select>
            </dd>
          </div>
          <div className="edit__input-list">
            <dt>
              <label className="edit__label">優先度：</label>
            </dt>
            <dd>
              <select className="edit__input edit__select-priority">
                <option value="">------------</option>
                <option value="complete">完了</option>
                <option value="delete">削除</option>
              </select>
            </dd>
          </div>
        </dl>
        <footer>
          <div className="edit__btn-area">
            <button className="edit__btn edit__btn-delete">削除</button>
            <button className="edit__btn edit__btn-return">戻る</button>
            <button className="edit__btn edit__btn-save">保存</button>
          </div>
        </footer>
      </div>
    </>
  );
};
