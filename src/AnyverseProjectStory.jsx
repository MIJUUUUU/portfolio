import React from "react";

const asset = (file) => `/images/projects/anyverse/${file}`;

function ProjectFigure({ file, title, description, label, full = false, compact = false }) {
  return <figure className={`record-diagram${full ? " record-diagram-full" : ""}${compact ? " anyverse-architecture" : ""}`}>
    <a href={asset(file)} target="_blank" rel="noreferrer" aria-label={`${title} 크게 보기`}>
      <img src={asset(file)} alt={title} loading="lazy" />
    </a>
    <figcaption>{label && <span className="story-eyebrow">{label}</span>}<h6>{title}</h6><p>{description}</p><a href={asset(file)} target="_blank" rel="noreferrer">이미지 크게 보기 ↗</a></figcaption>
  </figure>;
}

export default function AnyverseProjectStory({ project }) {
  const stacks = [
    ["AI · Speech", ["WhisperX", "STT / TTS", "OpenAI API"], "#6254a3"],
    ["RAG · Data", ["Python", "Chroma DB", "SQLite", "도메인 용어사전"], "#317b69"],
    ["Evaluation", ["BLEU", "COMET", "STS", "Precision / Recall", "Faithfulness"], "#496e9a"],
  ];
  return <div className="project-story project-record anyverse-record">
    <header className="record-header"><p>실시간 통번역에서 업무 영어 학습, 회의 기반 보고서 생성까지 연결하는 AI 커뮤니케이션 에이전트, AnyVerse입니다.</p></header>
    <section className="record-section">
      <h5><span>01</span>프로젝트 개요</h5>
      <dl className="record-facts">
        <div><dt>참여 기간</dt><dd>{project.meta[0]} · SKALA Mini Project · 4인 팀</dd></div>
        <div><dt>담당 영역</dt><dd>보고서 생성 에이전트 · RAG 및 챗봇 구현 · 프론트엔드</dd></div>
        <div><dt>프로젝트 목적</dt><dd>회의의 전문 용어와 맥락을 이해하고, 회의 후 학습과 보고서 작성에도 같은 데이터를 활용하는 서비스를 구현했습니다.</dd></div>
      </dl>
      <div className="record-tech-panel"><h6>사용 기술 · 평가 도구</h6><div className="record-stack-groups">{stacks.map(([label, names, color]) => <div key={label}><strong>{label}</strong><div className="stack-badges">{names.map(name => <span className="stack-badge" style={{ "--stack-color": color }} key={name}><span className="stack-badge-label">{name}</span></span>)}</div></div>)}</div></div>
    </section>
    <section className="record-section">
      <h5><span>02</span>문제와 해결 방향</h5>
      <div className="record-purpose-summary"><span className="story-eyebrow">ANYVERSE / WHY</span><h6>회의에서 이해한 내용을<br />학습과 업무에 이어가기</h6><p>해외 협업에서는 전문 용어와 표현의 차이로 회의 맥락을 놓치기 쉽습니다. 통역을 듣더라도 회의가 끝난 뒤 기록을 다시 정리하고, 필요한 업무 표현을 따로 학습해야 했습니다. AnyVerse는 도메인 용어를 반영한 통번역과 영어 회화 교육, 회의 기반 보고서 작성을 하나의 흐름으로 연결했습니다.</p></div>
      <ol className="record-flow">
        <li><strong>이해 · 통번역</strong><p>용어사전 기반 RAG로 기술 용어의 번역 일관성을 높입니다.</p></li>
        <li><strong>학습 · 영어 회화</strong><p>업무 맥락과 학습 수준에 맞춰 표현을 연습하고 피드백을 받습니다.</p></li>
        <li><strong>실행 · 보고서</strong><p>회의 로그와 번역 결과를 검색·요약해 보고서와 후속 업무에 활용합니다.</p></li>
      </ol>
    </section>
    <section className="record-section">
      <h5><span>03</span>서비스 아키텍처</h5>
      <ProjectFigure file="architecture.png" compact title="세 가지 에이전트가 회의 데이터를 함께 활용하는 구조" description="발표 자료의 전체 서비스 설계도입니다. 회의 음성·영상을 입력받아 통번역, 회화 학습, 보고서 생성으로 처리 경로를 나누고, RAG와 LLM을 통해 각 서비스에 필요한 맥락을 연결합니다." full />
      <div className="record-process">
        <article><span className="story-eyebrow">01 / RETRIEVAL</span><h6>회의 맥락을 찾는 RAG</h6><p>전문 용어와 회의 내용을 검색해 번역·질문 응답·보고서 생성의 근거로 활용합니다. 벡터 저장소는 Chroma DB, 일반 데이터 저장에는 SQLite를 선택했습니다.</p></article>
        <article><span className="story-eyebrow">02 / GENERATION</span><h6>목적에 따라 나눈 생성 흐름</h6><p>통번역은 의미 전달, 회화는 교정과 학습, 보고서는 회의 내용의 요약에 초점을 맞췄습니다. 각 파이프라인의 결과를 별도 지표로 평가했습니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>04</span>핵심 기능</h5>
      <ProjectFigure file="translation.png" label="01 / TRANSLATION" title="기술 용어의 맥락을 반영한 통번역" description="WhisperX 음성 인식과 용어사전 기반 RAG를 연결해 발화자별 실시간 번역과 자막을 제공합니다. 일반적인 번역에서 달라지기 쉬운 기술 용어를 일관된 표현으로 전달합니다." />
      <ProjectFigure file="conversation.png" label="02 / CONVERSATION" title="실제 업무 표현으로 연습하는 영어 회화" description="산업·직무별 맥락을 반영한 대화와 난이도별 학습을 제공합니다. 문법·표현·발음 피드백과 문장 의미 유사도 평가를 통해 업무 상황에서 의도를 전달하는 연습을 돕습니다." />
      <ProjectFigure file="report.png" label="03 / REPORT" title="회의 기록을 보고서와 질문 응답으로" description="회의 로그와 번역 결과를 바탕으로 필요한 내용을 검색하고 요약 보고서를 생성합니다. 회의 기반 챗봇과 문서 내보내기를 통해 회의 내용을 다시 확인하고 공유할 수 있도록 구성했습니다." />
    </section>
    <section className="record-section">
      <h5><span>05</span>담당 구현과 기술적 선택</h5>
      <div className="record-process">
        <article><span className="story-eyebrow">01 / MY WORK</span><h6>보고서 생성 · RAG · 챗봇</h6><p>보고서 생성 에이전트와 RAG·챗봇 구현, 프론트엔드를 담당했습니다. 회의 내용을 검색하고 답변과 보고서로 활용하는 사용자 흐름에 참여했습니다.</p></article>
        <article><span className="story-eyebrow">02 / MODEL</span><h6>생성 시간과 안정성을 함께 고려</h6><p>내부 모델을 검토하는 과정에서 Qwen 1.5-0.5B의 NaN·Inf 오류와 Qwen 2.5-1.5B의 약 5분 보고서 생성 시간을 확인했습니다. 프로젝트에서는 OpenAI API를 사용하는 방향으로 결정했습니다.</p></article>
        <article><span className="story-eyebrow">03 / STORAGE</span><h6>구현 부담을 줄이는 저장소 선택</h6><p>임베딩과 메타데이터 관리를 지원하는 Chroma DB를 선택했습니다. 일반 데이터는 배포가 단순한 SQLite로 관리하고, 규모가 커지면 저장소를 재검토하는 방향으로 정리했습니다.</p></article>
        <article><span className="story-eyebrow">04 / QUALITY</span><h6>검색과 생성 품질을 나누어 확인</h6><p>관련 문서를 얼마나 정확히 찾는지와 생성 내용이 근거에 충실한지를 구분했습니다. 보고서 평가는 Precision·Recall·Faithfulness로 정리했습니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>06</span>프로젝트 성과</h5>
      <div className="record-outcomes record-outcomes-compact">
        <article><span className="story-eyebrow">01 / TERM CONSISTENCY</span><h6>78.3% → 94.1%</h6><p>IT 회의 테스트에서 용어사전 기반 RAG의 동일 용어 번역 일관성이 기준 번역 대비 15.8%p 높았습니다.</p></article>
        <article><span className="story-eyebrow">02 / TRANSLATION</span><h6>BLEU +8.5 · COMET +0.13</h6><p>BLEU는 28.4에서 36.9로, COMET은 0.682에서 0.812로 높아졌습니다.</p></article>
        <article><span className="story-eyebrow">03 / REPORT RAG</span><h6>0.87 · 0.93 · 0.89</h6><p>보고서 RAG 평가에서 Precision 0.87, Recall 0.93, Faithfulness 0.89를 기록했습니다.</p></article>
      </div>
      <p className="record-context">프로젝트 발표 자료에 기록된 팀 단위 평가 결과입니다. 통번역은 5개국·1,000개 키–값 용어사전을 활용한 IT 회의 테스트이며, 평가 표본 수와 검색 K 값은 자료에 별도로 기재되어 있지 않습니다.</p>
      <ProjectFigure file="translation-evaluation.png" title="용어사전 적용 전후의 번역 비교" description="발표 자료의 평가 결과와 실제 번역 예시입니다. API 엔드포인트, QA, 환경 변수와 같은 업무 용어가 어떻게 달라지는지 함께 확인할 수 있습니다." full />
    </section>
    <section className="record-section">
      <h5><span>07</span>개발을 통해 배운 점</h5>
      <dl className="record-reflection">
        <div><dt>서비스 방향<span>회의 이후의 활용까지 설계하기</span></dt><dd>프로젝트 피드백을 반영해 영어 회화 교육의 역할을 구체화했습니다. 통번역 결과가 학습과 보고서로 이어질 때, 같은 회의 데이터를 여러 목적에 활용할 수 있었습니다.</dd></div>
        <div><dt>모델 선택<span>품질·응답 시간·운영 조건</span></dt><dd>소형 모델의 오류와 긴 생성 시간을 확인하면서 모델 선택에 응답 시간과 실행 환경도 함께 고려해야 했습니다. 내부 데이터 처리 요구를 충족하려면 모델과 GPU 등 운영 자원의 비용까지 검토해야 한다는 점을 배웠습니다.</dd></div>
        <div><dt>다음 단계<span>더 다양한 도메인으로 검증 확대</span></dt><dd>IT 회의 중심의 용어사전과 평가를 다른 산업의 회의로 확장하고, 회의 중 새로 등장한 용어를 반영하는 흐름을 후속 과제로 정리했습니다. 실제 사용 환경에서 번역과 보고서의 품질을 계속 확인할 필요가 있습니다.</dd></div>
      </dl>
    </section>
  </div>;
}
