import React from "react";

function AnalysisFigure({ file, label, title, children }) {
  const src = `/images/projects/defect/${file}`;
  return <figure className="record-diagram">
    <a href={src} target="_blank" rel="noreferrer" aria-label={`${title} 크게 보기`}><img src={src} alt={title} loading="lazy" /></a>
    <figcaption><span className="story-eyebrow">{label}</span><h6>{title}</h6><p>{children}</p><a href={src} target="_blank" rel="noreferrer">분석 이미지 크게 보기 ↗</a></figcaption>
  </figure>;
}

export default function DefectProjectStory({ project }) {
  const stacks = [
    ["Analysis", ["Python", "pandas", "Pearson", "Point-Biserial", "VIF"], "#317b69"],
    ["Machine Learning", ["scikit-learn", "XGBoost", "Random Forest", "Logistic Regression"], "#496e9a"],
    ["Sampling · Evaluation", ["SMOTE", "SMOTETomek", "Stratified K-Fold", "Macro-F1"], "#6254a3"],
  ];
  const models = [
    ["XGBoost", "0.824 ± 0.014", "0.807", "0.134"],
    ["Random Forest", "0.800 ± 0.013", "0.764", "0.157"],
    ["Ridge Logistic + SMOTE", "0.601 ± 0.017", "0.625", "0.0167"],
    ["Soft Voting 앙상블", "0.8338", "0.8072", "0.1662"],
  ];
  return <div className="project-story project-record defect-record">
    <header className="record-header"><p>강철판의 7가지 결함을 분류하기 위해 데이터 분포와 변수 관계를 분석하고, 불균형 대응부터 모델 비교까지 진행한 프로젝트입니다.</p></header>
    <section className="record-section">
      <h5><span>01</span>프로젝트 개요</h5>
      <dl className="record-facts">
        <div><dt>참여 기간</dt><dd>{project.meta[0]} · SKALA DS Mini Project · 2인 팀</dd></div>
        <div><dt>데이터</dt><dd>UCI Steel Plates Faults · 1,941개 샘플 · 27개 입력 변수 · 7개 결함 유형 · 결측치 없음</dd></div>
        <div><dt>담당 영역</dt><dd>클래스 불균형을 고려한 모델링 전략, 결함별 변수 중요도·상관 분석, 기본 모델 및 앙상블 최적화</dd></div>
      </dl>
      <div className="record-tech-panel"><h6>사용 기술 · 분석 방법</h6><div className="record-stack-groups">{stacks.map(([label, names, color]) => <div key={label}><strong>{label}</strong><div className="stack-badges">{names.map(name => <span className="stack-badge" style={{ "--stack-color": color }} key={name}><span className="stack-badge-label">{name}</span></span>)}</div></div>)}</div></div>
    </section>
    <section className="record-section">
      <h5><span>02</span>문제와 해결 방향</h5>
      <div className="record-purpose-summary"><span className="story-eyebrow">STEEL PLATES / WHY</span><h6>전체 점수에 가려진<br />소수 결함의 탐지 성능 확인하기</h6><p>가장 많은 결함은 673건, 가장 적은 결함은 55건으로 약 12.2배 차이가 있었습니다. 초기 Random Forest의 Accuracy는 0.7892였지만, Pastry의 Recall은 0.53, Dirtiness는 0.64였습니다. 클래스별 성능을 함께 확인하고, 모든 결함에 동일한 가중치를 주는 Macro-F1을 주 평가 지표로 선택했습니다.</p></div>
      <ol className="record-flow">
        <li><strong>데이터 진단</strong><p>결함별 분포와 이상치를 확인하고, 불균형을 반영한 평가 기준을 정했습니다.</p></li>
        <li><strong>변수 분석</strong><p>상관계수·모델 중요도·VIF로 중복 정보와 결함별 특징을 살폈습니다.</p></li>
        <li><strong>모델 비교</strong><p>샘플링·규제·앙상블을 실험하고 Macro-F1과 학습·평가 성능 차이를 비교했습니다.</p></li>
      </ol>
    </section>
    <section className="record-section">
      <h5><span>03</span>데이터 분석</h5>
      <AnalysisFigure file="distribution.png" label="01 / CLASS DISTRIBUTION" title="최대·최소 클래스 약 12.2배 차이">Other_Faults는 673건, Dirtiness는 55건입니다. 데이터 분할 시 클래스 비율을 유지하고, 전체 평균과 함께 결함별 Recall을 확인하는 기준을 세웠습니다.</AnalysisFigure>
      <AnalysisFigure file="outliers.png" label="02 / OUTLIERS" title="이상치를 일괄 제거하지 않은 이유">밝기 합과 결함 면적 등에서 IQR 기준 이상치가 다수 확인됐습니다. 측정 오류뿐 아니라 결함 유형에 따른 크기·밝기 차이일 가능성을 고려해, 무조건 제거하는 대신 트리 기반 모델을 함께 검토했습니다.</AnalysisFigure>
      <AnalysisFigure file="correlation.png" label="03 / FEATURE RELATIONSHIPS" title="중복 변수와 결함별 특징을 함께 확인">좌표·면적·둘레 변수의 높은 상관성과 강판 종류 변수의 강한 음의 상관을 확인했습니다. Pearson·Point-Biserial 상관분석과 Random Forest·Permutation Importance, VIF를 함께 검토해 변수 선택의 근거를 정리했습니다.</AnalysisFigure>
    </section>
    <section className="record-section">
      <h5><span>04</span>분류 전략과 실험</h5>
      <div className="record-process">
        <article><span className="story-eyebrow">01 / METRICS</span><h6>Macro-F1과 결함별 Recall</h6><p>초기 지표 비교에서는 Macro-F1 0.7923, Weighted-F1 0.7893으로 평균 점수가 비슷했습니다. 그래도 개별 결함의 탐지율 차이가 남아 있어, Macro-F1을 주 지표로 두고 클래스별 Recall을 보조적으로 확인했습니다.</p></article>
        <article><span className="story-eyebrow">02 / SAMPLING</span><h6>클래스 비율 유지와 소수 클래스 보완</h6><p>Stratified 분할·교차검증을 사용하고 학습 데이터에 SMOTE와 SMOTETomek을 적용하는 전략을 비교했습니다. 소수 클래스의 학습 기회와 과적합을 함께 살폈습니다.</p></article>
        <article><span className="story-eyebrow">03 / FEATURES</span><h6>27개 변수에서 9개 제거</h6><p>좌표·둘레·면적·재질의 중복 변수와 VIF가 높은 로그 변수를 검토해, 최종 보고서에서 9개 변수를 제거 대상으로 선정했습니다. 27개 입력 변수 기준 18개가 남는 구성입니다.</p></article>
        <article><span className="story-eyebrow">04 / MODELS</span><h6>선형·트리·앙상블 비교</h6><p>Logistic Regression, Random Forest, XGBoost를 비교한 뒤 L2 규제 강도 탐색, 5개 시드의 예측 확률 평균, 가중 Soft Voting을 실험했습니다. 성능과 모델 복잡도를 함께 비교했습니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>05</span>모델 비교 결과</h5>
      <div className="defect-table-scroll" role="region" aria-label="모델 성능 비교표" tabIndex="0"><table className="defect-model-table">
        <caption>최종 보고서의 모델 비교표 기준</caption>
        <thead><tr><th scope="col">모델</th><th scope="col">Macro-F1</th><th scope="col">Accuracy</th><th scope="col">GAP</th></tr></thead>
        <tbody>{models.map(row => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th scope="row" key={index}>{value}</th> : <td key={index}>{value}</td>)}</tr>)}</tbody>
      </table></div>
      <p className="record-context">GAP은 학습 Macro-F1과 평가 Macro-F1의 차이입니다. ± 값은 보고서 표기를 그대로 옮겼으며, 초기 지표 비교 실험과 최종 모델 비교는 별도 실험으로 구분했습니다.</p>
      <div className="record-process">
        <article><span className="story-eyebrow">PREDICTIVE PERFORMANCE</span><h6>최고 Macro-F1 · Soft Voting</h6><p>XGBoost·Random Forest·Logistic의 확률을 결합한 앙상블이 0.8338로 가장 높은 Macro-F1을 기록했습니다. GAP은 0.1662로 학습·평가 성능 차이가 남았습니다.</p></article>
        <article><span className="story-eyebrow">FINAL REPORT CHOICE</span><h6>최소 GAP · Ridge Logistic</h6><p>보고서는 GAP이 0.0167인 Ridge Logistic + SMOTE(C=0.01)를 최종 선택했습니다. 다만 평가 Macro-F1은 약 0.601로, 작은 GAP과 높은 예측 성능은 구분해서 해석해야 합니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>06</span>프로젝트 성과</h5>
      <div className="record-outcomes record-outcomes-compact">
        <article><span className="story-eyebrow">01 / EVALUATION</span><h6>소수 결함을 반영한 평가 기준</h6><p>전체 평균만으로는 드러나지 않는 탐지율 차이를 확인하고, Macro-F1과 결함별 Recall을 중심으로 비교 기준을 세웠습니다.</p></article>
        <article><span className="story-eyebrow">02 / FEATURE SELECTION</span><h6>27 → 18개 변수</h6><p>중복성과 공선성을 검토해 9개 제거 변수를 선정했습니다. 변수 수 기준 약 33.3%를 줄이는 구성을 정리했습니다.</p></article>
        <article><span className="story-eyebrow">03 / MODEL COMPARISON</span><h6>최고 Macro-F1 0.8338</h6><p>선형 모델과 트리 모델, 앙상블을 비교하며 예측 성능·과적합·복잡도 사이의 선택 근거를 확보했습니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>07</span>분석을 통해 배운 점</h5>
      <dl className="record-reflection">
        <div><dt>평가 관점<span>평균 점수와 개별 결함을 함께 보기</span></dt><dd>평균 지표가 비슷해도 결함별 Recall에는 차이가 있었습니다. 불균형 데이터에서는 어떤 결함을 놓치고 있는지까지 확인해야 모델의 개선 방향을 구체화할 수 있었습니다.</dd></div>
        <div><dt>변수 해석<span>상관성과 예측 기여도 구분하기</span></dt><dd>선형 상관이 약한 변수도 트리 모델에서는 분류에 기여할 수 있었습니다. 상관분석과 중요도를 함께 확인했으며, 관찰된 관계를 결함의 발생 원인으로 단정하지 않는 해석이 필요했습니다.</dd></div>
        <div><dt>다음 검증<span>작은 GAP만으로 판단하지 않기</span></dt><dd>학습·평가 차이가 작더라도 두 점수가 함께 낮으면 과소적합 가능성이 있습니다. 후속 검증에서는 동일한 분할과 평가 조건에서 변수 제거 전후, 샘플링 적용 여부, 결함별 Recall을 비교해 모델 선택의 근거를 보강할 필요가 있습니다.</dd></div>
      </dl>
    </section>
  </div>;
}
