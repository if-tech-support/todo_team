import Breadcrumb from "../components/Breadcrumb";
import '../style/Create.css';
import { Link } from "react-router-dom";
import {useState} from 'react'; 

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "追加" },
];

export const Create = () => {
  // タイトル・詳細・IDt・それらを格納する変数(state)
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoDetail, setTodoDetail] = useState('')
  const [todoId, setTodoId] = useState(0)
  const [todoPriority, setTodoPriority] = useState('低')
  // 現在日時取得
  const [current, setcurrent] = useState('初期値')

  // タイトルをstateにセット
  const handleAddFormChangesForTitle = e => {
    console.log('タイトル取得チェック')
    setTodoTitle(e.target.value)
  }
    // 内容をstateにセット
  const handleAddFormChangesForDetail = e => {
    console.log('内容取得チェック')
    setTodoDetail(e.target.value)
  }
    // 優先度をstateにセット
  const handleAddFormChangesForPriority = e => {
    console.log('優先度取得チェック')
    console.log(e.target.value)
    setTodoPriority(e.target.value)
  }
  //  // 入力欄のリセット
  //  const resetFormInput = () => {
  //   console.log('リセットチェック')
	// 	setTodoTitle("")
  //   setTodoDetail("")
	// }
  // todos配列にliタグのIDを追加
  const addTodo = () => {
    handleAddNowDate()
    // 現在日時取得終わってtodoにcurrentセットできるように処理かえる
    // DBから普通とるから時間かけない
    console.log('追加チェック')
    console.log(current)
		
    // resetFormInput()
  }

  const handleAddNowDate = () => {
    // 修正必要：頭の0抜けてる
    const nowDate = new Date()
    // console.log(typeof nowDate)
    const year = nowDate.getFullYear()
    // console.log(typeof year)
    const month = nowDate.getMonth()+1
    const day = nowDate.getDate()
    const hour = nowDate.getHours()
    const minute = nowDate.getMinutes()
    const second = nowDate.getSeconds()
    const today = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second

    setcurrent(today)
    console.log(today)
    setTodos([...todos, { id: todoId, title: todoTitle, detail: todoDetail, priority: todoPriority, createdAt:current }])
		setTodoId(todoId + 1)
  };

  return (
  <>
    {/* {headrエリア} */}
    <Breadcrumb breadcrumbElements={breadcrumbElements} />
    
    {/* テストエリア */}
    <ul className="todo">
        {todos.map(todo => (
          <li key={todo.id}>
            <p>test-area</p>
            {/* 作成時刻がなぜか00:00:00で初期値に */}
            <span>ID:{todo.id}, タイトル：{todo.title}, 内容：{todo.detail}, 優先度:{todo.priority}, 作成日時：{todo.createdAt}</span>
            {/* <button onClick={() => handleDeleteTodo(todo)}>削除</button> */}
          </li>
        ))}
      </ul>
    {/* テストエリア */}
    <div className='create-container'>

      <div className='contents-container'>
        <div className='todo-create'>
          <div className='task-container input-container content-container'>
            <label for='title' className='task-label input-area-label label'>
              タスク名 :
            </label>
            <input
              id='title'
              className='title-input input'
              type='text'
              rows='1'
              value={todoTitle}
              onChange={handleAddFormChangesForTitle}
            />
          </div>

          <div className='text-container input-container content-container'>
            <label for='text' className='text-label input-area-label label'>
              内容 :
            </label>
            <textarea
              for='text'
              className='text-input input'
              type='text'
              rows='20'
              value={todoDetail}
              onChange={handleAddFormChangesForDetail}
            ></textarea>
          </div>

          <div className='priority-container select-container input-container content-container'>
            <label className='priority-label input-area-label label'>
              優先度 :
            </label>
            <select className='select-priority select-box' onChange={handleAddFormChangesForPriority}>
              <option className='select-default option'>
                --------------------
              </option>
              <option className='high option'>高</option>
              <option className='middle option'>中</option>
              <option className='low option'>低</option>
            </select>
          </div>

          <div className='btn-container content-container'>
            <button className='back-button button'>
              <Link to='/'>戻る</Link>
            </button>
            {/* テスト用テキスト 追加/保存(編集)ボタンを動的に切り替える */}
            <button className='add-button button' onClick={addTodo}>追加</button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

