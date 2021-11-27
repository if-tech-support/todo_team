import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import { Create } from "./routes/Create";
import { Edit } from "./routes/Edit";
import { Detail } from "./routes/Detail";
import { ListView } from "./routes/ListView";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<ListView />} />
        <Route path="create" element={<Create />} />
        <Route path="edit" element={<Edit />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
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
