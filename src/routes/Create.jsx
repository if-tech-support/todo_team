import Breadcrumb from "../components/Breadcrumb";
import '../style/Create.css';
import { Link } from "react-router-dom";
import {useState} from 'react';
import { useRecoilValue, useRecoilState } from "recoil";
import { inputState } from "../atoms/atom";

// ぱんくず
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "追加" },
];

export const Create = () => {
  // タイトル・詳細・IDt・それらを格納する変数(state)
  const [inputTodos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoDetail, setTodoDetail] = useState('')
  const [todoId, setTodoId] = useState(0)
  const [todoPriority, setTodoPriority] = useState('低')

  // recoilでtodoデータを状態管理
  const [todo, setTodoList] = useRecoilState(inputState)
  const oldData = useRecoilValue(inputState)

  // タイトル・idをstateにセット
  const getTitle = e => {
    setTodoTitle(e.target.value)

    getId()
  }

    // 内容をstateにセット
  const getDetail = e => {
    setTodoDetail(e.target.value)
  }

    // 優先度をstateにセット
  const getPriority = e => {
    setTodoPriority(e.target.value)
  }

  // todos配列にliタグのIDを追加
  const addTodo = () => {
    // 作成・更新日時作成
    const nowDate = new Date()
    const year = nowDate.getFullYear()
    const month = nowDate.getMonth()+1
    const day = nowDate.getDate()
    const hour = nowDate.getHours()
    const minute = nowDate.getMinutes()
    const second = nowDate.getSeconds()
    const today = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second
 
    //  入力データをstate(todos)に代入
    const inputTodosForInput = [...oldData, { id: todoId, title: todoTitle, detail: todoDetail, priority: todoPriority, updatedAt:today, createdAt:today }]
    
    setTodoList(inputTodosForInput)
  }

  // 一意のid作成
  const getMaxIdInArray = (a, b) => {
    return Math.max(a, b)
  }
  const getId = () => {
      let res = oldData.map((data) => {
      const idArray = []
      // idだけ取得
      idArray.push(data.id)
      
      return idArray
    })

    let maxId = res.reduce(getMaxIdInArray)

    setTodoId(maxId+1)
  }

  return (
  <>
    <Breadcrumb breadcrumbElements={breadcrumbElements} />
    
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
              onChange={getTitle}
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
              onChange={getDetail}
            ></textarea>
          </div>

          <div className='priority-container select-container input-container content-container'>
            <label className='priority-label input-area-label label'>
              優先度 :
            </label>
            <select className='select-priority select-box' onChange={getPriority}>
              <option className='select-default option'>
                --------------------
              </option>
              <option className='high option'>高</option>
              <option className='middle option'>中</option>
              <option className='low option'>低</option>
            </select>
          </div>

          <div className='btn-container content-container'>
            <Link to='/'>
              <button className='back-button button'>戻る</button>
            </Link>
            <Link to='/'>
              <button className='add-button button' onClick={addTodo}>追加</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

