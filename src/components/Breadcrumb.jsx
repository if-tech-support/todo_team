import "../style/Breadcrumb.css";

const Breadcrumb = ({ breadcrumbElements }) => {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-elements">
        {breadcrumbElements.map((element) => (
          <li key={element.id}>{element.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
