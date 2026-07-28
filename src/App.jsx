import React, { useEffect, useState } from "react";

const experiences = [
  // ["리포트 기반 AI 면접 훈련 서비스 개발", "2026. 04"],
  // ["SK 근태관리 이상 패턴 자동 탐지 시스템 개발", "2025. 11"],
  // ["AI 웹서비스 협업 도구 프로젝트", "2025.10"],
  // ["RAG 기반 영어 회화 에이전트 프로젝트", "2025. 10"],
  // ["제조 결함 데이터 분석 프로젝트", "2025. 10"],
  // ["스마트 제조 의사결정 프로젝트", "2025. 09"],
  ["대한의용생체공학회 논문 게재 · 특허출원", "2025. 08"],
  ["2025 청년 일경험 지원사업 참여", "2025. 05"],
  ["데이터베이스 조교", "2025. 03"],
  ["Murfy AI 서포터즈", "2025. 02"],
  ["학부연구생 (Data Intelligence Lab)", "2024. 11"],
  ["대구용호초등학교 IT 교육", "2024. 03"],

  // ["보험 약관 요약 및 추천 시스템 개발", "2024. 09"],
];

const educations = [
  ["대구가톨릭대학교 졸업", "2026. 02"],
  ["성광여자고등학교 졸업", "2022. 02"],
];

const projects = [
  {
    slug: "attendance-anomaly-detection",
    title: "SK 근태관리 이상 패턴 자동 탐지 시스템",
    englishTitle: "SKALE · Attendance Anomaly Detection System",
    badge: "대표 프로젝트",
    featured: true,
    meta: ["2025", "AI", "Backend", "Data Integration"],
    description:
      "HR, Gate, VDI, 비용정산, 업무차량, 주근무지 등 분산된 20개 사내 데이터를 통합해 규칙 기반 탐지 한계를 넘는 이상 근태 탐지 구조를 설계한 프로젝트입니다.",
    tags: ["#SpringBoot", "#FastAPI", "#AnomalyDetection", "#4Tier"],
    organization: "SK AX",
    thumbnail: "/images/projects/attendance-ai.png",
    overview:
      "반복 오탐지와 운영 부담이 큰 근태 관리 환경에서, 분산 데이터를 통합하고 Rule-Based와 AI 탐지를 결합해 장기·반복 패턴까지 식별할 수 있는 시스템을 목표로 했습니다.",
    problem: [
      "근태 데이터가 HR, 출입, VDI, 비용정산 등 여러 시스템에 분산되어 있었습니다.",
      "단순 지각·조퇴 같은 규칙 기반 탐지는 가능하지만 복합 패턴과 새로운 이상 유형은 잡기 어려웠습니다.",
      "운영자의 정상 처리 피드백이 재반영되지 않아 동일한 오탐이 반복됐습니다.",
    ],
    architecture: [
      "Data → Processing → Detection → Analysis의 4-Tier 구조로 흐름을 분리했습니다.",
      "Spring Boot 3.x가 인증, 권한, 데이터 통합, 중앙 제어 API를 담당합니다.",
      "FastAPI 기반 AI 서버에서 분류·탐지 추론을 수행하고 PostgreSQL과 연동합니다.",
    ],
    implementation: [
      "20개 사내 데이터 소스를 사용자 기준으로 정규화하고 프로파일링 구조를 설계했습니다.",
      "Rule-Based 탐지와 AI 패턴 탐지를 함께 배치해 단순 위반과 잠재 패턴을 동시에 보도록 구성했습니다.",
      "대시보드와 리포트까지 연결되는 운영 자동화 흐름을 정리했습니다.",
    ],
    results: [
      "분산 데이터 통합 관리 기반을 확보했습니다.",
      "복합 이상 패턴을 탐지할 수 있는 확장 가능한 구조를 마련했습니다.",
      "피드백 루프를 반영해 반복 오탐 감소 방향을 제시했습니다.",
    ],
  },
  {
    slug: "allink-ai-workspace",
    title: "AI 기반 협업 워크스페이스 올링크",
    englishTitle: "Allink · AI Collaboration Workspace",
    badge: "최종 프로젝트",
    featured: true,
    meta: ["2025", "Collaboration", "RAG", "CRDT"],
    description:
      "아이디어에서 실행까지 끊기는 협업 흐름을 하나로 연결하기 위해, 실시간 협업과 AI 기반 지식 재생성을 결합한 워크스페이스 프로젝트입니다.",
    tags: ["#CRDT", "#RAG", "#KnowledgeRegeneration", "#Vercel"],
    thumbnail: "/images/projects/meetingmind.png",
    overview:
      "올링크는 여러 툴과 부서에 흩어진 아이디어, 기획, 실행 흐름을 한 공간으로 모아 협업이 결과로 이어지게 하는 AI 워크스페이스를 목표로 했습니다.",
    problem: [
      "도구와 부서가 나뉘어 아이디어에서 실행까지 흐름이 단절돼 있었습니다.",
      "프로젝트 결과가 흩어져 재사용 가능한 지식으로 남지 않았습니다.",
      "여러 명이 동시에 편집할 때 충돌 없는 실시간 협업 구조가 필요했습니다.",
    ],
    architecture: [
      "Collaboration, Ideation, Knowledge Regeneration의 3개 파이프라인으로 나눴습니다.",
      "CRDT 기반 실시간 동기화로 충돌 없는 공동 편집 흐름을 전제했습니다.",
      "문서, 대화, 아이디어를 RAG로 재학습해 조직의 지식 자산으로 연결되게 설계했습니다.",
    ],
    implementation: [
      "템플릿 기반으로 아키텍처, 플로우차트, 로고 등 아이디어 구조화 흐름을 설계했습니다.",
      "별도 툴 전환 없이 아이디어에서 실행 계획까지 이어지는 화면 흐름을 정의했습니다.",
      "Vercel + Railway 기반 자동 배포 DevOps 구조를 함께 구성했습니다.",
    ],
    results: [
      "단절된 협업 흐름을 하나의 서비스 가치로 설명 가능한 구조로 정리했습니다.",
      "협업 결과물이 프로젝트 종료 후에도 재사용되는 지식 흐름을 제안했습니다.",
      "실시간 협업과 AI 보조 기능이 함께 동작하는 서비스 방향성을 구체화했습니다.",
    ],
  },
  {
    slug: "smart-manufacturing-rag",
    title: "스마트 제조 의사결정 RAG, SKAG",
    englishTitle: "SKAG · Smart Manufacturing Decision RAG",
    featured: true,
    meta: ["2025", "Manufacturing AI", "RAG", "FAISS"],
    description:
      "MES, ERP, 센서 로그 같은 내부 데이터와 뉴스·규제·물류 이슈 같은 외부 데이터를 함께 검색해 제조 현장의 의사결정을 지원하는 RAG 시스템입니다.",
    tags: ["#RAG", "#FAISS", "#GPT4omini", "#SupplyChain"],
    thumbnail: "/images/projects/factory-rag.png",
    overview:
      "생산공정 이상과 공급망 리스크를 동시에 반영해, 관리자가 자연어 질문만으로 원인 분석과 대응 방안을 받을 수 있는 제조 의사결정 시스템을 목표로 했습니다.",
    problem: [
      "내부 공정 데이터와 외부 리스크 데이터를 별도로 확인해야 해 종합 판단이 어려웠습니다.",
      "사후 보고 중심 체계로는 실시간 대응이 늦었습니다.",
      "불량 원인 추적과 공급망 리스크 판단을 한 번에 지원하는 질의 방식이 필요했습니다.",
    ],
    architecture: [
      "Data Sources, Database Layer, RAG Engine, API/UI의 4개 레이어로 구성했습니다.",
      "정형 내부 데이터는 1분 주기, 외부 비정형 데이터는 30분 주기 수집 구조로 정의했습니다.",
      "FAISS Retriever가 검색한 문서와 SQL 응답을 LLM이 융합해 자연어 답변을 생성합니다.",
    ],
    implementation: [
      "MES 로그와 외부 뉴스 API를 동시에 모니터링하는 데이터 파이프라인을 설계했습니다.",
      "내부 공정 데이터와 외부 리스크를 하나의 질의 흐름으로 결합했습니다.",
      "근거 데이터와 신뢰도 점수를 포함한 답변 구조를 기획했습니다.",
    ],
    results: [
      "DB 쿼리와 뉴스 검색을 한 번의 RAG 질의로 축약하는 운영 경험을 제안했습니다.",
      "불량 원인 추적과 대응 방안 생성까지 이어지는 제조 AI 구조를 정리했습니다.",
      "추후 PDF 리포트, 규제 문서, 매뉴얼까지 확장 가능한 벡터 DB 기반을 확보했습니다.",
    ],
  },
  {
    slug: "insurance-rag-chatbot",
    title: "RAG 기반 보험 상담 챗봇 비서",
    englishTitle: "Insurance Consultation Chatbot Assistant",
    meta: ["2024", "RAG", "Spring Boot", "React"],
    description:
      "복잡한 보험 약관과 보장 범위를 쉽게 이해할 수 있도록, 의미 기반 검색과 질문 의도 분석을 결합한 보험 상담 챗봇 프로젝트입니다.",
    tags: ["#PGVector", "#IntentAnalysis", "#OpenAI", "#Recommendation"],
    overview:
      "보험 상품 선택 과정에서 발생하는 정보 격차와 긴 탐색 시간을 줄이기 위해, 맞춤형 상담과 약관 요약이 가능한 RAG 기반 챗봇을 구현했습니다.",
    problem: [
      "약관, 보장 범위, 청구 절차가 복잡해 사용자가 이해하기 어려웠습니다.",
      "정적인 FAQ 형태 챗봇은 질문 맥락과 의도를 충분히 반영하지 못했습니다.",
      "보험료 계산, 상품 추천, 약관 요약이 분리되어 사용자 흐름이 끊겼습니다.",
    ],
    architecture: [
      "Spring Boot 백엔드와 React 프론트를 분리해 상담 인터페이스와 API를 구성했습니다.",
      "PGVector를 활용해 약관과 상품 정보를 의미 기반으로 검색하는 RAG 구조를 적용했습니다.",
      "질문 의도 분석으로 담보, 보험료, 약관, 추천 등 응답 경로를 분기했습니다.",
    ],
    implementation: [
      "사용자 나이, 성별, 질병 이력 기반의 맞춤형 상담 흐름을 설계했습니다.",
      "보험료 계산, 약관 요약, 상품 추천을 하나의 챗봇 UX 안에 통합했습니다.",
      "단순 키워드 매칭을 넘는 의미 중심 검색을 적용했습니다.",
    ],
    results: [
      "보험 상담 시나리오에 바로 적용 가능한 구조화된 챗봇 경험을 만들었습니다.",
      "질문의도 분석과 벡터 검색을 결합한 상담 정확도 향상 방향을 정리했습니다.",
      "실제 서비스형 AI 백엔드 설계 경험을 확보했습니다.",
    ],
  },
  {
    slug: "english-conversation-agent",
    title: "RAG 기반 영어 회화 에이전트 AnyVerse",
    englishTitle: "AnyVerse · Real-time Communication Agent",
    meta: ["2025", "AI Agent", "RAG", "Translation"],
    description:
      "줌을 대체하는 회의 도구가 아니라, 회의 중 통번역과 회의 후 학습·리포트 생성까지 이어지는 영어 커뮤니케이션 에이전트 프로젝트입니다.",
    tags: ["#RAG", "#STT", "#ConversationLearning", "#Report"],
    overview:
      "회의에서 이해하고 끝나는 것이 아니라, 이해 → 학습 → 실행으로 이어지게 하는 영어 교육·협업 에이전트를 목표로 기획했습니다.",
    problem: [
      "해외 협업 시 언어 장벽으로 인한 회의 누락과 커뮤니케이션 오류가 잦았습니다.",
      "기존 통역 도구는 도메인 용어와 협업 맥락을 충분히 반영하지 못했습니다.",
      "회의가 끝난 뒤 기록, 학습, 후속 액션까지 이어지는 구조가 부족했습니다.",
    ],
    architecture: [
      "Translation, Conversation, Report의 3개 파이프라인으로 기능을 구분했습니다.",
      "용어사전 기반 RAG로 도메인 용어의 번역 일관성을 높이는 구조를 적용했습니다.",
      "회의 데이터를 기반으로 학습 콘텐츠와 요약 리포트를 후처리 생성하도록 설계했습니다.",
    ],
    implementation: [
      "실시간 회의 번역과 영어 회화 교육 경험을 하나의 사용자 흐름으로 연결했습니다.",
      "BLEU, COMET, Domain Term Consistency 기반의 번역 품질 평가 지표를 정리했습니다.",
      "회의 후 학습과 글로벌 커뮤니케이션 확장까지 이어지는 서비스 메시지를 설계했습니다.",
    ],
    results: [
      "회의 + 학습 + 보고서 자동화가 결합된 차별적 에이전트 콘셉트를 구체화했습니다.",
      "도메인 특화 영어 학습과 협업 도구의 결합 가능성을 검증했습니다.",
      "번역 성능과 용어 일관성을 평가 가능한 지표 중심으로 설명할 수 있게 했습니다.",
    ],
  },
  {
    slug: "manufacturing-defect-analysis",
    title: "제조 결함 데이터 분석 및 분류 전략 수립",
    englishTitle: "Manufacturing Defect Analysis Strategy",
    meta: ["2025", "Data Analysis", "Feature Engineering", "Manufacturing"],
    description:
      "Steel Plates Faults 데이터셋을 기반으로 결함 유형별 특징, 클래스 불균형, 다중공선성을 분석해 향후 자동 분류 모델 설계 근거를 정리한 프로젝트입니다.",
    tags: ["#EDA", "#VIF", "#FeatureSelection", "#Imbalance"],
    overview:
      "강철판 제조 과정에서 발생하는 7가지 결함 유형을 정확히 분류하기 위해, 단일 변수보다 피처 간 관계와 비선형 상호작용을 함께 살피는 분석이 필요했습니다.",
    problem: [
      "7개 결함 클래스가 최대 12.2:1 수준으로 불균형했습니다.",
      "형상, 밝기, 위치, 재질 관련 피처 간 중복성과 다중공선성이 높았습니다.",
      "향후 모델 설계를 위해 설명력 있는 핵심 피처를 선별할 필요가 있었습니다.",
    ],
    architecture: [
      "Data Overview → Imbalance Analysis → Correlation → Importance → VIF → Feature Selection 순서의 분석 파이프라인으로 구성했습니다.",
      "Pearson, Random Forest Importance, Permutation Importance를 함께 사용해 선형·비선형 영향을 비교했습니다.",
      "VIF와 상관분석을 결합해 중복 피처 제거 기준을 세웠습니다.",
    ],
    implementation: [
      "결함별 샘플 분포와 피처 그룹을 정리하고 이상치 특성을 먼저 진단했습니다.",
      "상관성 높은 변수와 중요도가 낮은 변수를 구분해 제거 후보를 도출했습니다.",
      "최종적으로 9개 피처를 제거해 설명력은 유지하면서 구조를 단순화했습니다.",
    ],
    results: [
      "전체 피처 수를 약 25% 줄인 정제 피처 셋을 도출했습니다.",
      "클래스 불균형 대응이 필요한 다중분류 문제임을 명확히 정의했습니다.",
      "후속 자동 분류 모델 설계를 위한 분석 근거를 확보했습니다.",
    ],
  },
];

function AttendanceProjectDetail({ project, onBack }) {
  const dataSources = [
    "HR 기록",
    "GATE 출입 기록",
    "VDI 접속 기록",
    "OT 초과근무",
    "업무차량 이용내역",
    "비용정산 내역",
    "주 근무지 정보",
    "퇴직금 전환 정보",
  ];
  const dataSourceInsights = [
    {
      title: "기록 기준이 서로 다름",
      body: "출입은 시간 로그, HR은 인사 정보, 비용정산은 행위 이력처럼 각 데이터의 의미와 기준점이 달라 단순 병합만으로는 해석이 어렵습니다.",
    },
    {
      title: "사원 단위 추적이 끊김",
      body: "동일 직원의 출입, VDI, OT, 차량 이용 내역이 각각 다른 화면과 파일에 흩어져 있어 한 사람의 근무 흐름을 연속적으로 보기 어렵습니다.",
    },
    {
      title: "이상 판단 맥락이 부족함",
      body: "지각 여부만으로는 실제 리스크를 설명할 수 없습니다. 주근무지, 야근, 접속 이력까지 함께 보아야 예외인지 패턴인지 판단할 수 있습니다.",
    },
  ];
  const integrationTargets = [
    "사번 기준 통합 키 정렬",
    "날짜/시간 포맷 표준화",
    "조직·직무 단위 프로파일링",
    "탐지용 특징 벡터 생성",
  ];
  const overviewStats = [
    ["88%", "대기업 근태 솔루션 도입 비율", "IMARC Group의 보고서"],
    ["+12%", "근태 소프트웨어 시장 확대(연평균)", "Allied Market Research"],
    ["-6%", "급여·인력관리 비용 절감", "Vorecol 근태관리 SW 보고서"],
    ["+15%", "직업 업무 생산성 향상", "Vorecol 근태관리 SW 보고서"],
  ];
  const issueCards = [
    "분산된 데이터",
    "규칙 기반 탐지 한계",
    "서비스의 신뢰성",
    "과도한 운영 부하",
  ];
  const detailedNeeds = [
    "단발성이 아니라 반복적 패턴을 보고 싶어요.",
    "우리 팀 전체의 패턴을 보고 싶어요.",
    "규칙에 없는 새로운 이상 유형을 찾고 싶어요.",
  ];
  const featureGroups = [
    {
      no: "01.",
      title: "데이터 통합 관리 플랫폼",
      bullets: [
        "사원/부서별 프로파일 생성",
        "HR·VDI·OT 등 직관적인 데이터 관리",
        "사원·날짜 기준 필터링/검색",
      ],
    },
    {
      no: "02.",
      title: "규칙 기반 이상 탐지",
      bullets: [
        "규칙 기반 1차 분류 작업 수행 (3종)",
        "사용자에 의해 설정된 규칙으로 동작",
        "지각, 휴게시간 초과, 조기 퇴근 탐지",
      ],
    },
    {
      no: "03.",
      title: "AI 기반 패턴 탐지",
      bullets: [
        "AI 패턴 기반 2차 탐지 수행",
        "평소와 다른 근무 변화 감지 (예: 갑작스러운 지각 급증)",
        "행동 유형 그룹별 이상치 식별",
        "주근무지를 고려한 동일 부서 평균 대비 편차 분석",
        "시계열 변화에 따른 비정상적 패턴 탐지",
      ],
    },
    {
      no: "04.",
      title: "인사이트 도출",
      bullets: [
        "탐지 결과를 XAI 기반 설명과 함께 제시",
        "장기적 패턴 변화에 대한 원인·기여 요인 파악",
        "하루 간의 근태 로그 데이터를 바탕으로 분석",
      ],
    },
    {
      no: "05.",
      title: "리포트 자동 생성",
      bullets: [
        "사원의 이상 패턴을 분석 결과를 근거로 소명 요청",
        "조직의 근태 리스크를 즉시 파악할 수 있도록 위험 패턴 리포트 생성",
      ],
    },
    {
      no: "06.",
      title: "자가 개선(Self-Improving) 시스템",
      bullets: [
        "소명 완료된 데이터에 대한 '예외' 라벨링",
        "지속적인 모델 성능 개선을 통한 서비스 신뢰성 확보",
        "이후 새로운 라벨링 데이터로 신규 유형 정의",
      ],
    },
  ];
  const effectRows = [
    {
      leftTitle: "근태·출입·VDI 여러 데이터 분산",
      leftBody: "서로 다른 형식의 데이터 관리의 어려움 → 모든 데이터를 하나의 서비스에서 관리",
      rightTitle: "휘발성 데이터 (CSV/Excel)",
      rightBody: "불규칙하게 관리되던 관련 데이터들을 DB 기반으로 전환 → 데이터 유실 방지 & 무결성 확보",
    },
    {
      leftTitle: "수동 분석 작업 프로세스",
      leftBody: "관리자가 수동으로 통합/필터링 절차 진행을 반복 → 사전에 설정한 규칙에 따라 자동으로 작업 수행",
      rightTitle: "탐지 불가능한 ‘특수 패턴군’",
      rightBody: "정적 분석으로 찾을 수 없던 복합·장기·비정상 패턴 → AI가 패턴·통계 이상치 탐지 기반으로 자동 탐색",
    },
    {
      leftTitle: "단편적인 리스크 판단",
      leftBody: "실무자 직관과 단순 위반 횟수에 의존 → 팀·개인별 다양한 관점의 분석을 통해 새로운 인사이트 도출",
      rightTitle: "반복적인 오탐 발생",
      rightBody: "오탐 피드백이 반영되지 않음 → 데이터 누적 기반 모델 재학습 파이프라인으로 지속적인 정확도 개선",
    },
  ];
  const serviceMapColumns = [
    {
      title: "데이터 관리",
      groups: [
        ["핵심 데이터", ["HR 기록", "VDI 접속 기록", "출입 기록"]],
        ["보조 데이터", ["OT수당", "차량 대여", "정산 내역", "퇴직금 전환"]],
      ],
    },
    {
      title: "근태 위반 탐지",
      groups: [
        ["규칙 기반", ["지각", "조퇴", "휴게시간 초과"]],
        ["패턴 기반", ["잠재 패턴"]],
      ],
    },
    {
      title: "탐지 결과 분석",
      groups: [
        ["개인", ["근태 지표(%)", "근태 리포트"]],
        ["팀", ["구성원 현황"]],
      ],
    },
    {
      title: "대시보드/통계",
      groups: [
        ["대시보드", ["현황 파악", "필터링/검색"]],
        ["통계 분석", ["변화 예측", "사전 위험 조치", "의사결정 지원"]],
      ],
    },
  ];
  const structureHighlights = [
    {
      no: "A.",
      title: "Presentation Layer",
      bullets: [
        "업로드, 조회, 분석, 리포트 화면을 하나의 운영 흐름으로 연결",
        "관리자가 사원·조직 단위로 빠르게 탐색하고 판단할 수 있는 인터페이스 구성",
      ],
    },
    {
      no: "B.",
      title: "Backend Control",
      bullets: [
        "Spring Boot 3.x가 인증, 권한, 데이터 통합, 중앙 제어 API를 담당",
        "분산 데이터를 표준 포맷으로 정규화하고 대시보드·리포트 요청을 조정",
      ],
    },
    {
      no: "C.",
      title: "AI Serving & Data",
      bullets: [
        "FastAPI 기반 AI 서버에서 이상 탐지 추론과 설명 생성 로직 수행",
        "PostgreSQL 기반 저장 구조와 피드백 데이터 누적으로 반복 오탐 감소 기반 확보",
      ],
    },
  ];
  const techHighlights = [
    {
      label: "Presentation",
      title: "Vue 3 SPA",
      description:
        "업로드, 조회, 분석, 리포트 화면을 하나의 운영 플로우로 연결해 관리자가 빠르게 탐색하고 판단할 수 있도록 구성했습니다.",
    },
    {
      label: "Backend",
      title: "Spring Boot 3.x",
      description:
        "근태 API, 이상탐지 API, 리포트 API를 중앙에서 제어하며 인증, 권한, 데이터 정규화, 대시보드 요청을 담당합니다.",
    },
    {
      label: "AI Serving",
      title: "FastAPI · OpenWeight LLM",
      description:
        "규칙 기반 탐지 이후 AI 기반 패턴 탐지, 위험도 계산, XAI 설명 생성, 리포트 해석 로직을 수행합니다.",
    },
    {
      label: "Data",
      title: "PostgreSQL",
      description:
        "직원 정보, 근태 데이터, 이상탐지 결과, 팀 리포트, 피드백 라벨을 누적 저장해 반복 오탐 감소 기반을 만듭니다.",
    },
  ];

  return (
    <main className="attendance-case">
      <header className="case-nav">
        <button type="button" onClick={onBack}>
          ← All Projects
        </button>
        <span>SKALA · UpGr8</span>
      </header>

      <section className="attendance-hero">
        <div className="attendance-hero-copy">
          <p className="case-kicker">AI · Backend · Data</p>
          <h1>
            이상 근태 탐지
            <br />
            솔루션 <em>SKALE</em>
          </h1>
          <p className="attendance-hero-subtitle">
            SK Attendance Learning &amp; Evaluation
            <br />
            지능형 이상 근태 탐지 솔루션
          </p>

          <dl className="case-facts">
            <div>
              <dt>Period</dt>
              <dd>2025. 11</dd>
            </div>
            <div>
              <dt>Project</dt>
              <dd>SKALA UpGr8 · Team Project</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Vue 3 · Spring Boot · FastAPI · PostgreSQL</dd>
            </div>
            <div>
              <dt>AI</dt>
              <dd>Isolation Forest · Autoencoder · Qwen3</dd>
            </div>
          </dl>
        </div>

        <div className="attendance-hero-visual">
          <img
            src={project.thumbnail}
            alt="SKALE 근태 이상 탐지 대시보드"
          />
        </div>
      </section>

      <section className="case-section case-intro">
        <div className="case-section-number">01</div>
        <div className="case-section-heading">
          <p>개요</p>
          <h2>개요</h2>
        </div>
        <div className="case-overview-headline">
          효율적인 기업 운영을 위해 <strong>‘근태 관리’</strong>는 선택이 아닌
          필수입니다.
        </div>
        <div className="case-overview-grid">
          <div className="case-overview-definition">
            <h3>근태</h3>
            <p>
              ‘부지런할 근(勤)’과 ‘게으를 태(怠)’
              <br />
              ‘출근’과 ‘결근’을 아울러 이르는 말
            </p>
            <ul>
              <li>근로자가 제시간에 출근하고 퇴근하는지, 지각·조퇴·결근은 없는지 관리하는 것을 의미합니다.</li>
              <li>성실히 근무에 임하는지를 나타내는 척도로 활용되며, 잦은 지각이나 결근은 근태 불량으로 간주됩니다.</li>
            </ul>
          </div>
          <div className="case-overview-stats">
            {overviewStats.map(([value, label, source]) => (
              <article key={label} className="case-stat-card">
                <strong>{value}</strong>
                <h3>{label}</h3>
                <span>{source}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section case-problem-index">
        <div className="case-section-number">02</div>
        <div className="case-section-heading">
          <p>문제 분석</p>
          <h2>문제 분석</h2>
        </div>
        <div className="case-problem-banner">기존 근태 관리 서비스의 구조적 문제</div>
        <div className="case-problem-index-grid">
          {issueCards.map((item, index) => (
            <article key={item}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-dark-section">
        <div className="case-section-number">02</div>
        <div className="case-section-heading">
          <p>문제 분석</p>
          <h2>분산된 데이터 통합 관리의 어려움</h2>
        </div>
        <p className="case-section-lead">
          실제 운영 환경에서는 근태가 하나의 기록으로 존재하지 않습니다. 출입, 접속, 초과근무,
          비용정산, 주근무지처럼 서로 다른 시스템의 데이터를 직원 기준으로 다시 엮어야 비로소
          “정상 흐름인지, 이상 패턴인지”를 해석할 수 있습니다.
        </p>
        <div className="data-source-cloud">
          {dataSources.map((source) => (
            <span key={source}>{source}</span>
          ))}
        </div>
        <div className="case-data-grid">
          {dataSourceInsights.map((item) => (
            <article key={item.title} className="case-data-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="case-data-summary">
          <div>
            <p className="case-data-summary-label">통합 시 필요한 기준</p>
            <div className="case-data-summary-chips">
              {integrationTargets.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <p className="case-data-summary-copy">
            따라서 SKALE은 단순 조회 화면이 아니라, 분산된 이종 데이터를 동일한 직원 흐름으로
            재구성하는 데이터 통합 계층이 먼저 필요했습니다.
          </p>
        </div>
      </section>

      <section className="case-section case-problem-detail">
        <div className="case-section-number">02</div>
        <div className="case-section-heading">
          <p>문제 분석</p>
          <h2>규칙 기반 이상 탐지의 한계</h2>
        </div>
        <p className="case-problem-subheadline">
          기존의 Rule-Based 접근은 <strong>‘특수한 패턴’</strong>을 탐지할 수
          없습니다.
        </p>
        <div className="case-problem-example-grid">
          <article>비상계단을 활용한 출입 인증 회피</article>
          <article>악의적인 우회 출근</article>
          <article>GATE가 없는 저층부 근무자</article>
          <article>반복적인 5분 늦은 출근</article>
          <article>상습적 잔지각</article>
          <article>기록이 존재하지 않는 사원</article>
        </div>
      </section>

      <section className="case-section case-problem-repeat">
        <div className="case-section-number">02</div>
        <div className="case-section-heading">
          <p>문제 분석</p>
          <h2>반복되는 오탐지</h2>
        </div>
        <div className="case-problem-quote">
          운영자의 피드백이 반영되지 않아, 동일 패턴이 반복해서 이상으로
          탐지되는 오류가 발생합니다.
        </div>
        <div className="problem-flow problem-flow-light">
          <article>
            <span>01</span>
            <h3>이상 데이터 탐지</h3>
            <p>특정 데이터가 이상으로 탐지</p>
          </article>
          <article>
            <span>02</span>
            <h3>관리자 정상 처리</h3>
            <p>소명 절차 진행 후 정상으로 수정</p>
          </article>
          <article>
            <span>03</span>
            <h3>동일 패턴 재발생</h3>
            <p>피드백이 반영되지 않아 다시 이상 판정</p>
          </article>
        </div>
      </section>

      <section className="case-section case-problem-needs">
        <div className="case-section-number">02</div>
        <div className="case-section-heading">
          <p>문제 분석</p>
          <h2>추가 상세 분석의 필요성</h2>
        </div>
        <div className="case-need-list">
          {detailedNeeds.map((item) => (
            <div key={item} className="case-need-bubble">
              {item}
            </div>
          ))}
        </div>
        <div className="case-problem-footer">
          단순 근태 위반 적발에서 나아가, 잠재된 패턴을 산출하고 전략적인 조직
          운영에 기여합니다.
        </div>
      </section>

      <section className="case-section case-service-overview">
        <div className="case-section-number">03</div>
        <div className="case-section-heading">
          <p>서비스 소개</p>
          <h2>서비스 소개</h2>
        </div>
        <div className="case-service-banner">
          데이터 관리부터 이상 탐지, 결과 분석까지 전 과정을 자동화
        </div>
        <div className="case-service-pillars">
          <article>
            <strong>01</strong>
            <h3>데이터(Data)</h3>
            <p>20개 사내 데이터 활용 (HR, Gate, VDI 등)</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>처리(Processing)</h3>
            <p>데이터 통합 관리 · 사용자 프로파일링</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>탐지(Detection)</h3>
            <p>Rule-Based 탐지 · AI 패턴 탐지</p>
          </article>
          <article>
            <strong>04</strong>
            <h3>분석(Analysis)</h3>
            <p>대시보드 · 결과 분석 리포트</p>
          </article>
        </div>
        <div className="case-service-structure">
          <p className="case-service-structure-label">운영 구조</p>
          <div className="case-feature-grid case-structure-grid">
            {structureHighlights.map((item) => (
              <article key={item.title} className="case-feature-card case-structure-card">
                <h3>
                  <strong>{item.no}</strong> {item.title}
                </h3>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section case-service-effects">
        <div className="case-section-number">03</div>
        <div className="case-section-heading">
          <p>서비스 소개</p>
          <h2>기대효과</h2>
        </div>
        <div className="case-effect-grid">
          {effectRows.map((row) => (
            <div key={row.leftTitle + row.rightTitle} className="case-effect-row">
              <article>
                <h3>{row.leftTitle}</h3>
                <p>{row.leftBody}</p>
              </article>
              <span>≫</span>
              <article>
                <h3>{row.rightTitle}</h3>
                <p>{row.rightBody}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section case-service-features">
        <div className="case-section-number">03</div>
        <div className="case-section-heading">
          <p>서비스 소개</p>
          <h2>기능</h2>
        </div>
        <div className="case-feature-grid">
          {featureGroups.map((group) => (
            <article key={group.title} className="case-feature-card">
              <h3>
                <strong>{group.no}</strong> {group.title}
              </h3>
              <ul>
                {group.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-service-map">
        <div className="case-section-number">03</div>
        <div className="case-section-heading">
          <p>서비스 소개</p>
          <h2>서비스 구조도</h2>
        </div>
        <div className="case-map">
          <div className="case-map-root">근태관리 이상탐지</div>
          <div className="case-map-columns">
            {serviceMapColumns.map((column) => (
              <article key={column.title} className="case-map-column">
                <h3>{column.title}</h3>
                <div className="case-map-groups">
                  {column.groups.map(([groupTitle, items]) => (
                    <div key={groupTitle} className="case-map-group">
                      <strong>{groupTitle}</strong>
                      <div className="case-map-items">
                        {items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="case-map-note">
          *잠재 패턴: 사내 근태 데이터를 바탕으로 자체 분석을 통해 파악한 잠재적 이상 유형
        </p>
        <div className="case-tech-summary">
          <p className="case-tech-summary-label">기술 구조</p>
          <div className="case-tech-grid">
            {techHighlights.map((item) => (
              <article key={item.title} className="case-tech-card">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-pipeline">
        <div className="case-section-number">04</div>
        <div className="case-section-heading">
          <p>구현</p>
          <h2>
            세 가지 관점에서 구성원의 행동을
            <br />
            다각도로 살펴봅니다.
          </h2>
        </div>

        <div className="pipeline-row">
          <article>
            <span>Step 01</span>
            <h3>통계적 상대 평가</h3>
            <p>우리 팀의 평균에 부합하는가를 기준으로 맞춤형 편차를 계산합니다.</p>
            <p>직원별 특성, 팀 평균 근무시간, 주근무지 정보를 함께 반영합니다.</p>
            <p>단순 위반이 아닌 맥락 기반 상대적 이상 여부를 먼저 확인합니다.</p>
          </article>
          <b>→</b>
          <article>
            <span>Step 02</span>
            <h3>분포적 고립 확인</h3>
            <p>전체 임직원 중 소수의 특이 행위자를 선별합니다.</p>
            <p>Isolation Forest 기반으로 타 근무자 대비 이질적인 행위를 탐지합니다.</p>
            <p>예를 들어 게이트 이용 기록 누락 같은 이상 신호를 포착합니다.</p>
          </article>
          <b>→</b>
          <article>
            <span>Step 03</span>
            <h3>행동 패턴 검증</h3>
            <p>하루의 흐름이 자연스러운가를 기준으로 15분 단위 시퀀스를 분석합니다.</p>
            <p>AutoEncoder로 비정상 타임라인과 장기적 패턴 변화를 식별합니다.</p>
            <p>사람이 직접 찾기 어려운 복합 행동 패턴을 검증합니다.</p>
          </article>
          <b>→</b>
          <article>
            <span>Step 04</span>
            <h3>위험도 계산</h3>
            <p>세 분석 결과를 가중 평균으로 통합해 최종 위험도를 산출합니다.</p>
            <p>탐지 결과는 리포트와 소명 요청 흐름으로 연결됩니다.</p>
            <p>운영자 피드백은 이후 재학습 데이터로 누적되어 정확도를 높입니다.</p>
          </article>
        </div>

        <figure className="pipeline-figure">
          <img
            src="/images/projects/이상탐지파이프라인.png"
            alt="SKALE 이상탐지 분석 파이프라인"
          />
          <figcaption>
            데이터 업로드 이후 규칙 기반 탐지와 AI 기반 패턴 탐지를 결합하고,
            통계적 상대 평가, 분포적 고립 확인, 행동 패턴 검증을 거쳐 최종 위험도를 계산합니다.
          </figcaption>
        </figure>
      </section>

      <section className="case-outcome">
        <div>
          <p className="case-kicker">Expected Effect</p>
          <h2>
            분석 결과 리포트로
            <br />
            객관적인 의사결정을 지원합니다.
          </h2>
        </div>
        <div className="outcome-list">
          <p>
            <span>01</span> 각 사원의 근무 패턴을 빠르게 확인
          </p>
          <p>
            <span>02</span> 조직·팀 구성원의 평균 근태 현황을 한눈에 파악
          </p>
          <p>
            <span>03</span> 업무 효율성 향상과 HR 운영 리소스 절감
          </p>
          <p>
            <span>04</span> 데이터 기반의 객관적 의사결정 지원
          </p>
        </div>
      </section>
    </main>
  );
}

function ProjectDetail({ project, onBack }) {
  if (project.slug === "attendance-anomaly-detection") {
    return <AttendanceProjectDetail project={project} onBack={onBack} />;
  }

  return (
    <main className="project-detail-page">
      <header className="project-detail-nav">
        <button type="button" onClick={onBack}>
          ← All Projects
        </button>
        <span>Project / {project.meta[0]}</span>
      </header>

      <section className="project-detail-hero">
        <div>
          <p className="profile-kicker">
            {project.badge || "Selected Project"}
          </p>
          <h1>{project.title}</h1>
          <p className="project-detail-english">{project.englishTitle}</p>
        </div>
        <div className="project-detail-meta">
          {project.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <div
        className={`project-detail-thumbnail${project.thumbnail ? " has-image" : ""}`}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} 프로젝트 대표 이미지`}
          />
        ) : (
          <span>Project thumbnail</span>
        )}
      </div>

      <section className="project-detail-content">
        <p className="project-detail-label">Overview</p>
        <p className="project-detail-description">
          {project.overview || project.description}
        </p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-detail-sections">
          <section className="project-detail-block">
            <span className="project-detail-block-label">Problem</span>
            <ul>
              {project.problem?.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section className="project-detail-block">
            <span className="project-detail-block-label">Architecture</span>
            <ul>
              {project.architecture?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="project-detail-block">
            <span className="project-detail-block-label">Implementation</span>
            <ul>
              {project.implementation?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="project-detail-block">
            <span className="project-detail-block-label">Results</span>
            <ul>
              {project.results?.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

function App() {
  const isDetailReady = (project) =>
    project.slug === "attendance-anomaly-detection";

  const getProjectFromPath = () => {
    const slug = window.location.pathname.match(
      /^\/projects\/([^/]+)\/?$/,
    )?.[1];
    const project = projects.find((item) => item.slug === slug) || null;
    return project && isDetailReady(project) ? project : null;
  };
  const [selectedProject, setSelectedProject] = useState(getProjectFromPath);

  useEffect(() => {
    const animatedItems = document.querySelectorAll(
      ".topbar, .hero-side, .hero-intro, .hero-title, .hero-footer, .info-strip, .profile-section, .projects-section",
    );

    animatedItems.forEach((item, index) => {
      item.setAttribute("data-animate", "");
      item.style.transitionDelay = `${index * 80}ms`;
    });

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    animatedItems.forEach((item) => reveal.observe(item));

    return () => reveal.disconnect();
  }, []);

  useEffect(() => {
    const handlePopState = () => setSelectedProject(getProjectFromPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openProject = (project) => {
    if (!isDetailReady(project)) return;
    window.history.pushState({}, "", `/projects/${project.slug}`);
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const closeProject = () => {
    window.history.pushState({}, "", "/");
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={closeProject} />;
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <p className="eyebrow">Miju's Portfolio/ 2026 Edition</p>
        <div className="topbar-meta"></div>
      </header>

      <main className="hero">
        <aside className="hero-side hero-side-left"></aside>

        <section className="hero-center">
          <div className="hero-intro">
            <span className="hero-chip">Selected Works</span>
            <span className="hero-chip">AI Service Developer</span>
          </div>

          <h1 className="hero-title" aria-label="Portfolio">
            <span className="title-line">
              <span className="letter-block fill-blue" data-shadow="P">
                P
              </span>
              <span className="letter-block fill-blue" data-shadow="O">
                O
              </span>
              <span className="letter-block fill-green" data-shadow="R">
                R
              </span>
              <span className="letter-block fill-yellow" data-shadow="T">
                T
              </span>
            </span>
            <span className="title-line title-line-offset">
              <span className="letter-block fill-yellow" data-shadow="F">
                F
              </span>
              <span className="letter-block fill-pink" data-shadow="O">
                O
              </span>
              <span className="letter-block fill-pink" data-shadow="L">
                L
              </span>
              <span className="letter-block fill-pink" data-shadow="I">
                I
              </span>
              <span className="letter-block fill-pink" data-shadow="O">
                O
              </span>
            </span>
          </h1>

          <div className="hero-footer"></div>
        </section>

        <aside className="hero-side hero-side-right">
          <div className="year-stack">
            <span>20</span>
            <span>26</span>
          </div>
          <div className="hero-tags">
            <span>Landing</span>
            <span>Identity</span>
            <span>Motion</span>
          </div>
        </aside>
      </main>

      <section className="info-strip">
        <p>DATA / AI SERVICES / AI ENGINEER</p>
        <p>BUILDING AI FOR REAL-WORLD IMPACT</p>
      </section>

      <section className="profile-section">
        <div className="section-divider" aria-hidden="true"></div>

        <div className="profile-grid">
          <section className="profile-intro">
            <p className="profile-kicker">About Me</p>
            <h2 className="profile-title">
              데이터를 연결해
              <br />
              AI 서비스로
              <br />
              가치를 만드는
              <br />
              개발자, <strong>이미주</strong>입니다.
            </h2>

            <p className="profile-copy">
              데이터 분석부터 AI 서비스 개발, 백엔드 시스템 구축까지 경험하며
              사용자의 문제를 기술로 해결하는 AI Developer를 목표로 성장하고
              있습니다.
            </p>

            <dl className="contact-list">
              <div className="contact-row">
                <dt>Github</dt>
                <dd>--</dd>
              </div>
              <div className="contact-row">
                <dt>Blog</dt>
                <dd>00</dd>
              </div>
              <div className="contact-row">
                <dt>Email</dt>
                <dd>dlalwnjenny@naver.com</dd>
              </div>
            </dl>
          </section>

          <div className="profile-details">
            <section className="detail-block">
              <h3>Experience</h3>
              <div className="timeline-list">
                {experiences.map(([title, date]) => (
                  <div className="timeline-row" key={`${title}-${date}`}>
                    <p>{title}</p>
                    <span>{date}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-block">
              <h3>Education</h3>
              <div className="timeline-list">
                {educations.map(([title, date]) => (
                  <div className="timeline-row" key={`${title}-${date}`}>
                    <p>{title}</p>
                    <span>{date}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-block">
              <h3>Main Skills</h3>
              <p className="skills-line">
                Python, Java, Spring Boot, React,
                <br />
                Machine Learning, RAG, PostgreSQL, Docker, Kubernetes
              </p>
            </section>
          </div>
        </div>

        <div className="section-footer">
          <span>2026 Portfolio</span>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-divider" aria-hidden="true"></div>

        <div className="projects-header">
          <div>
            <p className="profile-kicker">Selected Projects</p>
            <h2 className="projects-title">
              실제 문제를 해결한
              <br />
              AI 프로젝트를
              <br />
              소개합니다.
            </h2>
          </div>
          <p className="projects-copy">
            각 프로젝트의
            <br />
            문제 정의부터
            <br />
            <br />
            설계, 구현,
            <br />
            기술 스택,
            <br />
            성과까지
            <br />
            <br />
            확인할 수 있습니다.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card${project.featured ? " is-featured" : ""}${isDetailReady(project) ? " is-available" : " is-disabled"}`}
              key={project.slug}
              tabIndex={isDetailReady(project) ? "0" : "-1"}
              role={isDetailReady(project) ? "link" : undefined}
              onClick={isDetailReady(project) ? () => openProject(project) : undefined}
              onKeyDown={
                isDetailReady(project)
                  ? (event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openProject(project);
                      }
                    }
                  : undefined
              }
            >
              <div
                className={`project-visual${project.thumbnail ? " has-image" : " project-visual-empty"}`}
              >
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} 프로젝트 썸네일`}
                  />
                ) : (
                  <span>Thumbnail</span>
                )}
              </div>
              <div className="project-body">
                <div className="project-card-labels">
                  {project.badge && <span>{project.badge}</span>}
                  {project.organization && <span>{project.organization}</span>}
                </div>
                <h3>{project.title}</h3>
                <p className="project-english-title">{project.englishTitle}</p>
                <div className="project-meta">
                  {project.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <button
                  className="project-link"
                  type="button"
                  disabled={!isDetailReady(project)}
                  onClick={(event) => {
                    event.stopPropagation();
                    if (!isDetailReady(project)) return;
                    openProject(project);
                  }}
                >
                  View Project
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
