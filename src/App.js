import "./App.css";

// ダミーデータ
const dummyTodoData = [
  {
    id: 1,
    title: "sample1",
    status: "Pending",
    limit: "2021-11-30",
  },
  { id: 2, title: "sample2", status: "Done", limit: "2021-11-20" },
  {
    id: 3,
    title: "sample3",
    status: "Working",
    limit: "2021-11-15",
  },
  {
    id: 4,
    title: "sample4",
    status: "Working",
    limit: "2021-11-11",
  },
  {
    id: 5,
    title: "sample5",
    status: "Working",
    limit: "2021-11-06",
  },
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
              <th>Limit</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* ダミーデータを表示 */}
            {dummyTodoData.map((todo, index) => {
              return (
                <tr key={index}>
                  <td>{todo.id}</td>
                  <td>{todo.status}</td>
                  <td>{todo.limit}</td>
                  <td>{todo.title}</td>
                  <td>
                    <ul>
                      <li>
                        <button className="btn">Detail</button>
                      </li>
                      <li>
                        <button className="btn">Edit</button>
                      </li>
                      <li>
                        <button className="btn">Delete</button>
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
