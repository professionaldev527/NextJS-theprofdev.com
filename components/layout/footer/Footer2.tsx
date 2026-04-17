import Link from 'next/link'
export default function Footer2() {
	return (
		<>
			<footer style={{ background: '#111114' }}>
				<div className="section-footer-2 position-relative">
					<div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
						<div className="text-center">
							<Link className="d-flex main-logo align-items-center justify-content-center mb-3 text-decoration-none" href="/">
								<img src="assets/imgs/home-page-2/template/favicon.svg" alt="theprofdev" style={{ width: '40px', height: '40px' }} />
								<span className="fs-3 ms-2 fw-semibold text-white-keep">theprofdev</span>
							</Link>
							<div className="d-flex justify-content-center gap-4 align-items-center">
								<Link href="https://www.linkedin.com/in/kaushik-adithya-e-2b54a976/" target="_blank" rel="noopener noreferrer">
									<i className="ri-linkedin-fill fs-3 text-white-keep" />
								</Link>
								<Link href="https://github.com/professionaldev527" target="_blank" rel="noopener noreferrer">
									<i className="ri-github-fill fs-3 text-white-keep" />
								</Link>
							</div>
							<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								<Link href="/#about" className="fs-5 fw-medium text-white-keep text-decoration-none">About me</Link>
								<Link href="/resume" className="fs-5 fw-medium text-white-keep text-decoration-none">Resume</Link>
								<Link href="/projects" className="fs-5 fw-medium text-white-keep text-decoration-none">Projects</Link>
								<Link href="/#contact" className="fs-5 fw-medium text-white-keep text-decoration-none">Contact</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
