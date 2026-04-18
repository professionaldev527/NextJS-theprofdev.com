'use client'
import Layout from "@/components/layout/Layout"
import { useCallback } from "react"

export default function CVPage() {
  const handleDownload = useCallback(async () => {
    try {
      const html2pdf = (await import("html2pdf.js")).default
      const el = document.getElementById("cv-printable")
      if (!el) return

      const opt = {
        margin: 0,
        filename: "KaushikCV.pdf",
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: {
          scale: 4,
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
        },
        jsPDF: { unit: "px", format: [794, 1123], orientation: "portrait", hotfixes: ["px_scaling"] }
      };

      await html2pdf().set(opt as any).from(el).save()
    } catch (error) {
      console.error("PDF generation failed:", error)
    }
  }, [])

  return (
    <Layout headerStyle={2} footerStyle={2}>
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ── Page shell ── */
        .cv-page-shell {
          background-color: var(--bs-body-bg);
          transition: background-color 0.3s ease;
          min-height: 100vh;
          padding: 0 16px 60px;
        }
        .cv-action-bar {
          max-width: 860px;
          margin: 0 auto 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cv-shell-title {
          font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--bs-body-color);
          font-weight: 600;
        }
        /* ── A4 white card — exact 794×1123px ── */
        #cv-printable {
          background: #ffffff;
          color: #111;
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 10pt;
          line-height: 1.35;
          width: 794px;
          height: 1123px;
          overflow: hidden;
          margin: 0 auto;
          padding: 40px 50px 20px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.55);
          border-radius: 2px;
          box-sizing: border-box;
        }

        /* ── Mobile Full-View Scale ── */
        @media screen and (max-width: 768px) {
          .cv-page-shell {
            padding: 0 4px 60px !important;
          }
          .cv-action-bar {
            padding: 0 16px;
          }
          #cv-printable {
            zoom: 0.46;
            -moz-transform: scale(0.46);
            -moz-transform-origin: top left;
          }
        }
        /* ── CV typography ── */
        .cv-name  { font-size: 28pt; font-weight: 800; color: #0a0a0a; letter-spacing: -1px; line-height: 1.1; }
        .cv-role  { font-size: 12pt; color: #333; margin-top: 4px; font-weight: 500; }
        .cv-summary { font-size: 9.5pt; color: #555; margin-top: 8px; margin-bottom: 0; line-height: 1.4; }
        .cv-contact-block { text-align: right; font-size: 8.5pt; color: #444; line-height: 1.6; }
        .cv-contact-block a { color: #129840; text-decoration: none; }

        .cv-label {
          font-size: 7.5pt; letter-spacing: 0.22em; text-transform: uppercase;
          color: #129840; font-weight: 700; margin-bottom: 4px;
          border-bottom: 2px solid #129840; padding-bottom: 1px;
        }
        .cv-tag {
          display: inline-block; border: 1.2px solid #d0d0d0; border-radius: 3px;
          padding: 1px 6px; font-size: 8pt; color: #333; margin: 2px 2px 2px 0;
        }
        .cv-tag.g { border-color: #129840; color: #129840; }

        .cv-job-title  { font-weight: 700; font-size: 11pt; color: #0a0a0a; }
        .cv-job-org    { font-size: 9.5pt; color: #129840; font-weight: 600; }
        .cv-job-date   { font-size: 8.5pt; color: #888; white-space: nowrap; }
        .cv-job-body   { font-size: 9.5pt; color: #444; line-height: 1.35; }
        .cv-job-body li { margin-bottom: 2px; }

        .cv-proj-name  { font-weight: 700; font-size: 10pt; color: #0a0a0a; }
        .cv-proj-stack { font-size: 8.5pt; color: #888; margin: 1px 0 1px; }
        .cv-proj-desc  { font-size: 9.2pt; color: #444; }
        .cv-proj-link  { font-size: 8.5pt; color: #129840; text-decoration: none; float: right; font-weight: 600; }

        .cv-rule  { border: none; border-top: 1.2px solid #efefef; margin: 6px 0; }
        .cv-col-l { width: 32%; padding-right: 20px; border-right: 1px solid #ebebeb; }
        .cv-col-r { width: 68%; padding-left: 20px; }
        .cv-sub-label { font-size: 9pt; color: #aaa; margin-bottom: 3px; margin-top: 6px; }

        @media print {
          .no-print { display: none !important; }
          .cv-page-shell { background: white !important; padding: 0 !important; }
          #cv-printable { box-shadow: none; width: 100% !important; height: auto !important; }
        }

        /* Professional Profile Masking - Using native image transparency */
        .cv-profile-container {
          position: relative;
          width: 144px; 
          height: 124px; /* Maintain aspect ratio */
          flex-shrink: 0; 
          margin-right: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cv-profile-img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Ensure the full image fits inside without clipping */
        }
      `}} />

      <div className="cv-page-shell">

        {/* ── Action bar ── */}
        <div className="cv-action-bar no-print">
          <span className="cv-shell-title">
            • Curriculum Vitae
          </span>
          <button
            onClick={handleDownload}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 28px',
              background: 'linear-gradient(-90deg,#33a381 0%,#129840 100%)',
              border: 'none', borderRadius: 6, color: '#fff',
              fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer',
              letterSpacing: '0.02em',
            }}
          >
            <i className="ri-download-2-line" style={{ fontSize: '1.1rem' }} />
            Download PDF
          </button>
        </div>

        {/* ── A4 CV card ── */}
        <div style={{ width: '100%', overflowX: 'hidden', paddingBottom: '30px' }}>
          <div id="cv-printable">

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2.2px solid #129840', paddingBottom: 8, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div className="cv-profile-container" style={{ overflow: 'visible', width: 140, height: 140, borderRadius: 0, marginRight: 24, flexShrink: 0, backgroundColor: 'transparent' }}>
                <img
                  src="/assets/imgs/home-page-2/hero-1/kaushik_flat_hex.png"
                  alt="Profile"
                  className="cv-profile-img"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ marginTop: -2 }}>
                <div className="cv-name">Kaushik Adithya E</div>
                <div className="cv-role">Junior Full-Stack Developer &amp; Deployment Specialist</div>
              </div>
            </div>
            <div className="cv-contact-block" style={{ marginLeft: 30, flexShrink: 0 }}>
              <div>📧 <a href="mailto:contact@theprofdev.com">contact@theprofdev.com</a></div>
              <div>🐙 <a href="https://github.com/professionaldev527" target="_blank" rel="noopener noreferrer">github.com/professionaldev527</a></div>
              <div>💼 <a href="https://www.linkedin.com/in/kaushik-adithya-e-2b54a976/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kaushik-adithya-e</a></div>
              <div>📍 Bangalore, India</div>
            </div>
          </div>

          <p className="cv-summary" style={{ marginBottom: 15 }}>
            Full-stack engineer building production-ready web applications using Next.js, TypeScript, and modern
            serverless infrastructure. Focused on clean architecture, high-performance layouts, and end-to-end
            ownership from UI to database.
          </p>

          {/* Two-column body */}
          <div style={{ display: 'flex' }}>

            {/* ── LEFT ── */}
            <div className="cv-col-l">

              {/* Skills */}
              <div style={{ marginBottom: 18 }}>
                <div className="cv-label">Core Skills</div>
                <div className="cv-sub-label" style={{ marginTop: 0 }}>Frontend</div>
                {['Next.js 14+', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'].map(s => (
                  <span key={s} className="cv-tag g">{s}</span>
                ))}
                <div className="cv-sub-label">Backend</div>
                {['Node.js', 'Fastify', 'Express', 'REST APIs', 'Server Actions', 'JWT Auth', 'Clerk Auth'].map(s => (
                  <span key={s} className="cv-tag">{s}</span>
                ))}
                <div className="cv-sub-label">Database</div>
                {['PostgreSQL', 'MongoDB', 'Neon DB', 'Prisma ORM', 'Appwrite'].map(s => (
                  <span key={s} className="cv-tag">{s}</span>
                ))}
                <div className="cv-sub-label">DevOps & Tools</div>
                {['Vercel', 'Docker', 'Git', 'GitHub', 'Cloudinary'].map(s => (
                  <span key={s} className="cv-tag">{s}</span>
                ))}
              </div>

              {/* Education */}
              <div style={{ marginBottom: 12 }}>
                <div className="cv-label">Education</div>
                <div className="cv-job-title">Self-Directed Engineering</div>
                <div className="cv-job-org">Udemy — Full-Stack Curriculum</div>
                <div className="cv-job-date">2024 – 2025</div>
                <p className="cv-job-body" style={{ marginTop: 4, marginBottom: 0 }}>
                  Intensive project-based development covering Node.js, Express, PostgreSQL, React, and Next.js with real-world deliverables.
                </p>
              </div>

              {/* Languages */}
              <div style={{ paddingBottom: 10 }}>
                <div className="cv-label">Languages</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5pt', paddingTop: 5 }}>
                  <span style={{ fontWeight: 600 }}>English</span>
                  <span style={{ color: '#888' }}>Professional</span>
                </div>
              </div>

            </div>

            {/* ── RIGHT ── */}
            <div className="cv-col-r">

              {/* Experience */}
              <div style={{ marginBottom: 20 }}>
                <div className="cv-label">Experience</div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <div className="cv-job-title">Full-Stack Developer — Freelance</div>
                    <div className="cv-job-org">Independent / Remote</div>
                  </div>
                  <span className="cv-job-date">2025 – Present</span>
                </div>
                <ul className="cv-job-body" style={{ paddingLeft: 16, marginTop: 6, marginBottom: 0 }}>
                  <li>Architect and deploy full-stack apps with Next.js & TypeScript.</li>
                  <li>Integrate serverless databases (Neon) with Prisma ORM.</li>
                  <li>Implement auth workflows with Clerk and MongoDB.</li>
                  <li>Optimise CI/CD pipelines on Vercel for production.</li>
                </ul>

                <hr className="cv-rule" />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <div className="cv-job-title">Self-Taught Developer — Learning Phase</div>
                    <div className="cv-job-org">Udemy &amp; Personal Projects</div>
                  </div>
                  <span className="cv-job-date">2024 – 2025</span>
                </div>
                <ul className="cv-job-body" style={{ paddingLeft: 16, marginTop: 6, marginBottom: 0 }}>
                  <li>Completed backend engineering: Node.js, REST APIs, and auth.</li>
                  <li>Built and shipped 10+ projects across React and Next.js.</li>
                  <li>Progressed to production full-stack apps in under a year.</li>
                </ul>
              </div>

              {/* Projects */}
              <div>
                <div className="cv-label">Featured Projects</div>
                {[
                  {
                    name: 'Medically — Healthcare Template',
                    url: 'https://github.com/professionaldev527/NextJs-Medically',
                    stack: 'Next.js · Tailwind CSS · MongoDB',
                    desc: 'Full-stack healthcare portal with appointment booking and patient management.'
                  },
                  {
                    name: 'Todo Master Pro',
                    url: 'https://github.com/professionaldev527/Next.js-TodoMaster-Clerk-NeonDB-PostgreSQL',
                    stack: 'Next.js 14 · Clerk Auth · Neon DB · PostgreSQL',
                    desc: 'Enterprise task management with real-time updates and role-based access.'
                  },
                  {
                    name: 'Cloudinary Media Manager',
                    url: 'https://github.com/professionaldev527/NextJS-Cloudinary-Prisma-NeonDB',
                    stack: 'React · Prisma ORM · Neon DB · Cloudinary',
                    desc: 'High-performance media dashboard with asset optimisation and categorisation.'
                  },
                  {
                    name: 'Fastify Enterprise API',
                    url: 'https://github.com/professionaldev527/Fastify-Backend-JWT',
                    stack: 'Fastify · Node.js · JWT · PostgreSQL',
                    desc: 'Low-latency backend with JWT auth and Swagger documentation.'
                  },
                  {
                    name: 'Secure Auth Framework',
                    url: 'https://github.com/professionaldev527/nextjs-mongodb-full-stack-authentication-system',
                    stack: 'Next.js · Next-Auth v5 · BCrypt · MongoDB',
                    desc: 'Production-ready auth boilerplate with RBAC and secure password hashing.'
                  },
                ].map((p, i) => (
                  <div key={p.name}>
                    {i > 0 && <hr className="cv-rule" />}
                    <div style={{ overflow: 'hidden' }}>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="cv-proj-link">↗ GitHub</a>
                      <div className="cv-proj-name">{p.name}</div>
                    </div>
                    <div className="cv-proj-stack">{p.stack}</div>
                    <div className="cv-proj-desc">{p.desc}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}
