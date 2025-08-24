import todoBaseApi from "@/store/api/todo/todoSlice";
import { Todo, CreateTodoRequest, UpdateTodoRequest } from "@/interfaces/todo";

export const todoApi = todoBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all todos
    getTodos: builder.query<Todo[], void>({
      query: () => ({
        url: `/todos`,
        method: "GET",
      }),
      providesTags: ["Todo"],
    }),

    // Get single todo
    getTodo: builder.query<Todo, number>({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Todo", id }],
    }),

    // Create todo
    createTodo: builder.mutation<Todo, CreateTodoRequest>({
      query: (payload: CreateTodoRequest) => ({
        url: "/todos",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Todo"],
    }),

    // Update todo
    updateTodo: builder.mutation<void, UpdateTodoRequest>({
      query: ({ id, ...payload }: UpdateTodoRequest) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: { id, ...payload },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Todo", id },
        "Todo",
      ],
    }),

    // Toggle todo completion
    toggleTodo: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/todos/${id}/toggle`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Todo", id },
        "Todo",
      ],
    }),

    // Delete todo
    deleteTodo: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
} = todoApi;