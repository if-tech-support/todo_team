import "../style/Breadcrumb.css";

const Breadcrumb = ({ breadcrumbElements }) => {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-elements">
        {breadcrumbElements.map(({ id, title }) => (
          <li key={id} className="breadcrumb-element">
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
