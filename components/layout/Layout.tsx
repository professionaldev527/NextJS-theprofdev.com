"use client";
import { useEffect, useState } from "react";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import ImageHoverEffects from "../elements/ImageHoverEffects";
import Breadcrumb from "./Breadcrumb";
import MobileMenu from "./MobileMenu";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";

interface LayoutProps {
    headerStyle?: Number;
    footerStyle?: Number;
    children?: React.ReactNode;
    breadcrumbTitle?: string;
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const handleMobileMenu = (): void => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
    };

    // Search
    const [isSearch, setSearch] = useState<boolean>(false);
    const handleSearch = (): void => setSearch(!isSearch);

    // OffCanvas
    const [isOffCanvas, setOffCanvas] = useState<boolean>(false);
    const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas);

    useEffect(() => {
        // Initialize WOW.js - load via script tag as fallback for UMD modules
        if (typeof window !== "undefined") {
            const initWOW = () => {
                // Try dynamic import first
                import("wowjs")
                    .then((wowjsModule: any) => {
                        // Check all possible export patterns
                        let WOWConstructor: any = null;

                        if (typeof wowjsModule === "function") {
                            WOWConstructor = wowjsModule;
                        } else if (wowjsModule.default && typeof wowjsModule.default === "function") {
                            WOWConstructor = wowjsModule.default;
                        } else if (wowjsModule.WOW && typeof wowjsModule.WOW === "function") {
                            WOWConstructor = wowjsModule.WOW;
                        } else if (wowjsModule.__esModule && wowjsModule.default) {
                            WOWConstructor = wowjsModule.default;
                        } else {
                            // Try accessing via window (UMD global)
                            WOWConstructor = (window as any).WOW;
                        }

                        if (WOWConstructor && typeof WOWConstructor === "function") {
                            (window as any).wow = new WOWConstructor({
                                live: false,
                            });
                            (window as any).wow.init();
                        } else {
                            // Fallback: check if WOW is already on window (loaded via script)
                            if ((window as any).WOW && typeof (window as any).WOW === "function") {
                                (window as any).wow = new (window as any).WOW({
                                    live: false,
                                });
                                (window as any).wow.init();
                            } else {
                                console.error("WOW constructor not found");
                            }
                        }
                    })
                    .catch((err) => {
                        console.error("Failed to import WOW.js:", err);
                        // Fallback: try window.WOW if loaded via script tag
                        if ((window as any).WOW && typeof (window as any).WOW === "function") {
                            (window as any).wow = new (window as any).WOW({
                                live: false,
                            });
                            (window as any).wow.init();
                        }
                    });
            };

            // Small delay to ensure DOM is ready
            setTimeout(initWOW, 100);
        }

        const handleScroll = (): void => {
            const scrollCheck: boolean = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);
    return (
        <>
            <div id="top" />
            <AddClassBody />
            <DataBg />
            <ImageHoverEffects />
            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}
            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />

            <main className="main">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            {!footerStyle && <Footer1 />}
            {footerStyle == 1 ? <Footer1 /> : null}
            {footerStyle == 2 ? <Footer2 /> : null}
            {footerStyle == 3 ? <Footer3 /> : null}

            <BackToTop target="#top" />
        </>
    );
}
