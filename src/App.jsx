import React, { useEffect, useState } from "react";

const experiences = [
  ["리포트 기반 AI 면접 훈련 서비스 개발", "2026. 04"],
  ["SK 근태관리 이상 패턴 자동 탐지 시스템 개발", "2025. 11"],
  ["AI 웹서비스 협업 도구 프로젝트", "2025.10"],
  ["RAG 기반 영어 회화 에이전트 프로젝트", "2025. 10"],
  ["제조 결함 데이터 분석 프로젝트", "2025. 10"],
  ["스마트 제조 의사결정 프로젝트", "2025. 09"],
  ["대한의용생체공학회 논문 게재 및 특허출원", "2025. 08"],
  ["2025 청년 일경험 지원사업 프로젝트", "2025. 05"],
  ["데이터베이스 조교", "2025. 03"],
  ["Murfy AI 서포터즈", "2025. 02"],
  ["학부연구생 (Data Intelligence Lab)", "2024. 11"],
  ["보험 약관 요약 및 추천 시스템 개발", "2024. 09"],
];

const educations = [
  ["성광여자고등학교 졸업", "2022. 02"],
  ["대구가톨릭대학교 졸업", "2026. 02"],
];

const projects = [
  {
    visualClass: "project-visual-ui",
    title: "[UXUI DESIGN] 실무 최적화와 사용자 경험",
    meta: ["2025", "UX/UI", "Planning / Design"],
    description:
      "효율적인 관리 체계로 디자인과 개발의 간극을 줄이고, 서비스의 확장성을 고려한 실무 최적화를 설계한 프로젝트입니다.",
    tags: ["#사이트 기획", "#지속가능한", "#역량_고도화"],
    summary:
      "효율적인 관리 체계와 확장성 중심의 UX 설계로, 실무에서 바로 적용 가능한 운영 구조를 만든 프로젝트입니다.",
    role: "Role / UX Planning / UI Design / Design System",
    period: "Period / 2025.02 - 2025.05",
    tools: "Tools / Figma, Illustrator, Notion",
    points: [
      "운영 구조에 맞는 화면 설계",
      "확장 가능한 컴포넌트 패턴 정리",
      "기획-디자인 간 커뮤니케이션 비용 축소",
    ],
    visual: (
      <div className="browser-frame">
        <div className="browser-bar"></div>
        <div className="browser-body">
          <div className="browser-hero"></div>
          <div className="browser-widgets">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="browser-list">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    ),
  },
  {
    visualClass: "project-visual-product",
    title: "[PRODUCT DESIGN] GLOBAL AWARD",
    meta: ["2024", "Product", "Concept / CMF"],
    description:
      "새로운 사용 시나리오를 제안하는 제품 디자인으로, 기능성과 경험의 균형을 시각적으로 풀어낸 프로젝트입니다.",
    tags: ["#SPARK_USA", "#도전적인", "#사용자경험"],
    summary:
      "리드줄 카메라 컨셉을 중심으로 새로운 사용 경험을 시각적으로 제안하고, 글로벌 어워드 기준에 맞춘 완성도를 정리한 프로젝트입니다.",
    role: "Role / Product Design / Presentation / CMF",
    period: "Period / 2024.06 - 2024.09",
    tools: "Tools / Rhino, KeyShot, Photoshop",
    points: [
      "핵심 사용 시나리오 도출",
      "제품 형태와 컬러 포인트 설계",
      "어워드 제출용 비주얼 패키지 구성",
    ],
    visual: (
      <>
        <div className="device device-back"></div>
        <div className="device device-front"></div>
        <div className="device-shadow"></div>
      </>
    ),
  },
  {
    visualClass: "project-visual-brand",
    title: "[BRAND DESIGN] Identity System Launch",
    meta: ["2026", "Brand", "Identity / Visual"],
    description:
      "브랜드 메시지를 강한 타이포와 컬러 시스템으로 구조화해, 첫인상부터 방향성이 선명하게 읽히도록 만든 브랜딩 작업입니다.",
    tags: ["#브랜드전략", "#타이포시스템", "#비주얼무드"],
    summary:
      "브랜드의 태도와 메시지가 첫 화면에서 바로 읽히도록, 타이포 중심의 아이덴티티 시스템을 설계한 프로젝트입니다.",
    role: "Role / Branding / Art Direction / Graphic System",
    period: "Period / 2026.01 - 2026.03",
    tools: "Tools / Illustrator, Photoshop, After Effects",
    points: [
      "로고와 타이포 구조 재정의",
      "컬러 체계와 키비주얼 확장",
      "디지털/오프라인 공통 가이드 정리",
    ],
    visual: (
      <div className="poster-stack">
        <div className="poster poster-a"></div>
        <div className="poster poster-b"></div>
        <div className="poster poster-c"></div>
      </div>
    ),
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const animatedItems = document.querySelectorAll(
      ".topbar, .hero-side, .hero-intro, .hero-title, .hero-footer, .info-strip, .profile-section, .projects-section"
    );

    animatedItems.forEach((item, index) => {
      item.setAttribute("data-animate", "");
      item.style.transitionDelay = `${index * 80}ms`;
    });

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedItems.forEach((item) => reveal.observe(item));

    return () => reveal.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <div className="page-shell">
      <header className="topbar">
        <p className="eyebrow">Visual Portfolio / 2026 Edition</p>
        <div className="topbar-meta">
          <span>UI UX</span>
          <span>Brand</span>
          <span>Web</span>
        </div>
      </header>

      <main className="hero">
        <aside className="hero-side hero-side-left">
          <p className="side-label">Based in Seoul</p>
          <p className="side-note">
            감각적인 화면 구성과 명확한 인터랙션으로 브랜드의 첫인상을 설계합니다.
          </p>
        </aside>

        <section className="hero-center">
          <div className="hero-intro">
            <span className="hero-chip">Selected Works</span>
            <span className="hero-chip">Creative Developer</span>
          </div>

          <h1 className="hero-title" aria-label="Portfolio">
            <span className="title-line">
              <span className="letter-block fill-blue" data-shadow="P">
                P
              </span>
              <span className="letter-block fill-blue" data-shadow="O">
                O
              </span>
              <span className="letter-block fill-green" data-shadow="R">
                R
              </span>
              <span className="letter-block fill-yellow" data-shadow="T">
                T
              </span>
            </span>
            <span className="title-line title-line-offset">
              <span className="letter-block fill-yellow" data-shadow="F">
                F
              </span>
              <span className="letter-block fill-pink" data-shadow="O">
                O
              </span>
              <span className="letter-block fill-pink" data-shadow="L">
                L
              </span>
              <span className="letter-block fill-pink" data-shadow="I">
                I
              </span>
              <span className="letter-block fill-pink" data-shadow="O">
                O
              </span>
            </span>
          </h1>

          <div className="hero-footer">
          </div>
        </section>

        <aside className="hero-side hero-side-right">
          <div className="year-stack">
            <span>20</span>
            <span>26</span>
          </div>
          <p className="side-label">Portfolio Opening</p>
          <div className="hero-tags">
            <span>Landing</span>
            <span>Identity</span>
            <span>Motion</span>
          </div>
        </aside>
      </main>

      <section className="info-strip">
        <p>Designer / Developer / Visual Storytelling</p>
        <p>Open for freelance and collaborative projects</p>
      </section>

      <section className="profile-section">
        <div className="section-divider" aria-hidden="true"></div>

        <div className="profile-grid">
          <section className="profile-intro">
            <p className="profile-kicker">About Me</p>
            <h2 className="profile-title">
              데이터를 연결해
              <br />
              AI 서비스로
              <br />
              가치를 만드는
              <br />
              개발자, <strong>이미주</strong>입니다.
            </h2>

            <p className="profile-copy">
              데이터 분석부터 AI 서비스 개발, 백엔드 시스템 구축까지 경험하며 사용자의 문제를
              기술로 해결하는 AI Developer를 목표로 성장하고 있습니다.
            </p>

            <dl className="contact-list">
              <div className="contact-row">
                <dt>Call</dt>
                <dd>010 6334 6529</dd>
              </div>
              <div className="contact-row">
                <dt>Email</dt>
                <dd>dlalwnjenny@naver.com</dd>
              </div>
            </dl>
          </section>

          <div className="profile-details">
            <section className="detail-block">
              <h3>Experience</h3>
              <div className="timeline-list">
                {experiences.map(([title, date]) => (
                  <div className="timeline-row" key={`${title}-${date}`}>
                    <p>{title}</p>
                    <span>{date}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-block">
              <h3>Education</h3>
              <div className="timeline-list">
                {educations.map(([title, date]) => (
                  <div className="timeline-row" key={`${title}-${date}`}>
                    <p>{title}</p>
                    <span>{date}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-block">
              <h3>Skills</h3>
              <p className="skills-line">
                Python, Java, Spring Boot, React, ML/DL, RAG, LLM Agent,
                <br />
                OpenAI API, PostgreSQL, pgvector, Docker, Kubernetes
              </p>
            </section>
          </div>
        </div>

        <div className="section-footer">
          <span>2026 Portfolio</span>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-divider" aria-hidden="true"></div>

        <div className="projects-header">
          <div>
            <p className="profile-kicker">Selected Projects</p>
            <h2 className="projects-title">
              실제 문제를 해결한
              <br />
              AI 프로젝트를
              <br />
              소개합니다.
            </h2>
          </div>
          <p className="projects-copy">
            썸네일, 짧은 설명, 핵심 태그를 묶어서 빠르게 훑어볼 수 있는 섹션입니다. 이후
            실제 이미지와 텍스트만 바꿔서 계속 확장하면 됩니다.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual ${project.visualClass}`}>{project.visual}</div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <div className="project-meta">
                  {project.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button className="project-link" type="button" onClick={() => setSelectedProject(project)}>
                  View Project
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={`project-modal${selectedProject ? " is-open" : ""}`} aria-hidden={selectedProject ? "false" : "true"}>
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}></div>
        <div className="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <button className="project-modal-close" type="button" aria-label="Close" onClick={() => setSelectedProject(null)}>
            ×
          </button>
          <p className="project-modal-kicker">Project Detail</p>
          <h3 id="project-modal-title">{selectedProject?.title}</h3>
          <p className="project-modal-summary">{selectedProject?.summary}</p>
          <div className="project-modal-meta">
            <p className="project-modal-role">{selectedProject?.role}</p>
            <p className="project-modal-period">{selectedProject?.period}</p>
            <p className="project-modal-tools">{selectedProject?.tools}</p>
          </div>
          <ul className="project-modal-points">
            {selectedProject?.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
