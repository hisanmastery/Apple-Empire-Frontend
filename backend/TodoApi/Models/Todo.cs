using System;
using System.Collections.Generic;

namespace TodoApi.Models;

public partial class Todo
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public bool IsCompleted { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public DateTime? DueDate { get; set; }

    public string? Priority { get; set; }

    public string? Category { get; set; }

    public int? UserId { get; set; }

    public virtual User? User { get; set; }
}