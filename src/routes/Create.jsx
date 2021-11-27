import Breadcrumb from "../components/Breadcrumb";
import '../style/Create.css';

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "追加" },
];

export const Create = () => {
  // タイトル・詳細・IDt・それらを格納する変数(state)

  return (
  <>
    {/* {headrエリア} */}
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
              // 入力値セットする関数を後で入れると入力可能
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
              // 入力値セットする関数を後で入れると入力可能
            ></textarea>
          </div>

          <div className='priority-container select-container input-container content-container'>
            <label className='priority-label input-area-label label'>
              優先度 :
            </label>
            <select className='select-priority select-box'>
              <option className='select-default option'>
                --------------------
              </option>
              <option className='high option'>高</option>
              <option className='middle option'>中</option>
              <option className='low option'>低</option>
            </select>
          </div>

          <div className='btn-container content-container'>
            <button className='back-button button'>戻る</button>
            {/* テスト用テキスト 追加/保存(編集)ボタンを動的に切り替える */}
            <button className='add-button button'>追加</button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

