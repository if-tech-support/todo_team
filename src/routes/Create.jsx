import Breadcrumb from "../components/Breadcrumb";

// ぱんくずデータ 画面ごとに変更する
const breadcrumbElements = [
  { id: 1, title: "ホーム" },
  { id: 2, title: "追加" },
];

// ダミーコンポーネント
export const Create = () => {
  return (
    <>
      <Breadcrumb breadcrumbElements={breadcrumbElements} />
      <h1>Create</h1>
    </>
  );
};
