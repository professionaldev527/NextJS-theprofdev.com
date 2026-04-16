import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
					<button><i className="ri-close-line" /></button>
				</div>
				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0">Get in touch</h3>
				</div>
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium text-200 mb-5">I'm always excited to take on new projects and collaborate with innovative minds.</p>
						<div className="mb-4">
							<span className="text-400 fs-5">Email</span>
							<p className="mb-0">contact@theprofdev.com</p>
						</div>
						<div className="mb-4">
							<span className="text-400 fs-5">GitHub</span>
							<p className="mb-0">
								<Link href="https://github.com/professionaldev527" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
									github.com/professionaldev527
								</Link>
							</p>
						</div>
					</div>
					<div className="contact-list">
						<p className="text-400 fs-5 mb-3">Social</p>
						<div className="d-flex gap-4 align-items-center">
							<Link href="https://www.linkedin.com/in/kaushik-adithya-e-2b54a976/" target="_blank" rel="noopener noreferrer">
								<i className="ri-linkedin-fill fs-2" />
							</Link>
							<Link href="https://github.com/professionaldev527" target="_blank" rel="noopener noreferrer">
								<i className="ri-github-fill fs-2" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`} onClick={handleOffCanvas} />
		</>
	)
}
