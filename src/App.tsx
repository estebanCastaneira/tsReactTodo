import { Todos } from "./components/Todos";
import { useState } from "react";

const mockTodos = [
  { id: "1", title: "todo 1", completed: false },
  { id: "2", title: "todo 2", completed: false },
  { id: "3", title: "todo 3", completed: false },
];

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos);
  return <Todos todos={todos} />;
};

export default App;
