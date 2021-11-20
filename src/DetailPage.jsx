import {useState} from 'react'
import './Create.css'
import Breadcrumb from "../components/Breadcrumb";

function Create() {
  // タイトル・詳細・IDを格納する変数
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState("")
  const [todoDetail, setTodoDetail] = useState("")
  const [todoId, setTodoId] = useState(0)

  return (
    <div className="create-container">
      {/* {headrエリア} */}
      <Breadcrumb breadcrumbElements={breadcrumbElements} />

      <div className="contents-container">

        <div className="todo-create">

          <div className="task-container input-container">
            <label className="task-label input-area-label">タスク名 :</label>
            <input
                className="title-input input"
                type="text"
                label="タイトル"
                value={todoTitle}
                onChange={"タイトル取得関数：handleAddFormChanges"}
            />
          </div>

          <div className="text-container input-container">
            <label className="text-label input-area-label">内容 :</label>
            <textarea
                className="text-input input"
                type="text"
                label="内容"
                value={todoDetail}
                onChange={"詳細取得関数：handleAddFormChangesForDetail"}
            ></textarea>
          </div>

          <div className="priority-container select-container input-container">
            <label className="priority-label input-area-label">優先度 :</label>
            <select className="select-priority select-box">
              <option className="select-default">--------------------</option>
              <option className="high">高</option>
              <option className="middle">中</option>
              <option className="low">低</option>
            </select>
          </div>

          <div className="btn-container">
            <button className="back-button button" onClick={"入力値取得関数：backFunc"}>戻る</button>
            {/* テスト用テキスト 追加/保存(編集)ボタンを動的に切り替える */}
            <button className="add-button button" onClick={"入力値取得関数：addTodo"}>追加</button>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Create;