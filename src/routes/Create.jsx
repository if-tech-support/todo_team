import Breadcrumb from "../components/Breadcrumb";
import '../style/Create.css';
import { Link } from "react-router-dom";
import {useState} from 'react';
import { useRecoilState } from "recoil";
import { inputState } from "../atoms/atom";

// ぱんくず
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "追加" },
];

export const Create = () => {
  // recoilでtodoデータを状態管理
  const [todoList, setTodoList] = useRecoilState(inputState)
  // 追加するtodoデータ
  const [inputTodo, setInputTodo] = useState({
     id: todoList.length,
     title:'',
     detail:'',
     status: "未着手",
     priority:'',
     createdAt:'',
     updatedAt:'',
  })

  // 追加ボタン押下時に呼び出し
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

    // 既存のtodoデータに新たにtodoデータ(入力データ)を追加する
    setTodoList([...todoList, {...inputTodo, ...{createdAt:today, updatedAt:today} }])
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
              onChange={ (e) => setInputTodo({...inputTodo,title: e.target.value}) }
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
              onChange={ (e) => setInputTodo({...inputTodo,detail:e.target.value}) }
            ></textarea>
          </div>

          <div className='priority-container select-container input-container content-container'>
            <label className='priority-label input-area-label label'>
              優先度 :
            </label>
            <select 
              className='select-priority select-box' 
              onChange={ (e) => {setInputTodo({...inputTodo, priority:e.target.value})
              console.log(e.target.value)
            }}
            >
              <option className='select-default option'>
                --------------------
              </option>
              <option className='high option' value='高'>高</option>
              <option className='middle option'value='中'>中</option>
              <option className='low option'value='低'>低</option>
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

