import Breadcrumb from "../components/Breadcrumb";
import '../style/Detail.css';
import { useLocation } from "react-router";
import { todoListState } from "../atoms/atom";

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "詳細" },
];

// ダミーコンポーネント
export const Detail = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const { todo } = location.state
  const { title,detail } = todo;
  
  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <div className='detail-container'>

      <div className='contents-container'>
        <div className='todo-detail'>
          <div className='task-container content-container'>
            <label for='title' className='task-label input-area-label label'>
              タスク名 :
            </label>
            <p className="task-title">
              {title}
            </p>
          </div>

          <div className='text-container input-container content-container'>
            <label for='text' className='text-label input-area-label label'>
              内容 :
            </label>
            <p className="task-title">
              {detail}
            </p>
          </div>

          <div className='priority-container select-container input-container content-container'>
              優先度 :
              <p className="task-title">優先度の中身</p>
            
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
};
