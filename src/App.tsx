import { Todos } from "./components/Todos";
import { useState } from "react";

const mockTodos = [
  { id: "1", title: "Ver el Twitch de Midu", completed: true },
  { id: "2", title: "Aprender React con TS", completed: false },
  { id: "3", title: "Sacar Ticket de la Midufest", completed: false },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove} />
    </div>
  );
};

export default App;
