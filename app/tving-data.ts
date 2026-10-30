// 티빙 화면에서 직접 내용을 채울 수 있는 데이터입니다.
// 예: { title: "작품 제목", poster: "/poster.jpg", category: "드라마" }
// 포스터 이미지는 public 폴더에 넣고 poster에는 "/poster.jpg"처럼 적어주세요.
export type TvingWork = { title: string; poster: string; category: string };
export const TVING_WORKS: TvingWork[] = [
  { title: "환승연애4", poster: "/티빙 오리지널 환승연애4 썸네일.png", category: "" },
  { title: "하트시그널5", poster: "/하트시그널5 썸네일.png", category: "" },
  { title: "둘셋하투하", poster: "/둘셋하투하 썸네일.png", category: "" },
  { title: "", poster: "", category: "" },
  { title: "", poster: "", category: "" },
  { title: "", poster: "", category: "" },
  { title: "", poster: "", category: "" },
];

// 상세 화면의 제목, 소개, 출연진, 영상과 썸네일 경로를 편집하세요.
export const TVING_DETAIL = {
  title: "환승연애4",
  episodeTitle: "당신의 X는 당신을 선택했습니다",
  series: "환승연애4",
  episode: "5",
  age: "15",
  date: "2026.10.29",
  duration: "109분",
  synopsis: "당신을 설레게 한 사람은 누구인가요? 문자 한 통에 속마음을 담아 보내는 시간, 그들의 마음이 흔들리기 시작했다. ‘당신의 X는 당신을 선택했습니다.’ 모든 문자가 도착하자마자 울리는 초인종 소리! 상상도 못 한 전개에 놀란 입주자들.",
  cast: "최지우, 유하람, 김다현, 노유나, 정이안",
  // 영상 파일과 별개로 썸네일 이미지를 지정하세요. 예: "/환연5화-썸네일.jpg"
  thumbnail: "/환연 5화 썸네일.png",
  video: "",
  youtubeId: "sXnzyJdZ21o",
};

export type TvingEpisode = { title: string; date: string; duration: string; thumbnail: string };
export const TVING_EPISODES: TvingEpisode[] = [
  { title: "1. 헤어진 연인과 한 집에 살 수 있습니까?", date: "2026.10.01", duration: "95분", thumbnail: "/환연 1화 썸네일.png" },
  { title: "2. 내 X를 소개합니다", date: "2026.10.08", duration: "80분", thumbnail: "/환연 2화 썸네일.png" },
  { title: "3. 데이트의 결말", date: "2026.10.15", duration: "88분", thumbnail: "/환연 3화 썸네일.png" },
  { title: "4. 우리가 헤어진 진짜 이유", date: "2026.10.22", duration: "97분", thumbnail: "/환연 4화 썸네일.png" },
  { title: "5. 당신의 X는 당신을 선택했습니다", date: "2026.10.29", duration: "109분", thumbnail: "/환연 5화 썸네일.png" },
];

export const TVING_CONTINUE_WATCHING = [
  { title: "환승연애4", poster: "/티빙 오리지널 환승연애4 썸네일.png", episode: "시즌4 : 5화", progress: 96, interactive: true },
  { title: "꿈빛파티시엘", poster: "/꿈빛파티시엘 포스터.jpg", episode: "시즌1 : 37화", progress: 50, interactive: false },
  { title: "하트체이스", poster: "/하트체이스.jpg", episode: "시즌1 : 15화", progress: 33, interactive: false },
];


