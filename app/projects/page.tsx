
import Layout from "@/components/layout/Layout";
import Link from "next/link";

const projectMetadata: Record<string, any> = {
	'NextJs-Medically': {
		displayName: 'Medically Healthcare Ecosystem',
		description: 'A sophisticated healthcare and medical template built with Next.js, featuring appointment booking and patient management systems. Designed for clinics and private practices to streamline patient engagement and data management.',
		frontend: 'Next.js 14, Tailwind CSS, Framer Motion',
		backend: 'Node.js, Express, Next API Routes',
		database: 'MongoDB (Atlas)',
		image: '/assets/imgs/portfolio/medically_live.png'
	},
	'NextJS-Cloudinary-Prisma-NeonDB': {
		displayName: 'Cloudinary Media Manager',
		description: 'A professional-grade media management dashboard integrating Cloudinary for seamless asset optimization and categorization. Built with high-performance serverless architecture to handle large media libraries efficiently.',
		frontend: 'React, Tailwind CSS, Radix UI',
		backend: 'Next.js Server Actions, Prisma ORM',
		database: 'Neon DB (Serverless PostgreSQL)',
		image: '/assets/imgs/portfolio/cloudinary_live.png'
	},
	'Next.js-TodoMaster-Clerk-NeonDB-PostgreSQL': {
		displayName: 'Todo Master Pro',
		description: 'A robust task management application featuring Clerk Auth for enterprise-grade security and Neon DB for high-performance data persistence. Includes real-time updates and advanced task filtering capabilities.',
		frontend: 'Next.js 14, TypeScript, Shadcn UI',
		backend: 'Clerk Authentication, Serverless Functions',
		database: 'Neon DB (PostgreSQL)',
		image: '/assets/imgs/portfolio/todo_live.png'
	},
	'next.js-appwrite-stackoverflow': {
		displayName: 'Stack Overflow Clone (Appwrite)',
		description: 'A full-featured developer community platform clone built with Next.js and Appwrite. Features include real-time reputation systems, nested commenting, and high-performance server-side rendering for SEO.',
		frontend: 'Next.js 14, Tailwind CSS, Shadcn UI',
		backend: 'Appwrite Functions, Node.js',
		database: 'Appwrite Database (NoSQL)',
		image: '/assets/imgs/portfolio/appwrite_logo.png'
	},
	'Fastify-Backend-JWT': {
		displayName: 'Fastify Enterprise API',
		description: 'A high-performance backend architecture implementation using Fastify. Focuses on extremely low overhead and solid plugin architecture, implementing advanced JWT session management and input validation.',
		frontend: 'Postman Documentation, Swagger UI',
		backend: 'Fastify, Node.js, JWT Auth',
		database: 'SQLite (Development), PostgreSQL (Production)',
		image: '/assets/imgs/portfolio/nodejs_logo.png'
	},
	'react-currency-converter': {
		displayName: 'Real-time Currency Analytics',
		description: 'A precise financial tool for real-time currency conversion using live market data. Features interactive trends, historical data visualization, and a minimalist design optimized for fast user interaction.',
		frontend: 'React, Vite, CSS Modules, Chart.js',
		backend: 'ExchangeRate-API Integration',
		database: 'Browser LocalStorage',
		image: '/assets/imgs/portfolio/currency_live.png'
	},
	'nextjs-mongodb-full-stack-authentication-system': {
		displayName: 'Secure Auth Framework',
		description: 'A production-ready authentication boilerplate implementing industry-standard security practices. Includes JWT-based session management, secure password hashing, and role-based access control.',
		frontend: 'Next.js, Next-Auth v5, Tailwind CSS',
		backend: 'BCrypt Encryption, JWT, Server Actions',
		database: 'MongoDB',
		image: '/assets/imgs/portfolio/auth_live.png'
	},
	'react-password-generator': {
		displayName: 'Password Shield Generator',
		description: 'A sleek, interactive security tool for generating strong, customizable passwords. Features real-time complexity analysis, one-click copy functionality, and a responsive dark-themed interface.',
		frontend: 'React, Tailwind CSS, Lucide Icons',
		backend: 'Client-side Cryptography',
		database: 'None (Stateless)',
		image: '/assets/imgs/portfolio/password_generator.png'
	},
	'project-muse': {
		displayName: 'Project Muse (Social Media)',
		description: 'A dynamic social platform designed for creative professionals to showcase portfolios and network within specific industries. Built for scalability and high engagement.',
		frontend: 'React, Tailwind CSS, GSAP',
		backend: 'Node.js, Express',
		database: 'MongoDB',
		image: '/assets/imgs/portfolio/react_logo.png'
	}
};

async function getProjects() {
	try {
		const res = await fetch("https://api.github.com/users/professionaldev527/repos?sort=updated&per_page=100", {
			next: { revalidate: 3600 },
		});
		if (!res.ok) return [];
		const repos = await res.json();
		return repos
			.filter((repo: any) => !repo.fork && repo.name !== "professionaldev527")
			.sort((a: any, b: any) => {
				const hasMetaA = !!projectMetadata[a.name];
				const hasMetaB = !!projectMetadata[b.name];
				if (hasMetaA !== hasMetaB) return hasMetaA ? -1 : 1;
				
				if (b.stargazers_count !== a.stargazers_count) {
					return b.stargazers_count - a.stargazers_count;
				}
				return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
			})
			.slice(0, 15);
	} catch (error) {
		console.error("Error fetching projects:", error);
		return [];
	}
}

const getProjectImage = (project: any, meta: any) => {
	if (meta.image) return meta.image;
	const name = project.name.toLowerCase();
	if (name.includes('appwrite')) return '/assets/imgs/portfolio/appwrite_logo.png';
	if (name.includes('react')) return '/assets/imgs/portfolio/react_logo.png';
	if (name.includes('nextjs') || name.includes('next.js')) return '/assets/imgs/portfolio/nextjs_logo.png';
	if (name.includes('backend') || name.includes('fastify') || name.includes('node')) return '/assets/imgs/portfolio/nodejs_logo.png';
	return "/assets/imgs/home-page-2/hero-1/bg.png";
}

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: `
				.btn-green-gradient {
					background: linear-gradient(-90deg, #33a381 0%, #129840 100%) !important;
					border: none !important;
					color: white !important;
					transition: all 0.3s ease;
				}
				.btn-green-gradient:hover {
					opacity: 0.9;
					transform: translateY(-2px);
					color: white !important;
				}
				.btn-github-dark {
					background-color: #1a1a1a !important;
					border: 1px solid #333 !important;
					color: white !important;
					transition: all 0.3s ease;
				}
				.btn-github-dark:hover {
					background-color: #333 !important;
					transform: translateY(-2px);
				}
				.project-card-image {
					transition: transform 0.5s ease;
				}
				.card-custom-hover:hover .project-card-image {
					transform: scale(1.05);
				}
				.project-title {
					font-size: 2.2rem !important;
					line-height: 1.2;
				}
				@media (max-width: 991px) {
					.project-title {
						font-size: 1.8rem !important;
					}
				}
			`}} />
			<Layout headerStyle={2} footerStyle={2}>
				<div>
					<section className="section-projects-list pt-0 pb-120">
						<div className="container">
							<div className="row text-center mb-80">
								<div className="col-lg-10 mx-auto">
									<div className="d-flex align-items-center justify-content-center mb-3">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 text-uppercase fs-5 fw-bold">Portfolio</span>
									</div>
									<h3 className="ds-3 mt-3 mb-4 text-dark">
										Explore <span className="text-300">My Latest Work and</span> Featured <span className="text-300">Projects</span>
									</h3>
									<p className="text-300 fs-5 mb-0">
										A professional engineering showcase of my technical implementations across the full stack. <br />
										From healthcare ecosystems to enterprise-grade backend architectures.
									</p>
								</div>
							</div>
						</div>

						<div className="container">
							<div className="row g-5 justify-content-center">
								{projects.length > 0 ? (
									projects.map((project: any) => {
										const meta = projectMetadata[project.name] || {};
										const hasDemo = !!project.homepage;
										const projectImage = getProjectImage(project, meta);

										return (
											<div className="col-12" key={project.id}>
												<div className="rounded-3 border border-1 position-relative overflow-hidden bg-3 shadow-sm mb-4 card-custom-hover">
													<div className="box-linear-animation position-relative z-1 p-lg-6 p-md-5 p-3 row align-items-center">
														{/* Project Image Column */}
														<div className="col-lg-5 mb-4 mb-lg-0">
															<div className="project-image-container rounded-3 overflow-hidden border border-1 shadow-sm h-100" style={{ maxHeight: '450px', background: '#0a0a0a' }}>
																<img 
																	src={projectImage} 
																	alt={meta.displayName || project.name} 
																	className="w-100 h-100 object-fit-cover project-card-image"
																	style={{ minHeight: '300px' }}
																/>
															</div>
														</div>

														{/* Project Content Column */}
														<div className="col-lg-7 ps-lg-5">
															<div className="d-flex align-items-center mb-3">
																<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
																	<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
																</svg>
																<span className="text-linear-4 text-uppercase fs-5 fw-bold">{project.language || "Personal Project"}</span>
															</div>
															
															<h4 className="fw-bold mb-3 text-dark project-title">{meta.displayName || project.name.replace(/-/g, ' ')}</h4>
															<p className="text-300 mb-4 fs-5 lh-base">{meta.description || project.description || "A professional-grade repository showcasing advanced engineering and modern tech stacks."}</p>
															
															{/* Implementation Details */}
															<div className="bg-dark-subtle p-4 rounded-3 mb-4 border border-1">
																<p className="text-linear-4 mb-3 fs-6 fw-bold text-uppercase border-bottom border-secondary-subtle pb-2">Technical Implementation</p>
																<div className="row g-3">
																	<div className="col-md-6">
																		<p className="text-dark mb-0 fw-bold fs-7">Frontend / Logic</p>
																		<p className="text-300 mb-0 fs-7">{meta.frontend || (project.language ? `${project.language} Core` : 'Client-side Logic')}</p>
																	</div>
																	<div className="col-md-6">
																		<p className="text-dark mb-0 fw-bold fs-7">Backend / Infra</p>
																		<p className="text-300 mb-0 fs-7">{meta.backend || 'Serverless / API Integration'}</p>
																	</div>
																	{(meta.database || project.stargazers_count >= 0) && (
																		<div className="col-md-6">
																			<p className="text-dark mb-0 fw-bold fs-7">Storage / Type</p>
																			<p className="text-300 mb-0 fs-7">{meta.database || 'Stateless / Persistent'}</p>
																		</div>
																	)}
																</div>
															</div>

															<div className="d-flex align-items-center justify-content-between pt-4 border-top border-1">
																<div className="d-flex align-items-center gap-4 text-dark">
																	{project.stargazers_count > 0 && (
																		<div className="d-flex align-items-center text-300">
																			<i className="ri-star-fill text-primary-2 me-1 fs-5" />
																			<span className="fw-bold fs-6">{project.stargazers_count}</span>
																		</div>
																	)}
																</div>
																
																<div className="d-flex gap-3">
																	<Link href={project.html_url} target="_blank" className="btn btn-github-dark d-flex align-items-center justify-content-center gap-2 px-4 py-3 rounded-3 hover-up fs-7">
																		<i className="ri-github-fill fs-4" />
																		Source Code
																	</Link>
																	{hasDemo && (
																		<Link href={project.homepage} target="_blank" className="btn btn-green-gradient d-flex align-items-center justify-content-center gap-2 px-4 py-3 rounded-3 hover-up fs-7">
																			<i className="ri-external-link-line fs-4" />
																			Live Demo
																		</Link>
																	)}
																</div>
															</div>
														</div>
													</div>
													<img 
														className="position-absolute top-0 start-0 z-0 w-100 h-100 object-fit-cover opacity-10" 
														src="/assets/imgs/home-page-2/projects/bg.png" 
														alt="background effect" 
													/>
												</div>
											</div>
										);
									})
								) : (
									<div className="text-center py-120">
										<p className="text-300 fs-4">Synchronizing with GitHub repository data...</p>
									</div>
								)}
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	);
}
