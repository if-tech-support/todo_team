import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Create } from "./routes/Create";
import { Edit } from "./routes/Edit";
import { Detail } from "./routes/Detail";
import { ListView } from "./routes/ListView";

const App = () => {
  return (
    <BrowserRouter>
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
      <Routes>
        <Route exact path="/" element={<ListView />} />
        <Route exact path="create" element={<Create />} />
        <Route exact path="edit" element={<Edit />} />
        <Route exact path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
