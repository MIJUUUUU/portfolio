import React from "react";

const paperUrl = "https://doi.org/10.9718/JBER.2025.46.4.334";

function ResearchFigure({ file, title, children }) {
  const src = `/images/projects/emg/${file}`;
  return <figure className="record-diagram emg-figure">
    <a href={src} target="_blank" rel="noreferrer" aria-label={`${title} 크게 보기`}><img src={src} alt={title} loading="lazy" /></a>
    <figcaption><strong>{title}</strong><p>{children}</p><a href={src} target="_blank" rel="noreferrer">그림 크게 보기 ↗</a></figcaption>
  </figure>;
}

export default function EmgProjectStory({ project }) {
  return <div className="project-story project-record emg-record">
    <header className="record-header"><p>맨발과 운동화 보행 중 수집한 근전도 신호를 비교하고, 머신러닝으로 두 보행 조건을 분류한 연구입니다.</p></header>

    <section className="record-section">
      <h5><span>01</span>연구 개요</h5>
      <dl className="record-facts">
        <div><dt>참여 기간</dt><dd>{project.meta[0]}</dd></div>
        <div><dt>논문 저자</dt><dd>이미주 · 제1저자 / 대구가톨릭대학교 컴퓨터소프트웨어학부</dd></div>
        <div><dt>게재</dt><dd>Journal of Biomedical Engineering Research · 46권 4호 · 334–344쪽 (2025)</dd></div>
        <div><dt>논문</dt><dd><a href={paperUrl} target="_blank" rel="noreferrer">머신러닝 기반 맨발 및 운동화 착용 시 하지 근육 활성도 비교 분석을 통한 보행 상태 분류 연구 ↗</a></dd></div>
      </dl>
      <div className="record-tech-panel"><h6>사용 기술과 분석 방법</h6><div className="stack-badges">
        {[["Python", "#356c95"], ["LabScribe", "#576b80"], ["sEMG · IX-BIO8", "#35776b"], ["Random Forest", "#537c40"], ["RMS · MAV · WL · VAR", "#776095"], ["대응표본 t-검정", "#94663f"]].map(([name, color]) => <span className="stack-badge" style={{ "--stack-color": color }} key={name}><span className="stack-badge-label">{name}</span></span>)}
      </div></div>
    </section>

    <section className="record-section">
      <h5><span>02</span>연구 목적</h5>
      <div className="record-purpose-summary"><span className="story-eyebrow">BAREFOOT / SHOD WALKING</span><h6>신발 착용 여부를<br />근육의 신호로 구분할 수 있을까?</h6><p>특정 신발 종류를 비교하는 연구에서 나아가, 일상적인 맨발과 운동화 보행에 주목했습니다. 하지 근육의 평균 활성도 차이를 통계적으로 비교하고, 여러 신호 특징을 조합한 모델이 두 조건을 분류할 수 있는지 함께 평가했습니다.</p></div>
    </section>

    <section className="record-section">
      <h5><span>03</span>실험과 데이터 수집</h5>
      <ResearchFigure file="experiment.jpg" title="조건을 통일한 보행 실험">건강한 성인 5명이 맨발·운동화 조건에서 각각 5회씩 보행했습니다. 약 7m의 실내 직선 경로, 115 BPM의 보행 속도, 동일 모델의 운동화를 사용해 실험 조건을 맞췄습니다. (논문 그림 3)</ResearchFigure>
      <ResearchFigure file="electrodes.jpg" title="네 개의 하지 근육에서 신호 수집">전경골근·대퇴직근·내측광근·내측 비복근을 측정 대상으로 삼았습니다. IX-BIO8 장비와 LabScribe로 1,000 Hz의 sEMG 신호를 수집하고, 접지 시점을 기준으로 근육 활성도를 분석했습니다. (논문 그림 2)</ResearchFigure>
      <p className="record-context">IRB 승인과 참여자의 사전 동의를 거쳐 수집한 데이터입니다. 논문에 게재된 실험 사진을 사용했습니다.</p>
    </section>

    <section className="record-section">
      <h5><span>04</span>분석과 모델링</h5>
      <ol className="record-flow">
        <li><strong>01 · 신호 전처리</strong><p>60 Hz 노치 필터로 전원 잡음을 제거하고, 이상 구간 제외와 채널별 Min-Max 정규화를 수행했습니다.</p></li>
        <li><strong>02 · 특징 추출</strong><p>분류용 데이터는 250 ms 윈도우·80% 중첩으로 분할하고 RMS·MAV·WL·VAR 특징을 추출했습니다.</p></li>
        <li><strong>03 · 학습과 평가</strong><p>총 5,900개 샘플 중 4,720개를 학습, 1,180개를 테스트에 사용했습니다. 모델은 결정 트리 500개의 Random Forest입니다.</p></li>
      </ol>
      <ResearchFigure file="random-forest.png" title="여러 결정 트리의 예측을 결합">Random Forest로 맨발과 운동화 조건을 분류하고 정확도·정밀도·재현율·F1-score로 평가했습니다. 별도로 약 520 ms의 걸음 구간에서 계산한 RMS를 대응표본 t-검정으로 비교했습니다. (논문 그림 5)</ResearchFigure>
    </section>

    <section className="record-section">
      <h5><span>05</span>연구 결과</h5>
      <div className="emg-metrics">
        <div><strong>95.0<span>%</span></strong><p>테스트 정확도 · 논문 보고값</p></div>
        <div><strong>0.95</strong><p>정밀도 · 재현율 · F1-score</p></div>
        <div><strong>1,180</strong><p>테스트 샘플 · 조건별 590개</p></div>
      </div>
      <ResearchFigure file="confusion-matrix.jpg" title="두 보행 조건에서 유사한 분류 성능">맨발은 590개 중 563개, 운동화는 590개 중 560개를 올바르게 분류했습니다. 오분류는 각각 27개와 30개였습니다. (논문 그림 6)</ResearchFigure>
      <div className="record-purpose-summary"><span className="story-eyebrow">RESULT INTERPRETATION</span><h6>평균 활성도 비교와 패턴 분류는 다른 결과</h6><p>근육별 평균 RMS 차이는 모두 통계적으로 유의하지 않았습니다(p &gt; 0.05). 반면 여러 시간 영역 특징을 활용한 분류에서는 약 95%의 정확도를 보고했습니다. 따라서 이 결과는 신발 착용에 따른 평균 근활성도의 차이를 입증한 것이 아니라, 수집된 데이터에서 두 조건의 신호 패턴을 구분할 가능성을 보여줍니다.</p></div>
    </section>

    <section className="record-section">
      <h5><span>06</span>연구의 의의와 후속 검증</h5>
      <dl className="record-reflection">
        <div><dt>연구 의의<span>통계 분석과 머신러닝의 결합</span></dt><dd>보행 조건을 평균 근활성도와 신호 패턴이라는 두 관점에서 평가했습니다. 생체신호를 정량화해 보행 조건 분류에 활용하는 연구로 제1저자 논문을 게재했습니다.</dd></div>
        <div><dt>후속 검증<span>새로운 참여자의 데이터로 추가 평가</span></dt><dd>초기 연구는 건강한 성인 5명을 대상으로 진행했으며, 이후 새로 합류한 연구생들의 데이터를 수집해 추가 검증을 수행했습니다. 새로운 참여자의 데이터에서도 좋은 분류 성능을 확인하며, 초기 실험 참여자 외에도 모델을 적용할 수 있는 가능성을 확인했습니다.</dd></div>
        <div><dt>확장 가능성<span>더 다양한 조건에서의 검증</span></dt><dd>논문은 보행 평가와 착화 상태 분석 등의 활용 가능성을 제시합니다. 새로운 참여자에 대한 후속 검증을 바탕으로, 향후 더 다양한 연령과 보행 환경으로 검증 범위를 넓힐 수 있습니다.</dd></div>
      </dl>
      <p className="emg-source">연구 내용·그림 출처: 이미주 외, JBER 46(4), 334–344 (2025). <a href={paperUrl} target="_blank" rel="noreferrer">논문 보기 ↗</a> · 후속 검증 내용은 논문 이후 수행한 연구 경험을 반영했습니다.</p>
    </section>
  </div>;
}
