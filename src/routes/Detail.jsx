import Breadcrumb from "../components/Breadcrumb";

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "詳細" },
];

// ダミーコンポーネント
export const Detail = () => {
  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <h1>Detail</h1>
    </>
  );
};
