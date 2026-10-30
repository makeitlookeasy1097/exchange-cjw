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
      if (file.size > 100 * 1024 * 1024) await rm(path);
    }
  }));
}

await removeExportedVideos("out");
