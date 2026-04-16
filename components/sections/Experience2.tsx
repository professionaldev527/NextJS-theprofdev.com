import Link from 'next/link'


export default function Experience2() {
	return (
		<>

			<section id="resume" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Experience </span>
								</div>
								<h3>
									+2
									<span className="text-300">years of </span>
									passion
									<span className="text-300">
										for <br />
										building scalable web apps
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="#" className="technology border border-1 rounded-3 p-3 text-decoration-none">
												<div className="d-flex align-items-center gap-2">
													<div className="icon-shape bg-primary-2 rounded-circle p-2 text-dark fw-bold">F</div>
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1 text-dark">Freelance</h5>
														<span className="text-300">2025 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3 text-decoration-none">
												<div className="d-flex align-items-center gap-2">
													<div className="icon-shape bg-secondary-2 rounded-circle p-2 text-white fw-bold">U</div>
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1 text-dark">Udemy (Self-Taught)</h5>
														<span className="text-300">2024 - 2025</span>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">Full-Stack Developer & Deployment Specialist</h6>
										<ul className="mt-4">
											<li className="text-dark mb-3">Architecting and deploying high-performance web applications using <span className="text-secondary-2">Next.js (App Router)</span> and <span className="text-secondary-2">TypeScript</span>.</li>
											<li className="text-dark mb-3">Integrating serverless databases like <span className="text-dark fw-bold">Neon (PostgreSQL)</span> with <span className="text-dark fw-bold">Prisma ORM</span> for robust data management.</li>
											<li className="text-dark mb-3">Implementing secure authentication workflows with <span className="text-dark fw-bold">Clerk Auth</span> and <span className="text-dark fw-bold">MongoDB</span>.</li>
											<li className="text-dark mb-3">Optimizing deployment pipelines for high-traffic portfolios on <span className="text-secondary-2">Vercel</span>.</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<span className="text-300 border border-1 px-3 py-1 rounded-2">Next.js</span>
											<span className="text-300 border border-1 px-3 py-1 rounded-2">TypeScript</span>
											<span className="text-300 border border-1 px-3 py-1 rounded-2">PostgreSQL</span>
											<span className="text-300 border border-1 px-3 py-1 rounded-2">Prisma</span>
											<span className="text-300 border border-1 px-3 py-1 rounded-2">Vercel</span>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0 w-100 h-100 object-fit-cover" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
