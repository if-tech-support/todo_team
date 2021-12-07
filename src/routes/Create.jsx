import Breadcrumb from "../components/Breadcrumb";
import "../style/Create.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/atom";
import { currentDateFormatter } from "../utils/currentDateFormatter";
import { getInputId } from '../utils/getInputId'

// ぱんくず
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "追加" },
];

export const Create = () => {
  // recoilでtodoデータを状態管理
  const [todoList, setTodoList] = useRecoilState(todoListState)

  // 追加するtodoデータ
  const [inputTodo, setInputTodo] = useState({
     title:'',
     detail:'',
     status: "未着手",
     priority:'',
  })

  // 追加ボタン押下時に呼び出し
  const addTodo = () => {
    // 作成・更新日時作成
    const today = currentDateFormatter()
    // id作成
    const id = getInputId(todoList)

    // 既存のtodoデータに新たにtodoデータ(入力データ)を追加する
    setTodoList([...todoList, {...inputTodo, id:id, createAt:today, updateAt:today} ])
  }

  return (
  <>
    <Breadcrumb breadcrumbElements={breadcrumbElements} />
    
    <div className='create-container'>

      <div className='contents-container'>
        <div className='todo-create'>
          <div className='task-container input-container content-container'>
            <label htmlFor='title' className='task-label input-area-label label'>
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
              id='text'
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
              name='priority'
              className='select-priority select-box' 
              onChange={ (e) => {setInputTodo({...inputTodo, priority:e.target.value})
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

