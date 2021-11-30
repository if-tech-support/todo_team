import Breadcrumb from "../components/Breadcrumb";
import '../style/Detail.css';
import { useLocation } from "react-router";
import { todoListState } from "../atoms/atom";
import { Link } from "react-router-dom";

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
  const { title,detail,status,priority } = todo;
  
  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <div className="detail-container">
        <div className="content-container">
          <p className="field-name">タスク名：</p>
          <p className="field-description">{title}</p>
        </div>

        <div className="content-container">
          <p className="field-name">内容：</p>
          <p className="field-description" >{detail}</p>
        </div>


        <div className="content-container">
          <p className="field-name">ステータス：</p>
          <p className="field-description">{status}</p>
        </div>

        <div className="content-container">
          <p className="field-name">優先度：</p>
          <p className="field-description">{priority}</p>
        </div>

        <div className='btn-container content-container'>
            <Link to='/'><button className='back-button button'>戻る</button></Link>
        </div>
      </div>


    </>
  );
};
