import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Link from 'next/link'
import OffCanvas from '../OffCanvas'

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas }: any) {
    return (
        <>
            <header>
                <div className="container position-relative">
                    <div className="position-relative">
                        <nav className="navbar navbar-expand-lg navbar-home-2 flex-nowrap flex-lg-nowrap flex-wrap z-999 p-0 border border-1 rounded-3">
                            <style dangerouslySetInnerHTML={{ __html: `
                                .header-stacked .nav-link { border: none !important; border-bottom: none !important; text-decoration: none !important; box-shadow: none !important; }
                                .header-stacked .nav-link::before, .header-stacked .nav-link::after { display: none !important; }
                            `}} />
                            <div className="container py-1 py-lg-2 px-3 px-lg-4 d-flex flex-wrap align-items-center justify-content-between header-stacked">
                                
                                {/* 1. Logo (Left, order-1) */}
                                <Link className="navbar-brand d-flex main-logo align-items-center order-1" href="/">
                                    <img src="assets/imgs/home-page-2/template/favicon.svg" alt="theprofdev" />
                                    <span className="fs-5 ms-2 fw-semibold text-white-keep">theprofdev</span>
                                </Link>

                                {/* 2. Menu Links (Row 2 on Mobile [w-100, order-3], Row 1 on Desktop [w-auto, order-2]) */}
                                <div className="d-flex w-100 w-lg-auto justify-content-center mt-1 mt-lg-0 order-3 order-lg-2">
                                    <ul className="navbar-nav d-flex flex-row flex-wrap justify-content-center gap-3 gap-md-4 mb-0" style={{ fontSize: '0.85rem' }}>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-medium px-1 px-md-2" href="/#about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-medium px-1 px-md-2" href="/resume">Resume</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-medium px-1 px-md-2" href="/projects">Projects</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-medium px-1 px-md-2" href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* 3. Socials & Theme (Row 1 Right, order-2) */}
                                <div className="d-flex align-items-center order-2 order-lg-3 ms-auto ms-lg-0 flex-grow-1 flex-lg-grow-0 justify-content-end pe-lg-2">
                                    <div className="d-flex align-items-center gap-3 ms-lg-4">
                                        <Link href="https://www.linkedin.com/in/kaushik-adithya-e-2b54a976/" target="_blank" rel="noopener noreferrer">
                                            <i className="ri-linkedin-fill fs-5 text-white-keep" />
                                        </Link>
                                        <Link href="https://github.com/professionaldev527" target="_blank" rel="noopener noreferrer">
                                            <i className="ri-github-fill fs-5 text-white-keep" />
                                        </Link>
                                    </div>
                                    <div className="ms-auto ms-lg-5 ps-lg-4">
                                        <ThemeSwitch />
                                    </div>
                                </div>
                            </div>
                        </nav>

                    </div>
                    <OffCanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
                </div>
            </header>
        </>
    )
}
