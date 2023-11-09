import { Todos } from "./components/Todos";
import { useState } from "react";
import { type Todo as TodoType, type TodoId } from "./types";

const mockTodos = [
  { id: "1", title: "Ver el Twitch de Midu", completed: true },
  { id: "2", title: "Aprender React con TS", completed: false },
  { id: "3", title: "Sacar Ticket de la Midufest", completed: false },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const hanldeCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={hanldeCompleted}
      />
    </div>
  );
};

export default App;
