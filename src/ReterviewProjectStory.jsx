import React from "react";

const features = [
  ["space.png", "01 / SPACE", "회사와 직무별로 면접 준비를 한곳에", "회사·직무·경력과 JD·이력서를 바탕으로 Space를 만듭니다. 문서에서 추출한 텍스트를 질문 생성용 맥락으로 정리하고, 사용자별로 준비 기록을 관리합니다."],
  ["interview.png", "02 / INTERVIEW", "질문을 듣고, 말로 답하는 면접", "면접관 유형에 맞는 질문을 음성으로 전달하고, 마이크로 받은 답변을 텍스트로 변환합니다. 직전 답변을 바탕으로 꼬리질문을 생성하며 시선·반응·표정 등 비언어 지표도 함께 기록합니다."],
  ["report.png", "03 / REPORT", "답변과 비언어 지표를 함께 돌아보기", "면접 전체 답변과 행동 지표를 리포트로 정리합니다. 강점·약점과 보완 방향을 확인하고, 결과를 PDF로 저장해 복습에 활용할 수 있습니다."],
  ["history.png", "04 / RETRY", "이전 피드백을 다음 면접의 질문으로", "최신 리포트에서 보완할 부분을 추려 재면접 질문에 반영합니다. 같은 Space에서 면접 유형과 회차 이력을 연결하고, 이전·현재 리포트를 비교합니다."],
];

export default function ReterviewProjectStory({ project }) {
  const stacks = [
    ["Backend · Auth", ["Spring Boot", "Supabase Auth"], "#46736a"],
    ["AI · Voice", ["OpenAI API", "Whisper-1", "gpt-4o-mini-tts", "Web Speech API"], "#6c5ab0"],
    ["Browser · Analysis", ["Webcam / Mic API", "Behavior Metrics", "PDF Export"], "#496c99"],
  ];
  return <div className="project-story project-record reterview-record">
    <header className="record-header"><p>질문 생성부터 음성 면접, 피드백, 재면접까지 연결하는 반복 면접 훈련 서비스, RE:TERVIEW입니다.</p></header>

    <section className="record-section">
      <h5><span>01</span>프로젝트 개요</h5>
      <dl className="record-facts">
        <div><dt>참여 기간</dt><dd>{project.meta[0]}</dd></div>
        <div><dt>담당 영역</dt><dd>음성·비언어 기능</dd></div>
        <div><dt>서비스</dt><dd>회사·직무별 맞춤 질문, 음성 면접, 답변·행동 분석 리포트와 약점 기반 재면접</dd></div>
        <div><dt>서비스 링크</dt><dd><a href="https://reterview.vercel.app" target="_blank" rel="noreferrer">RE:TERVIEW 방문하기 ↗</a></dd></div>
      </dl>
      <a className="reterview-demo-link" href="https://canva.link/hd60e8m2adhs8pp" target="_blank" rel="noopener noreferrer" aria-label="시연 영상 보기 — Canva, 새 탭에서 열기">
        <span aria-hidden="true">▶</span> 시연 영상 보기 <span className="reterview-demo-provider">Canva ↗</span>
      </a>
      <div className="record-tech-panel"><h6>사용 기술</h6><div className="record-stack-groups">
        {stacks.map(([label, names, color]) => <div key={label}><strong>{label}</strong><div className="stack-badges">{names.map(name => <span className="stack-badge" style={{ "--stack-color": color }} key={name}><span className="stack-badge-label">{name}</span></span>)}</div></div>)}
      </div></div>
    </section>

    <section className="record-section">
      <h5><span>02</span>문제와 해결 방향</h5>
      <div className="record-purpose-summary"><span className="story-eyebrow">RE:TERVIEW / WHY</span><h6>연습한 답변을 돌아보고,<br />부족한 부분을 다시 연습하도록</h6><p>면접을 반복해도 답변의 강점과 약점을 스스로 파악하기 어렵고, 회사·직무별 기록도 흩어지기 쉽습니다. RE:TERVIEW는 준비 자료를 Space로 모으고, 면접 리포트를 다음 연습의 질문으로 연결해 복습이 이어지는 흐름을 만들었습니다.</p></div>
      <ul className="record-requirements reterview-needs">
        <li><span>01</span><div><strong>준비 기록 관리</strong><p>회사·직무별 Space 안에서 문서와 면접 이력을 연결</p></div></li>
        <li><span>02</span><div><strong>맥락 있는 질문</strong><p>JD·이력서·직전 답변을 반영한 질문과 꼬리질문</p></div></li>
        <li><span>03</span><div><strong>구체적인 피드백</strong><p>답변 내용과 비언어 신호를 함께 분석한 리포트</p></div></li>
        <li><span>04</span><div><strong>약점 중심 재면접</strong><p>이전 리포트의 보완점을 반영하고 회차별 결과 비교</p></div></li>
      </ul>
    </section>

    <section className="record-section">
      <h5><span>03</span>주요 화면과 서비스 흐름</h5>
      {features.map(([file, label, title, description]) => <figure className="record-diagram reterview-feature" key={file}>
        <a href={`/images/projects/reterview/${file}`} target="_blank" rel="noreferrer" aria-label={`${title} 화면 크게 보기`}><img src={`/images/projects/reterview/${file}`} alt={title} loading="lazy" /></a>
        <figcaption><span className="story-eyebrow">{label}</span><h6>{title}</h6><p>{description}</p><a href={`/images/projects/reterview/${file}`} target="_blank" rel="noreferrer">화면 크게 보기 ↗</a></figcaption>
      </figure>)}
      <p className="record-context">추가 기능으로 서비스 이용을 안내하는 챗봇, 책갈피, AI Space 요약과 보관·활성 관리 기능을 구성했습니다.</p>
    </section>

    <section className="record-section">
      <h5><span>04</span>음성·비언어 기능과 문제 해결</h5>
      <ol className="record-flow">
        <li><strong>음성 입출력</strong><p>Web Speech API·Whisper-1로 음성을 텍스트로 변환하고, gpt-4o-mini-tts로 질문을 음성으로 전달합니다.</p></li>
        <li><strong>행동 지표 수집</strong><p>웹캠·마이크 입력과 시선·반응·표정 지표를 면접 세션에 연결해 리포트에 활용합니다.</p></li>
        <li><strong>예외 상황 대응</strong><p>카메라·마이크 권한 요청, STT 실패 시 대체 처리와 인식 신뢰도 저장을 고려했습니다.</p></li>
      </ol>
      <div className="record-purpose-summary"><span className="story-eyebrow">TROUBLESHOOTING / TTS</span><h6>새 질문에 이전 음성이 재생되던 문제</h6><p>질문 텍스트가 먼저 갱신되고 새 TTS 음성이 아직 로드되지 않은 시점에 이전 음성이 재생됐습니다. 새로운 TTS 요청 전에 기존 오디오 데이터를 초기화하도록 수정해, 질문 전환 시 텍스트와 음성이 어긋나는 문제를 해결했습니다.</p></div>
      <h6>서비스 차원의 회차 관리 개선</h6><p className="record-context">모든 과거 회차에서 재면접을 시작할 수 있으면 기준 리포트가 모호해졌습니다. Spring Boot에서 생성 시각을 기준으로 최신 회차를 선택하도록 제한해, 보완할 면접과 비교 대상이 명확해지도록 했습니다.</p>
    </section>

    <section className="record-section">
      <h5><span>05</span>프로젝트 성과</h5>
      <div className="record-outcomes record-outcomes-compact">
        <article><span className="story-eyebrow">01 / EXPERIENCE</span><h6>음성으로 이어지는 면접</h6><p>질문 재생·음성 답변·비언어 지표를 면접 흐름에 연결했습니다.</p></article>
        <article><span className="story-eyebrow">02 / STABILITY</span><h6>질문 전환 오류 개선</h6><p>기존 오디오 초기화로 질문과 재생 음성이 어긋나던 문제를 해결했습니다.</p></article>
        <article><span className="story-eyebrow">03 / LEARNING</span><h6>피드백에서 재면접까지</h6><p>팀 서비스에서 리포트와 약점 중심 질문을 연결해 반복 훈련을 지원했습니다.</p></article>
      </div>
    </section>

    <section className="record-section">
      <h5><span>06</span>사용자 피드백과 개선 방향</h5>
      <dl className="record-reflection">
        <div><dt>좋았던 점<span>회사·직무별 관리와 복습</span></dt><dd>자료에 담긴 사용자 후기는 Space별 기록 관리, 면접 직후 강점·약점을 정리한 리포트, 약점 기반 재면접을 장점으로 꼽았습니다.</dd></div>
        <div><dt>아쉬웠던 점<span>처음 사용하는 과정의 복잡함</span></dt><dd>기능이 많아 처음에는 어렵고, 같은 회사·직무로 새 면접을 준비할 때 Space를 새로 만들어야 하는 점이 번거롭다는 의견이 있었습니다.</dd></div>
        <div><dt>다음 개선 방향<span>준비 과정과 재사용 흐름 단순화</span></dt><dd>초기 사용 안내와 기존 Space 재사용 흐름을 개선 과제로 정리할 수 있습니다. 반복 훈련의 장점을 유지하면서 면접 준비에 필요한 단계를 줄이는 방향입니다.</dd></div>
      </dl>
    </section>
  </div>;
}
