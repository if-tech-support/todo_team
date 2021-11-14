import "./App.css";

// ダミーデータ
const dummyTodoData = [
  { id: 1, title: "sample1", status: "Pending" },
  { id: 2, title: "sample2", status: "Done" },
  { id: 3, title: "sample3", status: "Working" },
  { id: 4, title: "sample4", status: "Working" },
  { id: 5, title: "sample5", status: "Working" }
];

const App = () => {
  return (
    <>
      <header>
        <h1>Todo</h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* ダミーデータを表示 */}
            {dummyTodoData.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.status}</td>
                  <td>{todo.title}</td>
                  <td>
                    <ul>
                      <li>
                        <button className="btn btn-detail">Detail</button>
                      </li>
                      <li>
                        <button className="btn btn-edit">Edit</button>
                      </li>
                      <li>
                        <button className="btn btn-delete">Delete</button>
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default App;
