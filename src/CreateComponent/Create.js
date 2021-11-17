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
      <header className="header">
        <h1 className="title">Todoアプリ</h1> 
        {/* テスト用ぱんくずテキスト 後で動的に */}
        <div className="bread-crumb-container">
          <p className="bread-crumb">ホーム＞追加</p>
        </div>
      </header>

      <div className="contents-container">

        <div className="todo-create">

          <div className="task-container">
            <label className="task-label">タスク名 :</label>
            <input
                className="title-input input"
                type="text"
                label="タイトル"
                value={todoTitle}
                onChange={"タイトル取得関数：handleAddFormChanges"}
            />
          </div>

          <div className="text-container">
            <label className="text-label">内容 :</label>
            <textarea
                className="text-input input"
                type="text"
                label="内容"
                value={todoDetail}
                onChange={"詳細取得関数：handleAddFormChangesForDetail"}
            ></textarea>
          </div>

          <div className="status-container">
            <label className="status-label">ステータス :</label>
            <select className="select-status">
              <option className="default">--------------------</option>
              <option className="not-started">未着手</option>
              <option className="in-progress">進行中</option>
            </select>
          </div>

          <div className="priority-container">
            <label className="priority-label">優先度 :</label>
            <select className="select-priority">
              <option className="default">--------------------</option>
              <option className="high">高</option>
              <option className="middle">中</option>
              <option className="low">低</option>
            </select>
          </div>

          <div className="add-container">
            {/* テスト用テキスト 追加/保存(編集)ボタンを動的に切り替える */}
            <button className="add-button button" onClick={"入力値取得関数：addTodo"}>追加</button>
          </div>
          <div>
            <input type="text" />
          </div>
         </div>
      </div>
    </div>
  );
}

export default Create;
