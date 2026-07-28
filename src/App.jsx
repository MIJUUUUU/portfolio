import React, { useEffect, useState } from "react";

const experiences = [
  // ["리포트 기반 AI 면접 훈련 서비스 개발", "2026. 04"],
  // ["SK 근태관리 이상 패턴 자동 탐지 시스템 개발", "2025. 11"],
  // ["AI 웹서비스 협업 도구 프로젝트", "2025.10"],
  // ["RAG 기반 영어 회화 에이전트 프로젝트", "2025. 10"],
  // ["제조 결함 데이터 분석 프로젝트", "2025. 10"],
  // ["스마트 제조 의사결정 프로젝트", "2025. 09"],
  ["대한의용생체공학회 논문 게재 · 특허출원", "2025. 08"],
  ["2025 청년 일경험 지원사업 참여", "2025. 05"],
  ["데이터베이스 조교", "2025. 03"],
  ["Murfy AI 서포터즈", "2025. 02"],
  ["학부연구생 (Data Intelligence Lab)", "2024. 11"],
  ["대구용호초등학교 IT 교육", "2024. 03"],

  // ["보험 약관 요약 및 추천 시스템 개발", "2024. 09"],
];

const educations = [
  ["대구가톨릭대학교 졸업", "2026. 02"],
  ["성광여자고등학교 졸업", "2022. 02"],
];

const projects = [
  {
    slug: "attendance-anomaly-detection",
    title: "근태관리 이상 패턴 자동 탐지 시스템",
    englishTitle: "Attendance Anomaly Detection System",
    badge: "대표 프로젝트",
    featured: true,
    meta: ["2025", "AI", "Backend", "Data"],
    description:
      "Rule-Based와 Isolation Forest를 활용하여 1,000만 건 규모의 근태 데이터를 분석하고 이상 패턴 탐지 시스템을 개발했습니다.",
    tags: ["#SpringBoot", "#PostgreSQL", "#IsolationForest", "#Docker"],
    organization: "SK AX",
    thumbnail: "/images/projects/attendance-ai.png",
  },
  {
    slug: "meeting-mind",
    title: "AI 협업 웹서비스",
    englishTitle: "MeetingMind · AI Collaboration Platform",
    badge: "최종 프로젝트",
    featured: true,
    meta: ["2025", "LLM", "RAG", "STT", "AI Agent"],
    description:
      "STT, RAG, LLM을 활용하여 회의 내용을 검색하고 프로젝트 지식을 축적하는 AI 협업 플랫폼입니다.",
    tags: ["#LLM", "#RAG", "#OpenAI", "#React"],
    thumbnail: "/images/projects/meetingmind.png",
  },
  {
    slug: "smart-manufacturing-rag",
    title: "스마트 제조 의사결정 RAG",
    englishTitle: "Smart Manufacturing Decision RAG",
    featured: true,
    meta: ["2025", "Manufacturing AI", "RAG", "Vector DB"],
    description:
      "제조 데이터와 외부 문서를 통합하여 의사결정을 지원하는 RAG 기반 AI 시스템입니다.",
    tags: ["#RAG", "#VectorDB", "#Python", "#PostgreSQL"],
    thumbnail: "/images/projects/factory-rag.png",
  },
  {
    slug: "insurance-policy-ai",
    title: "보험 약관 요약 및 추천 시스템",
    englishTitle: "Insurance Policy Summary & Recommendation",
    meta: ["2024", "NLP", "Recommendation"],
    description:
      "복잡한 보험 약관을 이해하기 쉽게 요약하고 사용자에게 적합한 상품 탐색을 지원하는 AI 시스템입니다.",
    tags: ["#NLP", "#Recommendation", "#Python"],
  },
  {
    slug: "english-conversation-agent",
    title: "영어 회화 AI Agent",
    englishTitle: "English Conversation AI Agent",
    meta: ["2025", "AI Agent", "RAG"],
    description:
      "사용자와 자연스럽게 대화하고 학습 맥락에 맞는 피드백을 제공하는 영어 회화 에이전트입니다.",
    tags: ["#AIAgent", "#RAG", "#LLM"],
  },
  {
    slug: "manufacturing-defect-analysis",
    title: "제조 결함 데이터 분석",
    englishTitle: "Manufacturing Defect Data Analysis",
    meta: ["2025", "Data Analysis", "Manufacturing"],
    description:
      "제조 공정 데이터를 분석해 결함 발생 요인과 패턴을 탐색한 데이터 분석 프로젝트입니다.",
    tags: ["#DataAnalysis", "#Python", "#Manufacturing"],
  },
  {
    slug: "ai-interview-training",
    title: "AI 면접 훈련 서비스",
    englishTitle: "AI Interview Training Service",
    meta: ["2026", "AI", "Service"],
    description:
      "면접 응답을 분석하고 개인화된 리포트와 피드백을 제공하는 AI 기반 면접 훈련 서비스입니다.",
    tags: ["#AI", "#Report", "#WebService"],
  },
  {
    slug: "emg-gait-classification",
    title: "EMG 보행 상태 분류",
    englishTitle: "EMG-based Gait State Classification",
    badge: "논문",
    meta: ["2025", "Research", "ML/DL"],
    description:
      "EMG 신호를 기반으로 보행 상태를 분류하고 성능을 검증한 연구 프로젝트입니다.",
    tags: ["#EMG", "#Classification", "#Research"],
  },
];

function AttendanceProjectDetail({ project, onBack }) {
  const dataSources = [
    "HR 기록",
    "GATE 출입 기록",
    "VDI 접속 기록",
    "OT 초과근무",
    "업무차량 이용내역",
    "비용정산 내역",
    "주 근무지 정보",
    "퇴직금 전환 정보",
  ];

  return (
    <main className="attendance-case">
      <header className="case-nav">
        <button type="button" onClick={onBack}>
          ← All Projects
        </button>
        <span>SKALA · UpGr8</span>
      </header>

      <section className="attendance-hero">
        <div className="attendance-hero-copy">
          <p className="case-kicker">AI · Backend · Data</p>
          <h1>
            이상 근태 탐지
            <br />
            솔루션 <em>SKALE</em>
          </h1>
          <p className="attendance-hero-subtitle">
            SK Attendance Learning &amp; Evaluation
            <br />
            지능형 이상 근태 탐지 솔루션
          </p>

          <dl className="case-facts">
            <div>
              <dt>Period</dt>
              <dd>2025. 11</dd>
            </div>
            <div>
              <dt>Project</dt>
              <dd>SKALA UpGr8 · Team Project</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Vue 3 · Spring Boot · FastAPI · PostgreSQL</dd>
            </div>
            <div>
              <dt>AI</dt>
              <dd>Isolation Forest · Autoencoder · Qwen3</dd>
            </div>
          </dl>
        </div>

        <div className="attendance-hero-visual">
          <img
            src={project.thumbnail}
            alt="SKALE 근태 이상 탐지 대시보드"
          />
        </div>
      </section>

      <section className="case-section case-intro">
        <div className="case-section-number">01</div>
        <div className="case-section-heading">
          <p>Overview</p>
          <h2>
            흩어진 근태 데이터를 연결해
            <br />
            이상 징후를 먼저 발견합니다.
          </h2>
        </div>
        <div className="case-lead">
          <p>
            기업의 근태 데이터는 출퇴근 기록뿐 아니라 VDI, 출입, 초과근무,
            비용정산 등 여러 시스템에 분산되어 있습니다. SKALE은 이 데이터를
            하나의 흐름으로 통합하고, 규칙 기반 탐지와 AI 분석을 결합해 사람이
            놓치기 쉬운 복합 패턴까지 탐색하는 프로젝트입니다.
          </p>
        </div>
      </section>

      <section className="case-dark-section">
        <div className="case-section-number">02</div>
        <div className="case-section-heading">
          <p>Problem</p>
          <h2>
            데이터는 분산되어 있고,
            <br />
            같은 오탐은 반복됐습니다.
          </h2>
        </div>

        <div className="data-source-cloud">
          {dataSources.map((source) => (
            <span key={source}>{source}</span>
          ))}
        </div>

        <div className="problem-flow">
          <article>
            <strong>01</strong>
            <h3>이상 데이터 탐지</h3>
            <p>규칙에 따라 특정 데이터가 이상으로 분류됩니다.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>관리자 정상 처리</h3>
            <p>소명 절차 이후 실제 정상 데이터로 수정됩니다.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>동일 패턴 재발생</h3>
            <p>피드백이 반영되지 않아 같은 패턴이 다시 이상으로 탐지됩니다.</p>
          </article>
        </div>
      </section>

      <section className="case-section case-solution">
        <div className="case-section-number">03</div>
        <div className="case-section-heading">
          <p>Solution</p>
          <h2>
            통합 · 탐지 · 피드백을
            <br />
            하나의 루프로 설계했습니다.
          </h2>
        </div>

        <div className="solution-grid">
          <article>
            <span>01</span>
            <h3>통합 데이터 플랫폼</h3>
            <p>
              CSV와 Excel로 흩어져 있던 근태·출입·VDI 데이터를 PostgreSQL
              기반의 일관된 구조로 통합합니다.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Hybrid Detection</h3>
            <p>
              Soft Rule, Isolation Forest, Autoencoder를 조합해 정적 규칙과
              잠재 패턴을 함께 탐지합니다.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Open-Weight LLM</h3>
            <p>
              민감한 사내 데이터를 외부로 보내지 않고 Qwen3 기반으로 리포트와
              인사이트를 생성합니다.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Feedback Loop</h3>
            <p>
              관리자의 오탐·정탐 판단을 다시 학습 데이터로 연결해 반복되는
              오탐을 줄이는 구조입니다.
            </p>
          </article>
        </div>
      </section>

      <section className="case-architecture">
        <div className="case-section-number">04</div>
        <div className="case-section-heading">
          <p>Architecture</p>
          <h2>4-Tier System Architecture</h2>
        </div>

        <div className="architecture-flow" aria-label="시스템 아키텍처">
          <article>
            <span>01</span>
            <p>Client</p>
            <strong>Web Browser</strong>
          </article>
          <i>→</i>
          <article>
            <span>02</span>
            <p>Presentation</p>
            <strong>Vue 3 SPA</strong>
          </article>
          <i>→</i>
          <article>
            <span>03</span>
            <p>Backend</p>
            <strong>Spring Boot 3.x</strong>
          </article>
          <i>→</i>
          <article>
            <span>04</span>
            <p>AI &amp; Data</p>
            <strong>FastAPI · PostgreSQL</strong>
          </article>
        </div>

        <div className="architecture-notes">
          <p>근태 API · 이상 탐지 API · HR 통계 · 리포트 API</p>
          <p>AI 모델 게이트웨이 · LLM 게이트웨이 · JPA Repository</p>
        </div>
      </section>

      <section className="case-pipeline">
        <div className="case-section-number">05</div>
        <div className="case-section-heading">
          <p>AI Pipeline</p>
          <h2>
            세 가지 관점의 탐지 결과를
            <br />
            하나의 위험 점수로 통합합니다.
          </h2>
        </div>

        <div className="pipeline-row">
          <article>
            <span>Step 01</span>
            <h3>Data Engineering</h3>
            <p>HR · Gate · VDI 수집</p>
            <p>ID와 날짜 표준화</p>
            <p>9개 수치형 특징 추출</p>
          </article>
          <b>→</b>
          <article>
            <span>Step 02</span>
            <h3>3-Tier Detection</h3>
            <p>Autoencoder 복원 오차</p>
            <p>Isolation Forest 이상치</p>
            <p>Soft Rule 위반 스캔</p>
          </article>
          <b>→</b>
          <article>
            <span>Step 03</span>
            <h3>Scoring</h3>
            <p>가중치 50 : 30 : 20</p>
            <p>0–100 위험 점수</p>
            <p>Rule / AI 임계값 태깅</p>
          </article>
          <b>→</b>
          <article>
            <span>Step 04</span>
            <h3>MLOps Loop</h3>
            <p>관리자 검토</p>
            <p>오탐·정탐 피드백</p>
            <p>자동 재학습</p>
          </article>
        </div>
      </section>

      <section className="case-outcome">
        <div>
          <p className="case-kicker">Expected Outcome</p>
          <h2>
            반복 업무는 줄이고,
            <br />
            판단의 근거는 선명하게.
          </h2>
        </div>
        <div className="outcome-list">
          <p>
            <span>01</span> 여러 형식의 사내 데이터를 하나의 서비스에서 관리
          </p>
          <p>
            <span>02</span> 규칙으로 찾기 어려운 장기·비정상 패턴 자동 탐색
          </p>
          <p>
            <span>03</span> 관리자 피드백을 반영해 반복 오탐 지속 개선
          </p>
          <p>
            <span>04</span> 리포트와 인사이트를 통한 빠른 의사결정 지원
          </p>
        </div>
      </section>
    </main>
  );
}

function ProjectDetail({ project, onBack }) {
  if (project.slug === "attendance-anomaly-detection") {
    return <AttendanceProjectDetail project={project} onBack={onBack} />;
  }

  return (
    <main className="project-detail-page">
      <header className="project-detail-nav">
        <button type="button" onClick={onBack}>
          ← All Projects
        </button>
        <span>Project / {project.meta[0]}</span>
      </header>

      <section className="project-detail-hero">
        <div>
          <p className="profile-kicker">
            {project.badge || "Selected Project"}
          </p>
          <h1>{project.title}</h1>
          <p className="project-detail-english">{project.englishTitle}</p>
        </div>
        <div className="project-detail-meta">
          {project.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <div
        className={`project-detail-thumbnail${project.thumbnail ? " has-image" : ""}`}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} 프로젝트 대표 이미지`}
          />
        ) : (
          <span>Project thumbnail</span>
        )}
      </div>

      <section className="project-detail-content">
        <p className="project-detail-label">Overview</p>
        <p className="project-detail-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-detail-placeholder">
          <span>Problem</span>
          <span>Design & Architecture</span>
          <span>Implementation</span>
          <span>Results</span>
        </div>
      </section>
    </main>
  );
}

function App() {
  const getProjectFromPath = () => {
    const slug = window.location.pathname.match(
      /^\/projects\/([^/]+)\/?$/,
    )?.[1];
    return projects.find((project) => project.slug === slug) || null;
  };
  const [selectedProject, setSelectedProject] = useState(getProjectFromPath);

  useEffect(() => {
    const animatedItems = document.querySelectorAll(
      ".topbar, .hero-side, .hero-intro, .hero-title, .hero-footer, .info-strip, .profile-section, .projects-section",
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
      { threshold: 0.2 },
    );

    animatedItems.forEach((item) => reveal.observe(item));

    return () => reveal.disconnect();
  }, []);

  useEffect(() => {
    const handlePopState = () => setSelectedProject(getProjectFromPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openProject = (project) => {
    window.history.pushState({}, "", `/projects/${project.slug}`);
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const closeProject = () => {
    window.history.pushState({}, "", "/");
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={closeProject} />;
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <p className="eyebrow">Miju's Portfolio/ 2026 Edition</p>
        <div className="topbar-meta"></div>
      </header>

      <main className="hero">
        <aside className="hero-side hero-side-left"></aside>

        <section className="hero-center">
          <div className="hero-intro">
            <span className="hero-chip">Selected Works</span>
            <span className="hero-chip">AI Service Developer</span>
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

          <div className="hero-footer"></div>
        </section>

        <aside className="hero-side hero-side-right">
          <div className="year-stack">
            <span>20</span>
            <span>26</span>
          </div>
          <div className="hero-tags">
            <span>Landing</span>
            <span>Identity</span>
            <span>Motion</span>
          </div>
        </aside>
      </main>

      <section className="info-strip">
        <p>DATA / AI SERVICES / AI ENGINEER</p>
        <p>BUILDING AI FOR REAL-WORLD IMPACT</p>
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
              데이터 분석부터 AI 서비스 개발, 백엔드 시스템 구축까지 경험하며
              사용자의 문제를 기술로 해결하는 AI Developer를 목표로 성장하고
              있습니다.
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
              <h3>Main Skills</h3>
              <p className="skills-line">
                Python, Java, Spring Boot, React,
                <br />
                Machine Learning, RAG, PostgreSQL, Docker, Kubernetes
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
            각 프로젝트의
            <br />
            문제 정의부터
            <br />
            <br />
            설계, 구현,
            <br />
            기술 스택,
            <br />
            성과까지
            <br />
            <br />
            확인할 수 있습니다.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card${project.featured ? " is-featured" : ""}`}
              key={project.slug}
              tabIndex="0"
              role="link"
              onClick={() => openProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProject(project);
                }
              }}
            >
              <div
                className={`project-visual${project.thumbnail ? " has-image" : " project-visual-empty"}`}
              >
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} 프로젝트 썸네일`}
                  />
                ) : (
                  <span>Thumbnail</span>
                )}
              </div>
              <div className="project-body">
                <div className="project-card-labels">
                  {project.badge && <span>{project.badge}</span>}
                  {project.organization && <span>{project.organization}</span>}
                </div>
                <h3>{project.title}</h3>
                <p className="project-english-title">{project.englishTitle}</p>
                <div className="project-meta">
                  {project.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <button
                  className="project-link"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openProject(project);
                  }}
                >
                  View Project
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
