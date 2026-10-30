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
  { name: "내 스토리", avatar: "", image: "" },
  { name: "hanadulset", avatar: "", image: "" },
];

export const INSTAGRAM_POSTS = [
  { username: "ianeee", avatar: "/iane-profile.jpg", caption: "룰루랄라🌿", images: ["/카톡 (1).jpg"] },
  { username: "sharp_ingg", avatar: "/sharp-ingg-profile.svg", caption: "[환승연애4] 이안 하람 스킨십을 본 지우의 반응", images: ["/reels_v1.mp4"] },
  { username: "Giggle", avatar: "/giggle-profile.svg", caption: "입주하자마자 싸우는 이안 지우", images: ["/reels_v2.mp4"] },
];

// 프로필 게시물은 총 6개입니다. 사진을 public 폴더에 넣고 image 경로를 바꾸세요.
export const INSTAGRAM_PROFILE_GRID: { images: string[]; caption: string; captions?: string[] }[] = [
  { images: ["", "", "", "", ""], caption: "앞으로 생일 계속 챙겨줄게", captions: ["앞으로 생일 계속 챙겨줄게", "너랑 있으면 내가 몰랐던 모습들이 나와서 좋은 것 같아", "나도 괜히 낯간지러워서 표현을 잘 안했었는데 이젠 잘 할게", "생일축하해💚", "사랑해 이안아"] },
  { images: ["", "/최지우 삐진거.jpg", "/최지우 삐진거.jpg"], caption: "여행 가서 첫방 본 날.. 최지우 삐진거 풀어주느라 힘들었음 ㅜㅜ" },
  { images: ["", "/사진 20.jpg"], caption: "언니가 찌우 생일 기념으로 쏜다ㅋ", captions: ["언니가 찌우 생일 기념으로 쏜다ㅋ", "티는 잘 안내지만 언니 덕분에 든든할 때도 많고 고마운 것도 많아. 이제 티 좀 내볼게. 내 진심이 언니한테 전해질 수 있게. 사랑해💚"] },
  { images: [""], caption: "이 날 최지우 왤케 강아지 같지?ㅋㅋ 강아지우🐶" },
  { images: [""], caption: "우리 이때 진짜 어렸당... 야구 또 보러 가장!" },
  { images: ["", "/사진 2.jpg"], caption: "우리 헤어지지말자..." },
];


