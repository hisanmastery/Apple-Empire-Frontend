// Todo interface matching the database model
export interface Todo {
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

// User interface matching the database model
export interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt?: Date;
  todos?: Todo[];
}

// DTOs for API requests
export interface CreateTodoRequest {
  title: string;
  description?: string;
  dueDate?: Date;
  priority?: string;
  category?: string;
  userId?: number;
}

export interface UpdateTodoRequest {
  id: number;
  title?: string;
  description?: string;
  isCompleted?: boolean;
  dueDate?: Date;
  priority?: string;
  category?: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface UpdateUserRequest {
  id: number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}