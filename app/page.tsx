// @ts-nocheck
"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, CalendarDays, Camera, ChevronLeft, CloudSun, ContactRound, Flashlight, Heart, Image as ImageIcon, Instagram, LockKeyhole, MessageCircle, MoreHorizontal, Phone, PhoneOff, Plus, Send, Settings, Signal, Smartphone, Wifi, X, Youtube, MicOff, Grid3X3, Volume2, UserRoundPlus, Video, Play, Cast, BookmarkPlus, ThumbsUp, Share2, Download, ChevronDown, Search, Bell, House, Clapperboard, CirclePlus, CircleUserRound, Bookmark, Heart as HeartIcon, MessageSquare, Send as SendIcon, Grid2X2, UserRound, RotateCw, Flashlight as FlashIcon, MoreVertical, Star } from "lucide-react";
import { TVING_DETAIL, TVING_EPISODES, TVING_WORKS, TVING_CONTINUE_WATCHING } from "./tving-data";
import { YOUTUBE_VIDEOS } from "./youtube-data";
import { INSTAGRAM_POSTS, INSTAGRAM_PROFILE, INSTAGRAM_PROFILE_GRID, INSTAGRAM_STORIES } from "./instagram-data";
import { PHOTO_ASSETS } from "./photos-data";
import { assetUrl } from "./asset-url";
const WALLPAPER_URL = "/지우%20배경화면.jpg";
const youtubeEmbedUrl = (id, autoplay = false)=>"https://www.youtube-nocookie.com/embed/".concat(id, "?playsinline=1", autoplay ? "&autoplay=1" : "");
const youtubeVideoIdFromUrl = (url)=>{ const match = typeof url === "string" && url.match(/(?:youtube(?:-nocookie)?\.com\/(?:shorts\/|embed\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/); return match ? match[1] : ""; };
const initialMessages = [
    {
        from: "ia",
        text: "언니"
    },
    {
        from: "ia",
        text: "오늘은 같이 못볼 것 같아...ㅜ"
    },
    {
        from: "me",
        text: "왜?"
    },
    {
        from: "me",
        text: "설마 너 오늘 나 데이트하는거 나와서 그래?"
    },
    {
        from: "ia",
        text: "아 무슨"
    },
    {
        from: "ia",
        text: "나 그렇게 쪼잔한 여자 아니거등?"
    },
    {
        from: "ia",
        text: "가족끼리 밥먹기루 했어ㅠㅠ"
    },
    {
        from: "me",
        text: "뭐 먹는데?"
    },
    {
        from: "ia",
        text: "아직 안정했는데 고기 먹을 것 같음"
    },
    {
        from: "me",
        text: "내것두"
    },
    {
        from: "ia",
        text: "아 진짜 왜저래"
    },
    {
        from: "me",
        text: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"
    },
    {
        from: "me",
        text: "맛있게 먹고 와"
    },
    {
        from: "ia",
        text: "언니가 먼저 오라고 했다?"
    },
    {
        from: "ia",
        text: "밥 먹고 바로 갈게"
    },
    {
        from: "me",
        text: "고기 싸오는 거 잊지말고"
    },
    {
        from: "ia",
        text: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋ"
    },
    {
        from: "ia",
        text: "진짜 먹고싶어?"
    },
    {
        from: "ia",
        text: "그럼 배달시켜줄게 ㅔ"
    },
    {
        from: "me",
        text: "아 장난이지"
    },
    {
        from: "me",
        text: "올 때 전화해"
    },
    {
        from: "ia",
        text: "알써♡"
    }
];
// X 피드 편집: 아래 각 게시물의 프로필 주소, 아이디, 시간, 내용, 네 가지 수치,
// 사진/영상 주소(mediaUrl), 미디어 종류(mediaType), 답글 목록을 바꿔 주세요.
const tweets = [
    {
        name: "쮸젭",
        handle: "@ezheart",
        avatarUrl: "/쮸젭 프사.jpg",
        time: "10분",
        text: "아니 지우이안 얘네 진짜 왤케 싸우냐",
        repliesCount: "4",
        retweetsCount: "3",
        likesCount: "28",
        viewsCount: "610",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "하나",
        handle: "@hanachuu",
        avatarUrl: "/하나 프사.jpg",
        time: "35분",
        text: "노유나 최지우 둘이 손잡은거 보자마자 동시에 술 마시는거 개웃기넥ㅋㅋㅋㅋㅋㅋㅋㅋ",
        repliesCount: "7",
        retweetsCount: "11",
        likesCount: "96",
        viewsCount: "1,204",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "땅콩이",
        handle: "@easylife",
        avatarUrl: "/땅콩이 프사.jpg",
        time: "35분",
        text: "아니 얘네 갑자기 미션젠가를 하고 있어... ㅁㅊ정이안 유하람 손 잡음;;;;",
        repliesCount: "5",
        retweetsCount: "8",
        likesCount: "70",
        viewsCount: "987",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "잉",
        handle: "@niceandeasy",
        avatarUrl: "/잉 프사.jpg",
        time: "50분",
        text: "야 미친... 지우 나가자마자 이안이 우는 듯...?",
        repliesCount: "9",
        retweetsCount: "14",
        likesCount: "121",
        viewsCount: "1,776",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "강아쥬",
        handle: "@toooeasy",
        avatarUrl: "/강아쥬 프사.jpg",
        time: "1시간",
        text: "이안이 지우 들어오자마자 바로 싸우려고 시비 낭낭하게 거는데 바로 싸우지 말자고 회피하는거 어떡함..",
        repliesCount: "2",
        retweetsCount: "10",
        likesCount: "81",
        viewsCount: "1,203",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "고고",
        handle: "@easygo",
        avatarUrl: "/고고 프사.jpg",
        time: "1시간",
        text: "ㅁㅊ 방금 이안이가 지우 툭 건드리면서 나오라고 함;;",
        repliesCount: "1",
        retweetsCount: "5",
        likesCount: "42",
        viewsCount: "819",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "콤",
        handle: "@easycome",
        avatarUrl: "/콤 프사.jpg",
        time: "1시간",
        text: "최지우 걍 사람 자체가 ㅈㄴ 유죄인간이네;; 데이트 가기 전에 아침까지 차려주고 운전도 자기가 하겠다는거 뭐임",
        repliesCount: "7",
        retweetsCount: "21",
        likesCount: "190",
        viewsCount: "3,444",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "응안이안",
        handle: "@easypeasy",
        avatarUrl: "/응안이안 프사.jpg",
        time: "2시간",
        text: "근데 정이안 x 들어오자마자 개조용해진거 나만 웃김? 어쩐지 너무 눈치도 안보고 데이트 하고 돌아다닌다 했다...",
        repliesCount: "4",
        retweetsCount: "15",
        likesCount: "103",
        viewsCount: "1,552",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "츄잉",
        handle: "@takeiteasy",
        avatarUrl: "/츄잉 프사.jpg",
        time: "2시간",
        text: "3살차이에 잇티제 엔프피? 걍 상극인데 5년 사귄게 진짜 ㄹㅈㄷ다",
        repliesCount: "2",
        retweetsCount: "8",
        likesCount: "59",
        viewsCount: "1,082",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "숭사노바",
        handle: "@sooooooong",
        avatarUrl: "/숭사노바 프사.jpg",
        time: "2시간",
        text: "아니 이번 환연 다 왤케 더치페이스가 잘됨? 저번화에 유나하람 걔네도 미쳤던데 이번에 지우이안 얘네도 미쳤네",
        repliesCount: "6",
        retweetsCount: "19",
        likesCount: "137",
        viewsCount: "2,801",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    },
    {
        name: "체이스",
        handle: "@makeitlookeasy",
        avatarUrl: "/체이스 프사.jpg",
        time: "2시간",
        text: "환연 메기 등장 타이밍 미쳤다;;; 근데 얼굴은 더 미쳤음",
        repliesCount: "3",
        retweetsCount: "3.7K",
        likesCount: "12K",
        viewsCount: "2M",
        mediaUrl: "",
        mediaType: "video",
        youtubeId: "z1eaCYEKo9c",
        replies: []
    },
    {
        name: "S2",
        handle: "@ezfkez",
        avatarUrl: "/S2 프사.jpg",
        time: "2시간",
        text: "환승연애 5화 시작합니다",
        repliesCount: "9",
        retweetsCount: "9",
        likesCount: "77",
        viewsCount: "2,430",
        mediaUrl: "",
        mediaType: "none",
        replies: []
    }
];
const USER_SCRIPT = [
    "오늘 방송은 안봐도 될 것 같아..ㅎ",
    "ㅎㅎ...",
    "별 거 안했어",
    "우리 싸우는거 너무 많이 나와서 좀 그래",
    "아 뭘 또 찾아보구 그래..."
];
const NOYUNA_MESSAGES = [
    "언니",
    "오늘 방송 봄?",
    "지금 다 난리났음;;",
    "왤케 싸운거임 진짜로"
];
const KAKAO_CHAT = [
    {
        from: "ia",
        text: "언니 나 사진 골라주라"
    },
    {
        from: "ia",
        photos: Array.from({
            length: 11
        }, (_, i)=>"/".concat(encodeURIComponent("카톡 (".concat(i + 1, ").jpg"))))
    },
    {
        from: "me",
        text: "1"
    },
    {
        from: "ia",
        text: "첫번째 사진만 좋다구..?"
    },
    {
        from: "me",
        text: "아니 올릴거면 그것만 올리라고"
    },
    {
        from: "me",
        text: "다 잘 나왔어"
    },
    {
        from: "me",
        text: "근데 인스타 올리는건 좀 싫다"
    },
    {
        from: "ia",
        text: "ㅋㅋㅋㅋㅋㅋ"
    },
    {
        from: "ia",
        text: "알써 그럼 그것만 올릴게"
    },
    {
        from: "me",
        text: "저번에 가족들이랑 캠핑갔을때야?"
    },
    {
        from: "ia",
        text: "웅"
    },
    {
        from: "ia",
        text: "담에 같이 오자"
    },
    {
        from: "me",
        text: "언제 가지?"
    },
    {
        from: "ia",
        text: "음..."
    },
    {
        from: "ia",
        text: "일단 방송이 끝나야 되지 않을까.."
    },
    {
        from: "me",
        text: "캠핑하다가 얼어 죽겠다"
    },
    {
        from: "ia",
        text: "ㅋㅋㅋㅋㅋㅋㅠㅠ"
    }
];
const INBOX_NOTIFICATIONS = [
    {
        sender: "1588-0000",
        initials: "1",
        time: "13:20",
        preview: "[Web발신] (광고) [EWPS] 최지우님만을 위한 특별 혜택! 최대 70% 할인 쿠폰이 발급되었습니다...",
    },
    {
        sender: "CJ ONE",
        initials: "C",
        time: "11:50",
        preview: "[광고] [CJ ONE] 최지우님, 보너스 포인트 1,000P가 적립되었습니다! 올리브영/CGV에서 지금 바로...",
    },
    {
        sender: "국민카드",
        initials: "국",
        time: "10:20",
        preview: "[KB국민카드] 10/30 14:20 최지우님 승인 12,500원 (스타벅스)",
    },
    {
        sender: "김주은",
        initials: "김",
        time: "어제",
        preview: "응응 방금 다 확인했어 나중에 전화할게",
    },
    {
        sender: "[국제발신]",
        initials: "국",
        time: "어제",
        preview: "인증번호 [849201]을 입력해주세요. 타인에게 노출하지 마세요.",
    },
    {
        sender: "CJ대한통운",
        initials: "C",
        time: "어제",
        preview: "[광고] 고객님의 상품이 오늘 14시~16시 사이에 배송 예정입니다. 배송기사: 홍길동",
    },
    {
        sender: "엄마",
        initials: "엄",
        time: "2일 전",
        preview: "그래 알겠다 늦게 다니지 말고",
    },
    {
        sender: "1544-7199",
        initials: "1",
        time: "2일 전",
        preview: "[Web발신] (광고) [MUSINSA] 최지우님을 위한 아우터 단독 20% 할인 쿠폰이 발급되었습니다. 자...",
    },
];

const RECENT_CALLS = [
    { name: "엄마", time: "2시간 전", direction: "↙" },
    { name: "02-1234-5678", time: "4시간 전", direction: "↙" },
    { name: "이아니 💚", time: "어제", direction: "↙" },
    { name: "이아니 💚", time: "01:45", direction: "↙" },
    { name: "노유나", time: "어제", direction: "↙" },
    { name: "김주은", time: "어제", direction: "↙" },
    { name: "이아니 💚", time: "2일 전", direction: "↙", missed: true },
    { name: "02-9876-5432", time: "2일 전", direction: "↙" },
    { name: "엄마", time: "2일 전", direction: "↙", missed: true },
    { name: "이아니 💚", time: "2일 전", direction: "↙" },
    { name: "이아니 💚", time: "3일 전", direction: "↙" },
    { name: "엄마", time: "3일 전", direction: "↗" },
    { name: "이아니 💚", time: "3일 전", direction: "↙", missed: true },
];
// 홈 화면 아이콘 설정: label은 보이는 이름, icon은 아래 APP_ICONS 이름,
// color는 아이콘 배경, screen은 눌렀을 때 열 화면입니다.
const HOME_APPS = [
    {
        label: "캘린더",
        icon: "calendar",
        color: "linear-gradient(145deg,#fff,#f3f3f3)",
        image: "/calendar-icon-29.svg",
        screen: "calendar"
    },
    {
        label: "카메라",
        icon: "camera",
        color: "linear-gradient(145deg,#52545a,#15161a)",
        image: "/camera-icon.png",
        screen: "camera"
    },
    {
        label: "설정",
        icon: "settings",
        color: "linear-gradient(145deg,#b8bec4,#59616b)",
        image: "/settings-icon.png",
        imageScale: 1.08
    },
    {
        label: "인스타그램",
        icon: "instagram",
        color: "transparent",
        image: "/instagram-icon.png",
        imageScale: 1.12,
        screen: "instagram"
    },
    {
        label: "카카오톡",
        icon: "kakao",
        color: "#fee500",
        image: "/kakao-icon.png",
        screen: "kakao"
    },
    {
        label: "X",
        icon: "x",
        color: "#111",
        image: "/x-icon.png",
        screen: "x"
    },
    {
        label: "티빙",
        icon: "tving",
        color: "#171238",
        image: "/tving-icon.png",
        screen: "tving"
    },
    {
        label: "유튜브",
        icon: "youtube",
        color: "#fff",
        image: "/유튜브.png",
        imageScale: 1,
        screen: "youtube"
    }
];
const APP_ICONS = {
    calendar: /*#__PURE__*/ _jsx(CalendarDays, {
        size: 28
    }),
    camera: /*#__PURE__*/ _jsx(Camera, {
        size: 26
    }),
    settings: /*#__PURE__*/ _jsx(Settings, {
        size: 28
    }),
    instagram: /*#__PURE__*/ _jsx(Instagram, {
        size: 28
    }),
    kakao: /*#__PURE__*/ _jsx(MessageCircle, {
        size: 26,
        fill: "white"
    }),
    x: /*#__PURE__*/ _jsx(X, {
        size: 28
    }),
    tving: /*#__PURE__*/ _jsx("span", {
        className: "text-[21px] font-black not-italic",
        children: "T"
    }),
    youtube: /*#__PURE__*/ _jsx(Youtube, {
        size: 30
    })
};
const notifications = [
    "언니",
    "오늘 방송 봄?",
    "지금 다 난리났음;;",
    "왤케 싸운거임 진짜로"
];
const formatVideoDuration = (seconds)=>{
    if (!Number.isFinite(seconds) || seconds <= 0) return "";
    const total = Math.floor(seconds);
    return "".concat(Math.floor(total / 60), ":").concat(String(total % 60).padStart(2, "0"));
};
const isVideoAsset = (src)=>!!src && (/^data:video\//i.test(src) || /\.(mp4|webm|mov)(?:[?#]|$)/i.test(src));
// 2026년 10월 1일은 목요일. 일요일부터 시작하는 달력에서 앞 공백은 4칸입니다.
const calendarDays = Array.from({
    length: 35
}, (_, i)=>i < 4 || i > 34 ? "" : String(i - 3));
const replyMilestones = {
    1: [
        "뭐야",
        "최지우 데이트가서 뭐했는데."
    ],
    4: [
        "에이 뭘 새삼스럽게",
        "근데 진짜 그거때문인거 맞지????",
        "나 찾아본다??"
    ],
    5: [
        "안되겠구만",
        "나 지금 가는중이니까 다시 보자"
    ]
};
const callTranscript = [
    "나: 어디쯤이야?",
    "이아니: 여기 언니 집 앞 편의점 보여",
    "나: 금방 나갈게",
    "나: 편의점에 들어가있어",
    "이아니: 알았엉"
];
const s2Replies = [
    "와 근데 정이안 x 누구일까.. 아예 감도 안옴",
    "ㅁㅊ 뭐야?",
    "그럼 지금 들어오는 메기가 정이안 x인건가 아무래도 그렇겠지?? 맨날 사람들하고 잘 놀다가 메기 들어오니까 조용해져서;;",
    "최지우 미친 개설렘;; 데이트도 재밌고 얘네 얼굴합도 좋은데...",
    "와 잠만 방금 정이안 표정 본 사람;; 개무서운데...",
    "미친 정이안이 최지우 불렀음;;",
    "최지우 회피한건가? 왤케 대답을 피하지",
    "와 얘네 또 싸우네",
    "오늘 5화는 그냥 얘네 얘기로 꽉 차있네. 당연한 듯 오자마자 질투하고 신경쓰고 싸우고 또 질투하고 신경쓰고 싸우고 있음;;"
];
const s2ReplyTimes = [
    "2시간",
    "2시간",
    "2시간",
    "1시간",
    "1시간",
    "1시간",
    "1시간",
    "20분",
    "1분"
];
function StatusBar(param) {
    let { dark = false } = param;
    return /*#__PURE__*/ _jsxs("div", {
        className: "relative z-20 flex h-10 w-full items-center justify-between px-7 pt-1 text-[12px] font-semibold ".concat(dark ? "text-black" : "text-white"),
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "w-16",
                children: "20:00"
            }),
            /*#__PURE__*/ _jsx("span", {
                className: "w-20"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "flex w-[92px] items-center justify-end gap-1",
                children: [
                    /*#__PURE__*/ _jsx(Signal, {
                        size: 14,
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ _jsx(Wifi, {
                        size: 14
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: "adaptive-battery relative ml-0.5 inline-flex h-[15px] min-w-[25px] items-center justify-center rounded-[3px] border-[1.5px] border-white bg-white px-[2px] text-[9px] leading-none text-black after:absolute after:-right-[4px] after:h-[6px] after:w-[2px] after:rounded-r-sm after:bg-white",
                        children: "97"
                    })
                ]
            })
        ]
    });
}
function AppIcon(param) {
    let { label, icon, color, imageSrc, imageScale = 1, badge, onClick, small = false, disabled = false } = param;
    return /*#__PURE__*/ _jsxs("button", {
        onClick: onClick,
        disabled: disabled,
        className: "flex flex-col items-center gap-1.5 ".concat(small ? "w-[62px]" : "w-[68px]", " ").concat(disabled ? "cursor-default" : ""),
        children: [
            /*#__PURE__*/ _jsxs("span", {
                className: "".concat(small ? "h-12 w-12" : "h-[58px] w-[58px]", " relative grid place-items-center text-white"),
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "absolute inset-0 grid place-items-center overflow-hidden rounded-[17px] text-white shadow-lg ring-1 ring-black/5",
                        style: {
                            background: color
                        },
                        children: imageSrc ? /*#__PURE__*/ _jsx("img", {
                            src: assetUrl(imageSrc),
                            alt: "",
                            className: "pointer-events-none h-full w-full object-contain",
                            style: {
                                transform: "scale(".concat(imageScale, ")")
                            }
                        }) : icon
                    }),
                    badge && /*#__PURE__*/ _jsx("span", {
                        className: "absolute -right-2 -top-2 z-40 min-w-5 rounded-full bg-[#ff3b30] px-1.5 text-center text-[11px] font-semibold leading-5 text-white shadow-sm ring-2 ring-white/70",
                        children: badge
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("span", {
                className: "max-w-full truncate text-[10px] font-medium text-white drop-shadow-md",
                children: label
            })
        ]
    });
}
function CalendarMini(param) {
    let { onClick } = param;
    return /*#__PURE__*/ _jsxs("button", {
        onClick: onClick,
        className: "w-[150px] rounded-[20px] bg-white/90 p-3 text-left text-gray-900 shadow-lg backdrop-blur-xl",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "mb-1 flex items-center justify-between text-[10px] font-semibold text-red-500",
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        children: "10월"
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        children: "2026"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid grid-cols-7 text-center text-[8px] text-gray-500",
                children: [
                    "일",
                    "월",
                    "화",
                    "수",
                    "목",
                    "금",
                    "토"
                ].map((d)=>/*#__PURE__*/ _jsx("span", {
                        className: "py-0.5",
                        children: d
                    }, d))
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid grid-cols-7 text-center text-[9px]",
                children: calendarDays.map((d, i)=>/*#__PURE__*/ _jsxs("span", {
                        className: "relative grid h-[16px] place-items-center",
                        children: [
                            d && /*#__PURE__*/ _jsx("span", {
                                className: d === "29" ? "grid h-[16px] w-[16px] place-items-center rounded-full bg-red-500 font-bold text-white" : "",
                                children: d
                            }),
                            d === "9" && /*#__PURE__*/ _jsx("span", {
                                className: "absolute bottom-0 h-1 w-1 rounded-full bg-green-500"
                            })
                        ]
                    }, i))
            }),
            /*#__PURE__*/ _jsx("span", {
                className: "mt-1 block text-[8px] text-gray-500",
                children: "9일 이안이 생일 \uD83C\uDF82"
            })
        ]
    });
}
function Avatar(param) {
    let { tweet, size = "h-10 w-10", imageUrl, onUpload, onClick } = param;
    const content = imageUrl ? /*#__PURE__*/ _jsx("img", {
        src: assetUrl(imageUrl),
        alt: "".concat(tweet.name, " 프로필"),
        className: "h-full w-full object-cover"
    }) : /*#__PURE__*/ _jsx(DefaultProfileAvatar, {
        className: "h-full w-full"
    });
    return /*#__PURE__*/ _jsxs("span", {
        className: "".concat(size, " relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-[#e5e7eb]"),
        onClick: onClick ? (event)=>{ event.stopPropagation(); onClick(); } : undefined,
        children: [
            content,
            onUpload && /*#__PURE__*/ _jsx("label", {
                title: "프로필 사진 선택",
                onClick: (e)=>e.stopPropagation(),
                className: "absolute inset-0 cursor-pointer opacity-0",
                children: /*#__PURE__*/ _jsx("input", {
                    type: "file",
                    accept: "image/*",
                    className: "h-full w-full cursor-pointer",
                    onChange: (e)=>{
                        var _e_target_files;
                        return onUpload((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);
                    }
                })
            })
        ]
    });
}
function DefaultProfileAvatar(param) {
    let { className = "" } = param;
    return /*#__PURE__*/ _jsxs("span", {
        className: "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f5f5f5] ".concat(className),
        "aria-label": "기본 프로필 사진",
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "absolute top-[21%] h-[33%] w-[33%] rounded-full bg-[#d5d5d5]"
            }),
            /*#__PURE__*/ _jsx("span", {
                className: "absolute bottom-[7%] h-[39%] w-[76%] rounded-t-[50%] bg-[#d5d5d5]"
            })
        ]
    });
}
function CallControl(param) {
    let { label, icon, active = false, onClick } = param;
    return /*#__PURE__*/ _jsxs("button", {
        onClick: onClick,
        className: "flex flex-col items-center gap-1.5 text-[10px] text-white/85",
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "grid h-[54px] w-[54px] place-items-center rounded-full ".concat(active ? "bg-white text-black" : "bg-black/35 text-white"),
                children: icon
            }),
            label
        ]
    });
}
export default function Page() {
    var _messages_, _TVING_EPISODES_, _TVING_EPISODES_1, _TVING_EPISODES_2, _YOUTUBE_VIDEOS_selectedYoutube, _YOUTUBE_VIDEOS_selectedYoutube1, _YOUTUBE_VIDEOS_selectedYoutube2, _YOUTUBE_VIDEOS_selectedYoutube3, _YOUTUBE_VIDEOS_selectedYoutube4, _YOUTUBE_VIDEOS_selectedYoutube5, _YOUTUBE_VIDEOS_selectedYoutube6, _YOUTUBE_VIDEOS_selectedYoutube7, _YOUTUBE_VIDEOS_selectedYoutube8, _YOUTUBE_VIDEOS_selectedYoutube9, _YOUTUBE_VIDEOS_selectedYoutube10, _INSTAGRAM_STORIES_instagramStoryIndex, _INSTAGRAM_STORIES_instagramStoryIndex1, _INSTAGRAM_STORIES_instagramStoryIndex2, _PHOTO_ASSETS_selectedPhotoIndex, _PHOTO_ASSETS_selectedPhotoIndex1, _PHOTO_ASSETS_selectedPhotoIndex2;
    const [screen, setScreen] = useState("lock");
    const [noyunaRead, setNoyunaRead] = useState(false);
    const [messageBadgeCleared, setMessageBadgeCleared] = useState(false);
    const [callMessageBadge, setCallMessageBadge] = useState(false);
    const [notes, setNotes] = useState(0);
    const [pass, setPass] = useState("");
    const [messages, setMessages] = useState(initialMessages);
    const [draft, setDraft] = useState("");
    const [sentCount, setSentCount] = useState(0);
    const [typing, setTyping] = useState(false);
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [callIncoming, setCallIncoming] = useState(false);
    const [missed, setMissed] = useState(false);
    const [callLine, setCallLine] = useState(0);
    const [callSeconds, setCallSeconds] = useState(0);
    const [callMuted, setCallMuted] = useState(false);
    const [speakerOn, setSpeakerOn] = useState(false);
    const [showCallKeypad, setShowCallKeypad] = useState(false);
    const [tweetTab, setTweetTab] = useState("추천");
    const [thread, setThread] = useState(false);
    const [selectedTweet, setSelectedTweet] = useState(tweets.find((tweet)=>tweet.handle === "@ezfkez"));
    const [liked, setLiked] = useState(false);
    const [unlocking, setUnlocking] = useState(false);
    const [selectedDay, setSelectedDay] = useState(29);
    const [tvingTab, setTvingTab] = useState("에피소드");
    const [tvingPlaying, setTvingPlaying] = useState(false);
    const [tvingStarted, setTvingStarted] = useState(false);
    const [tvingSplash, setTvingSplash] = useState(false);
    const [tvingSaved, setTvingSaved] = useState(false);
    const [tvingRated, setTvingRated] = useState(false);
    const [youtubeTab, setYoutubeTab] = useState("전체");
    const [youtubeNav, setYoutubeNav] = useState("홈");
    const [selectedYoutube, setSelectedYoutube] = useState(0);
    const [youtubePlaying, setYoutubePlaying] = useState(false);
    const [youtubeDurations, setYoutubeDurations] = useState({});
    const [instagramCarousel, setInstagramCarousel] = useState({});
    const [instagramLiked, setInstagramLiked] = useState({
        0: true
    });
    const [userImages, setUserImages] = useState({});
    const [showIncomingMessage, setShowIncomingMessage] = useState(false);
    const [cameraMode, setCameraMode] = useState("동영상");
    const [instagramPostIndex, setInstagramPostIndex] = useState(0);
    const [instagramStoryIndex, setInstagramStoryIndex] = useState(0);
    const [instagramStoryFromProfile, setInstagramStoryFromProfile] = useState(false);
    const [instagramShowingProfilePost, setInstagramShowingProfilePost] = useState(false);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
    const [phoneTab, setPhoneTab] = useState("최근 통화");
    const touchY = useRef(null);
    const instagramTouchX = useRef(null);
    const messageEnd = useRef(null);
    const tvingVideoRef = useRef(null);
    const youtubeVideoRef = useRef(null);
    const cameraModesRef = useRef(null);
    const replyTimer = useRef(null);
    const unlockTimer = useRef(null);
    const incomingTimer = useRef(null);
    const goHome = ()=>setScreen("home");
    const openTving = ()=>{
        setScreen("tving");
        setTvingSplash(true);
        setTimeout(()=>setTvingSplash(false), 1100);
    };
    const openTvingDetail = ()=>{
        setTvingStarted(false);
        setTvingPlaying(false);
        setScreen("tvingDetail");
    };
    const startTvingPlayback = ()=>{
        setTvingStarted(true);
        if (tvingVideoRef.current) void tvingVideoRef.current.play();
    };
    const unlockSwipe = ()=>{
        if (unlocking) return;
        setUnlocking(true);
        unlockTimer.current = setTimeout(()=>{
            setScreen("passcode");
            setPass("");
            setUnlocking(false);
        }, 650);
    };
    const openMessages = ()=>{
        setScreen("inbox");
        setMessageBadgeCleared(true);
        setCallMessageBadge(false);
        setShowKeyboard(false);
        setCallIncoming(false);
    };
    const openNoyuna = ()=>{
        setScreen("noyuna");
        setNoyunaRead(true);
        setCallIncoming(false);
    };
    const sendMessage = useCallback(()=>{
        // 눌린 키 수만큼 다음 대사가 미리보기로 써지고, 보내면 대사 전체를 전송합니다.
        const text = USER_SCRIPT[sentCount];
        if (!text) return;
        setMessages((m)=>[
                ...m,
                {
                    from: "me",
                    text
                }
            ]);
        setDraft("");
        const next = sentCount + 1;
        setSentCount(next);
        const replies = replyMilestones[next];
        if (!replies) return;
        let index = 0;
        const deliverNext = ()=>{
            setTyping(true);
            replyTimer.current = setTimeout(()=>{
                const reply = replies[index];
                setMessages((m)=>[
                        ...m,
                        {
                            from: "ia",
                            text: reply
                        }
                    ]);
                setTyping(false);
                index++;
                if (index < replies.length) {
                    replyTimer.current = setTimeout(deliverNext, 420);
                } else if (reply === "나 지금 가는중이니까 다시 보자") {
                    incomingTimer.current = setTimeout(()=>setCallIncoming(true), 2000);
                }
            }, 850);
        };
        deliverNext();
    }, [
        sentCount
    ]);
    const pressSimulatedKey = (key)=>{
        if (key === "⌫") {
            setDraft((value)=>value.slice(0, -1));
            return;
        }
        var _USER_SCRIPT_sentCount;
        const nextText = (_USER_SCRIPT_sentCount = USER_SCRIPT[sentCount]) !== null && _USER_SCRIPT_sentCount !== void 0 ? _USER_SCRIPT_sentCount : "";
        if (nextText) setDraft((value)=>nextText.slice(0, Math.min(nextText.length, value.length + 1)));
    };
    useEffect(()=>{
        var _messageEnd_current;
        (_messageEnd_current = messageEnd.current) === null || _messageEnd_current === void 0 ? void 0 : _messageEnd_current.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages,
        typing
    ]);
    useEffect(()=>{
        var _cameraModesRef_current;
        if (screen !== "camera") return;
        const selected = (_cameraModesRef_current = cameraModesRef.current) === null || _cameraModesRef_current === void 0 ? void 0 : _cameraModesRef_current.querySelector('[data-mode="'.concat(cameraMode, '"]'));
        if (selected && cameraModesRef.current) cameraModesRef.current.scrollTo({
            left: selected.offsetLeft - cameraModesRef.current.clientWidth / 2 + selected.clientWidth / 2,
            behavior: "smooth"
        });
    }, [
        screen,
        cameraMode
    ]);
    useEffect(()=>{
        if (screen !== "lock") return;
        setNotes(0);
        let count = 0;
        const timer = setInterval(()=>{
            count++;
            setNotes(count);
            if (count >= notifications.length) clearInterval(timer);
        }, 850);
        return ()=>clearInterval(timer);
    }, [
        screen
    ]);
    useEffect(()=>{
        if (screen !== "activeCall") return;
        const timer = setInterval(()=>setCallLine((v)=>Math.min(v + 1, callTranscript.length)), 2100);
        const seconds = setInterval(()=>setCallSeconds((v)=>v + 1), 1000);
        return ()=>{
            clearInterval(timer);
            clearInterval(seconds);
        };
    }, [
        screen
    ]);
    useEffect(()=>{
        var _YOUTUBE_VIDEOS_selectedYoutube;
        if (screen !== "youtubeDetail" || !((_YOUTUBE_VIDEOS_selectedYoutube = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube.video)) return;
        const timer = setTimeout(()=>{
            var _youtubeVideoRef_current;
            void ((_youtubeVideoRef_current = youtubeVideoRef.current) === null || _youtubeVideoRef_current === void 0 ? void 0 : _youtubeVideoRef_current.play().catch(()=>{}));
        }, 80);
        return ()=>clearTimeout(timer);
    }, [
        screen,
        selectedYoutube
    ]);
    useEffect(()=>{
        const syncFullscreenOrientation = ()=>{
            var _orientation_lock, _orientation_unlock;
            const orientation = window.screen.orientation;
            if (document.fullscreenElement) void (orientation === null || orientation === void 0 ? void 0 : (_orientation_lock = orientation.lock) === null || _orientation_lock === void 0 ? void 0 : _orientation_lock.call(orientation, "landscape").catch(()=>{}));
            else orientation === null || orientation === void 0 ? void 0 : (_orientation_unlock = orientation.unlock) === null || _orientation_unlock === void 0 ? void 0 : _orientation_unlock.call(orientation);
        };
        document.addEventListener("fullscreenchange", syncFullscreenOrientation);
        return ()=>document.removeEventListener("fullscreenchange", syncFullscreenOrientation);
    }, []);
    useEffect(()=>()=>{
            if (replyTimer.current) clearTimeout(replyTimer.current);
            if (unlockTimer.current) clearTimeout(unlockTimer.current);
            if (incomingTimer.current) clearTimeout(incomingTimer.current);
        }, []);
    useEffect(()=>{
        try {
            const saved = window.localStorage.getItem("jiwoo-phone-images");
            if (saved) {
                const images = JSON.parse(saved);
                for (const key of Object.keys(images))if (/^ig-(?:grid|post)-\d+$/.test(key)) delete images[key];
                setUserImages(images);
                window.localStorage.setItem("jiwoo-phone-images", JSON.stringify(images));
            }
        } catch (e) {}
    }, []);
    const acceptCall = ()=>{
        setCallIncoming(false);
        setScreen("activeCall");
        setCallLine(1);
        setCallSeconds(0);
    };
    const declineCall = ()=>{
        setCallIncoming(false);
        setMissed(true);
        setScreen("home");
        incomingTimer.current = setTimeout(()=>{
            setMessages((m)=>[
                    ...m,
                    {
                        from: "ia",
                        text: "거의 다 와가는데 왜 안받ㅇㅏ아ㅏㅇ"
                    }
                ]);
            setShowIncomingMessage(true);
            setCallMessageBadge(true);
            setTimeout(()=>setShowIncomingMessage(false), 3600);
            incomingTimer.current = setTimeout(()=>setCallIncoming(true), 4000);
        }, 2000);
    };
    const openYoutubeVideo = (index)=>{
        setSelectedYoutube(index);
        setYoutubePlaying(false);
        setScreen("youtubeDetail");
    };
    const saveUserImage = (key, file)=>{
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ()=>{
            if (typeof reader.result !== "string") return;
            setUserImages((previous)=>{
                const updated = {
                    ...previous,
                    [key]: reader.result
                };
                try {
                    window.localStorage.setItem("jiwoo-phone-images", JSON.stringify(updated));
                } catch (e) {}
                return updated;
            });
        };
        reader.readAsDataURL(file);
    };
    const saveUserImageSet = function(key, files) {
        let replace = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (!(files === null || files === void 0 ? void 0 : files.length)) return;
        const readFile = (file)=>new Promise((resolve, reject)=>{
                const reader = new FileReader();
                reader.onload = ()=>resolve(String(reader.result));
                reader.onerror = ()=>reject(reader.error);
                reader.readAsDataURL(file);
            });
        void Promise.all(Array.from(files).map(readFile)).then((images)=>{
            setUserImages((current)=>{
                var _INSTAGRAM_PROFILE_GRID_postIndex;
                const updated = {
                    ...current
                };
                const postIndex = Number(key.replace("ig-grid-", ""));
                var _INSTAGRAM_PROFILE_GRID_postIndex_images_length;
                const slots = (_INSTAGRAM_PROFILE_GRID_postIndex_images_length = (_INSTAGRAM_PROFILE_GRID_postIndex = INSTAGRAM_PROFILE_GRID[postIndex]) === null || _INSTAGRAM_PROFILE_GRID_postIndex === void 0 ? void 0 : _INSTAGRAM_PROFILE_GRID_postIndex.images.length) !== null && _INSTAGRAM_PROFILE_GRID_postIndex_images_length !== void 0 ? _INSTAGRAM_PROFILE_GRID_postIndex_images_length : 1;
                let start = 0;
                if (!replace) while(start < slots && updated["".concat(key, "-").concat(start)])start++;
                const available = images.slice(0, Math.max(0, slots - start));
                available.forEach((image, index)=>{
                    updated["".concat(key, "-").concat(replace ? index : start + index)] = image;
                });
                try {
                    window.localStorage.setItem("jiwoo-phone-images", JSON.stringify(updated));
                } catch (e) {}
                return updated;
            });
            setInstagramCarousel((current)=>({
                    ...current,
                    [100 + Number(key.replace("ig-grid-", ""))]: 0
                }));
        }).catch(()=>{});
    };
    const startY = (e)=>{
        touchY.current = e.touches[0].clientY;
    };
    const endY = (e)=>{
        if (touchY.current !== null && touchY.current - e.changedTouches[0].clientY > 65 && screen === "lock") unlockSwipe();
        touchY.current = null;
    };
    const lockBg = "absolute inset-0 bg-[radial-gradient(ellipse_at_75%_22%,rgba(255,224,206,.75),transparent_33%),radial-gradient(ellipse_at_18%_78%,rgba(86,105,105,.72),transparent_38%),linear-gradient(145deg,#373a40,#9a8d82_48%,#293038)]";
    const lockClass = "flex h-full flex-col transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ".concat(unlocking ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100");
    return /*#__PURE__*/ _jsx("main", {
        className: "flex min-h-screen items-center justify-center overflow-hidden bg-[#08090c] p-2 sm:p-6",
        children: /*#__PURE__*/ _jsxs("div", {
            onTouchStart: startY,
            onTouchEnd: endY,
            className: "phone-shell relative h-[min(844px,calc(100dvh-16px))] w-[min(390px,calc(100vw-16px))] overflow-hidden rounded-[42px] border border-white/15 bg-black sm:h-[min(844px,calc(100dvh-48px))]",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "".concat(lockBg, " bg-[#111]"),
                    children: [
                        /*#__PURE__*/ _jsx("img", {
                            src: assetUrl(WALLPAPER_URL),
                            alt: "지우 배경화면",
                            className: "h-full w-full object-cover"
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "pointer-events-none absolute left-1/2 top-[10px] z-40 h-[26px] w-[94px] -translate-x-1/2 rounded-full bg-black"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "relative z-10 h-full",
                    children: [
                        screen === "lock" && /*#__PURE__*/ _jsxs("div", {
                            className: lockClass,
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "pt-5 text-center text-white drop-shadow-lg",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "text-[15px] font-medium tracking-wide",
                                            children: "목요일, 10월 29일"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mt-[-5px] text-[88px] font-semibold leading-[1.08] tracking-[-5px]",
                                            children: "20:00"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "relative mx-2.5 mb-3 min-h-0 flex-1",
                                    children: notifications.slice(0, notes).map((n, i)=>/*#__PURE__*/ _jsxs("button", {
                                            onClick: openNoyuna,
                                            className: "notification glass absolute left-0 right-0 flex h-16 items-start gap-2.5 overflow-hidden rounded-2xl p-3 text-left shadow-md",
                                            style: {
                                                bottom: "".concat((notes - 1 - i) * 70, "px"),
                                                animationDelay: "".concat(i * 0.1, "s")
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#31c85a] text-white",
                                                    children: /*#__PURE__*/ _jsx(MessageCircle, {
                                                        size: 18,
                                                        fill: "white"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "flex justify-between text-[12px] font-semibold",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: "노유나"
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "font-normal text-black/45",
                                                                    children: "지금"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "block text-[13px] leading-4",
                                                            children: n
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, n))
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "mt-auto flex items-end justify-between px-8 pb-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "grid h-11 w-11 place-items-center rounded-full bg-black/35 text-white backdrop-blur-lg",
                                            children: /*#__PURE__*/ _jsx(Flashlight, {
                                                size: 20
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>setScreen("camera"),
                                            className: "grid h-11 w-11 place-items-center rounded-full bg-black/35 text-white backdrop-blur-lg",
                                            children: /*#__PURE__*/ _jsx(Camera, {
                                                size: 20
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    onClick: unlockSwipe,
                                    className: "swipe-hint pb-3 text-center text-[13px] font-medium text-white/85 drop-shadow",
                                    children: "위로 쓸어올려서 열기"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    onClick: unlockSwipe,
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "h-[5px] w-[134px] rounded-full bg-white"
                                    })
                                })
                            ]
                        }),
                        screen === "passcode" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col items-center bg-black/35 text-white backdrop-blur-2xl",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "mt-16 text-center",
                                    children: [
                                        /*#__PURE__*/ _jsx(LockKeyhole, {
                                            size: 24,
                                            className: "mx-auto mb-4"
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "text-[17px]",
                                            children: "암호 입력"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mt-5 flex justify-center gap-4",
                                            children: [
                                                0,
                                                1,
                                                2,
                                                3
                                            ].map((i)=>/*#__PURE__*/ _jsx("span", {
                                                    className: "h-[11px] w-[11px] rounded-full border border-white ".concat(pass.length > i ? "bg-white" : "bg-transparent")
                                                }, i))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "mt-auto grid w-[270px] grid-cols-3 gap-x-7 gap-y-3 pb-14",
                                    children: [
                                        "1",
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6",
                                        "7",
                                        "8",
                                        "9",
                                        "",
                                        "0",
                                        "⌫"
                                    ].map((v, i)=>/*#__PURE__*/ _jsx("button", {
                                            disabled: !v,
                                            onClick: ()=>{
                                                if (v === "⌫") {
                                                    setPass((p)=>p.slice(0, -1));
                                                    return;
                                                }
                                                const next = pass + v;
                                                setPass(next);
                                                if (next.length === 4) setTimeout(()=>next === "1097" ? goHome() : setPass(""), 180);
                                            },
                                            className: "mx-auto grid h-[68px] w-[68px] place-items-center rounded-full bg-white/15 text-[28px] font-light active:bg-white/30",
                                            children: v
                                        }, i))
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    onClick: ()=>setScreen("lock"),
                                    className: "mb-9 text-sm",
                                    children: "취소"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "h-[5px] w-[134px] rounded-full bg-white"
                                    })
                                })
                            ]
                        }),
                        screen === "home" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "grid grid-cols-2 gap-3 px-5 pt-[74px]",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "h-[146px] rounded-[22px] bg-gradient-to-br from-[#62b4ff] via-[#3291f5] to-[#3165d7] p-3 shadow-xl",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center gap-1 text-[12px] font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(CloudSun, {
                                                            size: 15
                                                        }),
                                                        " 서울"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "mt-1 text-[42px] font-light leading-none",
                                                    children: "8\xb0"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "mt-1 text-[12px]",
                                                    children: "맑음"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "mt-3 flex justify-between text-[9px] text-white/80",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "최고 11\xb0"
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "최저 3\xb0"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(CalendarMini, {
                                            onClick: ()=>setScreen("calendar")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "mt-[48px] grid grid-cols-4 gap-y-7 px-5",
                                    children: HOME_APPS.map((app)=>/*#__PURE__*/ _jsx(AppIcon, {
                                            label: app.label,
                                            icon: APP_ICONS[app.icon],
                                            color: app.color,
                                            imageSrc: app.image,
                                            imageScale: app.imageScale,
                                            onClick: app.screen ? ()=>app.screen === "tving" ? openTving() : setScreen(app.screen) : undefined
                                        }, app.label))
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "mx-4 mb-6 mt-auto flex justify-around rounded-[27px] bg-white/25 px-2 py-3 backdrop-blur-2xl",
                                    children: [
                                        /*#__PURE__*/ _jsx(AppIcon, {
                                            label: "전화",
                                            icon: /*#__PURE__*/ _jsx(Phone, {
                                                size: 25,
                                                fill: "white"
                                            }),
                                            color: "#41c968",
                                            imageSrc: "/phone-icon.png",
                                            badge: missed ? "1" : undefined,
                                            onClick: ()=>setScreen("phone"),
                                            small: true
                                        }),
                                        /*#__PURE__*/ _jsx(AppIcon, {
                                            label: "문자",
                                            icon: /*#__PURE__*/ _jsx(MessageCircle, {
                                                size: 25,
                                                fill: "white"
                                            }),
                                            color: "#35c85d",
                                            imageSrc: "/messages-icon.png",
                                            badge: callMessageBadge ? "1" : !messageBadgeCleared ? "4" : undefined,
                                            onClick: openMessages,
                                            small: true
                                        }),
                                        /*#__PURE__*/ _jsx(AppIcon, {
                                            label: "사진",
                                            icon: /*#__PURE__*/ _jsx(ImageIcon, {
                                                size: 25
                                            }),
                                            color: "linear-gradient(145deg,#fff,#ef6b62)",
                                            imageSrc: "/photos-icon.png",
                                            onClick: ()=>setScreen("photos"),
                                            small: true
                                        }),
                                        /*#__PURE__*/ _jsx(AppIcon, {
                                            label: "Safari",
                                            icon: /*#__PURE__*/ _jsx("span", {
                                                className: "text-[28px]",
                                                children: "\uD83E\uDDED"
                                            }),
                                            color: "#d9f2ff",
                                            imageSrc: "/safari-icon.png",
                                            small: true,
                                            disabled: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: ()=>{
                                            setNotes(0);
                                            setScreen("lock");
                                        },
                                        className: "h-[5px] w-[134px] rounded-full bg-white"
                                    })
                                })
                            ]
                        }),
                        screen === "inbox" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-white text-black",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center justify-between px-5 pt-1",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "rounded-full bg-white px-4 py-2 text-[13px] shadow",
                                            children: "편집"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "grid h-9 w-9 place-items-center rounded-full bg-white shadow",
                                            children: /*#__PURE__*/ _jsx(MoreHorizontal, {
                                                size: 20
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("h1", {
                                    className: "px-5 pb-2 pt-1 text-[28px] font-bold",
                                    children: "메시지"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex-1 overflow-y-auto px-4",
                                    children: [
                                        /*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>{
                                                openNoyuna();
                                                setNotes(0);
                                            },
                                            className: "relative flex w-full items-center gap-3 border-b border-gray-200 py-3 pl-1 text-left",
                                            children: [
                                                !noyunaRead && /*#__PURE__*/ _jsx("span", {
                                                    className: "absolute -left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#087dff]"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500 text-sm font-bold text-white",
                                                    children: "노"
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "min-w-0 flex-1 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("b", {
                                                            className: "text-[14px]",
                                                            children: "노유나"
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "block truncate text-[12px] text-gray-500",
                                                            children: "왤케 싸운거임 진짜로"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "self-start pt-1 text-[11px] text-gray-400",
                                                    children: "20:00"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>setScreen("messages"),
                                            className: "flex w-full items-center gap-3 border-b border-gray-200 py-3 pl-1 text-left",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500 text-sm font-bold text-white",
                                                    children: "이"
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "min-w-0 flex-1 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "text-[14px]",
                                                                    children: "이아니\uD83D\uDC9A"
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "text-[11px] text-gray-400",
                                                                    children: messages.length > initialMessages.length ? "20:05" : "13:31"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "block truncate text-[12px] text-gray-500",
                                                            children: (_messages_ = messages[messages.length - 1]) === null || _messages_ === void 0 ? void 0 : _messages_.text
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        ...INBOX_NOTIFICATIONS.map((item) => /*#__PURE__*/ _jsxs("button", {
                                            className: "flex w-full items-center gap-3 border-b border-gray-200 py-3 pl-1 text-left",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500 text-sm font-bold text-white",
                                                    children: item.initials
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "min-w-0 flex-1 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "flex justify-between gap-2",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", { className: "truncate text-[14px]", children: item.sender }),
                                                                /*#__PURE__*/ _jsx("span", { className: "shrink-0 text-[11px] text-gray-400", children: item.time })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", { className: "line-clamp-2 block text-[12px] text-gray-500", children: item.preview })
                                                    ]
                                                })
                                            ]
                                        }, item.sender))
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center gap-3 px-4 pb-3",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex h-11 flex-1 items-center gap-2 rounded-full bg-gray-100 px-3 text-gray-500",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "⌕"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-sm",
                                                    children: "검색"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "grid h-11 w-11 place-items-center rounded-full bg-gray-100",
                                            children: /*#__PURE__*/ _jsx(Plus, {
                                                size: 21
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        (screen === "messages" || screen === "noyuna") && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-white text-black",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex h-12 items-center justify-between border-b border-gray-200 px-4",
                                    children: [
                                        /*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>setScreen("inbox"),
                                            className: "flex items-center text-[#087dff]",
                                            children: [
                                                /*#__PURE__*/ _jsx(ChevronLeft, {
                                                    size: 24
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "메시지"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "grid h-9 w-9 place-items-center rounded-full bg-gray-100 text-[#087dff]",
                                            children: /*#__PURE__*/ _jsx(Phone, {
                                                size: 17
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex flex-col items-center border-b border-gray-100 py-2",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emerald-300 to-teal-500 text-lg font-semibold text-white",
                                            children: screen === "noyuna" ? "노" : "이"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "mt-1 text-[13px] font-semibold",
                                            children: screen === "noyuna" ? "노유나" : "이아니 💚"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "scrollbar-hide flex-1 space-y-2 overflow-y-auto px-3 py-4",
                                    children: [
                                        screen === "messages" && /*#__PURE__*/ _jsx("div", {
                                            className: "py-1 text-center text-[11px] text-gray-400",
                                            children: "13:07"
                                        }),
                                        (screen === "noyuna" ? NOYUNA_MESSAGES.map((text)=>({
                                                from: "ia",
                                                text
                                            })) : messages).map((m, i)=>/*#__PURE__*/ _jsxs(Fragment, {
                                                children: [
                                                    screen === "messages" && i === initialMessages.length && /*#__PURE__*/ _jsx("div", {
                                                        className: "py-1 text-center text-[11px] text-gray-400",
                                                        children: "20:00"
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "flex ".concat(m.from === "me" ? "justify-end" : "justify-start"),
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "max-w-[78%] rounded-[20px] px-3.5 py-2 text-[15px] leading-[1.3] ".concat(m.from === "me" ? "rounded-br-md bg-[#007AFF] text-white" : "rounded-bl-md bg-[#E9E9EB] text-black"),
                                                            children: m.text
                                                        })
                                                    })
                                                ]
                                            }, i)),
                                        typing && /*#__PURE__*/ _jsx("div", {
                                            className: "flex",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                "aria-label": "이아니 입력 중",
                                                className: "rounded-[20px] rounded-bl-md bg-[#E9E9EB] px-4 py-1.5 text-[21px] leading-6 tracking-[3px] text-gray-500",
                                                children: "•••"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            ref: messageEnd
                                        })
                                    ]
                                }),
                                screen === "messages" && /*#__PURE__*/ _jsxs(_Fragment, {
                                    children: [
                                        /*#__PURE__*/ _jsxs("form", {
                                            onSubmit: (e)=>{
                                                e.preventDefault();
                                                sendMessage();
                                            },
                                            className: "flex items-center gap-2 border-t border-gray-100 px-3 py-2",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    type: "button",
                                                    className: "grid h-8 w-8 place-items-center rounded-full bg-gray-100 text-gray-500",
                                                    children: /*#__PURE__*/ _jsx(Plus, {
                                                        size: 20
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("input", {
                                                    inputMode: "none",
                                                    value: draft,
                                                    onFocus: ()=>setShowKeyboard(true),
                                                    onChange: (e)=>{
                                                        var _USER_SCRIPT_sentCount;
                                                        const nextText = (_USER_SCRIPT_sentCount = USER_SCRIPT[sentCount]) !== null && _USER_SCRIPT_sentCount !== void 0 ? _USER_SCRIPT_sentCount : "";
                                                        setDraft(nextText.slice(0, e.currentTarget.value.length));
                                                    },
                                                    placeholder: "iMessage",
                                                    className: "h-9 min-w-0 flex-1 rounded-full border border-gray-300 px-3 text-[14px] outline-none focus:border-[#007AFF]"
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    type: "submit",
                                                    "aria-label": "메시지 보내기",
                                                    className: "grid h-8 w-8 place-items-center rounded-full bg-[#007AFF] text-white",
                                                    children: /*#__PURE__*/ _jsx(Send, {
                                                        size: 16
                                                    })
                                                })
                                            ]
                                        }),
                                        showKeyboard && /*#__PURE__*/ _jsxs("div", {
                                            className: "safe-bottom select-none bg-[#d1d5db] px-1.5 pb-2 pt-2 text-gray-800",
                                            onMouseDown: (e)=>e.preventDefault(),
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "mb-2 flex items-center justify-between px-2 text-[11px] text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            children: "다음 대사가 키를 누를 때마다 입력돼요"
                                                        }),
                                                        /*#__PURE__*/ _jsx("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowKeyboard(false),
                                                            className: "px-2 text-base",
                                                            children: "⌄"
                                                        })
                                                    ]
                                                }),
                                                [
                                                    [
                                                        'ㅂ',
                                                        'ㅈ',
                                                        'ㄷ',
                                                        'ㄱ',
                                                        'ㅅ',
                                                        'ㅛ',
                                                        'ㅕ',
                                                        'ㅑ',
                                                        'ㅐ',
                                                        'ㅔ'
                                                    ],
                                                    [
                                                        'ㅁ',
                                                        'ㄴ',
                                                        'ㅇ',
                                                        'ㄹ',
                                                        'ㅎ',
                                                        'ㅗ',
                                                        'ㅓ',
                                                        'ㅏ',
                                                        'ㅣ'
                                                    ],
                                                    [
                                                        '⇧',
                                                        'ㅋ',
                                                        'ㅌ',
                                                        'ㅊ',
                                                        'ㅍ',
                                                        'ㅠ',
                                                        'ㅜ',
                                                        'ㅡ',
                                                        '⌫'
                                                    ]
                                                ].map((row, ri)=>/*#__PURE__*/ _jsx("div", {
                                                        className: "mb-2 flex justify-center gap-1",
                                                        children: row.map((key, ki)=>/*#__PURE__*/ _jsx("button", {
                                                                type: "button",
                                                                onClick: ()=>pressSimulatedKey(key),
                                                                className: "h-10 flex-1 rounded-md bg-white text-[16px] shadow-sm active:bg-gray-200 ".concat(key === '⇧' || key === '⌫' ? 'bg-[#aeb5c0]' : ''),
                                                                children: key
                                                            }, "".concat(ri, "-").concat(ki)))
                                                    }, ri)),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex gap-1",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("button", {
                                                            type: "button",
                                                            onClick: ()=>pressSimulatedKey("123"),
                                                            className: "h-10 w-12 rounded-md bg-[#aeb5c0] text-xs",
                                                            children: "123"
                                                        }),
                                                        /*#__PURE__*/ _jsx("button", {
                                                            type: "button",
                                                            onClick: ()=>pressSimulatedKey("한/영"),
                                                            className: "h-10 w-12 rounded-md bg-[#aeb5c0] text-xs",
                                                            children: "한/영"
                                                        }),
                                                        /*#__PURE__*/ _jsx("button", {
                                                            type: "button",
                                                            onClick: ()=>pressSimulatedKey("space"),
                                                            className: "h-10 flex-1 rounded-md bg-white text-xs text-gray-500",
                                                            children: "한국어 \xb7 English"
                                                        }),
                                                        /*#__PURE__*/ _jsx("button", {
                                                            type: "button",
                                                            onClick: sendMessage,
                                                            className: "h-10 w-[68px] rounded-md bg-[#1684f8] text-xs font-semibold text-white",
                                                            children: "전송"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                screen === "noyuna" && /*#__PURE__*/ _jsx("div", {
                                    className: "border-t border-gray-100 px-4 py-3 text-center text-xs text-gray-400",
                                    children: "10월 29일 목요일 \xb7 iMessage"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        screen === "calendar" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-[#f7f7fa] text-black",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex items-center justify-between px-5 py-4",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: goHome,
                                            className: "text-[#007AFF]",
                                            children: "완료"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "font-semibold",
                                            children: "캘린더"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "text-[#007AFF]",
                                            children: /*#__PURE__*/ _jsx(Plus, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "px-5 text-[30px] font-bold",
                                    children: "2026년 10월"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "mt-3 grid grid-cols-7 px-3 text-center text-[12px] text-gray-500",
                                    children: [
                                        "일",
                                        "월",
                                        "화",
                                        "수",
                                        "목",
                                        "금",
                                        "토"
                                    ].map((x)=>/*#__PURE__*/ _jsx("span", {
                                            className: "py-2",
                                            children: x
                                        }, x))
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "grid grid-cols-7 px-3 text-center",
                                    children: calendarDays.map((d, i)=>/*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>d && setSelectedDay(Number(d)),
                                            className: "relative grid h-12 place-items-center text-sm",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: Number(d) === selectedDay ? "grid h-8 w-8 place-items-center rounded-full bg-red-500 font-semibold text-white" : "",
                                                    children: d
                                                }),
                                                d === "9" && /*#__PURE__*/ _jsx("span", {
                                                    className: "absolute bottom-1 h-1 w-1 rounded-full bg-green-500"
                                                })
                                            ]
                                        }, i))
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "mt-6 border-t border-gray-200 px-5 py-4",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                "2026년 10월 ",
                                                selectedDay,
                                                "일 (",
                                                [
                                                    "일",
                                                    "월",
                                                    "화",
                                                    "수",
                                                    "목",
                                                    "금",
                                                    "토"
                                                ][(selectedDay + 3) % 7],
                                                "요일)"
                                            ]
                                        }),
                                        selectedDay === 9 ? /*#__PURE__*/ _jsxs("div", {
                                            className: "mt-4 rounded-xl bg-white p-3 text-sm shadow-sm",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "mr-2 text-red-500",
                                                    children: "●"
                                                }),
                                                "이안이 생일 \uD83C\uDF82"
                                            ]
                                        }) : /*#__PURE__*/ _jsx("p", {
                                            className: "mt-4 text-sm text-gray-500",
                                            children: "예정된 일정이 없습니다"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "mt-auto flex justify-around border-t border-gray-200 py-4 text-xs text-[#007AFF]",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            children: "오늘"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            children: "캘린더"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            children: "받은 편지함"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        screen === "x" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-black text-white",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex items-center justify-between px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>thread ? setThread(false) : goHome(),
                                            children: /*#__PURE__*/ _jsx(ArrowLeft, {
                                                size: 21
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "text-xl font-bold",
                                            children: thread ? "게시물" : "X"
                                        }),
                                        /*#__PURE__*/ _jsx(MoreHorizontal, {})
                                    ]
                                }),
                                thread ? /*#__PURE__*/ _jsxs("div", {
                                    className: "scrollbar-hide flex-1 overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "border-b border-white/15 p-4",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(Avatar, {
                                                            tweet: selectedTweet,
                                                            size: "h-11 w-11",
                                                            imageUrl: userImages["x-avatar-".concat(selectedTweet.handle)] || selectedTweet.avatarUrl,
                                                            onClick: ()=>{}
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    children: selectedTweet.name
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: selectedTweet.handle
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "mt-4 text-[19px]",
                                                    children: selectedTweet.text
                                                }),
                                                selectedTweet.mediaType === "image" && selectedTweet.mediaUrl && /*#__PURE__*/ _jsx("img", {
                                                    src: assetUrl(selectedTweet.mediaUrl),
                                                    alt: "게시물 사진",
                                                    className: "mt-3 max-h-64 w-full rounded-2xl object-cover"
                                                }),
                                                selectedTweet.mediaType === "video" && (selectedTweet.youtubeId || selectedTweet.mediaUrl) && (selectedTweet.youtubeId ? /*#__PURE__*/ _jsx("iframe", {
                                                    title: selectedTweet.text,
                                                    src: youtubeEmbedUrl(selectedTweet.youtubeId),
                                                    allow: "encrypted-media; picture-in-picture; fullscreen",
                                                    allowFullScreen: true,
                                                    className: "mt-3 aspect-video w-full rounded-2xl border-0"
                                                }) : /*#__PURE__*/ _jsx("video", {
                                                    src: assetUrl(selectedTweet.mediaUrl),
                                                    controls: true,
                                                    className: "mt-3 max-h-64 w-full rounded-2xl object-cover"
                                                })),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "mt-3 text-sm text-gray-500",
                                                    children: [
                                                        selectedTweet.time,
                                                        " \xb7 2026년 10월 29일"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "mt-3 flex flex-wrap gap-x-5 gap-y-2 border-y border-white/15 py-3 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "text-white",
                                                                    children: selectedTweet.retweetsCount
                                                                }),
                                                                " 재게시"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "text-white",
                                                                    children: selectedTweet.likesCount
                                                                }),
                                                                " 마음에 들어요"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "text-white",
                                                                    children: selectedTweet.viewsCount
                                                                }),
                                                                " 조회수"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "py-3 text-sm text-gray-500",
                                                    children: [
                                                        "답글 ",
                                                        selectedTweet.repliesCount,
                                                        "개"
                                                    ]
                                                })
                                            ]
                                        }),
                                        s2Replies.map((r, i)=>/*#__PURE__*/ _jsxs("div", {
                                                className: "flex gap-3 border-b border-white/10 p-4",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Avatar, {
                                                        tweet: selectedTweet,
                                                        size: "h-9 w-9",
                                                        imageUrl: userImages["x-avatar-".concat(selectedTweet.handle)] || selectedTweet.avatarUrl,
                                                        onClick: ()=>{}
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("b", {
                                                                className: "text-sm",
                                                                children: "S2"
                                                            }),
                                                            /*#__PURE__*/ _jsxs("span", {
                                                                className: "ml-2 text-xs text-gray-500",
                                                                children: [
                                                                    "@ezfkez \xb7 ",
                                                                    s2ReplyTimes[i]
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "mt-1 text-sm",
                                                                children: r
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, "".concat(r, "-").concat(i)))
                                    ]
                                }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "grid grid-cols-2 border-b border-white/20 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxs("button", {
                                                    onClick: ()=>setTweetTab("추천"),
                                                    className: "py-3 text-sm ".concat(tweetTab === "추천" ? "font-bold" : "text-gray-500"),
                                                    children: [
                                                        "추천",
                                                        tweetTab === "추천" && /*#__PURE__*/ _jsx("span", {
                                                            className: "mx-auto mt-2 block h-1 w-12 rounded-full bg-sky-400"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("button", {
                                                    onClick: ()=>setTweetTab("팔로우 중"),
                                                    className: "py-3 text-sm ".concat(tweetTab === "팔로우 중" ? "font-bold" : "text-gray-500"),
                                                    children: [
                                                        "팔로우 중",
                                                        tweetTab === "팔로우 중" && /*#__PURE__*/ _jsx("span", {
                                                            className: "mx-auto mt-2 block h-1 w-12 rounded-full bg-sky-400"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "scrollbar-hide flex-1 overflow-y-auto",
                                            children: tweets.map((t)=>/*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>{
                                                        if (t.handle === "@ezfkez") {
                                                            setSelectedTweet(t);
                                                            setThread(true);
                                                        }
                                                    },
                                                    className: "block w-full border-b border-white/15 px-4 py-4 text-left",
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(Avatar, {
                                                                tweet: t,
                                                                imageUrl: userImages["x-avatar-".concat(t.handle)] || t.avatarUrl,
                                                                onClick: ()=>{}
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "text-[14px]",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("b", {
                                                                                children: t.name
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("span", {
                                                                                className: "ml-1 text-gray-500",
                                                                                children: [
                                                                                    t.handle,
                                                                                    " \xb7 ",
                                                                                    t.time
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("p", {
                                                                        className: "mt-1 text-[14px] leading-5",
                                                                        children: t.text
                                                                    }),
                                                                    t.mediaType === "image" && t.mediaUrl && /*#__PURE__*/ _jsx("img", {
                                                                        src: assetUrl(t.mediaUrl),
                                                                        alt: "게시물 사진",
                                                                        className: "mt-3 max-h-56 w-full rounded-2xl object-cover"
                                                                    }),
                                                                    t.mediaType === "video" && (t.youtubeId || t.mediaUrl) && (t.youtubeId ? /*#__PURE__*/ _jsx("iframe", {
                                                                        title: t.text,
                                                                        src: youtubeEmbedUrl(t.youtubeId),
                                                                        allow: "encrypted-media; picture-in-picture; fullscreen",
                                                                        allowFullScreen: true,
                                                                        className: "mt-3 aspect-video w-full rounded-2xl border-0"
                                                                    }) : /*#__PURE__*/ _jsx("video", {
                                                                        src: assetUrl(t.mediaUrl),
                                                                        controls: true,
                                                                        className: "mt-3 max-h-56 w-full rounded-2xl object-cover"
                                                                    })),
                                                                    /*#__PURE__*/ _jsxs("div", {
                                                                        className: "mt-3 flex items-center justify-between pr-3 text-gray-500",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxs("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx(MessageCircle, {
                                                                                        size: 16
                                                                                    }),
                                                                                    t.repliesCount
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxs("svg", {
                                                                                        viewBox: "0 0 24 24",
                                                                                        className: "h-5 w-5",
                                                                                        fill: "none",
                                                                                        stroke: "currentColor",
                                                                                        strokeWidth: "1.8",
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("path", {
                                                                                                d: "m17 2 4 4-4 4"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("path", {
                                                                                                d: "M3 11V9a3 3 0 0 1 3-3h15"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("path", {
                                                                                                d: "m7 22-4-4 4-4"
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsx("path", {
                                                                                                d: "M21 13v2a3 3 0 0 1-3 3H3"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    t.retweetsCount
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx(Heart, {
                                                                                        size: 16,
                                                                                        onClick: (e)=>{
                                                                                            e.stopPropagation();
                                                                                            setLiked((v)=>!v);
                                                                                        },
                                                                                        fill: liked && t.handle === "@ezfkez" ? "#f91880" : "none",
                                                                                        color: liked && t.handle === "@ezfkez" ? "#f91880" : undefined
                                                                                    }),
                                                                                    liked && t.handle === "@ezfkez" ? "1,285" : t.likesCount
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsxs("span", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                        className: "text-xs",
                                                                                        children: "조회"
                                                                                    }),
                                                                                    t.viewsCount
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ _jsx(MoreHorizontal, {
                                                                                size: 17
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, "".concat(t.handle, "-").concat(t.name)))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    className: "absolute bottom-20 right-5 grid h-14 w-14 place-items-center rounded-full bg-sky-500 shadow-lg",
                                    children: /*#__PURE__*/ _jsx(Plus, {})
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-white"
                                    })
                                })
                            ]
                        }),
                        screen === "tving" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-[#08080a] text-white",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex items-center justify-between px-4 pb-3 pt-1",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: goHome,
                                            className: "text-[22px] font-black not-italic tracking-[-1.5px] text-[#ff1744]",
                                            children: "TVING"
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ _jsx(Search, {
                                                    size: 20
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-xs font-bold",
                                                    children: "최"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("nav", {
                                    className: "flex gap-6 overflow-hidden border-b border-white/10 px-4 pb-3 text-[13px]",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "font-bold",
                                            children: "홈"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "text-white/60",
                                            children: "실시간"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "text-white/60",
                                            children: "TV프로그램"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "text-white/60",
                                            children: "영화"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "text-white/60",
                                            children: "파라마운트+"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "scrollbar-hide flex-1 overflow-y-auto pb-6",
                                    children: [
                                        /*#__PURE__*/ _jsxs("button", {
                                            onClick: openTvingDetail,
                                            className: "relative mx-3 mt-4 block h-[215px] w-[calc(100%-24px)] overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-[#3c2038] via-[#15182b] to-black text-left",
                                            children: [
                                                /*#__PURE__*/ _jsx("img", {
                                                    src: assetUrl("/티빙 오리지널 대표작 환연 썸네일.png"),
                                                    alt: "티빙 오리지널 대표작 환연 썸네일",
                                                    className: "absolute inset-0 h-full w-full object-cover"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("section", {
                                            className: "mt-6",
                                            children: [
                                                /*#__PURE__*/ _jsx("h2", {
                                                    className: "mb-3 px-4 text-[17px] font-bold",
                                                    children: "지금 인기 있는 콘텐츠"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "scrollbar-hide flex gap-3 overflow-x-auto px-4",
                                                    children: TVING_WORKS.slice(0, 3).map((work, i)=>/*#__PURE__*/ _jsxs("button", {
                                                            onClick: i === 0 ? openTvingDetail : undefined,
                                                            className: "w-[112px] shrink-0 text-left",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "relative grid h-[150px] w-full place-items-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#26222a] to-[#101014]",
                                                                    children: work.poster ? /*#__PURE__*/ _jsx("img", {
                                                                        src: assetUrl(work.poster),
                                                                        alt: work.title,
                                                                        className: "absolute inset-0 h-full w-full object-cover"
                                                                    }) : /*#__PURE__*/ _jsx(Plus, {
                                                                        size: 20,
                                                                        className: "text-white/45"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "mt-2 block truncate text-[12px] font-medium",
                                                                    children: work.title || "작품명 입력"
                                                                }),
                                                                work.category && /*#__PURE__*/ _jsx("span", {
                                                                    className: "block truncate text-[10px] text-white/50",
                                                                    children: work.category
                                                                })
                                                            ]
                                                        }, i))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("section", {
                                            className: "mt-6",
                                            children: [
                                                /*#__PURE__*/ _jsx("h2", {
                                                    className: "mb-3 px-4 text-[17px] font-bold",
                                                    children: "최지우님이 시청하는 콘텐츠"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "scrollbar-hide flex gap-3 overflow-x-auto px-4",
                                                    children: TVING_CONTINUE_WATCHING.map((work)=> /*#__PURE__*/ _jsxs("button", {
                                                            onClick: work.interactive ? openTvingDetail : undefined,
                                                            className: "w-[112px] shrink-0 cursor-default text-left",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "relative block aspect-[2/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#151519]",
                                                                    children: /*#__PURE__*/ _jsx("img", { src: assetUrl(work.poster), alt: work.title, className: "absolute inset-0 h-full w-full object-cover" })
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "mt-1 block h-[3px] w-full bg-white/20",
                                                                    children: /*#__PURE__*/ _jsx("span", { className: "block h-full bg-[#ff1744]", style: { width: "".concat(work.progress, "%") } })
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", { className: "mt-1 block text-[11px] text-white/75", children: work.episode })
                                                            ]
                                                        }, work.title))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-white"
                                    })
                                })
                            ]
                        }),
                        screen === "tving" && /*#__PURE__*/ _jsx("div", {
                            className: "pointer-events-none absolute inset-0 z-30 grid place-items-center bg-black transition-opacity duration-700 ".concat(tvingSplash ? "opacity-100" : "opacity-0"),
                            children: /*#__PURE__*/ _jsx("span", {
                                className: "tving-splash-logo text-[48px] font-black not-italic tracking-[-3px] text-[#ff1744]",
                                children: "TVING"
                            })
                        }),
                        screen === "tvingDetail" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-black text-white",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "relative aspect-video shrink-0 overflow-hidden bg-[#111]",
                                    children: [
                                        TVING_DETAIL.youtubeId ? tvingStarted && /*#__PURE__*/ _jsx("iframe", {
                                            title: "환승연애4 5화",
                                            src: youtubeEmbedUrl(TVING_DETAIL.youtubeId, true),
                                            className: "absolute inset-0 h-full w-full border-0",
                                            allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
                                            allowFullScreen: true
                                        }) : /*#__PURE__*/ _jsx("video", {
                                            ref: tvingVideoRef,
                                            src: assetUrl(TVING_DETAIL.video),
                                            poster: TVING_DETAIL.thumbnail || ((_TVING_EPISODES_2 = TVING_EPISODES[4]) === null || _TVING_EPISODES_2 === void 0 ? void 0 : _TVING_EPISODES_2.thumbnail) || undefined,
                                            playsInline: true,
                                            controls: tvingStarted,
                                            className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ".concat(tvingStarted ? "opacity-100" : "opacity-0"),
                                            onPlay: ()=>{
                                                setTvingPlaying(true);
                                                setTvingStarted(true);
                                            },
                                            onPause: ()=>setTvingPlaying(false)
                                        }),
                                        !tvingStarted && /*#__PURE__*/ _jsxs("div", {
                                            className: "absolute inset-0 z-10 grid place-items-center overflow-hidden bg-gradient-to-br from-[#342333] via-[#181725] to-black",
                                            children: [
                                                TVING_DETAIL.thumbnail ? /*#__PURE__*/ _jsx("img", {
                                                    src: assetUrl(TVING_DETAIL.thumbnail),
                                                    alt: "환승연애 5화 썸네일",
                                                    className: "absolute inset-0 h-full w-full object-cover"
                                                }) : /*#__PURE__*/ _jsx("span", {
                                                    className: "text-xs text-white/50",
                                                    children: "썸네일을 추가할 수 있어요"
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: startTvingPlayback,
                                                    "aria-label": "5화 재생",
                                                    className: "absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-black/50",
                                                    children: /*#__PURE__*/ _jsx(Play, {
                                                        size: 27,
                                                        fill: "white"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>{
                                                var _tvingVideoRef_current;
                                                (_tvingVideoRef_current = tvingVideoRef.current) === null || _tvingVideoRef_current === void 0 ? void 0 : _tvingVideoRef_current.pause();
                                                setTvingStarted(false);
                                                setTvingPlaying(false);
                                                setScreen("tving");
                                            },
                                            className: "absolute left-3 top-2 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/45",
                                            children: /*#__PURE__*/ _jsx(ChevronLeft, {})
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/35",
                                            children: /*#__PURE__*/ _jsx(Cast, {
                                                size: 20
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "scrollbar-hide flex-1 overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "px-4 pb-3 pt-4",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "text-[13px] font-black",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "mr-1 text-[#ff1744]",
                                                            children: "T"
                                                        }),
                                                        " ORIGINAL"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("h1", {
                                                    className: "mt-2 text-[23px] font-bold",
                                                    children: [
                                                        TVING_DETAIL.episode ? "".concat(TVING_DETAIL.episode, ". ") : "",
                                                        TVING_DETAIL.episodeTitle || "회차 제목을 입력해 주세요"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "mt-2 flex items-center gap-2 text-[13px] font-semibold text-white/65",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", { className: "rounded-sm bg-[#ff8a00] px-1.5 py-0.5 text-[11px] font-black text-white", children: TVING_DETAIL.age }),
                                                        /*#__PURE__*/ _jsx("span", { children: "".concat(TVING_DETAIL.date, "　|　", TVING_DETAIL.duration) })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("p", {
                                                    className: "mt-4 line-clamp-2 text-[13px] leading-6 text-white/75",
                                                    children: ["▶ ", TVING_DETAIL.synopsis]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "mt-5 flex gap-9 text-center text-[11px] text-white/70",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("button", {
                                                            onClick: ()=>setTvingSaved((v)=>!v),
                                                            className: "flex flex-col items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx(BookmarkPlus, {
                                                                    size: 25,
                                                                    fill: tvingSaved ? "white" : "none"
                                                                }),
                                                                "찜"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("button", {
                                                            onClick: ()=>setTvingRated((v)=>!v),
                                                            className: "flex flex-col items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx(ThumbsUp, {
                                                                    size: 25,
                                                                    fill: tvingRated ? "white" : "none"
                                                                }),
                                                                "평가"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("button", {
                                                            className: "flex flex-col items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx(Share2, {
                                                                    size: 25
                                                                }),
                                                                "공유"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("button", {
                                                    className: "mt-5 flex w-full items-center gap-3 rounded-2xl bg-[#202024] p-3 text-left",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "relative block h-[58px] w-[48px] shrink-0 overflow-hidden rounded-lg bg-[#171820]",
                                                            children: /*#__PURE__*/ _jsx("img", { src: assetUrl(TVING_WORKS[0].poster), alt: TVING_DETAIL.series, className: "h-full w-full object-cover" })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "block truncate text-[14px]",
                                                                    children: TVING_DETAIL.series || TVING_DETAIL.title || "작품 제목을 입력해 주세요"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("span", {
                                                                    className: "mt-1 block truncate text-[11px] text-white/55",
                                                                    children: [
                                                                        "출연 ",
                                                                        TVING_DETAIL.cast || "정보를 입력해 주세요"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(ChevronLeft, {
                                                            className: "rotate-180",
                                                            size: 18
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "sticky top-0 flex justify-between border-b border-white/15 bg-black px-4 text-[12px] font-semibold",
                                            children: [
                                                "에피소드",
                                                "추천 콘텐츠",
                                                "관련 쇼츠",
                                                "관련 클립"
                                            ].map((tab)=>/*#__PURE__*/ _jsxs("button", {
                                                    onClick: ()=>setTvingTab(tab),
                                                    className: "relative py-3 ".concat(tvingTab === tab ? "text-white" : "text-white/45"),
                                                    children: [
                                                        tab,
                                                        tvingTab === tab && /*#__PURE__*/ _jsx("span", {
                                                            className: "absolute inset-x-0 bottom-0 h-[2px] bg-white"
                                                        })
                                                    ]
                                                }, tab))
                                        }),
                                        /*#__PURE__*/ _jsxs("button", {
                                            className: "mx-4 mt-4 flex w-[calc(100%-32px)] items-center justify-between rounded-lg border border-white/20 px-3 py-3 text-left text-[13px]",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: TVING_DETAIL.series || TVING_DETAIL.title || "작품 제목 입력"
                                                }),
                                                /*#__PURE__*/ _jsx(ChevronDown, {
                                                    size: 17
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between px-4 py-4 text-[12px] text-white/75",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: "첫화부터 ↕"
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    children: [
                                                        "연속재생 ",
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "ml-2 inline-block h-5 w-9 rounded-full bg-[#ff1744] p-[2px] align-middle",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "ml-auto block h-4 w-4 rounded-full bg-white"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "space-y-2 px-4 pb-5",
                                            children: TVING_EPISODES.map((episode, i)=>/*#__PURE__*/ _jsxs("button", {
                                                    onClick: ()=>{
                                                        if (i === 4) startTvingPlayback();
                                                    },
                                                    className: "flex w-full items-center gap-3 rounded-xl py-2 text-left",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "relative grid h-[67px] w-[112px] shrink-0 place-items-center overflow-hidden rounded-lg bg-[#202024]",
                                                            children: episode.thumbnail ? /*#__PURE__*/ _jsx("img", {
                                                                src: assetUrl(episode.thumbnail),
                                                                alt: "회차 썸네일",
                                                                className: "absolute inset-0 h-full w-full object-cover"
                                                            }) : /*#__PURE__*/ _jsx(Play, {
                                                                size: 20
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "block truncate text-[13px]",
                                                                    children: episode.title || "".concat(i + 1, ". 회차 제목 입력")
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "mt-1 block text-[11px] text-white/55",
                                                                    children: [
                                                                        episode.date,
                                                                        episode.duration
                                                                    ].filter(Boolean).join(" · ") || "공개일 · 재생 시간"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(Download, {
                                                            size: 20,
                                                            className: "shrink-0"
                                                        })
                                                    ]
                                                }, i))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-white"
                                    })
                                })
                            ]
                        }),
                        screen === "youtube" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-white text-[#0f0f0f]",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex h-12 shrink-0 items-center justify-between px-4",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ _jsx(Youtube, {
                                                    size: 29,
                                                    fill: "#ff0033",
                                                    color: "#ff0033"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-[19px] font-extrabold tracking-tight",
                                                    children: "Premium"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center gap-5",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    "aria-label": "알림",
                                                    children: /*#__PURE__*/ _jsx(Bell, {
                                                        size: 22
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    "aria-label": "검색",
                                                    children: /*#__PURE__*/ _jsx(Search, {
                                                        size: 23
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("nav", {
                                    className: "scrollbar-hide flex shrink-0 gap-2 overflow-x-auto px-3 py-2",
                                    children: [
                                        "◉",
                                        "전체",
                                        "새로운 맞춤 동영상",
                                        "음악",
                                        "뉴스",
                                        "팟캐스트"
                                    ].map((tab)=>/*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>setYoutubeTab(tab),
                                            className: "shrink-0 rounded-xl px-3.5 py-2 text-[12px] font-semibold ".concat(youtubeTab === tab ? "bg-black text-white" : "bg-[#f2f2f2] text-black"),
                                            children: tab
                                        }, tab))
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "scrollbar-hide flex-1 overflow-y-auto pb-3",
                                    children: YOUTUBE_VIDEOS.map((video, i)=>/*#__PURE__*/ _jsxs("article", {
                                            onClick: ()=>openYoutubeVideo(i),
                                            className: "mb-3 cursor-pointer border-b border-gray-100 pb-3",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#f1e8e2] via-[#e9e0dc] to-[#c9d4d2]",
                                                    children: [
                                                        video.thumbnail ? /*#__PURE__*/ _jsx("img", {
                                                            src: assetUrl(video.thumbnail),
                                                            alt: "".concat(video.title, " 썸네일"),
                                                            className: "absolute inset-0 h-full w-full object-cover"
                                                        }) : video.video ? /*#__PURE__*/ _jsx("video", {
                                                            src: assetUrl(video.video),
                                                            muted: true,
                                                            playsInline: true,
                                                            preload: "metadata",
                                                            className: "absolute inset-0 h-full w-full object-cover",
                                                            onLoadedMetadata: (e)=>{
                                                                const duration = formatVideoDuration(e.currentTarget.duration);
                                                                if (duration) setYoutubeDurations((current)=>({
                                                                        ...current,
                                                                        [i]: duration
                                                                    }));
                                                            }
                                                        }) : /*#__PURE__*/ _jsx("div", {
                                                            className: "absolute inset-0 grid place-items-center text-sm font-medium text-black/45",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "rounded bg-white/80 px-3 py-2",
                                                                children: "썸네일 추가"
                                                            })
                                                        }),
                                                        (youtubeDurations[i] || video.duration) && /*#__PURE__*/ _jsx("span", {
                                                            className: "absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold text-white",
                                                            children: youtubeDurations[i] || video.duration
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex gap-3 px-4 pt-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-[#eee] text-xs font-bold",
                                                            children: video.avatar ? /*#__PURE__*/ _jsx("img", {
                                                                src: assetUrl(video.avatar),
                                                                alt: "".concat(video.channel, " 프로필"),
                                                                className: "h-full w-full object-cover"
                                                            }) : /*#__PURE__*/ _jsx(DefaultProfileAvatar, {
                                                                className: "h-full w-full"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("h2", {
                                                                    className: "line-clamp-2 text-[14px] font-bold leading-5",
                                                                    children: video.title
                                                                }),
                                                                /*#__PURE__*/ _jsxs("p", {
                                                                    className: "mt-1 text-[12px] text-[#606060]",
                                                                    children: [
                                                                        video.channel,
                                                                        "　▷",
                                                                        video.views,
                                                                        "　",
                                                                        video.age
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(MoreHorizontal, {
                                                            size: 20,
                                                            className: "shrink-0"
                                                        })
                                                    ]
                                                }),
                                                video.products && /*#__PURE__*/ _jsxs("div", {
                                                    className: "mx-4 mt-3 flex items-center justify-between rounded-xl bg-[#f5eee8] px-3 py-3 text-[12px] font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "truncate",
                                                            children: [
                                                                video.channel,
                                                                " 캐리어 정상품 대비 최대 할인..."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "ml-2 shrink-0",
                                                            children: [
                                                                video.products,
                                                                "　⌄"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, "".concat(video.channel, "-").concat(i)))
                                }),
                                /*#__PURE__*/ _jsx("nav", {
                                    className: "flex h-[66px] shrink-0 items-center justify-around border-t border-gray-200 bg-white px-1 text-[9px]",
                                    children: [
                                        {
                                            name: "홈",
                                            icon: /*#__PURE__*/ _jsx(House, {
                                                size: 21
                                            })
                                        },
                                        {
                                            name: "Shorts",
                                            icon: /*#__PURE__*/ _jsx(Clapperboard, {
                                                size: 21
                                            })
                                        },
                                        {
                                            name: "만들기",
                                            icon: /*#__PURE__*/ _jsx(CirclePlus, {
                                                size: 34
                                            })
                                        },
                                        {
                                            name: "구독",
                                            icon: /*#__PURE__*/ _jsx(Youtube, {
                                                size: 23
                                            })
                                        },
                                        {
                                            name: "내 페이지",
                                            icon: /*#__PURE__*/ _jsx(CircleUserRound, {
                                                size: 22
                                            })
                                        }
                                    ].map((item)=>/*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>setYoutubeNav(item.name),
                                            className: "relative flex flex-col items-center gap-1 ".concat(youtubeNav === item.name ? "font-bold" : ""),
                                            children: [
                                                item.icon,
                                                item.name === "구독" && /*#__PURE__*/ _jsx("span", {
                                                    className: "absolute right-1 top-0 h-2 w-2 rounded-full bg-red-500"
                                                }),
                                                item.name
                                            ]
                                        }, item.name))
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center bg-white pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        screen === "youtubeDetail" && /*#__PURE__*/ _jsxs("div", {
                            className: "relative flex h-full flex-col overflow-hidden bg-white text-black",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "min-h-0 flex-1 overflow-y-auto pb-[96px]",
                                    children: /*#__PURE__*/ _jsxs(_Fragment, {
                                        children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "relative aspect-video shrink-0 bg-black",
                                    children: [
                                        ((_YOUTUBE_VIDEOS_selectedYoutube = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube.video) ? /*#__PURE__*/ _jsx("video", {
                                            ref: youtubeVideoRef,
                                            src: assetUrl(YOUTUBE_VIDEOS[selectedYoutube].video),
                                            autoPlay: true,
                                            controls: true,
                                            playsInline: true,
                                            className: "h-full w-full object-contain",
                                            onLoadedMetadata: (e)=>{
                                                const duration = formatVideoDuration(e.currentTarget.duration);
                                                if (duration) setYoutubeDurations((current)=>({
                                                        ...current,
                                                        [selectedYoutube]: duration
                                                    }));
                                            },
                                            onPlay: ()=>setYoutubePlaying(true)
                                        }) : ((_YOUTUBE_VIDEOS_selectedYoutube1 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube1 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube1.youtubeId) ? /*#__PURE__*/ _jsx("iframe", {
                                            title: YOUTUBE_VIDEOS[selectedYoutube].title,
                                            src: youtubeEmbedUrl(YOUTUBE_VIDEOS[selectedYoutube].youtubeId, true),
                                            className: "h-full w-full",
                                            allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
                                            allowFullScreen: true
                                        }) : /*#__PURE__*/ _jsx("div", {
                                            className: "grid h-full place-items-center text-white/60",
                                            children: "동영상 주소를 youtube-data.ts에 입력하세요"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>{
                                                var _youtubeVideoRef_current;
                                                (_youtubeVideoRef_current = youtubeVideoRef.current) === null || _youtubeVideoRef_current === void 0 ? void 0 : _youtubeVideoRef_current.pause();
                                                setYoutubePlaying(false);
                                                setScreen("youtube");
                                            },
                                            className: "absolute left-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/55 text-white",
                                            children: /*#__PURE__*/ _jsx(ChevronLeft, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "px-4 pt-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("h1", {
                                            className: "text-[18px] font-bold leading-6",
                                            children: (_YOUTUBE_VIDEOS_selectedYoutube2 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube2 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube2.title
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "mt-1 text-[12px] text-gray-600",
                                            children: (_YOUTUBE_VIDEOS_selectedYoutube3 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube3 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube3.channel
                                        }),
                                        /*#__PURE__*/ _jsxs("p", {
                                            className: "text-[12px] text-gray-600",
                                            children: [
                                                "조회수 ",
                                                (_YOUTUBE_VIDEOS_selectedYoutube4 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube4 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube4.views,
                                                " \xb7 재생 횟수 ",
                                                (_YOUTUBE_VIDEOS_selectedYoutube5 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube5 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube5.playCount,
                                                " \xb7 ",
                                                (_YOUTUBE_VIDEOS_selectedYoutube6 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube6 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube6.age
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "mt-4 flex items-center justify-around border-b border-gray-200 pb-4 text-[11px]",
                                            children: [
                                                /*#__PURE__*/ _jsxs("button", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(HeartIcon, {
                                                            size: 21
                                                        }),
                                                        (_YOUTUBE_VIDEOS_selectedYoutube7 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube7 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube7.likes
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("button", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(MessageSquare, {
                                                            size: 20
                                                        }),
                                                        (_YOUTUBE_VIDEOS_selectedYoutube8 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube8 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube8.comments
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("button", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx(SendIcon, {
                                                            size: 20
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "ml-1",
                                                            children: "공유"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    children: /*#__PURE__*/ _jsx(MoreHorizontal, {
                                                        size: 20
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "mt-3 rounded-2xl bg-gray-100 p-3 text-[13px]",
                                            children: [
                                                /*#__PURE__*/ _jsxs("b", {
                                                    children: [
                                                        "댓글 ",
                                                        (_YOUTUBE_VIDEOS_selectedYoutube9 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube9 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube9.comments
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "mt-2",
                                                    children: (_YOUTUBE_VIDEOS_selectedYoutube10 = YOUTUBE_VIDEOS[selectedYoutube]) === null || _YOUTUBE_VIDEOS_selectedYoutube10 === void 0 ? void 0 : _YOUTUBE_VIDEOS_selectedYoutube10.description
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "mt-6 border-t-8 border-gray-100 p-4 text-sm font-semibold",
                                    children: "다음 동영상"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "space-y-3 px-3 pb-4",
                                    children: YOUTUBE_VIDEOS.map((nextVideo, index)=>index !== selectedYoutube && /*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>openYoutubeVideo(index),
                                            className: "flex w-full gap-3 text-left",
                                            children: [
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "relative aspect-video w-36 shrink-0 overflow-hidden rounded-lg bg-gray-200",
                                                    children: [
                                                        nextVideo.thumbnail ? /*#__PURE__*/ _jsx("img", {
                                                            src: assetUrl(nextVideo.thumbnail),
                                                            alt: "",
                                                            className: "h-full w-full object-cover"
                                                        }) : nextVideo.video ? /*#__PURE__*/ _jsx("video", {
                                                            src: assetUrl(nextVideo.video),
                                                            muted: true,
                                                            playsInline: true,
                                                            preload: "metadata",
                                                            className: "h-full w-full object-cover"
                                                        }) : null,
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "absolute bottom-1 right-1 rounded bg-black/80 px-1 text-[10px] text-white",
                                                            children: youtubeDurations[index] || nextVideo.duration
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "flex min-w-0 items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("img", {
                                                            src: assetUrl(nextVideo.avatar || "/tving-icon.png"),
                                                            alt: "",
                                                            className: "mt-0.5 h-7 w-7 shrink-0 rounded-full object-cover"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            className: "min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "line-clamp-2 text-xs",
                                                                    children: nextVideo.title
                                                                }),
                                                                /*#__PURE__*/ _jsxs("span", {
                                                                    className: "mt-1 block text-[10px] text-gray-500",
                                                                    children: [
                                                                        nextVideo.channel,
                                                                        " \xb7 조회수 ",
                                                                        nextVideo.views,
                                                                        " \xb7 ",
                                                                        nextVideo.age
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, nextVideo.youtubeId || index))
                                }),
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 z-20 flex h-7 items-center justify-center bg-white pb-1",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("nav", {
                                    className: "absolute bottom-7 left-0 right-0 z-20 flex h-[66px] shrink-0 items-center justify-around border-t border-gray-200 bg-white px-1 text-[9px]",
                                    children: [
                                        [
                                            { name: "홈", icon: /*#__PURE__*/ _jsx(House, { size: 21 }) },
                                            { name: "Shorts", icon: /*#__PURE__*/ _jsx(Clapperboard, { size: 21 }) },
                                            { name: "만들기", icon: /*#__PURE__*/ _jsx(CirclePlus, { size: 34 }) },
                                            { name: "구독", icon: /*#__PURE__*/ _jsx(Youtube, { size: 23 }) },
                                            { name: "내 페이지", icon: /*#__PURE__*/ _jsx(CircleUserRound, { size: 22 }) }
                                        ].map((item)=>/*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>{ setYoutubeNav(item.name); if(item.name === "홈") setScreen("youtube"); },
                                            className: "relative flex flex-col items-center gap-1 ".concat(youtubeNav === item.name ? "font-bold" : ""),
                                            children: [item.icon, item.name === "구독" && /*#__PURE__*/ _jsx("span", { className: "absolute right-1 top-0 h-2 w-2 rounded-full bg-red-500" }), item.name]
                                        }, item.name))
                                    ]
                                })
                            ]
                        }),
                        (screen === "instagram" || screen === "instagramProfile") && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-white text-black",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                screen === "instagram" ? /*#__PURE__*/ _jsxs(_Fragment, {
                                    children: [
                                        /*#__PURE__*/ _jsxs("header", {
                                            className: "relative flex h-12 shrink-0 items-center justify-between px-4",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    "aria-label": "새 게시물",
                                                    children: /*#__PURE__*/ _jsx(Plus, {
                                                        size: 25
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "absolute left-1/2 -translate-x-1/2 font-serif text-[22px] font-semibold",
                                                    children: "Instagram"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex gap-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("button", {
                                                            "aria-label": "보관함",
                                                            children: /*#__PURE__*/ _jsx(Bookmark, {
                                                                size: 21
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("button", {
                                                            "aria-label": "좋아요 알림",
                                                            children: /*#__PURE__*/ _jsx(HeartIcon, {
                                                                size: 22
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "scrollbar-hide flex shrink-0 gap-3 overflow-x-auto px-3 py-3",
                                            children: INSTAGRAM_STORIES.map((story, i)=>/*#__PURE__*/ _jsxs("button", {
                                                    onClick: ()=>{
                                                        setInstagramStoryIndex(i);
                                                        setInstagramStoryFromProfile(false);
                                                        setScreen("instagramStory");
                                                    },
                                                    className: "w-[62px] shrink-0 text-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "mx-auto grid h-[58px] w-[58px] place-items-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "grid h-full w-full place-items-center overflow-hidden rounded-full border-2 border-white bg-gray-100 text-sm",
                                                                children: story.avatar ? /*#__PURE__*/ _jsx("img", {
                                                                    src: assetUrl(story.avatar),
                                                                    className: "h-full w-full object-cover"
                                                                }) : /*#__PURE__*/ _jsx(DefaultProfileAvatar, {
                                                                    className: "h-full w-full"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "mt-1 block truncate text-[10px]",
                                                            children: story.name
                                                        })
                                                    ]
                                                }, i))
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "scrollbar-hide flex-1 overflow-y-auto",
                                            children: INSTAGRAM_POSTS.map((post, i)=>{
                                                var _instagramCarousel_i;
                                                const image = userImages["ig-post-".concat(i)] || post.images[(_instagramCarousel_i = instagramCarousel[i]) !== null && _instagramCarousel_i !== void 0 ? _instagramCarousel_i : 0];
                                                var _instagramCarousel_i1;
                                                return /*#__PURE__*/ _jsxs("article", {
                                                    onClick: ()=>{
                                                        setInstagramPostIndex(i);
                                                        setInstagramShowingProfilePost(false);
                                                        setScreen("instagramPost");
                                                    },
                                                    className: "mb-5 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("header", {
                                                            className: "flex items-center gap-2 px-3 py-2",
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("label", {
                                                                    onClick: (e)=>e.stopPropagation(),
                                                                    className: "relative grid h-8 w-8 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-gray-100 text-xs font-bold text-white",
                                                                    children: [
                                                                        userImages["ig-post-avatar-".concat(i)] || post.avatar ? /*#__PURE__*/ _jsx("img", {
                                                                            src: assetUrl(userImages["ig-post-avatar-".concat(i)] || post.avatar),
                                                                            className: "h-full w-full object-cover"
                                                                        }) : /*#__PURE__*/ _jsx(DefaultProfileAvatar, {
                                                                            className: "h-full w-full"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("input", {
                                                                            type: "file",
                                                                            accept: "image/*",
                                                                            "aria-label": "게시물 프로필 사진 바꾸기",
                                                                            className: "absolute inset-0 cursor-pointer opacity-0",
                                                                            onChange: (e)=>{
                                                                                var _e_target_files;
                                                                                return saveUserImage("ig-post-avatar-".concat(i), (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "flex-1 text-[12px]",
                                                                    children: post.username
                                                                }),
                                                                /*#__PURE__*/ _jsx(MoreVertical, {
                                                                    size: 18
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            onTouchStart: (e)=>{
                                                                instagramTouchX.current = e.touches[0].clientX;
                                                            },
                                                            onTouchEnd: (e)=>{
                                                                const start = instagramTouchX.current;
                                                                if (start === null || post.images.filter(Boolean).length < 2) return;
                                                                const distance = e.changedTouches[0].clientX - start;
                                                                if (Math.abs(distance) > 40) setInstagramCarousel((state)=>{
                                                                    var _state_i;
                                                                    return {
                                                                        ...state,
                                                                        [i]: Math.max(0, Math.min(post.images.length - 1, ((_state_i = state[i]) !== null && _state_i !== void 0 ? _state_i : 0) + (distance < 0 ? 1 : -1)))
                                                                    };
                                                                });
                                                                instagramTouchX.current = null;
                                                            },
                                                            className: "relative flex aspect-[3/4] items-center justify-center bg-[#f0f0f0]",
                                                            children: [
                                                                image ? youtubeVideoIdFromUrl(image) ? /*#__PURE__*/ _jsx("iframe", { src: youtubeEmbedUrl(youtubeVideoIdFromUrl(image)), title: "Instagram 영상", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, className: "h-full w-full border-0" }) : isVideoAsset(image) ? /*#__PURE__*/ _jsx("video", {
                                                                    src: assetUrl(image),
                                                                    controls: true,
                                                                    playsInline: true,
                                                                    className: "max-h-full max-w-full object-contain"
                                                                }) : /*#__PURE__*/ _jsx("img", {
                                                                    src: assetUrl(image),
                                                                    className: "max-h-full max-w-full object-contain"
                                                                }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: "grid h-full place-items-center text-sm text-gray-400",
                                                                            children: "사진 또는 동영상 추가"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("input", {
                                                                            type: "file",
                                                                            accept: "image/*,video/*",
                                                                            "aria-label": "사진 또는 동영상 추가",
                                                                            className: "absolute inset-0 h-full w-full cursor-pointer opacity-0",
                                                                            onClick: (e)=>e.stopPropagation(),
                                                                            onChange: (e)=>{
                                                                                var _e_target_files;
                                                                                return saveUserImage("ig-post-".concat(i), (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                post.images.filter(Boolean).length > 1 && /*#__PURE__*/ _jsxs(_Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("button", {
                                                                            onClick: ()=>setInstagramCarousel((s)=>{
                                                                                    var _s_i;
                                                                                    return {
                                                                                        ...s,
                                                                                        [i]: Math.max(0, ((_s_i = s[i]) !== null && _s_i !== void 0 ? _s_i : 0) - 1)
                                                                                    };
                                                                                }),
                                                                            className: "absolute left-1 top-1/2 rounded-full bg-black/30 p-2 text-white",
                                                                            children: "‹"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("button", {
                                                                            onClick: ()=>setInstagramCarousel((s)=>{
                                                                                    var _s_i;
                                                                                    return {
                                                                                        ...s,
                                                                                        [i]: Math.min(post.images.length - 1, ((_s_i = s[i]) !== null && _s_i !== void 0 ? _s_i : 0) + 1)
                                                                                    };
                                                                                }),
                                                                            className: "absolute right-1 top-1/2 rounded-full bg-black/30 p-2 text-white",
                                                                            children: "›"
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                            className: "absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1 text-xs text-white",
                                                                            children: [
                                                                                ((_instagramCarousel_i1 = instagramCarousel[i]) !== null && _instagramCarousel_i1 !== void 0 ? _instagramCarousel_i1 : 0) + 1,
                                                                                "/",
                                                                                post.images.length
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "flex items-center gap-4 px-3 py-2",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("button", {
                                                                    onClick: ()=>setInstagramLiked((s)=>({
                                                                                ...s,
                                                                                [i]: !s[i]
                                                                            })),
                                                                    children: /*#__PURE__*/ _jsx(HeartIcon, {
                                                                        size: 23,
                                                                        fill: instagramLiked[i] ? "#ff3040" : "none",
                                                                        color: instagramLiked[i] ? "#ff3040" : undefined
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ _jsx(MessageSquare, {
                                                                    size: 22
                                                                }),
                                                                /*#__PURE__*/ _jsx(SendIcon, {
                                                                    size: 22
                                                                }),
                                                                /*#__PURE__*/ _jsx(Bookmark, {
                                                                    className: "ml-auto",
                                                                    size: 22
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("p", {
                                                            className: "px-3 pb-2 text-[12px]",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    children: post.username
                                                                }),
                                                                "　",
                                                                post.caption
                                                            ]
                                                        })
                                                    ]
                                                }, i);
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("nav", {
                                            className: "flex h-12 shrink-0 items-center justify-around border-t border-gray-100",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>setScreen("instagram"),
                                                    children: /*#__PURE__*/ _jsx(House, {
                                                        size: 22
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(Search, {
                                                    size: 22
                                                }),
                                                /*#__PURE__*/ _jsx(CirclePlus, {
                                                    size: 23
                                                }),
                                                /*#__PURE__*/ _jsx(HeartIcon, {
                                                    size: 22
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>setScreen("instagramProfile"),
                                                    className: "grid h-7 w-7 place-items-center rounded-full bg-gray-300 text-xs",
                                                    children: userImages["ig-profile-avatar"] || INSTAGRAM_PROFILE.avatar ? /*#__PURE__*/ _jsx("img", {
                                                        src: assetUrl(userImages["ig-profile-avatar"] || INSTAGRAM_PROFILE.avatar),
                                                        className: "h-full w-full rounded-full object-cover"
                                                    }) : /*#__PURE__*/ _jsx(DefaultProfileAvatar, {
                                                        className: "h-full w-full"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                    children: [
                                        /*#__PURE__*/ _jsxs("header", {
                                            className: "flex items-center justify-between px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>setScreen("instagram"),
                                                    children: /*#__PURE__*/ _jsx(ChevronLeft, {
                                                        size: 22
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("b", {
                                                    className: "text-[14px]",
                                                    children: INSTAGRAM_PROFILE.username
                                                }),
                                                /*#__PURE__*/ _jsx(MoreHorizontal, {
                                                    size: 22
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center gap-5 px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    "aria-label": "내 스토리 보기",
                                                    onClick: ()=>{
                                                        setInstagramStoryIndex(0);
                                                        setInstagramStoryFromProfile(true);
                                                        setScreen("instagramStory");
                                                    },
                                                    className: "grid h-[72px] w-[72px] shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-[3px]",
                                                    children: /*#__PURE__*/ _jsx("span", {
                                                        className: "grid h-full w-full place-items-center overflow-hidden rounded-full border-2 border-white bg-gray-200",
                                                        children: userImages["ig-profile-avatar"] || INSTAGRAM_PROFILE.avatar ? /*#__PURE__*/ _jsx("img", {
                                                            src: assetUrl(userImages["ig-profile-avatar"] || INSTAGRAM_PROFILE.avatar),
                                                            className: "h-full w-full object-cover"
                                                        }) : /*#__PURE__*/ _jsx(DefaultProfileAvatar, {
                                                            className: "h-full w-full"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex flex-1 justify-around text-center text-[11px]",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "block text-sm",
                                                                    children: INSTAGRAM_PROFILE.posts
                                                                }),
                                                                "게시물"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "block text-sm",
                                                                    children: INSTAGRAM_PROFILE.followers
                                                                }),
                                                                "팔로워"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("b", {
                                                                    className: "block text-sm",
                                                                    children: INSTAGRAM_PROFILE.following
                                                                }),
                                                                "팔로잉"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "px-4 text-[12px]",
                                            children: INSTAGRAM_PROFILE.bio && /*#__PURE__*/ _jsx("p", {
                                                children: INSTAGRAM_PROFILE.bio
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex gap-2 px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    className: "flex-1 rounded-lg bg-gray-100 py-2 text-xs font-semibold",
                                                    children: "프로필 편집"
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    className: "flex-1 rounded-lg bg-gray-100 py-2 text-xs font-semibold",
                                                    children: "프로필 공유"
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    className: "rounded-lg bg-gray-100 px-3",
                                                    children: /*#__PURE__*/ _jsx(UserRound, {
                                                        size: 17
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "border-t border-gray-200 py-2 text-center",
                                            children: /*#__PURE__*/ _jsx(Grid2X2, {
                                                className: "mx-auto",
                                                size: 19
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "grid grid-cols-3 gap-[2px]",
                                            children: INSTAGRAM_PROFILE_GRID.map((post, i)=>/*#__PURE__*/ _jsx("div", {
                                                    onClick: ()=>{
                                                        setInstagramPostIndex(i);
                                                        setInstagramCarousel((current)=>({
                                                                ...current,
                                                                [100 + i]: 0
                                                            }));
                                                        setInstagramShowingProfilePost(true);
                                                        setScreen("instagramPost");
                                                    },
                                                    className: "relative aspect-[3/4] cursor-pointer bg-gray-100",
                                                    children: userImages["ig-grid-".concat(i, "-0")] || post.images[0] ? /*#__PURE__*/ _jsx("img", {
                                                        src: assetUrl(userImages["ig-grid-".concat(i, "-0")] || post.images[0]),
                                                        alt: post.caption,
                                                        className: "h-full w-full object-cover"
                                                    }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "grid h-full place-items-center text-[10px] text-gray-300",
                                                                children: "사진 추가"
                                                            }),
                                                            /*#__PURE__*/ _jsx("input", {
                                                                type: "file",
                                                                accept: "image/*,video/*",
                                                                multiple: true,
                                                                "aria-label": "사진 여러 장 추가",
                                                                className: "absolute inset-0 h-full w-full cursor-pointer opacity-0",
                                                                onClick: (e)=>e.stopPropagation(),
                                                                onChange: (e)=>saveUserImageSet("ig-grid-".concat(i), e.target.files)
                                                            })
                                                        ]
                                                    })
                                                }, i))
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "flex-1"
                                        }),
                                        /*#__PURE__*/ _jsxs("nav", {
                                            className: "flex h-12 shrink-0 items-center justify-around border-t border-gray-100",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>setScreen("instagram"),
                                                    children: /*#__PURE__*/ _jsx(House, {
                                                        size: 22
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(Search, {
                                                    size: 22
                                                }),
                                                /*#__PURE__*/ _jsx(CirclePlus, {
                                                    size: 23
                                                }),
                                                /*#__PURE__*/ _jsx(HeartIcon, {
                                                    size: 22
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "grid h-7 w-7 place-items-center overflow-hidden rounded-full",
                                                    children: /*#__PURE__*/ _jsx(DefaultProfileAvatar, {
                                                        className: "h-full w-full"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        screen === "instagramPost" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-white text-black",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex items-center gap-4 border-b border-gray-100 px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>setScreen(instagramShowingProfilePost ? "instagramProfile" : "instagram"),
                                            children: /*#__PURE__*/ _jsx(ChevronLeft, {})
                                        }),
                                        /*#__PURE__*/ _jsx("b", {
                                            children: "게시물"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "scrollbar-hide flex-1 overflow-y-auto",
                                    children: (()=>{
                                        var _gridPost_captions;
                                        const gridPost = INSTAGRAM_PROFILE_GRID[instagramPostIndex % INSTAGRAM_PROFILE_GRID.length];
                                        const post = instagramShowingProfilePost ? {
                                            username: INSTAGRAM_PROFILE.username,
                                            avatar: INSTAGRAM_PROFILE.avatar,
                                            caption: gridPost.caption,
                                            images: gridPost.images
                                        } : INSTAGRAM_POSTS[instagramPostIndex % INSTAGRAM_POSTS.length];
                                        const postAvatar = instagramShowingProfilePost ? userImages["ig-profile-avatar"] || INSTAGRAM_PROFILE.avatar : userImages["ig-post-avatar-".concat(instagramPostIndex)] || post.avatar;
                                        var _instagramCarousel_;
                                        const profileSlide = (_instagramCarousel_ = instagramCarousel[100 + instagramPostIndex]) !== null && _instagramCarousel_ !== void 0 ? _instagramCarousel_ : 0;
                                        var _instagramCarousel_instagramPostIndex;
                                        const image = instagramShowingProfilePost ? userImages["ig-grid-".concat(instagramPostIndex, "-").concat(profileSlide)] || gridPost.images[profileSlide] : userImages["ig-post-".concat(instagramPostIndex)] || post.images[(_instagramCarousel_instagramPostIndex = instagramCarousel[instagramPostIndex]) !== null && _instagramCarousel_instagramPostIndex !== void 0 ? _instagramCarousel_instagramPostIndex : 0];
                                        const caption = instagramShowingProfilePost ? ((_gridPost_captions = gridPost.captions) === null || _gridPost_captions === void 0 ? void 0 : _gridPost_captions[profileSlide]) || gridPost.caption : post.caption;
                                        return /*#__PURE__*/ _jsxs(_Fragment, {
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center gap-2 px-3 py-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "h-9 w-9 overflow-hidden rounded-full bg-gray-100",
                                                            children: postAvatar ? /*#__PURE__*/ _jsx("img", {
                                                                src: assetUrl(postAvatar),
                                                                className: "h-full w-full object-cover"
                                                            }) : /*#__PURE__*/ _jsx(DefaultProfileAvatar, {
                                                                className: "h-full w-full"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("b", {
                                                            className: "text-xs",
                                                            children: post.username
                                                        }),
                                                        /*#__PURE__*/ _jsx(MoreVertical, {
                                                            className: "ml-auto",
                                                            size: 19
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    onTouchStart: (e)=>{
                                                        instagramTouchX.current = e.touches[0].clientX;
                                                    },
                                                    onTouchEnd: (e)=>{
                                                        const start = instagramTouchX.current;
                                                        if (start === null || !instagramShowingProfilePost) return;
                                                        const distance = e.changedTouches[0].clientX - start;
                                                        if (Math.abs(distance) > 40) setInstagramCarousel((current)=>({
                                                                ...current,
                                                                [100 + instagramPostIndex]: Math.max(0, Math.min(gridPost.images.length - 1, profileSlide + (distance < 0 ? 1 : -1)))
                                                            }));
                                                        instagramTouchX.current = null;
                                                    },
                                                    className: "relative flex aspect-[3/4] items-center justify-center bg-gray-100",
                                                    children: [
                                                        image ? youtubeVideoIdFromUrl(image) ? /*#__PURE__*/ _jsx("iframe", { src: youtubeEmbedUrl(youtubeVideoIdFromUrl(image)), title: "Instagram 영상", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, className: "h-full w-full border-0" }) : isVideoAsset(image) ? /*#__PURE__*/ _jsx("video", {
                                                            src: assetUrl(image),
                                                            controls: true,
                                                            playsInline: true,
                                                            className: "max-h-full max-w-full object-contain"
                                                        }) : /*#__PURE__*/ _jsx("img", {
                                                            src: assetUrl(image),
                                                            className: "max-h-full max-w-full object-contain"
                                                        }) : /*#__PURE__*/ _jsx("span", {
                                                            className: "grid h-full place-items-center text-xs text-gray-400",
                                                            children: "사진 또는 동영상을 추가할 수 있어요"
                                                        }),
                                                        instagramShowingProfilePost && gridPost.images.length > 1 && /*#__PURE__*/ _jsxs(_Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("button", {
                                                                    onClick: ()=>setInstagramCarousel((current)=>({
                                                                                ...current,
                                                                                [100 + instagramPostIndex]: Math.max(0, profileSlide - 1)
                                                                            })),
                                                                    className: "absolute left-2 top-1/2 rounded-full bg-black/40 px-2 py-1 text-white",
                                                                    children: "‹"
                                                                }),
                                                                /*#__PURE__*/ _jsx("button", {
                                                                    onClick: ()=>setInstagramCarousel((current)=>({
                                                                                ...current,
                                                                                [100 + instagramPostIndex]: Math.min(gridPost.images.length - 1, profileSlide + 1)
                                                                            })),
                                                                    className: "absolute right-2 top-1/2 rounded-full bg-black/40 px-2 py-1 text-white",
                                                                    children: "›"
                                                                }),
                                                                /*#__PURE__*/ _jsxs("span", {
                                                                    className: "absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1 text-xs text-white",
                                                                    children: [
                                                                        profileSlide + 1,
                                                                        "/",
                                                                        gridPost.images.length
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex gap-4 px-3 py-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("button", {
                                                            onClick: ()=>setInstagramLiked((current)=>({ ...current, [instagramPostIndex]: !current[instagramPostIndex] })),
                                                            "aria-label": instagramLiked[instagramPostIndex] ? "좋아요 취소" : "좋아요",
                                                            children: /*#__PURE__*/ _jsx(HeartIcon, {
                                                                size: 23,
                                                                fill: !instagramShowingProfilePost && instagramLiked[instagramPostIndex] ? "#ff3040" : "none",
                                                                color: !instagramShowingProfilePost && instagramLiked[instagramPostIndex] ? "#ff3040" : undefined
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx(MessageSquare, {
                                                            size: 22
                                                        }),
                                                        /*#__PURE__*/ _jsx(SendIcon, {
                                                            size: 22
                                                        }),
                                                        /*#__PURE__*/ _jsx(Bookmark, {
                                                            className: "ml-auto",
                                                            size: 22
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("p", {
                                                    className: "px-3 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("b", {
                                                            children: post.username
                                                        }),
                                                        "　",
                                                        caption
                                                    ]
                                                })
                                            ]
                                        });
                                    })()
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        screen === "instagramStory" && /*#__PURE__*/ _jsxs("div", {
                            className: "relative flex h-full flex-col overflow-hidden bg-black text-white",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-gray-600 via-gray-900 to-black"
                                }),
                                (userImages["ig-story-".concat(instagramStoryIndex)] || ((_INSTAGRAM_STORIES_instagramStoryIndex = INSTAGRAM_STORIES[instagramStoryIndex]) === null || _INSTAGRAM_STORIES_instagramStoryIndex === void 0 ? void 0 : _INSTAGRAM_STORIES_instagramStoryIndex.image)) && /*#__PURE__*/ _jsx("img", {
                                    src: assetUrl(userImages["ig-story-".concat(instagramStoryIndex)] || INSTAGRAM_STORIES[instagramStoryIndex].image),
                                    className: "absolute inset-0 h-full w-full object-cover"
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    "aria-label": "이전 스토리",
                                    onClick: ()=>{
                                        if (!instagramStoryFromProfile) setInstagramStoryIndex((i)=>Math.max(0, i - 1));
                                    },
                                    className: "absolute left-0 top-20 z-10 h-[calc(100%-180px)] w-1/3"
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    "aria-label": "다음 스토리",
                                    onClick: ()=>{
                                        if (!instagramStoryFromProfile) setInstagramStoryIndex((i)=>Math.min(INSTAGRAM_STORIES.length - 1, i + 1));
                                    },
                                    className: "absolute right-0 top-20 z-10 h-[calc(100%-180px)] w-1/3"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "relative z-20 flex items-center gap-2 px-3 pt-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "h-8 w-8 overflow-hidden rounded-full bg-gray-300",
                                            children: /*#__PURE__*/ _jsx(DefaultProfileAvatar, {
                                                className: "h-full w-full"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("b", {
                                            className: "text-xs",
                                            children: (_INSTAGRAM_STORIES_instagramStoryIndex1 = INSTAGRAM_STORIES[instagramStoryIndex]) === null || _INSTAGRAM_STORIES_instagramStoryIndex1 === void 0 ? void 0 : _INSTAGRAM_STORIES_instagramStoryIndex1.name
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "text-[10px] text-white/60",
                                            children: instagramStoryIndex === 0 ? "20시간" : "5시간"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>setScreen(instagramStoryFromProfile ? "instagramProfile" : "instagram"),
                                            className: "ml-auto text-xl",
                                            children: "\xd7"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "relative z-20 mt-auto flex items-center gap-2 p-4",
                                    children: [
                                        !(userImages["ig-story-".concat(instagramStoryIndex)] || ((_INSTAGRAM_STORIES_instagramStoryIndex2 = INSTAGRAM_STORIES[instagramStoryIndex]) === null || _INSTAGRAM_STORIES_instagramStoryIndex2 === void 0 ? void 0 : _INSTAGRAM_STORIES_instagramStoryIndex2.image)) && /*#__PURE__*/ _jsxs("label", {
                                            className: "cursor-pointer rounded-full border border-white/70 bg-black/30 px-4 py-2 text-xs",
                                            children: [
                                                "사진 추가",
                                                /*#__PURE__*/ _jsx("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    className: "hidden",
                                                    onChange: (e)=>{
                                                        var _e_target_files;
                                                        return saveUserImage("ig-story-".concat(instagramStoryIndex), (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("input", {
                                            placeholder: "메시지 보내기",
                                            className: "h-10 flex-1 rounded-full border border-white/60 bg-black/20 px-4 text-xs outline-none placeholder:text-white/80"
                                        }),
                                        /*#__PURE__*/ _jsx(HeartIcon, {
                                            size: 22
                                        }),
                                        /*#__PURE__*/ _jsx(SendIcon, {
                                            size: 21
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom relative z-20 flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-white"
                                    })
                                })
                            ]
                        }),
                        screen === "kakao" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-[#b9ccdc] text-[#1c2228]",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex shrink-0 items-center gap-3 px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: goHome,
                                            children: /*#__PURE__*/ _jsx(ChevronLeft, {
                                                size: 22
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("b", {
                                            className: "flex-1 text-[15px]",
                                            children: "이아니\uD83D\uDC9A"
                                        }),
                                        /*#__PURE__*/ _jsx(Search, {
                                            size: 19
                                        }),
                                        /*#__PURE__*/ _jsx(MoreHorizontal, {
                                            size: 20
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "scrollbar-hide flex-1 overflow-y-auto px-3 pb-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-4 text-center",
                                            children: /*#__PURE__*/ _jsx("span", {
                                                className: "rounded-full bg-black/10 px-3 py-1.5 text-[10px] text-gray-700",
                                                children: "2026년 10월 29일 목요일"
                                            })
                                        }),
                                        KAKAO_CHAT.map((message, i)=>{
                                            const mine = message.from === "me";
                                            const previous = KAKAO_CHAT[i - 1];
                                            const showAvatar = !mine && (previous === null || previous === void 0 ? void 0 : previous.from) !== "ia";
                                            return /*#__PURE__*/ _jsxs("div", {
                                                className: "mb-2 flex items-end gap-2 ".concat(mine ? "justify-end" : "justify-start"),
                                                children: [
                                                    !mine && /*#__PURE__*/ _jsx("div", {
                                                        className: "h-8 w-8 shrink-0 self-start ".concat(showAvatar ? "grid place-items-center overflow-hidden rounded-full bg-[#f38b98] text-sm font-semibold text-white" : ""),
                                                        children: showAvatar && /*#__PURE__*/ _jsxs("label", {
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "relative grid h-full w-full cursor-pointer place-items-center overflow-hidden rounded-full bg-[#f38b98] text-sm font-semibold text-white",
                                                            children: [
                                                                userImages["kakao-avatar"] ? /*#__PURE__*/ _jsx("img", {
                                                                    src: assetUrl(userImages["kakao-avatar"]),
                                                                    className: "h-full w-full object-cover"
                                                                }) : "이",
                                                                /*#__PURE__*/ _jsx("input", {
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    "aria-label": "카카오톡 프로필 사진 바꾸기",
                                                                    className: "absolute inset-0 cursor-pointer opacity-0",
                                                                    onChange: (e)=>{
                                                                        var _e_target_files;
                                                                        return saveUserImage("kakao-avatar", (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "max-w-[78%] ".concat(mine ? "text-right" : ""),
                                                        children: [
                                                            !mine && showAvatar && /*#__PURE__*/ _jsx("div", {
                                                                className: "mb-1 text-[10px] text-gray-600",
                                                                children: "이아니\uD83D\uDC9A"
                                                            }),
                                                            message.text && /*#__PURE__*/ _jsx("div", {
                                                                className: "inline-block rounded-[13px] px-3 py-2 text-[12px] leading-[1.45] shadow-sm ".concat(mine ? "bg-[#fee500]" : "bg-white"),
                                                                children: message.text
                                                            }),
                                                            message.photos && /*#__PURE__*/ _jsx("div", {
                                                                className: "grid max-w-[250px] grid-cols-6 gap-[2px] overflow-hidden rounded-xl shadow-sm",
                                                                children: message.photos.map((src, photoIndex)=>{
                                                                    const finalPair = message.photos.length % 3 === 2 && photoIndex >= message.photos.length - 2;
                                                                    return /*#__PURE__*/ _jsx("img", {
                                                                        src: assetUrl(src),
                                                                        alt: "",
                                                                        className: "aspect-square w-full object-cover ".concat(finalPair ? "col-span-3" : "col-span-2")
                                                                    }, src);
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, i);
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex shrink-0 items-center gap-2 border-t border-white/50 bg-white/90 px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "text-xl leading-none text-gray-400",
                                            children: "＋"
                                        }),
                                        /*#__PURE__*/ _jsx("input", {
                                            placeholder: "메시지 입력",
                                            className: "h-9 flex-1 rounded-full border border-gray-200 bg-white px-3 text-xs outline-none"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "text-gray-400",
                                            children: "＃"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex shrink-0 justify-center bg-white pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        screen === "camera" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-black text-white",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "relative min-h-0 flex-1 overflow-hidden bg-[#161616]",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ _jsx("video", {
                                            src: assetUrl("/%EC%9D%B4%EC%95%88%20%ED%8E%B8%EC%9D%98%EC%A0%90.mp4"),
                                            autoPlay: true,
                                            muted: true,
                                            loop: true,
                                            playsInline: true,
                                            className: "h-full w-full object-cover opacity-75"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: goHome,
                                            className: "absolute left-4 top-4 rounded-full bg-black/35 p-2",
                                            children: /*#__PURE__*/ _jsx(ChevronLeft, {})
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "absolute right-4 top-4 rounded-full bg-black/35 p-2",
                                            children: /*#__PURE__*/ _jsx(FlashIcon, {
                                                size: 19
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "shrink-0 bg-black pb-2",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            ref: cameraModesRef,
                                            className: "scrollbar-hide flex justify-start gap-5 overflow-x-auto px-[calc(50%-155px)] py-3 text-[10px]",
                                            children: [
                                                "시네마틱",
                                                "동영상",
                                                "사진",
                                                "인물",
                                                "파노라마"
                                            ].map((mode)=>/*#__PURE__*/ _jsx("button", {
                                                    "data-mode": mode,
                                                    onClick: ()=>setCameraMode(mode),
                                                    className: "w-[58px] shrink-0 text-center ".concat(cameraMode === mode ? "font-bold text-yellow-300" : "text-white/70"),
                                                    children: mode
                                                }, mode))
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-around py-3",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>setScreen("photos"),
                                                    className: "h-9 w-9 rounded-md border border-white/70 bg-white/15",
                                                    "aria-label": "최근 사진"
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    "aria-label": cameraMode === "동영상" ? "동영상 촬영" : "사진 촬영",
                                                    className: "grid h-[62px] w-[62px] place-items-center rounded-full border-[4px] border-white",
                                                    children: /*#__PURE__*/ _jsx("span", {
                                                        className: "h-[48px] w-[48px] rounded-full ".concat(cameraMode === "동영상" ? "bg-red-500" : "bg-white")
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    "aria-label": "카메라 전환",
                                                    className: "grid h-10 w-10 place-items-center rounded-full bg-white/15",
                                                    children: /*#__PURE__*/ _jsx(RotateCw, {
                                                        size: 20
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "safe-bottom flex justify-center pb-2",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                onClick: goHome,
                                                className: "h-[5px] w-[134px] rounded-full bg-white"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        screen === "photos" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-white text-black",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex items-center justify-between px-4 pt-3",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            children: [
                                                /*#__PURE__*/ _jsx("h1", {
                                                    className: "text-[24px] font-bold",
                                                    children: "보관함"
                                                }),
                                                /*#__PURE__*/ _jsxs("span", {
                                                    className: "text-[11px] text-gray-500",
                                                    children: [
                                                        PHOTO_ASSETS.length,
                                                        "개의 항목"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "rounded-full bg-gray-100 px-4 py-2 text-xs",
                                            children: "선택"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "scrollbar-hide flex-1 overflow-y-auto px-1 pt-3",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "grid grid-cols-4 gap-1",
                                        children: PHOTO_ASSETS.map((photo, i)=>/*#__PURE__*/ _jsx("button", {
                                                onClick: ()=>{
                                                    setSelectedPhotoIndex(i);
                                                    setScreen("photosViewer");
                                                },
                                                className: "relative aspect-square overflow-hidden bg-gray-100",
                                                children: photo.type === "video" ? /*#__PURE__*/ _jsx("video", {
                                                    src: assetUrl(photo.src),
                                                    muted: true,
                                                    playsInline: true,
                                                    preload: "metadata",
                                                    className: "h-full w-full object-cover"
                                                }) : /*#__PURE__*/ _jsx("img", {
                                                    src: assetUrl(photo.src),
                                                    alt: "",
                                                    className: "h-full w-full object-cover"
                                                })
                                            }, photo.name))
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("nav", {
                                    className: "flex h-12 items-center justify-center gap-6",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "rounded-full bg-gray-100 px-4 py-2 text-xs text-blue-600",
                                            children: "보관함"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "rounded-full bg-gray-100 px-4 py-2 text-xs",
                                            children: "앨범"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "rounded-full bg-gray-100 p-2",
                                            children: /*#__PURE__*/ _jsx(Search, {
                                                size: 17
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        screen === "photosViewer" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-black text-white",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex items-center justify-between px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>setScreen("photos"),
                                            children: /*#__PURE__*/ _jsx(ChevronLeft, {})
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "text-sm",
                                            children: "사진"
                                        }),
                                        /*#__PURE__*/ _jsx(MoreHorizontal, {})
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "flex flex-1 items-center justify-center",
                                    children: PHOTO_ASSETS[selectedPhotoIndex]?.type === "youtube" ? /*#__PURE__*/ _jsx("iframe", { src: youtubeEmbedUrl(youtubeVideoIdFromUrl(PHOTO_ASSETS[selectedPhotoIndex].videoUrl), true), title: PHOTO_ASSETS[selectedPhotoIndex].name, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, className: "h-full w-full border-0" }) : PHOTO_ASSETS[selectedPhotoIndex]?.type === "video" ? /*#__PURE__*/ _jsx("video", {
                                        src: assetUrl((_PHOTO_ASSETS_selectedPhotoIndex1 = PHOTO_ASSETS[selectedPhotoIndex]) === null || _PHOTO_ASSETS_selectedPhotoIndex1 === void 0 ? void 0 : _PHOTO_ASSETS_selectedPhotoIndex1.src),
                                        controls: true,
                                        autoPlay: true,
                                        muted: true,
                                        className: "max-h-full w-full"
                                    }) : /*#__PURE__*/ _jsx("img", {
                                        src: assetUrl((_PHOTO_ASSETS_selectedPhotoIndex2 = PHOTO_ASSETS[selectedPhotoIndex]) === null || _PHOTO_ASSETS_selectedPhotoIndex2 === void 0 ? void 0 : _PHOTO_ASSETS_selectedPhotoIndex2.src),
                                        className: "max-h-full max-w-full object-contain"
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center justify-between px-5 py-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>setSelectedPhotoIndex((i)=>Math.max(0, i - 1)),
                                            children: /*#__PURE__*/ _jsx(ChevronLeft, {})
                                        }),
                                        /*#__PURE__*/ _jsxs("span", {
                                            className: "text-xs",
                                            children: [
                                                selectedPhotoIndex + 1,
                                                " / ",
                                                PHOTO_ASSETS.length
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: ()=>setSelectedPhotoIndex((i)=>Math.min(PHOTO_ASSETS.length - 1, i + 1)),
                                            children: /*#__PURE__*/ _jsx(ChevronLeft, {
                                                className: "rotate-180"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: ()=>setScreen("photos"),
                                        className: "h-[5px] w-[134px] rounded-full bg-white"
                                    })
                                })
                            ]
                        }),
                        screen === "phone" && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-[#f8f8fa] text-black",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex items-center justify-between px-4 pt-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "text-sm text-[#087dff]",
                                            children: "편집"
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex rounded-full bg-gray-200 p-1 text-[11px]",
                                            children: [
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>setPhoneTab("최근 통화"),
                                                    className: "rounded-full px-3 py-1.5 ".concat(phoneTab === "최근 통화" ? "bg-white shadow" : ""),
                                                    children: "모두"
                                                }),
                                                /*#__PURE__*/ _jsx("button", {
                                                    onClick: ()=>setPhoneTab("부재중 전화"),
                                                    className: "rounded-full px-3 py-1.5 ".concat(phoneTab === "부재중 전화" ? "bg-white shadow" : ""),
                                                    children: "부재중 전화"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            className: "grid h-9 w-9 place-items-center rounded-full bg-white shadow",
                                            children: /*#__PURE__*/ _jsx(MoreHorizontal, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("h1", {
                                    className: "px-4 pb-2 pt-2 text-[25px] font-bold",
                                    children: phoneTab
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "mx-4 mb-2 flex items-center gap-2 rounded-full bg-gray-200 px-3 py-2 text-xs text-gray-500",
                                    children: [
                                        /*#__PURE__*/ _jsx(Search, {
                                            size: 15
                                        }),
                                        "검색",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "ml-auto",
                                            children: /*#__PURE__*/ _jsx(MicOff, {
                                                size: 15
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "flex-1 overflow-y-auto px-4",
                                    children: (phoneTab === "최근 통화" || phoneTab === "즐겨찾기" || phoneTab === "부재중 전화" && missed) && RECENT_CALLS.filter((call) => phoneTab !== "부재중 전화" || call.missed).map((call, index) => /*#__PURE__*/ _jsxs("button", {
                                        onClick: () => call.name === "이아니 💚" && setCallIncoming(true),
                                        className: "flex w-full items-center gap-3 border-b border-gray-200 px-1 py-1.5 text-left",
                                        children: [
                                            /*#__PURE__*/ _jsx(DefaultProfileAvatar, { className: "h-8 w-8 bg-[#9ca3af]" }),
                                            /*#__PURE__*/ _jsxs("span", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ _jsx("b", { className: call.missed ? "text-sm text-red-500" : "text-sm text-black", children: call.name }),
                                                    /*#__PURE__*/ _jsx("span", { className: "block text-[11px] text-gray-500", children: `${call.direction} 휴대전화` })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("span", { className: "text-xs text-gray-400", children: call.time }),
                                            /*#__PURE__*/ _jsx("span", { className: "text-lg font-medium text-[#087dff]", children: "ⓘ" })
                                        ]
                                    }, `${call.name}-${index}`))
                                }),                                /*#__PURE__*/ _jsx("nav", {
                                    className: "flex h-[60px] items-center justify-around border-t border-gray-200 bg-white px-1",
                                    children: [
                                        {
                                            name: "즐겨찾기",
                                            icon: /*#__PURE__*/ _jsx(Star, {
                                                size: 19
                                            })
                                        },
                                        {
                                            name: "최근 통화",
                                            icon: /*#__PURE__*/ _jsx(Phone, {
                                                size: 19
                                            })
                                        },
                                        {
                                            name: "연락처",
                                            icon: /*#__PURE__*/ _jsx(ContactRound, {
                                                size: 19
                                            })
                                        },
                                        {
                                            name: "키패드",
                                            icon: /*#__PURE__*/ _jsx(Grid3X3, {
                                                size: 19
                                            })
                                        },
                                        {
                                            name: "음성 사서함",
                                            icon: /*#__PURE__*/ _jsx(MessageCircle, {
                                                size: 19
                                            })
                                        }
                                    ].map((item)=>/*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>setPhoneTab(item.name),
                                            className: "flex flex-col items-center gap-1 text-[9px] ".concat(phoneTab === item.name ? "text-blue-500" : "text-gray-500"),
                                            children: [
                                                item.icon,
                                                item.name
                                            ]
                                        }, item.name))
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center bg-white pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        showIncomingMessage && screen === "home" && /*#__PURE__*/ _jsxs("button", {
                            onClick: openMessages,
                            className: "absolute left-3 right-3 top-[48px] z-50 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 p-3 text-left text-black shadow-xl backdrop-blur-xl",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: "grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-green-500 text-white",
                                    children: /*#__PURE__*/ _jsx(MessageCircle, {
                                        size: 17,
                                        fill: "white"
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("span", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ _jsx("b", {
                                            className: "block text-xs",
                                            children: "이아니 \uD83D\uDC9A"
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "block truncate text-xs",
                                            children: "거의 다 와가는데 왜 안받아ㅜㅜ"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    className: "text-[10px] text-gray-500",
                                    children: "지금"
                                })
                            ]
                        }),
                        ![
                            "lock",
                            "passcode",
                            "home",
                            "inbox",
                            "noyuna",
                            "messages",
                            "calendar",
                            "x",
                            "activeCall",
                            "tving",
                            "tvingDetail",
                            "youtube",
                            "youtubeDetail",
                            "instagram",
                            "instagramProfile",
                            "instagramPost",
                            "instagramStory",
                            "camera",
                            "photos",
                            "photosViewer",
                            "phone",
                            "kakao"
                        ].includes(screen) && /*#__PURE__*/ _jsxs("div", {
                            className: "flex h-full flex-col bg-[#f7f7fa] text-black",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {
                                    dark: true
                                }),
                                /*#__PURE__*/ _jsxs("header", {
                                    className: "flex items-center justify-between px-5 py-3",
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: goHome,
                                            className: "text-[#007AFF]",
                                            children: /*#__PURE__*/ _jsx(ChevronLeft, {})
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "font-semibold",
                                            children: screen === "camera" ? "카메라" : screen === "photos" ? "사진" : screen === "phone" ? "전화" : screen === "instagram" ? "Instagram" : screen === "kakao" ? "카카오톡" : screen === "tving" ? "티빙" : screen === "youtube" ? "YouTube" : "Safari"
                                        }),
                                        /*#__PURE__*/ _jsx(MoreHorizontal, {})
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex flex-1 flex-col items-center justify-center text-gray-500",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mb-3 grid h-16 w-16 place-items-center rounded-3xl bg-gray-200",
                                            children: /*#__PURE__*/ _jsx(Smartphone, {
                                                size: 32
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            children: "화면을 준비 중입니다"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        onClick: goHome,
                                        className: "h-[5px] w-[134px] rounded-full bg-black"
                                    })
                                })
                            ]
                        }),
                        callIncoming && /*#__PURE__*/ _jsxs("div", {
                            className: "absolute inset-0 z-30 flex flex-col items-center bg-gradient-to-b from-[#4a4d50]/90 via-[#262a2e]/95 to-[#343537] px-6 text-white backdrop-blur-2xl",
                            children: [
                                /*#__PURE__*/ _jsx(StatusBar, {}),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "mt-16 text-[13px] text-white/70",
                                    children: "휴대전화"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "mt-4 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-emerald-300 to-teal-600 text-4xl font-semibold",
                                    children: "이"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "mt-5 text-[27px] font-semibold",
                                    children: "이아니 \uD83D\uDC9A"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "mt-auto mb-10 grid w-full grid-cols-2 gap-y-8 text-center",
                                    children: [
                                        /*#__PURE__*/ _jsxs("button", {
                                            onClick: declineCall,
                                            className: "flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "grid h-[58px] w-[58px] place-items-center rounded-full bg-red-500",
                                                    children: /*#__PURE__*/ _jsx(PhoneOff, {
                                                        size: 25
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-xs",
                                                    children: "거절"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("button", {
                                            onClick: acceptCall,
                                            className: "flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "pulse grid h-[58px] w-[58px] place-items-center rounded-full bg-green-500",
                                                    children: /*#__PURE__*/ _jsx(Phone, {
                                                        size: 25,
                                                        fill: "white"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-xs",
                                                    children: "응답"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("button", {
                                            onClick: declineCall,
                                            className: "flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "grid h-[46px] w-[46px] place-items-center rounded-full bg-white/20",
                                                    children: /*#__PURE__*/ _jsx("span", {
                                                        className: "text-xl",
                                                        children: "◷"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-xs",
                                                    children: "나중에 보기"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("button", {
                                            onClick: ()=>{
                                                setCallIncoming(false);
                                                setScreen("messages");
                                            },
                                            className: "flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "grid h-[46px] w-[46px] place-items-center rounded-full bg-white/20",
                                                    children: /*#__PURE__*/ _jsx(MessageCircle, {
                                                        size: 21
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-xs",
                                                    children: "메시지"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "safe-bottom flex justify-center pb-2",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "h-[5px] w-[134px] rounded-full bg-white"
                                    })
                                })
                            ]
                        }),
                        screen === "activeCall" && /*#__PURE__*/ _jsxs("div", {
                            className: "absolute inset-0 z-30 overflow-hidden text-white",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "absolute inset-0 scale-110 bg-cover bg-center blur-xl",
                                    style: {
                                        backgroundImage: 'linear-gradient(135deg,rgba(31,32,34,.62),rgba(19,19,18,.78)),url("'.concat(assetUrl(WALLPAPER_URL), '")')
                                    }
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "absolute inset-0 bg-black/25 backdrop-blur-sm"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "relative flex h-full flex-col px-5",
                                    children: [
                                        /*#__PURE__*/ _jsx(StatusBar, {}),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "mt-3 flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "grid h-[74px] w-[74px] place-items-center rounded-full bg-[#9295a3] text-[34px] font-medium",
                                                    children: "이"
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "mt-2 text-[25px] font-semibold",
                                                    children: "이아니 \uD83D\uDC9A"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "mt-0.5 text-[13px] tabular-nums text-white/85",
                                                    children: [
                                                        String(Math.floor(callSeconds / 60)).padStart(2, "0"),
                                                        ":",
                                                        String(callSeconds % 60).padStart(2, "0")
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "scrollbar-hide mt-4 flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-y-auto pb-4",
                                            children: callTranscript.slice(0, callLine).map((line, i)=>{
                                                const mine = line.startsWith("나:");
                                                return /*#__PURE__*/ _jsxs("div", {
                                                    className: "max-w-[84%] rounded-2xl px-3 py-2 ".concat(mine ? "ml-auto rounded-br-md bg-[#087dce]/75 text-right" : "mr-auto rounded-bl-md bg-black/35 text-left"),
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "mb-0.5 text-[9px] text-white/65",
                                                            children: mine ? "나" : "이아니 💚"
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "text-[12px] leading-4",
                                                            children: line.slice(line.indexOf(":") + 1).trim()
                                                        })
                                                    ]
                                                }, i);
                                            })
                                        }),
                                        showCallKeypad && /*#__PURE__*/ _jsx("div", {
                                            className: "mb-3 grid grid-cols-3 gap-2 px-8",
                                            children: [
                                                "1",
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9",
                                                "*",
                                                "0",
                                                "#"
                                            ].map((n)=>/*#__PURE__*/ _jsx("div", {
                                                    className: "grid h-8 place-items-center rounded-full bg-white/15 text-sm",
                                                    children: n
                                                }, n))
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "mb-3 grid grid-cols-3 gap-x-6 gap-y-3",
                                            children: [
                                                /*#__PURE__*/ _jsx(CallControl, {
                                                    label: callMuted ? "소리 켬" : "소리 끔",
                                                    active: callMuted,
                                                    onClick: ()=>setCallMuted((v)=>!v),
                                                    icon: /*#__PURE__*/ _jsx(MicOff, {
                                                        size: 19
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(CallControl, {
                                                    label: "키패드",
                                                    active: showCallKeypad,
                                                    onClick: ()=>setShowCallKeypad((v)=>!v),
                                                    icon: /*#__PURE__*/ _jsx(Grid3X3, {
                                                        size: 19
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(CallControl, {
                                                    label: "스피커",
                                                    active: speakerOn,
                                                    onClick: ()=>setSpeakerOn((v)=>!v),
                                                    icon: /*#__PURE__*/ _jsx(Volume2, {
                                                        size: 20
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(CallControl, {
                                                    label: "통화 추가",
                                                    onClick: ()=>{},
                                                    icon: /*#__PURE__*/ _jsx(UserRoundPlus, {
                                                        size: 19
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(CallControl, {
                                                    label: "FaceTime",
                                                    onClick: ()=>{},
                                                    icon: /*#__PURE__*/ _jsx(Video, {
                                                        size: 19
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(CallControl, {
                                                    label: "연락처",
                                                    onClick: ()=>{},
                                                    icon: /*#__PURE__*/ _jsx(ContactRound, {
                                                        size: 19
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            onClick: goHome,
                                            "aria-label": "통화 종료",
                                            className: "mx-auto mb-5 grid h-[58px] w-[58px] place-items-center rounded-full bg-[#ff3838] shadow-lg shadow-red-900/40",
                                            children: /*#__PURE__*/ _jsx(Phone, {
                                                size: 25,
                                                className: "rotate-[135deg]",
                                                fill: "white"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "safe-bottom flex justify-center pb-2",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                onClick: goHome,
                                                className: "h-[5px] w-[134px] rounded-full bg-white"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}













