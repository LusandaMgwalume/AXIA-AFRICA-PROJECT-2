fetch("https://randomuser.me/api")
  .then(res => res.json())
  .then(data => {
    const user = data.results[0];
    document.getElementById("avatar").src = user.picture.large;
    document.getElementById("name").textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById("email").textContent = user.email;
  });
