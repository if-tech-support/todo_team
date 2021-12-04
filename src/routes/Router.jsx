import { Routes, Route } from "react-router";
import { ListView } from "./ListView";
import { Create } from "./Create";
import { Edit } from "./Edit";
import { Detail } from "./Detail";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ListView />} />
      <Route path="create" element={<Create />} />
      <Route path="edit/:todoId" element={<Edit />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  );
};

export default Router;
