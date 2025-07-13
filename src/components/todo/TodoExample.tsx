import React from 'react';
import { useGetTodosQuery, useCreateTodoMutation, useToggleTodoMutation, useDeleteTodoMutation } from '@/store/features/todo/todoApi';
import { CreateTodoRequest } from '@/interfaces/todo';

const TodoExample: React.FC = () => {
  const { data: todos, error, isLoading } = useGetTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleCreateTodo = async () => {
    const newTodo: CreateTodoRequest = {
      title: 'New Todo Item',
      description: 'This is a sample todo',
      priority: 'Medium',
      category: 'Personal'
    };
    
    try {
      await createTodo(newTodo).unwrap();
    } catch (error) {
      console.error('Failed to create todo:', error);
    }
  };

  const handleToggleTodo = async (id: number) => {
    try {
      await toggleTodo(id).unwrap();
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id).unwrap();
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error loading todos</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todo Application</h1>
      
      <button
        onClick={handleCreateTodo}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add New Todo
      </button>

      <div className="space-y-2">
        {todos?.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between p-3 border rounded">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleToggleTodo(todo.id)}
                className="w-4 h-4"
              />
              <div>
                <h3 className={`font-medium ${todo.isCompleted ? 'line-through text-gray-500' : ''}`}>
                  {todo.title}
                </h3>
                {todo.description && (
                  <p className="text-sm text-gray-600">{todo.description}</p>
                )}
                <div className="flex space-x-2 text-xs text-gray-500">
                  {todo.priority && <span>Priority: {todo.priority}</span>}
                  {todo.category && <span>Category: {todo.category}</span>}
                </div>
              </div>
            </div>
            
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {todos?.length === 0 && (
        <p className="text-gray-500 text-center mt-8">No todos found. Create your first todo!</p>
      )}
    </div>
  );
};

export default TodoExample;