fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("assignmentsList");
    data.forEach(task => {
      const item = document.createElement("li");
      item.className = "bg-white p-4 rounded shadow flex justify-between items-center";

      item.innerHTML = `
        <span>${task.title}</span>
        <span class="${task.completed ? 'text-green-600' : 'text-yellow-600'} font-bold">
          ${task.completed ? '✅ Completed' : '⏳ Pending'}
        </span>
      `;

      list.appendChild(item);
    });
  });
