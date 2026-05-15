fetch("https://api.github.com/users/professionaldev527/repos?sort=updated&per_page=100")
  .then(res => res.json())
  .then(repos => {
    const todo = repos.find(r => r.name === 'Next.js-TodoMaster-Clerk-NeonDB-PostgreSQL');
    console.log(todo ? todo.homepage : 'Not Found');
  });
