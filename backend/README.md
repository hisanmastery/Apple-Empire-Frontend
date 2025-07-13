# Todo API Backend

This is a .NET Core Web API backend for the Todo application, generated from the TodoDB database using Entity Framework Core scaffolding.

## Database Schema

The API was scaffolded using the following command:
```bash
dotnet ef dbcontext scaffold "Server=DESKTOP-5POK3JN;Database=TodoDB;User Id=sa;Password=w23eW@#E;" Microsoft.EntityFrameworkCore.SqlServer -o Models --context TodoDbContext --force
```

## Models

### Todo
- Id (int) - Primary key
- Title (string) - Required
- Description (string) - Optional
- IsCompleted (bool) - Completion status
- CreatedAt (DateTime) - Auto-generated
- UpdatedAt (DateTime) - Optional
- DueDate (DateTime) - Optional
- Priority (string) - Optional
- Category (string) - Optional
- UserId (int) - Foreign key to User
- User (User) - Navigation property

### User
- Id (int) - Primary key
- Username (string) - Required, unique
- Email (string) - Required, unique
- FirstName (string) - Optional
- LastName (string) - Optional
- CreatedAt (DateTime) - Auto-generated
- UpdatedAt (DateTime) - Optional
- Todos (ICollection<Todo>) - Navigation property

## API Endpoints

### Todos
- GET `/api/todos` - Get all todos
- GET `/api/todos/{id}` - Get todo by ID
- POST `/api/todos` - Create new todo
- PUT `/api/todos/{id}` - Update todo
- PATCH `/api/todos/{id}/toggle` - Toggle completion status
- DELETE `/api/todos/{id}` - Delete todo

### Users
- GET `/api/users` - Get all users
- GET `/api/users/{id}` - Get user by ID
- GET `/api/users/{id}/todos` - Get user's todos
- POST `/api/users` - Create new user
- PUT `/api/users/{id}` - Update user
- DELETE `/api/users/{id}` - Delete user

## Running the API

1. Navigate to the TodoApi directory:
   ```bash
   cd backend/TodoApi
   ```

2. Run the application:
   ```bash
   dotnet run
   ```

The API will be available at `https://localhost:5001` or `http://localhost:5000`.

## Configuration

The connection string is configured in `appsettings.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=DESKTOP-5POK3JN;Database=TodoDB;User Id=sa;Password=w23eW@#E;"
  }
}
```

## CORS

The API is configured to accept requests from the frontend running on:
- http://localhost:3000
- http://localhost:3001