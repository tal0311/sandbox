var state = {
  filterBy: {},
  todos: [],
  pageSize: 2
};

filteredTodos(state);

function filteredTodos({ filterBy, todos, pageSize }) {
  if (!todos) return;

  const regex = new RegExp(filterBy.title, "i");
  let filteredTodos = todos.filter((todo) => regex.test(todo.title));

  if (filterBy.isDone !== null) {
    filteredTodos = filteredTodos.filter(
      (todo) => todo.isDone === filterBy.isDone
    );
  }

  if (filterBy.toSort) {
    filteredTodos.sort((t1, t2) => t1.title.localeCompare(t2.title));
  }
  console.log(filteredTodos);

  const startIdx = filterBy.pageIdx * pageSize;

  filteredTodos = filteredTodos.slice(startIdx, startIdx + pageSize);
  console.log(filteredTodos);
  return filteredTodos;
}
