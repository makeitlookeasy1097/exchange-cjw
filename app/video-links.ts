export const YOUTUBE_VIDEO_LINKS = {
  reelsV1: "https://youtube.com/shorts/s0CFMdR4mK0?feature=share",
  reelsV2: "https://youtube.com/shorts/MWK7d188Q9E?feature=share",
  ianConvenience: "https://youtube.com/shorts/Y1CZzlfnCSY?feature=share",
  photo34: "https://youtube.com/shorts/Mxz__wi-ytQ?feature=share",
} as const;

export function getYouTubeVideoId(url: string | null | undefined): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtube(?:-nocookie)?\.com\/(?:shorts\/|embed\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match?.[1] ?? null;
}

export function getYouTubeThumbnailUrl(url: string): string {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
}
