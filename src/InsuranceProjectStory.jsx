import React from "react";

function InsuranceFigure({ file, label, title, children, full = false }) {
  const src = `/images/projects/insurance/${file}.png`;
  return <figure className={`record-diagram${full ? " record-diagram-full insurance-architecture" : ""}`}>
    <a href={src} target="_blank" rel="noreferrer" aria-label={`${title} 크게 보기`}><img src={src} alt={title} loading="lazy" /></a>
    <figcaption>{label && <span className="story-eyebrow">{label}</span>}<h6>{title}</h6><p>{children}</p><a href={src} target="_blank" rel="noreferrer">이미지 크게 보기 ↗</a></figcaption>
  </figure>;
}

export default function InsuranceProjectStory({ project }) {
  const stacks = [
    ["Frontend", ["React 19", "TypeScript"], "#317b69"],
    ["Backend · Data", ["Java 17", "Spring Boot", "Spring Data JPA", "PostgreSQL", "pgvector"], "#496e9a"],
    ["AI · RAG", ["LangChain4j", "OpenAI GPT-3.5", "text-embedding-3-small"], "#6254a3"],
    ["Build · Collaboration", ["Gradle", "Git", "GitHub"], "#926537"],
  ];
  return <div className="project-story project-record insurance-record">
    <header className="record-header"><p>질문 의도 분석과 의미 기반 검색을 연결해 상품 안내, 약관 요약, 보험료 계산을 제공하는 RAG 기반 보험 상담 챗봇입니다.</p></header>
    <section className="record-section">
      <h5><span>01</span>프로젝트 개요</h5>
      <dl className="record-facts">
        <div><dt>참여 기간</dt><dd>{project.meta[0]} · 4인 개발팀</dd></div>
        <div><dt>담당 영역</dt><dd>프론트엔드 · 백엔드 API 연동 · 기능별 테스트 · UI 오류 디버깅</dd></div>
        <div><dt>주요 기여</dt><dd>챗봇 응답과 보험 정보 화면 개선, 서버 데이터 반영 로직 구현, 사용자 입력 흐름 개선 및 피드백 반영</dd></div>
        <div><dt>서비스 범위</dt><dd>메리츠화재 종합보험 자료를 활용한 상담 시제품</dd></div>
      </dl>
      <div className="record-tech-panel"><h6>사용 기술</h6><div className="record-stack-groups">{stacks.map(([label, names, color]) => <div key={label}><strong>{label}</strong><div className="stack-badges">{names.map(name => <span className="stack-badge" style={{ "--stack-color": color }} key={name}><span className="stack-badge-label">{name}</span></span>)}</div></div>)}</div></div>
    </section>
    <section className="record-section">
      <h5><span>02</span>문제와 해결 방향</h5>
      <div className="record-purpose-summary"><span className="story-eyebrow">INSURANCE / WHY</span><h6>복잡한 보험 정보를<br />질문하며 이해할 수 있도록</h6><p>보험 상품은 약관과 보장 범위가 복잡하고 전문 용어가 많아 필요한 정보를 찾기 어렵습니다. 사용자 조건을 입력한 뒤 자연어로 질문하면, 관련 보험 정보를 검색하고 상품 안내·약관 요약·보험료 계산으로 이어지는 상담 흐름을 구성했습니다.</p></div>
      <ol className="record-flow">
        <li><strong>동의 · 정보 입력</strong><p>개인정보 동의와 상담에 필요한 조건 입력을 단계별로 진행합니다.</p></li>
        <li><strong>질문 의도 · 검색</strong><p>담보·보험료·약관 등 질문 목적을 파악하고 관련 정보를 의미 기반으로 검색합니다.</p></li>
        <li><strong>응답 · 추가 상담</strong><p>검색 결과를 바탕으로 답변을 제공하고 후속 질문으로 필요한 내용을 확인합니다.</p></li>
      </ol>
    </section>
    <section className="record-section">
      <h5><span>03</span>서비스 아키텍처</h5>
      <InsuranceFigure file="architecture" title="React 상담 화면과 Spring Boot RAG 서비스" full>발표 자료의 시스템 구조입니다. 클라이언트 요청과 세션 검증, 질문 의도 분석, 보험 정보 검색, 프롬프트 구성과 OpenAI 응답 생성을 거쳐 결과를 반환합니다. PostgreSQL·pgvector가 정보 저장과 벡터 검색을 지원합니다.</InsuranceFigure>
      <div className="record-process">
        <article><span className="story-eyebrow">01 / FRONTEND</span><h6>상담 진행 상태와 API 결과 연결</h6><p>React·TypeScript 화면에서 동의·입력·상담 단계를 연결하고, 백엔드가 반환한 답변과 보험 정보를 사용자에게 표시합니다.</p></article>
        <article><span className="story-eyebrow">02 / RAG BACKEND</span><h6>질문에 맞는 정보로 답변 구성</h6><p>Spring Boot 서비스가 질문 의도를 분석하고 pgvector로 관련 정보를 검색합니다. LangChain4j와 OpenAI를 통해 검색 맥락을 반영한 응답을 생성합니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>04</span>핵심 기능</h5>
      <InsuranceFigure file="consent" label="01 / ONBOARDING" title="동의부터 상담까지 단계별 안내">동의·정보 입력·상담 화면을 나누고 현재 단계를 표시합니다. 사용자가 필요한 정보를 순서대로 입력하며 상담을 시작할 수 있도록 구성했습니다.</InsuranceFigure>
      <InsuranceFigure file="chat" label="02 / CHAT" title="자연어로 이어가는 보험 상담">사용자의 질문과 AI 응답을 대화 형태로 보여줍니다. 질문 입력과 응답 표시를 연결하고, 추가 질문으로 상품과 보장 정보를 확인할 수 있습니다.</InsuranceFigure>
      <InsuranceFigure file="recommendation" label="03 / RECOMMENDATION" title="입력 조건을 반영한 상품 안내">연령·성별·질병 이력 등 입력 정보를 바탕으로 관련 상품과 담보 내용을 안내하는 시연 화면입니다. 상품명과 보장 내용을 대화 안에서 확인하도록 표시했습니다.</InsuranceFigure>
      <InsuranceFigure file="terms" label="04 / DOCUMENT SUMMARY" title="긴 약관을 대화 안에서 요약">특정 상품의 약관 페이지를 질문하면 내용을 요약해 제공합니다. 원문과 생성된 요약을 함께 보여주는 발표 자료로, 긴 문서의 정보를 상담 흐름 안에서 확인하는 기능을 담았습니다.</InsuranceFigure>
      <InsuranceFigure file="premium" label="05 / PREMIUM" title="보험료와 적용 조건을 함께 표시">백엔드의 보험료 계산 결과를 월·연간 보험료, 보험기간, 납입기간 등과 함께 보여줍니다. 화면의 금액과 상품 설명은 프로젝트 시연 당시의 예시입니다.</InsuranceFigure>
    </section>
    <section className="record-section">
      <h5><span>05</span>담당 구현과 문제 해결</h5>
      <div className="record-process">
        <article><span className="story-eyebrow">01 / API INTEGRATION</span><h6>응답 데이터와 화면 연결</h6><p>백엔드 API를 연동하고 기능별 테스트를 진행했습니다. 챗봇 응답과 보험 정보가 화면에 반영되는 흐름을 확인하며 UI 오류를 디버깅했습니다.</p></article>
        <article><span className="story-eyebrow">02 / STATE MANAGEMENT</span><h6>이전 값이 남는 표시 문제 개선</h6><p>결과 반영이 늦거나 이전 값이 표시되는 문제에 대응해 상태관리와 비동기 처리 흐름을 개선했습니다. 서버 응답이 현재 화면에 반영되는 로직을 다뤘습니다.</p></article>
        <article><span className="story-eyebrow">03 / USER FLOW</span><h6>입력 단계와 정보 표시 순서 정리</h6><p>복잡한 입력 흐름을 단계별로 나누고, 챗봇 답변과 보험 정보의 표시 순서를 개선했습니다. 사용자 피드백을 반영해 상담 과정의 사용성을 다듬었습니다.</p></article>
        <article><span className="story-eyebrow">04 / TEAM TROUBLESHOOTING</span><h6>검색 정확도와 토큰 제한 대응</h6><p>팀에서는 질문 의도와 다른 응답에 대해 검색 임계값과 프롬프트를 조정했습니다. 긴 프롬프트로 응답이 실패하는 문제는 핵심 정보를 추출해 입력을 줄이는 방식으로 보완했습니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>06</span>프로젝트 성과와 피드백</h5>
      <div className="record-outcomes record-outcomes-compact">
        <article><span className="story-eyebrow">01 / SERVICE FLOW</span><h6>입력부터 상담 결과까지 연결</h6><p>동의·정보 입력·질의응답과 상품 안내·약관 요약·보험료 계산을 하나의 상담 흐름으로 구현했습니다.</p></article>
        <article><span className="story-eyebrow">02 / FRONTEND</span><h6>API 연동과 화면 반영 개선</h6><p>기능별 테스트와 UI 디버깅, 상태관리 개선을 통해 응답 데이터가 사용자 화면에 전달되는 과정을 다듬었습니다.</p></article>
        <article><span className="story-eyebrow">03 / REVIEW</span><h6>실무 활용 가능성에 대한 평가</h6><p>발표 자료에 기록된 참여기업·멘토 피드백에서 시스템 구조와 API 연동, 상담 흐름을 긍정적으로 평가받았습니다. 입력 예외 처리와 반응형 화면은 추가 보완 과제로 남았습니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>07</span>개발을 통해 배운 점</h5>
      <dl className="record-reflection">
        <div><dt>프론트엔드 구현<span>컴포넌트와 데이터 흐름을 함께 보기</span></dt><dd>컴포넌트 구조를 개선하고 API 연동·상태관리를 구현하면서, 서버에서 받은 결과를 적절한 시점에 화면에 보여주는 과정의 중요성을 배웠습니다.</dd></div>
        <div><dt>사용자 경험<span>복잡한 정보를 순서대로 전달하기</span></dt><dd>보험 정보가 많을수록 입력 단계와 표시 순서가 상담 경험에 영향을 줬습니다. 사용자 피드백을 반영하며 기능 구현과 함께 이해하기 쉬운 화면 흐름을 고민했습니다.</dd></div>
        <div><dt>보완 과제<span>다양한 입력과 화면 환경 검증</span></dt><dd>참여기업과 멘토가 제안한 입력 예외 처리, UI 흐름의 직관성, 반응형 디자인을 후속 과제로 정리했습니다. 더 다양한 기기와 상담 시나리오에서 사용 흐름을 검증할 필요가 있습니다.</dd></div>
      </dl>
    </section>
  </div>;
}
