const projectMetadata = {
	'NextJs-Medically': true,
	'NextJS-Cloudinary-Prisma-NeonDB': true,
	'Next.js-TodoMaster-Clerk-NeonDB-PostgreSQL': true,
	'next.js-appwrite-stackoverflow': true,
	'Fastify-Backend-JWT': true,
	'react-currency-converter': true,
	'nextjs-mongodb-full-stack-authentication-system': true,
	'react-password-generator': true,
	'project-muse': true
};

fetch("https://api.github.com/users/professionaldev527/repos?sort=updated&per_page=100")
  .then(res => res.json())
  .then(repos => {
    const sorted = repos
			.filter((repo) => !repo.fork && repo.name !== "professionaldev527" && repo.homepage)
			.sort((a, b) => {
				const hasMetaA = !!projectMetadata[a.name];
				const hasMetaB = !!projectMetadata[b.name];
				if (hasMetaA !== hasMetaB) return hasMetaA ? -1 : 1;
				
				if (b.stargazers_count !== a.stargazers_count) {
					return b.stargazers_count - a.stargazers_count;
				}
				return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
			});
    console.log(sorted.map(r => r.name).slice(0, 10));
  });
