import Breadcrumb from "../components/Breadcrumb";

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "編集" },
];

// ダミーコンポーネント
export const Edit = () => {
  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <h1>Edit</h1>
    </>
  );
};
