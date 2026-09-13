import React from "react";

function ProjectDiagram({ src, title, children, fullWidth = false }) {
  return (
    <figure className={`record-diagram${fullWidth ? " record-diagram-full" : ""}`}>
      <a href={src} target="_blank" rel="noreferrer" aria-label={`${title} 원본 이미지 새 탭에서 보기`}>
        <img src={src} alt={title} loading="lazy" />
      </a>
      <figcaption><strong>{title}</strong><p>{children}</p><a href={src} target="_blank" rel="noreferrer">원본 크게 보기 ↗</a></figcaption>
    </figure>
  );
}

const stackAppearance = {
  "Vue 3": ["#237a57", "V", "vue.png"],
  "TypeScript": ["#2865aa", "TS"],
  "Vite": ["#7542c8", "V"],
  "Pinia": ["#946214", "P"],
  "Spring Boot": ["#467e20", "S", "springboot.png"],
  "FastAPI": ["#087f73", "F"],
  "PostgreSQL": ["#336791", "PG", "postgre.png"],
  "scikit-learn": ["#aa5b12", "sk"],
  "TensorFlow": ["#b75512", "TF"],
  "Isolation Forest": ["#387b54", "IF"],
  "AutoEncoder": ["#7652a3", "AE"],
  "Qwen 2.5": ["#6550b7", "Q"],
  "FAISS": ["#3564a0", "F"],
  "Docker": ["#176db1", "D", "docker.png"],
  "Docker Compose": ["#176db1", "D", "docker.png"],
  "Kubernetes": ["#325fc1", "K", "kube.png"],
  "GitHub Actions": ["#2864ae", "GH"],
  "Harbor": ["#24778a", "H"],
  "Kustomize": ["#355e9b", "K"],
  "Argo CD": ["#b75436", "A", "argo.png"],
  "모델 평가": ["#42726d", "✓"],
  "모델 버전 관리": ["#68619f", "v"],
  "재학습 파이프라인": ["#976520", "↻"],
  "배포 · 롤백": ["#3c708b", "⇄"],
};

function StackBadge({ name }) {
  const [color, initials, logo] = stackAppearance[name];
  return (
    <span className="stack-badge" style={{ "--stack-color": color }}>
      <span className="stack-badge-icon" aria-hidden="true">
        {logo ? <img src={`/images/projects/${logo}`} alt="" loading="lazy" /> : initials}
      </span>
      <span className="stack-badge-label">{name}</span>
    </span>
  );
}

function AttendanceStory({ project }) {
  const stacks = [
    ["Frontend", ["Vue 3", "TypeScript", "Vite", "Pinia"]],
    ["Backend · Data", ["Spring Boot", "FastAPI", "PostgreSQL"]],
    ["AI · ML", ["scikit-learn", "TensorFlow", "Isolation Forest", "AutoEncoder", "Qwen 2.5", "FAISS"]],
    ["Infra · CI/CD", ["Docker", "Docker Compose", "Kubernetes", "GitHub Actions", "Harbor", "Kustomize", "Argo CD"]],
    ["MLOps", ["모델 평가", "모델 버전 관리", "재학습 파이프라인", "배포 · 롤백"]],
  ];
  const process = [
    ["데이터 수집과 전처리", "HR·VDI·출입 기록과 OT·차량·비용정산 자료를 분석에 활용할 수 있도록 데이터 수집·EDA·특성 공학에 공동 참여했습니다.", "11.21–12.03 · EDA 리포트, 전처리 스크립트 및 피처셋"],
    ["업로드와 규칙 기반 탐지", "엑셀 업로드에서 DB 저장으로 이어지는 처리와 기본 규칙 기반 탐지 엔진 개발을 공동 담당했습니다.", "11.21–11.28 · 데이터 업로드 처리, 규칙 기반 엔진"],
    ["화면 구현과 API 연동", "Vue 기반 화면 구현과 API 연동을 담당하고, UI 컴포넌트·사용자 인터랙션 개발에 공동 참여했습니다. 반응형 UI도 적용했습니다.", "11.21–12.10 · 화면 구현, API 연동 및 인터랙션"],
    ["AI 모델 개발과 평가", "전처리한 데이터를 바탕으로 이상 탐지·패턴 분석 모델 개발과 평가에 공동 참여했습니다.", "12.05–12.09 · 모델 학습 코드 및 결과 리포트"],
    ["통합 검증과 사용 문서", "프론트엔드·백엔드·AI 통합 테스트에 참여하고, 사용자 매뉴얼 작성과 검수를 담당했습니다.", "12.15–12.18 · 통합 테스트 및 사용자 매뉴얼"],
  ];
  return (
    <div className="project-story project-record">
      <header className="record-header">
        <span className="story-eyebrow">SKALE / PROJECT NOTES</span>
        <h4>SK AX 근태관리 이상 패턴 탐지</h4>
        <p>분산된 근태 데이터를 통합하고, 규칙 기반 탐지와 AI 분석으로 반복·복합 이상 패턴을 확인하는 시스템</p>
      </header>

      <section className="record-section">
        <h5><span>01</span>프로젝트 개요</h5>
        <dl className="record-facts">
          <div><dt>참여 기간</dt><dd>2025.11–2025.12 · 5인 팀 프로젝트</dd></div>
          <div><dt>담당 업무</dt><dd>화면 구현·API 연동 / 데이터 전처리·AI 모델 개발 공동 참여 / 업로드·규칙 기반 탐지 공동 개발</dd></div>
        </dl>
        <div className="record-tech-panel">
          <h6>사용 기술</h6>
          <div className="record-stack-groups">{stacks.map(([label, items]) => (
            <div key={label}><strong>{label}</strong><div className="stack-badges">{items.map(item => <StackBadge key={item} name={item} />)}</div></div>
          ))}</div>
        </div>
      </section>

      <section className="record-section record-purpose">
        <h5><span>02</span>프로젝트 목적과 현업 요구</h5>
        <div className="record-purpose-summary">
          <span className="story-eyebrow">SK AX · 윤리경영2팀</span>
          <h6>숨은 이상 패턴을 찾고,<br />담당자의 판단을 다시 학습으로</h6>
          <p>{project.overview}</p>
        </div>
        <h6 className="record-subheading">현업의 네 가지 요구사항</h6>
        <ul className="record-requirements">
          <li><span>01</span><div><strong>이상 패턴 자동 탐지</strong><p>수작업으로 찾기 어려운 통계적 이상치와 숨은 패턴 탐지</p></div></li>
          <li><span>02</span><div><strong>이상 징후 알림</strong><p>이상 징후가 발생하면 담당자가 확인할 수 있도록 알림 제공</p></div></li>
          <li><span>03</span><div><strong>피드백과 태깅</strong><p>실제 문제와 오탐을 구분한 사용자 판단을 학습에 반영</p></div></li>
          <li><span>04</span><div><strong>로컬 실행 환경</strong><p>내부 데이터를 활용해 로컬에서 이용 가능한 형태로 제공</p></div></li>
        </ul>
      </section>

      <section className="record-section">
        <h5><span>03</span>서비스 흐름과 시스템 설계</h5>
        <h6>데이터에서 운영자 판단까지</h6>
        <ol className="record-flow">
          <li><strong>데이터 관리</strong><p>HR·VDI·출입·OT·차량·비용정산 파일을 업로드하고 사번·부서·기간으로 조회합니다.</p></li>
          <li><strong>패턴 분석</strong><p>규칙 기반 탐지와 Isolation Forest·AutoEncoder 분석으로 이상 패턴을 확인합니다.</p></li>
          <li><strong>상세 검토</strong><p>직원별 RuleBase / AI 모드, 근무 추이, 이상 내역을 살펴보고 부서별 리스크를 비교합니다.</p></li>
        </ol>
        <p className="record-context">원천 근태 기록, 통합 학습 데이터, 모델 이력, 개인·부서 분석 결과를 구분해 저장하는 구조입니다. 대시보드는 마지막 동기화 시점의 데이터를 보여줍니다.</p>
        <h6>서비스 아키텍처</h6>
        <ProjectDiagram fullWidth src="/images/projects/skale-architecture.png" title="Vue · Spring Boot · FastAPI 기반 서비스 구조">
          Vue 화면의 요청을 Spring Boot가 처리하고, FastAPI에 이상 탐지 분석을 요청하는 구조입니다. 데이터 저장과 분석 결과 조회, 리포트 생성의 연결을 보여주는 팀 설계 산출물입니다.
        </ProjectDiagram>
        <h6>CI/CD · MLOps</h6>
        <ProjectDiagram src="/images/projects/skale-mlops.png" title="모델 평가에서 재학습·배포까지">
          모델 재학습 후 성능을 평가하고, 평가 결과에 따라 배포 또는 롤백으로 이어지도록 설계한 흐름입니다. GitHub Actions와 Argo CD를 연결하는 배포 구조, FastAPI 모델 서빙과 리포트 생성 구성을 함께 보여줍니다.
        </ProjectDiagram>
        <h6>물리 ERD</h6>
        <ProjectDiagram src="/images/projects/skale-erd-blurred.png" title="사원 중심의 근태 데이터와 분석 결과 관계">
          사원 정보를 중심으로 근태·VDI·출입 기록을 연결하고, 통합 근태 데이터와 모델 이력, 개인·부서 분석 결과를 구분합니다. 팀 공통 데이터 구조입니다.
        </ProjectDiagram>
      </section>

      <section className="record-section">
        <h5><span>04</span>개발 프로세스</h5>
        <div className="record-work-layout">
        <figure className="story-media"><img src="/images/projects/근태.png" alt="SKALE 근태 대시보드: 전체 직원 수, 이상 유형별 탐지 현황과 월별 통계" loading="lazy" /><figcaption>구현 화면 · SKALE 근태 대시보드</figcaption></figure>
        <div className="record-process">{process.map(([title, reason, work], index) => (
          <article key={title}>
            <span className="story-eyebrow">STEP {String(index + 1).padStart(2, "0")}</span>
            <h6>{title}</h6><p>{reason}</p><p className="record-support">{work}</p>
          </article>
        ))}</div>
        </div>
      </section>

      <section className="record-section">
        <h5><span>05</span>프로젝트 성과</h5>
        <div className="record-outcomes record-outcomes-compact">
          <article>
            <span className="story-eyebrow">01 / DATA</span>
            <h6>데이터를 분석 기반으로</h6>
            <p>근태 데이터 전처리부터 업로드·규칙 탐지·AI 모델 평가까지 공동 참여했습니다.</p>
          </article>
          <article>
            <span className="story-eyebrow">02 / SERVICE</span>
            <h6>분석 결과를 사용자 화면으로</h6>
            <p>Vue 화면 구현과 API 연동을 담당해 근태 기록과 이상 내역을 조회하는 흐름을 연결했습니다.</p>
          </article>
          <article>
            <span className="story-eyebrow">03 / DELIVERY</span>
            <h6>검증과 사용 안내까지</h6>
            <p>반응형 UI·사용자 매뉴얼을 담당하고, 프론트엔드·백엔드·AI 통합 테스트에 참여했습니다.</p>
          </article>
        </div>
      </section>

      <section className="record-section">
        <h5><span>06</span>프로젝트 전체 회고</h5>
        <dl className="record-reflection">
          <div>
            <dt>실제 데이터<span>현업의 데이터를 직접 분석한 경험</span></dt>
            <dd>SK AX 내부의 대량 데이터를 활용해 분석하고 서비스를 개발한 점이 가장 의미 있었습니다. 실제 업무에서 쌓인 데이터를 직접 탐색하고 전처리하며, 분석 결과가 현업의 근태 관리 문제와 어떻게 연결되는지 경험할 수 있었습니다.</dd>
          </div>
          <div>
            <dt>서비스 구현<span>MLOps·AIOps까지 연결한 경험</span></dt>
            <dd>모델 개발과 분석 결과를 화면에 연결하고, MLOps·AIOps를 포함한 실제 서비스를 구현해본 점도 좋았습니다. 모델의 학습·평가뿐 아니라 재학습과 배포, 운영 중 결과를 확인하는 흐름까지 함께 고려하며 AI 서비스를 바라보는 시야를 넓혔습니다.</dd>
          </div>
          <div>
            <dt>아쉬움과 다음 단계<span>이상 패턴을 설명하는 요인을 더 깊이 탐색하기</span></dt>
            <dd>이상 패턴에 영향을 주는 요인을 더 다양하게 찾아보고 싶었지만, 충분히 탐색하지 못한 아쉬움이 남습니다. 다음에는 여러 데이터 간의 관계와 업무 맥락을 더 깊이 분석해, 어떤 요인이 이상 판단에 영향을 주는지 설명할 수 있는 근거를 보강하고 싶습니다.</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}

export default function ProjectStory({ project }) {
  if (project.slug === "attendance-anomaly-detection") return <AttendanceStory project={project} />;
  const sections = [
    ["01", "PROBLEM", "어떤 문제에서 시작했나요?", project.problem],
    ["02", "APPROACH", "이렇게 설계했습니다.", project.architecture],
    ["03", "MY WORK", "제가 구현한 부분입니다.", project.implementation],
    ["04", "OUTCOME", "이런 변화를 만들었습니다.", project.results],
  ];
  return (
    <div className="project-story">
      <div className="story-intro">
        <span className="story-eyebrow">PROJECT OVERVIEW</span>
        <h4>{project.description}</h4>
        <p>{project.overview}</p>
        <div className="story-tags">{project.tags.map(tag => <span key={tag}>{tag.replace(/^#/, "")}</span>)}</div>
        <span className="story-scroll">SCROLL TO EXPLORE ↓</span>
      </div>
      {sections.map(([number, label, title, items]) => (
        <section className="story-chapter" key={number}>
          <header className="story-heading">
            <span className="story-eyebrow">{number} / {label}</span>
            <h4>{title}</h4>
          </header>
          <div className="story-body">
            <ol>{items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
            {number === "03" && project.thumbnail && (
              <figure className="story-media"><img src={project.thumbnail} alt={`${project.title} 서비스 화면`} loading="lazy" /><figcaption>{project.englishTitle}</figcaption></figure>
            )}
          </div>
        </section>
      ))}
      <div className="story-end"><span>{project.englishTitle}</span><span>END OF PROJECT ↗</span></div>
    </div>
  );
}
