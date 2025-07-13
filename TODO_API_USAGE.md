# Todo API Integration Guide

This document explains how to use the new Todo API integration that was created from the EF Core scaffolding.

## Quick Start

### 1. Backend Setup

Navigate to the backend directory and run the API:

```bash
cd backend/TodoApi
dotnet run
```

The API will be available at `https://localhost:5001` (or `http://localhost:5000`).

### 2. Frontend Usage

Import the Todo hooks and interfaces:

```typescript
import { 
  useGetTodosQuery, 
  useCreateTodoMutation, 
  useUpdateTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation 
} from '@/store/features/todo/todoApi';
import { Todo, CreateTodoRequest, UpdateTodoRequest } from '@/interfaces/todo';
```

### 3. Example Component

See `src/components/todo/TodoExample.tsx` for a complete example of how to:
- Fetch all todos
- Create new todos
- Toggle completion status
- Delete todos

## Available Hooks

### Queries
- `useGetTodosQuery()` - Fetch all todos
- `useGetTodoQuery(id)` - Fetch single todo by ID

### Mutations
- `useCreateTodoMutation()` - Create new todo
- `useUpdateTodoMutation()` - Update existing todo
- `useToggleTodoMutation()` - Toggle completion status
- `useDeleteTodoMutation()` - Delete todo

## TypeScript Interfaces

### Todo Interface
```typescript
interface Todo {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
  dueDate?: Date;
  priority?: string;
  category?: string;
  userId?: number;
  user?: User;
}
```

### User Interface
```typescript
interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt?: Date;
  todos?: Todo[];
}
```

## API Endpoints

The backend provides the following REST endpoints:

- `GET /api/todos` - Get all todos
- `GET /api/todos/{id}` - Get specific todo
- `POST /api/todos` - Create new todo
- `PUT /api/todos/{id}` - Update todo
- `PATCH /api/todos/{id}/toggle` - Toggle completion
- `DELETE /api/todos/{id}` - Delete todo

## Database Configuration

The API connects to SQL Server using the connection string from the original scaffolding command:
```
Server=DESKTOP-5POK3JN;Database=TodoDB;User Id=sa;Password=w23eW@#E;
```

Update `backend/TodoApi/appsettings.json` to modify the connection string if needed.

## Next Steps

1. Update the connection string to point to your actual database
2. Run database migrations if needed: `dotnet ef database update`
3. Integrate the TodoExample component into your application
4. Customize the UI components to match your design system
5. Add authentication/authorization as needed