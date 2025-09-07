// Fetch Courses
fetch("https://fakestoreapi.com/products?limit=3")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("coursesList");
    data.forEach(course => {
      const item = document.createElement("li");
      item.textContent = course.title;
      list.appendChild(item);
    });
  });

// Fetch Assignments
fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("assignmentsList");
    data.forEach(task => {
      const item = document.createElement("li");
      item.textContent = `${task.title} - ${task.completed ? "✅" : "⏳"}`;
      list.appendChild(item);
    });
  });
