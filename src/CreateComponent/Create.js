import {useState} from 'react'
import './Create.css'

function Create() {
  // タイトル・詳細・IDを格納する変数
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState("")
  const [todoDetail, setTodoDetail] = useState("")
  const [todoId, setTodoId] = useState(0)

  return (
    <div className="create-container">
      {/* {headrエリア} */}

      <div className="contents-container">

        <div className="todo-create">

          <div className="task-container input-container content-container">
            <label className="task-label input-area-label label">タスク名 :</label>
            <input
                className="title-input input"
                type="text"
                label="タイトル"
                rows="1"
                value={todoTitle}
                // 入力値セットする関数を後で入れると入力可能
            />
          </div>

          <div className="text-container input-container content-container">
            <label className="text-label input-area-label label">内容 :</label>
            <textarea
                className="text-input input"
                type="text"
                label="内容"
                rows="20"
                value={todoDetail}
                // 入力値セットする関数を後で入れると入力可能
            ></textarea>
          </div>

          <div className="priority-container select-container input-container content-container">
            <label className="priority-label input-area-label label">優先度 :</label>
            <select className="select-priority select-box">
              <option className="select-default option">--------------------</option>
              <option className="high option">高</option>
              <option className="middle option">中</option>
              <option className="low option">低</option>
            </select>
          </div>

          <div className="btn-container content-container">
            <button className="back-button button" onClick={"入力値取得関数"}>戻る</button>
            {/* テスト用テキスト 追加/保存(編集)ボタンを動的に切り替える */}
            <button className="add-button button" onClick={"入力値取得関数"}>追加</button>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Create;
