import React from "react";

function SkagFigure({ file, label, title, children, full = false }) {
  const src = `/images/projects/skag/${file}`;
  return <figure className={`record-diagram${full ? " record-diagram-full skag-architecture" : ""}`}>
    <a href={src} target="_blank" rel="noreferrer" aria-label={`${title} 크게 보기`}><img src={src} alt={title} loading="lazy" /></a>
    <figcaption>{label && <span className="story-eyebrow">{label}</span>}<h6>{title}</h6><p>{children}</p><a href={src} target="_blank" rel="noreferrer">이미지 크게 보기 ↗</a></figcaption>
  </figure>;
}

export default function SkagProjectStory({ project }) {
  const stacks = [
    ["Backend · API", ["Python", "FastAPI", "NAVER 뉴스 API"], "#317b69"],
    ["RAG · AI", ["LangChain", "FAISS", "GPT-4o-mini", "Document Chunking"], "#6254a3"],
    ["Data · Messaging", ["Polling", "MQTT", "paho-mqtt", "비동기 Task"], "#496e9a"],
    ["Collaboration", ["Git", "GitHub"], "#926537"],
  ];
  return <div className="project-story project-record skag-record">
    <header className="record-header"><p>내부 생산공정 로그와 외부 산업 뉴스를 함께 검색해, 공정 이상과 공급망 리스크에 대한 판단을 돕는 제조 의사결정 RAG 프로젝트입니다.</p></header>
    <section className="record-section">
      <h5><span>01</span>프로젝트 개요</h5>
      <dl className="record-facts">
        <div><dt>참여 기간</dt><dd>{project.meta[0]} · SKALA 프로젝트 · 4인 팀</dd></div>
        <div><dt>담당 영역</dt><dd>웹 검색 실시간 갱신 · RAG 청킹</dd></div>
        <div><dt>핵심 데이터</dt><dd>MES 공정 로그 · 키워드 기반 산업 뉴스 · 검색에 활용할 문서 메타데이터</dd></div>
        <div><dt>프로젝트 목적</dt><dd>생산 관리자가 내부 공정 정보와 외부 이슈를 따로 찾는 과정을 줄이고, 자연어 질문으로 관련 맥락과 대응 후보를 확인하도록 구성했습니다.</dd></div>
      </dl>
      <div className="record-tech-panel"><h6>사용 기술</h6><div className="record-stack-groups">{stacks.map(([label, names, color]) => <div key={label}><strong>{label}</strong><div className="stack-badges">{names.map(name => <span className="stack-badge" style={{ "--stack-color": color }} key={name}><span className="stack-badge-label">{name}</span></span>)}</div></div>)}</div></div>
    </section>
    <section className="record-section">
      <h5><span>02</span>문제와 해결 방향</h5>
      <div className="record-purpose-summary"><span className="story-eyebrow">SKAG / WHY</span><h6>공정 안의 변화와<br />공정 밖의 리스크를 함께 보기</h6><p>생산 이상을 검토하려면 공정 로그뿐 아니라 원자재·물류·규제와 같은 외부 정보도 확인해야 합니다. SKAG는 분산된 정보를 검색 가능한 문서로 연결하고, 질문에 관련된 자료를 바탕으로 답변을 생성해 관리자의 검토를 돕는 방향으로 설계했습니다.</p></div>
      <ol className="record-flow">
        <li><strong>수집 · 갱신</strong><p>새 공정 로그와 키워드 뉴스를 확인하고 검색 데이터에 반영합니다.</p></li>
        <li><strong>검색 · 맥락 구성</strong><p>질문과 유사한 문서를 찾아 내부 공정 정보와 외부 이슈를 연결합니다.</p></li>
        <li><strong>답변 · 검토</strong><p>LLM이 관련 정보를 정리하고, 사용자가 원인 후보와 대응 방안을 검토합니다.</p></li>
      </ol>
    </section>
    <section className="record-section">
      <h5><span>03</span>서비스 아키텍처</h5>
      <SkagFigure file="architecture.png" title="수집부터 검색·응답까지 연결한 RAG 구조" full>발표 자료의 전체 설계도입니다. 데이터 수집, 저장소, RAG Engine, API·사용자 화면으로 구성되며, 시연 구현에서는 공정 로그와 뉴스를 FAISS에 저장하고 검색한 컨텍스트를 GPT-4o-mini에 전달했습니다.</SkagFigure>
      <div className="record-process">
        <article><span className="story-eyebrow">01 / INTERNAL DATA</span><h6>새 공정 로그를 검색 데이터로</h6><p>마지막으로 처리한 ID와 새 log_id를 비교해 추가 로그를 확인하고, 벡터 저장소에 반영하는 자동 동기화를 구성했습니다.</p></article>
        <article><span className="story-eyebrow">02 / EXTERNAL DATA</span><h6>뉴스 폴링과 이벤트 발행</h6><p>네이버 뉴스 API를 주기적으로 조회하고, 새로 확인한 뉴스만 MQTT로 발행하는 구조를 사용했습니다. 외부 API 조회는 폴링이며 이벤트 전달을 MQTT로 분리했습니다.</p></article>
      </div>
      <p className="record-context">내부·외부 데이터 분리와 단계별 답변 생성은 설계 방향이며, Confidence Score는 후속 확장 항목으로 정리했습니다.</p>
    </section>
    <section className="record-section">
      <h5><span>04</span>핵심 기능</h5>
      <SkagFigure file="dashboard.png" label="01 / MONITORING" title="수집 상태와 질의를 한 화면에서">모니터링 시작·중단, 수동 업데이트, 벡터 DB 문서 수, 수집 통계와 오류 로그를 확인합니다. 같은 화면에서 RAG 질의를 입력해 수집된 데이터를 활용합니다.</SkagFigure>
      <SkagFigure file="answer.png" label="02 / RAG QUERY" title="공정 질문에 관련 로그를 연결">비용이 많이 발생하는 공정과 해결 방법을 묻는 시연 화면입니다. 검색된 공정 로그를 바탕으로 반복 실패와 관련 파라미터를 요약하고 조치 후보를 제시합니다. 생성된 제안은 원인 확정이 아닌 검토 자료로 활용합니다.</SkagFigure>
      <SkagFigure file="news-result.png" label="03 / NEWS COLLECTION" title="수집을 중단하고 결과 확인">실행 중인 모니터링을 task_id로 관리하고, 중단 요청 시 태스크를 취소합니다. 수집한 기사 수와 제목 목록을 반환해 결과를 확인할 수 있도록 했습니다.</SkagFigure>
    </section>
    <section className="record-section">
      <h5><span>05</span>담당 구현과 트러블슈팅</h5>
      <div className="record-process">
        <article><span className="story-eyebrow">01 / CHUNKING</span><h6>본문과 출처 정보를 함께 유지</h6><p>청킹 이후 제목이 N/A로 표시되는 문제를 확인했습니다. Document에 본문과 함께 title·link·pubDate·keyword 메타데이터를 저장해, 검색 문서의 출처 정보를 유지하도록 보완했습니다.</p></article>
        <article><span className="story-eyebrow">02 / DEDUPLICATION</span><h6>같은 뉴스의 반복 발행 방지</h6><p>중복 확인용 집합이 호출마다 초기화되면서 같은 기사가 다시 발행됐습니다. 제목·링크 기반 해시를 유지하고 task_id별로 관리해 모니터링 세션별 중복 확인을 이어가도록 정리했습니다.</p></article>
        <article><span className="story-eyebrow">03 / INPUT VALIDATION</span><h6>기간 입력과 수집 실패 처리</h6><p>시작일·종료일을 검증하고 잘못된 범위에는 400 응답을 반환하도록 했습니다. 외부 API 실패는 HTTPException으로 처리하고, 예외 분기에서 초기화되지 않은 items를 참조하는 문제도 보완했습니다.</p></article>
        <article><span className="story-eyebrow">04 / TASK CONTROL</span><h6>계속 실행되는 작업에 중단 경로 추가</h6><p>실행 중인 태스크를 TASKS에 저장하고 /monitor-news-stop에서 취소하도록 구성했습니다. 중단 시 누적 수집 결과를 반환해 실행 상태와 결과를 함께 확인할 수 있게 했습니다.</p></article>
      </div>
      <h6>팀 단위로 해결한 검색·연동 문제</h6>
      <p className="record-context">DB에 정보가 있어도 “지식 베이스에 답이 없습니다”라고 응답하는 문제는 도메인 프롬프트와 유사도 검색·필터링을 조정하며 개선했습니다. 내부 DB 동기화와 NAVER API의 TLS 오류, MQTT 클라이언트 버전 문제도 역할을 나누어 대응했습니다.</p>
    </section>
    <section className="record-section">
      <h5><span>06</span>프로젝트 성과</h5>
      <div className="record-outcomes record-outcomes-compact">
        <article><span className="story-eyebrow">01 / INTEGRATION</span><h6>수집 → 검색 → 답변 연결</h6><p>공정 로그와 외부 뉴스를 벡터 검색에 활용하고, 자연어 질문으로 관련 정보를 확인하는 시연 흐름을 구현했습니다.</p></article>
        <article><span className="story-eyebrow">02 / DATA QUALITY</span><h6>중복과 메타데이터 누락 보완</h6><p>뉴스 중복 발행과 제목 누락 문제를 수정하고, 갱신되는 자료가 검색에 쓰일 수 있도록 데이터 처리 흐름을 보완했습니다.</p></article>
        <article><span className="story-eyebrow">03 / OPERABILITY</span><h6>실행·중단·결과 확인</h6><p>수집 작업의 생명주기를 관리하고 오류 응답과 수집 결과를 확인하는 경로를 추가했습니다.</p></article>
      </div>
      <p className="record-context">대응 시간 단축과 불량률·비용 감소는 프로젝트의 기대효과로 제시했습니다. 발표 자료에는 이를 실측한 정량 결과가 없어 구현 결과와 구분했습니다.</p>
    </section>
    <section className="record-section">
      <h5><span>07</span>개발을 통해 배운 점</h5>
      <dl className="record-reflection">
        <div><dt>데이터 갱신<span>검색 품질은 수집 단계부터</span></dt><dd>문서를 벡터화하는 것뿐 아니라 새 정보를 언제 반영하고, 중복과 메타데이터를 어떻게 관리하는지가 중요했습니다. 웹 검색 갱신과 청킹을 연결하면서 RAG의 데이터 처리 과정을 구체적으로 다뤘습니다.</dd></div>
        <div><dt>예외 처리<span>실행 이후의 상태까지 관리하기</span></dt><dd>반복 수집에서는 외부 API 실패, 잘못된 입력, 상태 초기화가 전체 흐름에 영향을 줬습니다. 중단과 결과 반환까지 구현하면서 계속 실행되는 작업의 상태 관리 필요성을 확인했습니다.</dd></div>
        <div><dt>다음 단계<span>답변 근거와 검증 체계 보강</span></dt><dd>정보가 있어도 답하지 않는 문제와 근거를 넘어서는 제안을 함께 살펴야 합니다. 후속 단계에서는 검색 품질과 답변의 근거 충실도를 평가하고, 내부·외부 정보의 처리 경계를 검증하는 체계를 보강할 필요가 있습니다.</dd></div>
      </dl>
    </section>
  </div>;
}
