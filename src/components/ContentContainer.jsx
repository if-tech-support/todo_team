export const ContentContainer = ({ todo }) => {
  const { title, detail, status, priority } = todo;
  const detailArray = [
    { key: 1, name: "タスク名", description: title },
    { key: 2, name: "内容", description: detail },
    { key: 3, name: "ステータス", description: status },
    { key: 4, name: "優先度", description: priority },
  ];
  return detailArray.map(({ key, name, description }) => {
    return (
      <div key={key} className="content-container">
        <p className="field-name">{name}</p>
        <p className="field-description">{description}</p>
      </div>
    );
  });
};
