import Breadcrumb from "../components/Breadcrumb";
import '../style/Detail.css';
import { useLocation } from "react-router";
import { todoListState } from "../atoms/atom";
import { Link } from "react-router-dom";
import { ContentContainer } from "../components/ContentContainer";

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "詳細" },
];

// ダミーコンポーネント
export const Detail = () => {
  const location = useLocation();
  const { todo } = location.state
  const { title,detail,status,priority } = todo;
  
  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <div className="detail-container">
      <ContentContainer todo={todo} />

        <div className='btn-container content-container'>
            <Link to='/'><button className='back-button button'>戻る</button></Link>
        </div>
      </div>


    </>
  );
};
