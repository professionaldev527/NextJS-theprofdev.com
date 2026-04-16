'use client'

import { useState, FormEvent } from 'react'

export default function Contact2() {
	const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
	const [errorMsg, setErrorMsg] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setStatus('loading')
		setErrorMsg('')

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			})
			const data = await res.json()
			if (!res.ok) throw new Error(data.error || 'Something went wrong.')
			setStatus('success')
			setForm({ name: '', email: '', subject: '', message: '' })
		} catch (err: unknown) {
			setStatus('error')
			setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
		}
	}

	return (
		<>
			<section id="contact" className="section-contact-2 position-relative pt-5 pb-60 overflow-hidden">
				<div className="container">
					<div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
						<div className="position-relative z-1 py-60 p-lg-8 p-md-6 p-3">
							<div className="position-relative z-1">
								<div className="text-center mb-8">
									<div className="d-flex align-items-center justify-content-center">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 d-flex align-items-center"> Contact </span>
									</div>
									<h3>Let's connect</h3>
									<p className="text-300 mt-2">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
								</div>

								<div className="row justify-content-center g-4 mb-8">
									<div className="col-lg-5">
										<div className="d-flex align-items-center border border-1 rounded-3 p-4 bg-3 w-100">
											<div className="d-inline-block">
												<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-4">
													<i className="ri-mail-fill text-primary-2 fs-26" />
												</div>
											</div>
											<div className="ps-3 h-100">
												<span className="text-400 fs-6">Email</span>
												<h6 className="mb-0">contact@theprofdev.com</h6>
											</div>
										</div>
									</div>
									<div className="col-lg-5">
										<div className="d-flex align-items-center position-relative d-inline-flex border border-1 rounded-3 p-4 bg-3 hover-up transition-base w-100">
											<div className="d-inline-block">
												<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-4">
													<i className="ri-github-fill text-primary-2 fs-26" />
												</div>
											</div>
											<div className="ps-3 h-100">
												<span className="text-400 fs-6">GitHub</span>
												<h6 className="mb-0">professionaldev527</h6>
											</div>
											<a href="https://github.com/professionaldev527" target="_blank" rel="noopener noreferrer" className="position-absolute top-0 start-0 w-100 h-100" />
										</div>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-8 col-md-10 col-12">
										{status === 'success' ? (
											<div className="text-center py-5">
												<div className="mb-4">
													<i className="ri-checkbox-circle-line text-primary-2" style={{ fontSize: '3rem' }} />
												</div>
												<h5 className="text-white mb-2">Message sent!</h5>
												<p className="text-300 mb-4">Thanks for reaching out — I'll get back to you soon.</p>
												<button
													className="btn btn-outline-secondary rounded-2 px-5"
													onClick={() => setStatus('idle')}
												>
													Send another message
												</button>
											</div>
										) : (
											<form onSubmit={handleSubmit} noValidate>
												<div className="row g-3">
													<div className="col-12">
														<input
															type="text"
															className="form-control bg-3 border border-1 rounded-3 py-3"
															name="name"
															value={form.name}
															onChange={handleChange}
															placeholder="Your name"
															required
														/>
													</div>
													<div className="col-12">
														<input
															type="email"
															className="form-control bg-3 border border-1 rounded-3 py-3"
															name="email"
															value={form.email}
															onChange={handleChange}
															placeholder="Email"
															required
														/>
													</div>
													<div className="col-12">
														<input
															type="text"
															className="form-control bg-3 border border-1 rounded-3 py-3"
															name="subject"
															value={form.subject}
															onChange={handleChange}
															placeholder="Subject"
															required
														/>
													</div>
													<div className="col-12">
														<textarea
															className="form-control bg-3 border border-1 rounded-3 py-3"
															name="message"
															value={form.message}
															onChange={handleChange}
															placeholder="Message"
															rows={5}
															required
														/>
													</div>
													{status === 'error' && (
														<div className="col-12">
															<p className="text-danger mb-0">
																<i className="ri-error-warning-line me-1" />
																{errorMsg}
															</p>
														</div>
													)}
													<div className="col-12 d-flex justify-content-center mt-2">
														<button
															type="submit"
															disabled={status === 'loading'}
															className="btn btn-primary-2 rounded-2 px-5 py-3 w-100"
															style={{ maxWidth: '320px' }}
														>
															{status === 'loading' ? (
																<>
																	<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
																	Sending...
																</>
															) : (
																<>
																	Send Message
																	<i className="ri-arrow-right-up-line ms-2" />
																</>
															)}
														</button>
													</div>
												</div>
											</form>
										)}
									</div>
								</div>
							</div>
						</div>

						{/* Background Decorations */}
						<div className="position-absolute d-none d-md-block decorate">
							<div className="rotateme">
								<div className="circle-1-1" />
								<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
									<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
								<div className="circle-1-3 position-absolute top-50 start-50 translate-middle">
									<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
							</div>
						</div>
						<img className="position-absolute top-0 start-0 z-0 w-100 h-100 object-fit-cover" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
					</div>
				</div>
			</section>
		</>
	)
}
