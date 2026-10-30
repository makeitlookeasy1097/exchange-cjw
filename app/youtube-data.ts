// 유튜브 홈 화면의 글과 사진을 편집하세요.
// 사진은 public 폴더에 저장하고 thumbnail에는 "/파일명.jpg"를 적습니다.
export type YoutubeVideo = {
  title: string;
  channel: string;
  views: string;
  playCount: string;
  age: string;
  duration: string;
  thumbnail: string;
  avatar: string;
  video: string;
  youtubeId?: string;
  likes: string;
  comments: string;
  description: string;
  products?: string;
};

export const YOUTUBE_VIDEOS: YoutubeVideo[] = [
  {
    title: "[환승연애4] 내가 걔한테 제일 좋은 사람인 줄 알았거든 | 메인예고 | TVING | EXchange 4",
    channel: "TVING 티빙",
    views: "370만",
    playCount: "370만",
    age: "1개월 전",
    duration: "1:48",
    thumbnail: "https://img.youtube.com/vi/RD6AOFBAP6U/hqdefault.jpg",
    avatar: "/tving-icon.png",
    video: "",
    youtubeId: "RD6AOFBAP6U",
    likes: "9.7천",
    comments: "3.3천",
    description: "이번 시즌 예고편 걍 미쳤네;;..",
    products: "",
  },
  {
    title: "[하트시그널 시즌5] 사랑하면 살아나는 감각들, 이 감정들을 믿어도 될까요💓 | 티저 | TVING",
    channel: "TVING 티빙",
    views: "169만",
    playCount: "169만",
    age: "8개월 전",
    duration: "1:24",
    thumbnail: "https://img.youtube.com/vi/wmzLH-0fOIw/hqdefault.jpg",
    avatar: "/티빙.png",
    video: "",
    youtubeId: "wmzLH-0fOIw",
    likes: "5.5천",
    comments: "2천",
    description: "저런 얼굴 매일 보면 그냥 설레지",
  },
  {
    title: "왜 컵케이크 괴물이냐고요? 맛으로 그냥 찢으니까요👩‍🍳🔥 흑백파티쉐들의 최강 디저트 대전! ✦ʚ Hearts Chase EP.14 ɞ✦",
    channel: "Hearts2Hearts",
    views: "222만",
    playCount: "222만",
    age: "8개월 전",
    duration: "",
    thumbnail: "https://img.youtube.com/vi/bXSTgYC5dUY/hqdefault.jpg",
    avatar: "/하투하 프사.jpg",
    video: "",
    youtubeId: "bXSTgYC5dUY",
    likes: "",
    comments: "",
    description: "",
  },
  {
    title: "Hearts2Hearts 하츠투하츠 'ICONIC HEART' MV",
    channel: "Hearts2Hearts",
    views: "1,396만",
    playCount: "1,396만",
    age: "2개월 전",
    duration: "",
    thumbnail: "https://img.youtube.com/vi/chl0R8C4NJ8/hqdefault.jpg",
    avatar: "/하투하 프사.jpg",
    video: "",
    youtubeId: "chl0R8C4NJ8",
    likes: "",
    comments: "",
    description: "",
  },
  {
    title: "Hearts2Hearts 하츠투하츠 'FOCUS' MV",
    channel: "SMTOWN",
    views: "약 6,145만",
    playCount: "약 6,145만",
    age: "1년 전",
    duration: "3:10",
    thumbnail: "https://i.ytimg.com/vi/Ur7aK4FvK-U/hqdefault.jpg",
    avatar: "/하투하 프사.jpg",
    video: "",
    youtubeId: "Ur7aK4FvK-U",
    likes: "",
    comments: "",
    description: "",
  },
  {
    title: "Hearts2Hearts 하츠투하츠 'RUDE!' MV",
    channel: "SMTOWN",
    views: "약 1억 5,584만",
    playCount: "약 1억 5,584만",
    age: "8개월 전",
    duration: "3:36",
    thumbnail: "https://i.ytimg.com/vi/F7sGJVUrkjQ/hqdefault.jpg",
    avatar: "/하투하 프사.jpg",
    video: "",
    youtubeId: "F7sGJVUrkjQ",
    likes: "",
    comments: "",
    description: "",
  },
];

export const YOUTUBE_SHORTS = [
  { title: "감자전이 이렇게 맛있다니!!", thumbnail: "" },
  { title: "초4 때 들어가서 7년 버틴 멘탈", thumbnail: "" },
];
