interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type ListOfTodos = Todo[];

interface Props {
  todos: ListOfTodos;
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default Todos;
