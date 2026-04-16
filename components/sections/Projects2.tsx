'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

const GithubButton = ({ href }: { href: string }) => (
	<Link
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="btn btn-primary-2 rounded-2 py-3 w-100 mt-4 d-flex align-items-center justify-content-center gap-2"
	>
		<i className="ri-github-fill fs-5" />
		View on GitHub
		<i className="ri-arrow-right-up-line fs-5" />
	</Link>
)

export default function Projects2() {
	return (
		<>
			<div id="portfolio" className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Projects </span>
								</div>
								<Link href="/projects" className="text-decoration-none">
									<h3 className="hover-underline-animation d-inline-block">My Recent Works</h3>
								</Link>
								<div className="position-relative">
									<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100 rounded-3" src="assets/imgs/portfolio/medically_new.png" alt="Medically" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Medically <br />
																Healthcare Template
															</h4>
															<p>A professional healthcare and medical template built with Next.js, featuring appointment booking and patient management systems.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0">Role</p>
																		<p className="text-300 mb-0">Full-Stack Developer</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0">Technologies</p>
																		<p className="text-300 mb-0">Next.js, Tailwind CSS, MongoDB</p>
																	</div>
																</li>
															</ul>
															<GithubButton href="https://github.com/professionaldev527/NextJs-Medically" />
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100 rounded-3" src="assets/imgs/portfolio/cloudinary_new.png" alt="Cloudinary Media Manager" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Cloudinary <br />
																Media Manager
															</h4>
															<p>A sophisticated media management dashboard built with Prisma and Neon DB (PostgreSQL), integrating Cloudinary for seamless asset optimization.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0">Tech Stack</p>
																		<p className="text-300 mb-0">Prisma, Neon DB, Cloudinary</p>
																	</div>
																</li>
															</ul>
															<GithubButton href="https://github.com/professionaldev527/NextJS-Cloudinary-Prisma-NeonDB" />
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100 rounded-3" src="assets/imgs/portfolio/todo_new.png" alt="Todo Master" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Todo Master <br />
																Task Management
															</h4>
															<p>A robust task management application featuring Clerk Auth for secure access and Neon DB for high-performance serverless PostgreSQL storage.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0">Security</p>
																		<p className="text-300 mb-0">Clerk Auth</p>
																	</div>
																</li>
															</ul>
															<GithubButton href="https://github.com/professionaldev527/Next.js-TodoMaster-Clerk-NeonDB-PostgreSQL" />
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100 rounded-3" src="assets/imgs/portfolio/currency_new.png" alt="Currency Converter" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																React <br />
																Currency Converter
															</h4>
															<p>A real-time currency conversion tool featuring dynamic exchange rates and a minimalist, responsive user interface.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0">Tech</p>
																		<p className="text-300 mb-0">React, API Integration</p>
																	</div>
																</li>
															</ul>
															<GithubButton href="https://github.com/professionaldev527/react-currency-converter" />
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100 rounded-3" src="assets/imgs/portfolio/auth_new.png" alt="Full-Stack Auth" />
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Full-Stack Auth <br />
																System
															</h4>
															<p>A secure authentication implementation utilizing MongoDB for user data storage and best practices in security and session management.</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0">Database</p>
																		<p className="text-300 mb-0">MongoDB</p>
																	</div>
																</li>
															</ul>
															<GithubButton href="https://github.com/professionaldev527/nextjs-mongodb-full-stack-authentication-system" />
														</div>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
									<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
										<div className="swiper-button-prev end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
											</svg>
										</div>
										<div className="swiper-button-next end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
