import React from "react";

function UrbanFigure({ file, label, title, children, full = false }) {
  const src = `/images/projects/hwaseong/${file}.png`;
  return <figure className={`record-diagram${full ? " record-diagram-full urban-full" : ""}`}>
    <a href={src} target="_blank" rel="noreferrer" aria-label={`${title} 크게 보기`}><img src={src} alt={title} loading="lazy" /></a>
    <figcaption>{label && <span className="story-eyebrow">{label}</span>}<h6>{title}</h6><p>{children}</p><a href={src} target="_blank" rel="noreferrer">이미지 크게 보기 ↗</a></figcaption>
  </figure>;
}

export default function HwaseongProjectStory({ project }) {
  const stacks = [
    ["Spatial Analysis", ["QGIS", "Raster Calculator", "NDVI", "공간 중첩 분석"], "#317b69"],
    ["Public Data", ["위성정사영상", "탄소공간지도", "화성시 인구 데이터"], "#496e9a"],
    ["Analysis Design", ["식생 분류", "1인당 녹지면적", "복합 지표", "정책 우선순위"], "#6254a3"],
  ];
  return <div className="project-story project-record urban-record">
    <header className="record-header"><p>위성영상의 식생 정보에 인구와 탄소배출 데이터를 결합해, 녹지 확충이 필요한 지역을 비교하는 분석을 제안한 정책 연구 공모전 프로젝트입니다.</p></header>
    <section className="record-section">
      <h5><span>01</span>프로젝트 개요</h5>
      <dl className="record-facts">
        <div><dt>참여 기간</dt><dd>{project.meta[0]} · 숲퍼스타즈</dd></div>
        <div><dt>공모전</dt><dd>화성시 대학(원)생 도시데이터 연구공모전</dd></div>
        <div><dt>공모 취지</dt><dd>Urban AI 구현을 위한 도시데이터 활용과 화성특례시에 맞는 정책과제 연구</dd></div>
        <div><dt>제출 형식</dt><dd>A1 세로형 연구 포스터 · 도시데이터를 활용한 분석과 정책 제안</dd></div>
        <div><dt>프로젝트 주제</dt><dd>내 집 주변의 NDVI는? · 위성데이터와 행정데이터를 활용한 녹지 우선순위 도출</dd></div>
        <div><dt>분석 대상</dt><dd>화성시 반월동을 중심으로 한 녹지·인구·탄소배출 비교</dd></div>
        <div><dt>자료 범위</dt><dd>위성영상 전처리 결과와 복합 지표·정책 우선순위 시각화 제안</dd></div>
      </dl>
      <div className="record-tech-panel"><h6>사용 도구 · 데이터</h6><div className="record-stack-groups">{stacks.map(([label, names, color]) => <div key={label}><strong>{label}</strong><div className="stack-badges">{names.map(name => <span className="stack-badge" style={{ "--stack-color": color }} key={name}><span className="stack-badge-label">{name}</span></span>)}</div></div>)}</div></div>
    </section>
    <section className="record-section">
      <h5><span>02</span>문제와 분석 방향</h5>
      <div className="record-purpose-summary"><span className="story-eyebrow">HWASEONG / WHY</span><h6>녹지가 얼마나 있는지에서<br />어디에 더 필요한지로</h6><p>도시 전체의 녹지면적만으로는 지역별 인구 규모와 환경 부담의 차이를 살피기 어렵습니다. 위성영상으로 식생 분포를 확인하고 인구·탄소배출을 함께 고려해, 녹지 확충의 우선순위를 설명할 수 있는 비교 기준을 제안했습니다.</p></div>
      <ol className="record-flow">
        <li><strong>식생 분포 확인</strong><p>위성영상의 NIR·RED 밴드로 NDVI를 계산합니다.</p></li>
        <li><strong>지역 조건 결합</strong><p>인구와 탄소배출 데이터를 같은 공간 단위로 비교하는 구조를 설계합니다.</p></li>
        <li><strong>우선순위 제안</strong><p>복합 지표를 표와 지도로 표현해 정책 검토를 돕는 방향을 제시합니다.</p></li>
      </ol>
    </section>
    <section className="record-section">
      <h5><span>03</span>데이터와 분석 절차</h5>
      <dl className="record-facts">
        <div><dt>위성정사영상</dt><dd>국토정보플랫폼 · 녹지 분포와 식생 지수 계산에 활용</dd></div>
        <div><dt>탄소공간지도</dt><dd>국토교통부 · 지역별 탄소배출과 환경 부담 비교에 활용</dd></div>
        <div><dt>인구 데이터</dt><dd>공공데이터포털 · 화성시 인구를 반영한 1인당 녹지면적 산출에 활용</dd></div>
      </dl>
      <div className="record-process">
        <article><span className="story-eyebrow">01 / NDVI</span><h6>밴드 연산으로 식생 지수 계산</h6><p>QGIS Raster Calculator에서 NDVI = (NIR − RED) / (NIR + RED)를 계산하는 방법을 적용했습니다. 포스터에서는 NDVI ≥ 0.2를 식생 영역 분류 기준으로 설정했습니다.</p></article>
        <article><span className="story-eyebrow">02 / SPATIAL UNIT</span><h6>행정동·격자 단위 비교 설계</h6><p>식생으로 분류한 면적을 행정동 또는 격자 단위로 집계하고 인구수로 나누어, 지역 규모 차이를 고려하는 1인당 녹지면적을 산출하도록 제안했습니다.</p></article>
        <article><span className="story-eyebrow">03 / COMPOSITE INDEX</span><h6>탄소배출을 반영한 비교 지표</h6><p>정규화한 탄소배출량을 가중치로 반영하는 복합 지표를 제안했습니다. 녹지·인구·탄소배출을 함께 살펴 환경 부담이 큰 지역을 드러내는 것이 목적입니다.</p></article>
        <article><span className="story-eyebrow">04 / POLICY MAP</span><h6>정책 검토를 위한 시각화</h6><p>지역별 지표와 우선순위를 표·지도에 표현하는 방안을 제시했습니다. 최종 정책 순위를 확정하기 위해서는 가중치와 순위 방향, 집계 기준을 추가 검증해야 합니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>04</span>분석 자료와 시각화</h5>
      <UrbanFigure file="context" label="01 / REGIONAL CONTEXT" title="녹지와 탄소배출을 함께 살핀 배경">제출 포스터에 정리한 녹지·탄소배출 현황입니다. 시 전체 현황에서 출발해 지역별 환경 부담을 비교하고, 반월동을 분석 대상으로 선정한 배경을 설명합니다.</UrbanFigure>
      <UrbanFigure file="ndvi" label="02 / PREPROCESSING" title="반월동 위성영상 전처리 결과">포스터에 수록된 실제 전처리 이미지입니다. 도시 공간의 식생 분포를 확인하고, NDVI 기반 녹지면적 분석으로 이어지는 출발점으로 활용했습니다.</UrbanFigure>
      <UrbanFigure file="priority-example" label="03 / EXPECTED OUTPUT" title="녹지 우선순위 비교표 예시">포스터의 ‘예상 결과’에 해당하는 예시 표입니다. 녹지면적·인구·탄소배출·복합 지표를 함께 표시하는 형식을 제안했으며, 표의 지명·수치·순위는 검증된 최종 분석 결과로 제시하지 않습니다.</UrbanFigure>
    </section>
    <section className="record-section">
      <h5><span>05</span>분석에서 고려한 점</h5>
      <div className="record-process">
        <article><span className="story-eyebrow">01 / VEGETATION</span><h6>행정 면적과 식생 분포 비교</h6><p>등록된 녹지면적과 위성영상에서 확인한 식생을 함께 살피는 접근을 제안했습니다. 영상 촬영 시기와 임계값에 따라 분류 결과가 달라질 수 있어 기준을 명시하는 것이 필요합니다.</p></article>
        <article><span className="story-eyebrow">02 / POPULATION</span><h6>지역 크기와 인구 차이 고려</h6><p>녹지면적이 같더라도 인구 규모에 따라 1인당 녹지면적은 달라집니다. 지역별 총량과 인구를 함께 비교하도록 분석 단계를 구성했습니다.</p></article>
        <article><span className="story-eyebrow">03 / WEIGHTING</span><h6>가중치의 의미와 순위 해석</h6><p>탄소배출 가중치는 비교 결과에 영향을 줍니다. 포스터에서 제안한 지표는 부족도와 우선순위의 방향을 명확히 하고, 가중치 변화에 따른 순위 안정성을 확인하는 후속 검증이 필요합니다.</p></article>
        <article><span className="story-eyebrow">04 / COMMUNICATION</span><h6>수치의 근거를 함께 보여주기</h6><p>순위만 제시하는 대신 녹지면적·인구·탄소배출 항목을 함께 보여주는 형식을 제안했습니다. 정책 검토자가 지역 간 차이를 설명할 수 있는 결과물을 목표로 했습니다.</p></article>
      </div>
    </section>
    <section className="record-section">
      <h5><span>06</span>프로젝트 결과물</h5>
      <div className="record-outcomes record-outcomes-compact">
        <article><span className="story-eyebrow">01 / DATA</span><h6>위성·행정 데이터 결합 방향</h6><p>위성정사영상, 탄소공간지도, 인구 데이터의 활용 목적과 분석 단계를 정리했습니다.</p></article>
        <article><span className="story-eyebrow">02 / ANALYSIS</span><h6>NDVI 전처리와 지표 제안</h6><p>반월동 전처리 이미지를 제시하고 식생 분류, 1인당 녹지면적, 탄소 가중치를 잇는 분석 구조를 제안했습니다.</p></article>
        <article><span className="story-eyebrow">03 / DELIVERABLE</span><h6>공모전 포스터 구성</h6><p>분석 배경부터 데이터·방법·예상 결과·기대효과까지 공모전 제출 형식인 A1 세로형 연구 포스터에 정리했습니다.</p></article>
      </div>
      <UrbanFigure file="poster" title="내 집 주변의 NDVI는? · 공모전 포스터" full>숲퍼스타즈 제출 자료입니다. 실제 전처리 결과와 향후 분석 제안·예상 결과를 구분해 전체 프로젝트 흐름을 확인할 수 있습니다.</UrbanFigure>
    </section>
    <section className="record-section">
      <h5><span>07</span>분석의 의미와 다음 단계</h5>
      <dl className="record-reflection">
        <div><dt>데이터 결합<span>하나의 지표로 보이지 않는 차이</span></dt><dd>녹지의 총량에 인구와 환경 부담을 함께 고려하는 접근으로 지역 간 차이를 설명하고자 했습니다. 어떤 정보를 함께 비교할지가 분석 질문만큼 중요했습니다.</dd></div>
        <div><dt>공간 분석<span>비교 단위와 기준 맞추기</span></dt><dd>후속 분석에서는 영상 촬영 시점, 인구 기준일, 탄소배출 집계 단위와 좌표계를 맞추고 결과를 검증해야 합니다. 같은 단위의 데이터를 비교해야 지표의 해석도 명확해집니다.</dd></div>
        <div><dt>정책 활용<span>제안에서 검증된 우선순위로</span></dt><dd>예시 순위를 실제 정책 판단에 활용하려면 식생 분류 검증과 가중치 민감도 분석이 필요합니다. 녹지 접근성 등 추가 요인도 검토해 지역의 실제 수요를 더 잘 반영하는 방향으로 확장할 수 있습니다.</dd></div>
      </dl>
    </section>
  </div>;
}
