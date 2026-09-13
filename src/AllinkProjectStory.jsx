import React from "react";

const screens = [
  ["landing.jpg", "01 / WORKSPACE", "팀의 작업을 시작하는 공간", "홈 화면에서 워크스페이스를 만들고 목록을 확인합니다. 공유 링크를 통해 팀원이 같은 작업 공간에 참여할 수 있습니다."],
  ["workspace.jpg", "02 / CANVAS", "화이트보드와 AI를 한 화면에", "텍스트·이미지·도형·자유 드로잉으로 아이디어를 정리하면서, 오른쪽 AI 패널에서 업로드 문서를 바탕으로 질문합니다."],
  ["collaboration.png", "03 / COLLABORATION", "함께 편집하고 결과를 다시 활용", "실시간 커서로 팀원의 작업 위치를 확인하고 같은 캔버스를 함께 편집합니다. AI 응답을 템플릿과 캔버스 콘텐츠로 연결해 아이디어를 구체화합니다."],
];

export default function AllinkProjectStory({ project }) {
  const stacks = [
    ["Frontend", ["Vue 3", "TypeScript", "Vite", "Pinia", "Konva.js"], "#317b69"],
    ["Collaboration", ["Yjs", "CRDT", "WebSocket", "Node.js"], "#6254a3"],
    ["AI · Backend", ["Java 17", "Spring Boot", "LangChain4j", "OpenAI API", "MiniLM"], "#496e9a"],
    ["Auth · Deployment", ["Firebase Auth", "Vercel", "Railway"], "#926537"],
  ];
  return <div className="project-story project-record allink-record">
    <header className="record-header"><p>실시간 공동 편집과 문서 기반 AI를 한 공간에 연결한 협업 워크스페이스, 올링크입니다.</p></header>
    <section className="record-section">
      <h5><span>01</span>프로젝트 개요</h5>
      <dl className="record-facts">
        <div><dt>참여 기간</dt><dd>{project.meta[0]} · SKALA Mini Project · 4인 팀</dd></div>
        <div><dt>담당 영역</dt><dd>협업 인터페이스 구현 · 실시간 편집·동기화 기능 개발</dd></div>
        <div><dt>주요 기여</dt><dd>홈·워크스페이스 UI 및 API 연동, 캔버스 편집과 동기화 예외 처리, 음성 채팅·배포 환경 연동 안정화</dd></div>
      </dl>
      <div className="record-tech-panel"><h6>사용 기술</h6><div className="record-stack-groups">{stacks.map(([label, names, color]) => <div key={label}><strong>{label}</strong><div className="stack-badges">{names.map(name => <span className="stack-badge" style={{ "--stack-color": color }} key={name}><span className="stack-badge-label">{name}</span></span>)}</div></div>)}</div></div>
    </section>
    <section className="record-section">
      <h5><span>02</span>문제와 해결 방향</h5>
      <div className="record-purpose-summary"><span className="story-eyebrow">ALLINK / WHY</span><h6>함께 만든 아이디어가<br />실행과 결과물로 이어지도록</h6><p>회의 기록, 참고 문서, 아이디어가 여러 도구에 흩어지면 정리와 실행이 분리됩니다. 올링크는 실시간 화이트보드와 문서 기반 AI를 연결해, 팀이 자료를 참고하고 아이디어를 구체화하는 과정을 한 공간에 모았습니다.</p></div>
      <ol className="record-flow">
        <li><strong>실시간 협업</strong><p>같은 캔버스에서 동시에 편집하고 팀원의 커서와 변경 내용을 공유합니다.</p></li>
        <li><strong>아이디어 구조화</strong><p>문서 맥락을 참고한 AI 답변을 템플릿과 캔버스 콘텐츠로 활용합니다.</p></li>
        <li><strong>결과물 활용</strong><p>요소를 정리·잠금 처리하고 캔버스 내용을 DOCX 리포트로 내보냅니다.</p></li>
      </ol>
    </section>
    <section className="record-section">
      <h5><span>03</span>주요 화면</h5>
      {screens.map(([file, label, title, description]) => <figure className="record-diagram" key={file}>
        <a href={`/images/projects/allink/${file}`} target="_blank" rel="noreferrer" aria-label={`${title} 크게 보기`}><img src={`/images/projects/allink/${file}`} alt={title} loading="lazy" /></a>
        <figcaption><span className="story-eyebrow">{label}</span><h6>{title}</h6><p>{description}</p><a href={`/images/projects/allink/${file}`} target="_blank" rel="noreferrer">화면 크게 보기 ↗</a></figcaption>
      </figure>)}
    </section>
    <section className="record-section">
      <h5><span>04</span>서비스 구조</h5>
      <div className="allink-system" aria-label="프론트엔드에서 실시간 협업 서버와 AI 서버로 분리되는 구조">
        <div className="allink-system-client"><span className="story-eyebrow">FRONTEND</span><h6>Vue 3 · Konva · Firebase Auth</h6><p>워크스페이스 UI · 캔버스 · 사용자 인증</p></div>
        <div className="allink-system-branches">
          <div><span className="story-eyebrow">↕ WEBSOCKET</span><h6>Node.js · Yjs</h6><p>공유 캔버스 상태와 사용자 커서 동기화</p></div>
          <div><span className="story-eyebrow">↕ REST API</span><h6>Spring Boot · LangChain4j</h6><p>문서 파싱 → 청킹 → MiniLM 임베딩 → 워크스페이스별 벡터 검색 → OpenAI 응답</p></div>
        </div>
      </div>
      <p className="record-context">워크스페이스마다 독립된 인메모리 벡터 저장소로 검색 범위를 구분합니다. RAG는 검색한 문서 내용을 답변의 맥락으로 제공하는 방식이며, 모델 자체를 재학습하는 과정과는 구분됩니다.</p>
      <h6>배포 환경</h6><p className="record-context">Vercel과 Railway를 이용한 자동 배포 구조에서 프론트엔드·WebSocket·AI API를 연결했습니다.</p>
    </section>
    <section className="record-section">
      <h5><span>05</span>담당 구현과 안정화</h5>
      <div className="record-process">
        <article><span className="story-eyebrow">01 / INTERFACE</span><h6>화면을 서버 데이터와 연결</h6><p>홈 화면과 워크스페이스 목록을 개선하고, 조회 API를 연결해 서버 기반 목록 흐름을 구현했습니다.</p></article>
        <article><span className="story-eyebrow">02 / SYNC</span><h6>로컬 상태와 공유 상태 관리</h6><p>Yjs 데이터 손상과 localStorage 동기화 오류에 대한 예외 처리를 보완하고, 실시간 편집의 안정성을 다듬었습니다.</p></article>
        <article><span className="story-eyebrow">03 / CANVAS</span><h6>편집 기능과 렌더링 개선</h6><p>요소 크기 조절·잠금과 해제·이미지 업로드·리포트 생성을 구현했습니다. 드로잉 이벤트와 잠금 로직을 최적화했습니다.</p></article>
        <article><span className="story-eyebrow">04 / CONNECTION</span><h6>운영 환경에서의 연결 안정화</h6><p>음성 채팅 WebSocket 연결과 CORS·URL·포트 설정을 정리해 서로 다른 배포 환경의 서비스 연동을 보완했습니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>06</span>프로젝트 성과</h5>
      <div className="record-outcomes record-outcomes-compact">
        <article><span className="story-eyebrow">01 / COLLABORATION</span><h6>함께 편집하는 작업 공간</h6><p>협업 인터페이스와 실시간 동기화를 연결해 팀원이 같은 캔버스에서 작업하도록 구현했습니다.</p></article>
        <article><span className="story-eyebrow">02 / WORKFLOW</span><h6>편집에서 결과물까지</h6><p>요소 편집·이미지 업로드·잠금·리포트 생성으로 결과물 정리와 활용을 지원했습니다.</p></article>
        <article><span className="story-eyebrow">03 / STABILITY</span><h6>상태와 연결 오류 대응</h6><p>공유 상태의 예외 처리와 배포 환경 연동을 보완해 협업 흐름의 안정성을 개선했습니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>07</span>개발을 통해 배운 점</h5>
      <dl className="record-reflection">
        <div><dt>공유 상태<span>여러 사용자의 편집을 함께 다루기</span></dt><dd>CRDT 기반 협업에서는 로컬 상태와 공유 상태의 일관성을 함께 고려해야 했습니다. 동기화 오류에 대응하며 실시간 편집의 상태 관리 방식을 익혔습니다.</dd></div>
        <div><dt>캔버스 성능<span>빈번한 입력과 렌더링 관리</span></dt><dd>드로잉과 요소 편집 과정에서 발생하는 이벤트와 렌더링 병목을 다루며, 사용자 조작이 많은 화면의 성능을 개선하는 경험을 쌓았습니다.</dd></div>
        <div><dt>서비스 연동<span>배포 이후에도 이어지는 연결</span></dt><dd>프론트엔드·WebSocket·AI API를 서로 다른 배포 환경에서 연결하면서, 기능 구현과 함께 운영 환경의 연결 설정도 중요하다는 점을 배웠습니다.</dd></div>
      </dl>
    </section>
  </div>;
}
