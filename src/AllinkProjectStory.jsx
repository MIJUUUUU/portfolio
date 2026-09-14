import React from "react";

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
      <a className="reterview-demo-link" href="https://canva.link/hjtgpfb8eg5h1dv" target="_blank" rel="noopener noreferrer" aria-label="올링크 시연 영상 보기 — Canva, 새 탭에서 열기"><span aria-hidden="true">▶</span> 시연 영상 보기 <span className="reterview-demo-provider">Canva ↗</span></a>
      <div className="record-tech-panel"><h6>사용 기술</h6><div className="record-stack-groups">{stacks.map(([label, names, color]) => <div key={label}><strong>{label}</strong><div className="stack-badges">{names.map(name => <span className="stack-badge" style={{ "--stack-color": color }} key={name}><span className="stack-badge-label">{name}</span></span>)}</div></div>)}</div></div>
    </section>
    <section className="record-section">
      <h5><span>02</span>문제와 해결 방향</h5>
      <div className="record-purpose-summary"><span className="story-eyebrow">ALLINK / WHY</span><h6>함께 만든 아이디어가<br />실행과 결과물로 이어지도록</h6><p>회의 기록, 참고 문서, 아이디어가 여러 도구에 흩어지면 정리와 실행이 분리됩니다. 올링크는 실시간 화이트보드와 문서 기반 AI를 연결해, 팀이 자료를 참고하고 아이디어를 구체화하는 과정을 한 공간에 모았습니다.</p></div>
      <ol className="record-flow">
        <li><strong>실시간 협업</strong><p>마이크로 팀원과 실시간 대화하면서 같은 캔버스를 함께 편집합니다.</p></li>
        <li><strong>아이디어 구조화</strong><p>문서 맥락을 참고한 AI 답변을 템플릿과 캔버스 콘텐츠로 활용합니다.</p></li>
        <li><strong>결과물 활용</strong><p>요소를 정리·잠금 처리하고 캔버스 내용을 DOCX 리포트로 내보냅니다.</p></li>
      </ol>
    </section>
    <section className="record-section">
      <h5><span>03</span>서비스 아키텍처</h5>
      <figure className="record-diagram record-diagram-full">
        <a href="/images/projects/allink/architecture.png" target="_blank" rel="noreferrer" aria-label="올링크 아키텍처 크게 보기"><img src="/images/projects/allink/architecture.png" alt="문서 입력과 RAG 처리를 실시간 협업·AI 생성·결과물 관리로 연결하는 올링크 아키텍처" loading="lazy" /></a>
        <figcaption><strong>문서에서 AI 응답, 공동 편집과 결과물까지</strong><p>프로젝트 발표 자료의 설계도입니다. 문서 처리와 검색, 공유 캔버스 상태가 세 가지 핵심 서비스로 연결되는 전체 흐름을 보여줍니다.</p><a href="/images/projects/allink/architecture.png" target="_blank" rel="noreferrer">아키텍처 크게 보기 ↗</a></figcaption>
      </figure>
      <p className="record-context">구현 코드에서는 Spring Boot·LangChain4j, MiniLM과 워크스페이스별 인메모리 벡터 저장소를 사용합니다. 그림의 파서·임베딩·저장소 기술 표기는 설계 단계의 구성으로, 현재 구현과 차이가 있습니다.</p>
      <h6>배포 환경</h6><p className="record-context">Vercel과 Railway의 자동 배포 환경에서 프론트엔드·WebSocket·AI API를 연결했습니다.</p>
    </section>
    <section className="record-section">
      <h5><span>04</span>핵심 기능</h5>
      {[
        ["landing.jpg", "01 / WORKSPACE", "팀의 작업을 시작하는 공간", "홈 화면에서 워크스페이스를 만들고 목록을 확인합니다. 공유 링크를 통해 팀원이 같은 작업 공간에 참여할 수 있습니다."],
        ["workspace.jpg", "02 / CANVAS", "화이트보드와 AI를 한 화면에", "텍스트·이미지·도형·자유 드로잉으로 아이디어를 정리하면서, 오른쪽 AI 패널에서 업로드 문서를 바탕으로 질문합니다."],
        ["collaboration.png", "03 / COLLABORATION", "말하면서 함께 편집하는 공간", "마이크를 연결해 팀원과 실시간으로 대화하면서 같은 화이트보드를 함께 편집할 수 있습니다. 실시간 커서로 작업 위치를 확인하고 AI 응답을 캔버스 콘텐츠로 연결합니다."],
      ].map(([file, label, title, description]) => <figure className="record-diagram" key={file}>
        <a href={`/images/projects/allink/${file}`} target="_blank" rel="noreferrer" aria-label={`${title} 크게 보기`}><img src={`/images/projects/allink/${file}`} alt={title} loading="lazy" /></a>
        <figcaption><span className="story-eyebrow">{label}</span><h6>{title}</h6><p>{description}</p><a href={`/images/projects/allink/${file}`} target="_blank" rel="noreferrer">화면 크게 보기 ↗</a></figcaption>
      </figure>)}
      {[
        ["voice-chat.jpg", "01 / LIVE COLLABORATION", "말하면서 함께 편집", "마이크를 연결해 팀원과 실시간으로 대화하면서 같은 화이트보드를 함께 편집할 수 있습니다. 팀원의 커서와 변경 내용도 실시간으로 공유합니다.", "음성 채팅 참여자 3명과 마이크 상태, 공동 편집 중인 화이트보드"],
        ["shared-canvas.jpg", "02 / SHARED CANVAS", "아이디어를 자유롭게 표현", "텍스트·도형·이미지·자유 드로잉을 같은 캔버스에 배치합니다. 요소 크기 조절과 잠금·해제로 팀의 작업을 정리합니다.", "색상과 드로잉 도구를 열고 이미지와 손글씨를 함께 배치한 공유 캔버스"],
      ].map(([file, label, title, description, alt]) => <figure className="record-diagram" key={file}>
        <a href={`/images/projects/allink/${file}`} target="_blank" rel="noreferrer" aria-label={`${title} 크게 보기`}><img src={`/images/projects/allink/${file}`} alt={alt} width="1920" height="1046" loading="lazy" /></a>
        <figcaption><span className="story-eyebrow">{label}</span><h6>{title}</h6><p>{description}</p><a href={`/images/projects/allink/${file}`} target="_blank" rel="noreferrer">화면 크게 보기 ↗</a></figcaption>
      </figure>)}
      <div className="record-process">
        <article><span className="story-eyebrow">03 / DOCUMENT AI</span><h6>자료를 참고하는 AI 어시스턴트</h6><p>업로드한 문서를 검색해 질문에 필요한 맥락을 제공하고, AI 답변을 템플릿과 캔버스 콘텐츠로 연결합니다.</p></article>
        <article><span className="story-eyebrow">04 / OUTPUT</span><h6>협업 결과를 문서로</h6><p>아이디어와 생성 결과를 한곳에 정리하고, 캔버스 내용을 DOCX 리포트로 내보내 후속 작업에 활용합니다.</p></article>
      </div>
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
        <article><span className="story-eyebrow">01 / COLLABORATION</span><h6>함께 편집하는 작업 공간</h6><p>음성 채팅과 실시간 동기화를 연결해 팀원이 대화하며 같은 캔버스에서 작업하도록 구현했습니다.</p></article>
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
