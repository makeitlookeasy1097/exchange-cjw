import { readdir, rm, stat } from "node:fs/promises";
import { join } from "node:path";

async function removeExportedVideos(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }

  await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await removeExportedVideos(path);
    } else if (/\.(?:mp4|webm|mov)$/i.test(entry.name)) {
      const file = await stat(path);
      const replacedByYouTube = new Set(["reels_v1.mp4", "reels_v2.mp4", "사진 34.mp4", "이안 편의점.mp4"]).has(entry.name);
      if (file.size > 100 * 1024 * 1024 || replacedByYouTube) await rm(path);
    }
  }));
}

await removeExportedVideos("out");
