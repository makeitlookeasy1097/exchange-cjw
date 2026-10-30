import { YOUTUBE_VIDEO_LINKS } from "./video-links";
// 인스타그램 화면 내용을 수정할 때 이 파일을 편집하세요.
// 이미지 파일을 public 폴더에 넣고 주소를 "/파일명.jpg"로 입력합니다.
export const INSTAGRAM_PROFILE = {
  username: "wooann_1097",
  name: "최지우",
  avatar: "",
  posts: "6",
  followers: "0",
  following: "0",
  bio: "",
};

export const INSTAGRAM_STORIES = [
  { name: "내 스토리", avatar: "", image: "/사진 33-2.jpg" },
  { name: "hanadulset", avatar: "", image: "/하나즈 스토리.jpg" },
];

export const INSTAGRAM_POSTS = [
  { username: "ianeee", avatar: "/iane-profile.jpg", caption: "룰루랄라🌿", images: ["/카톡 (1).jpg"] },
  { username: "sharp_ingg", avatar: "/sharp-ingg-profile.svg", caption: "[환승연애4] 이안 하람 스킨십을 본 지우의 반응", images: [YOUTUBE_VIDEO_LINKS.reelsV1] },
  { username: "Giggle", avatar: "/giggle-profile.svg", caption: "입주하자마자 싸우는 이안 지우", images: [YOUTUBE_VIDEO_LINKS.reelsV2] },
];

// 프로필 게시물은 총 6개입니다. 사진을 public 폴더에 넣고 image 경로를 바꾸세요.
export const INSTAGRAM_PROFILE_GRID: { images: string[]; caption: string; captions?: string[] }[] = [
  {
    images: ["/사진 32.jpg", "/사진 32-1.jpg", "/사진 32-2.jpg", "/사진 32-3.jpg", "/사진 32-4.jpg"],
    caption: "너랑 있으면 내가 몰랐던 모습들이 나와서 좋아",
    captions: [
      "너랑 있으면 내가 몰랐던 모습들이 나와서 좋아",
      "나도 표현을 안한 것 같은데 이제 자주 표현할게",
      "앞으로 생일 계속 챙겨줄게",
      "생일 축하해",
      "사랑해💚",
    ],
  },
  {
    images: ["/사진 13.jpg", "/최지우 삐진거.jpg", "/사진 11-1.jpg"],
    caption: "여행 가서 첫방 같이 본 날",
    captions: [
      "여행 가서 첫방 같이 본 날",
      "최지우 삐진 거 풀어주느라 힘들었음ㅜㅜ 미안해",
      "자주 여행오자! 사랑해",
    ],
  },
  {
    images: ["/사진 18.jpg", "/사진 17.jpg", "/사진 20.jpg", "/사진 19.jpg"],
    caption: "언니가 찌우 생일 기념으로 쏜다ㅋ",
    captions: [
      "언니가 찌우 생일 기념으로 쏜다ㅋ",
      "티는 잘 안내지만 언니 덕분에 든든할 때도 많고 고마운 것도 많아.",
      "이제 티 좀 내볼게. 내 진심이 언니한테 전해질 수 있게",
      "사랑해💚",
    ],
  },
  { images: ["/사진 7.jpg"], caption: "이 날 최지우 왤케 강아지 같지?ㅋㅋ 강아지우🐶" },
  { images: ["/사진 5.jpg", "/사진 6.jpg"], caption: "우리 이때 진짜 어렸당... 야구 또 보러 가장!" },
  { images: ["/사진 1.jpg", "/사진 2.jpg"], caption: "앞으로 생일 계속 챙겨줄게" },
];
