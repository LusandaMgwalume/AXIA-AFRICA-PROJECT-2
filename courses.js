fetch("https://fakestoreapi.com/products?limit=6")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("coursesGrid");
    data.forEach(course => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded shadow";

      card.innerHTML = `
        <img src="${course.image}" alt="${course.title}" class="h-40 w-full object-contain mb-4" />
        <h3 class="font-bold text-lg mb-2">${course.title}</h3>
        <p class="text-sm text-gray-700">${course.description.slice(0, 100)}...</p>
      `;

      grid.appendChild(card);
    });
  });
