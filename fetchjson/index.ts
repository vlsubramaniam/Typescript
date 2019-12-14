import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  // const todo: Todos = response.data;
  const todo = response.data as Todos;
  logTodo(todo.id, todo.title.toUpperCase(), todo.completed);
});

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
                The Todo ID is ${id}
                Has a title of '${title}'
                Is it finished ${completed}`);
};
