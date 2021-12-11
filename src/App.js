import "./App.css";

import { Link } from "react-router-dom";

import Header from "./components/Header";
import Router from "./routes/Router";

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <nav>
        <ul>
          <li>
            {/* ダミーコンポーネントへの遷移 */}
            <Link to="/">listview</Link>
          </li>
          <li>
            {/* ダミーコンポーネントへの遷移 */}
            <Link to="create">list to create</Link>
          </li>
          <li>
            {/* ダミーコンポーネントへの遷移 */}
            <Link to="edit">list to edit</Link>
          </li>
          <li>
            {/* ダミーコンポーネントへの遷移 */}
            <Link to="detail">list to detail</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default App;
