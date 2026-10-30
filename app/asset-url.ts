const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const remoteMediaBase = (process.env.NEXT_PUBLIC_MEDIA_BASE_URL || "").replace(/\/+$/, "");

/** Public asset URLs work both at localhost and under a GitHub Pages repository path. */
export function assetUrl(source: string | null | undefined): string {
  if (!source) return "";
  if (/^(?:data:|blob:|https?:|\/\/)/i.test(source)) return source;

  const path = source.startsWith("/") ? source : `/${source}`;
  if (remoteMediaBase && /\.(?:mp4|webm|mov)(?:[?#]|$)/i.test(path)) {
    return `${remoteMediaBase}${path}`;
  }

  return `${basePath}${path}`;
}
