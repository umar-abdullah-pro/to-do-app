import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onToggleComplete }) => {
  const pendingItems = todoItems.filter((item) => !item.completed);
  const completedItems = todoItems.filter((item) => item.completed);

  return (
    <div>
      {pendingItems.length > 0 && (
        <div className="space-y-3">
          {pendingItems.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              todoDate={item.dueDate}
              todoName={item.name}
              completed={item.completed}
              onDeleteClick={onDeleteClick}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}

      {pendingItems.length > 0 && completedItems.length > 0 && (
        <div className="my-6 border-t border-gray-200"></div>
      )}

      {completedItems.length > 0 && (
        <div className="space-y-3">
          {completedItems.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              todoDate={item.dueDate}
              todoName={item.name}
              completed={item.completed}
              onDeleteClick={onDeleteClick}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoItems;