/**
 * Updates data/telegram.json with latest Telegram post IDs
 * by scraping https://t.me/s/<channel>.
 *
 * Usage:
 *   node scripts/update-telegram-posts.mjs
 *   CHANNEL=ExpooTeam LIMIT=6 node scripts/update-telegram-posts.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const workspaceRoot = process.cwd();
const dataPath = path.join(workspaceRoot, 'data', 'telegram.json');

const channel = (process.env.CHANNEL || 'ExpooTeam').trim();
const limit = Math.max(1, Math.min(12, Number(process.env.LIMIT || 6)));

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; ExpooBot/1.0; +https://github.com/)'
    }
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

function extractPostIdsFromHtml(html, channelName) {
  // Matches: data-post="ExpooTeam/471"
  const re = new RegExp(`data-post="${channelName}\\/([0-9]+)"`, 'g');
  const ids = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    ids.push(Number(m[1]));
  }
  // dedupe and sort desc
  const uniq = Array.from(new Set(ids)).filter(n => Number.isFinite(n) && n > 0);
  uniq.sort((a, b) => b - a);
  return uniq;
}

async function main() {
  const url = `https://t.me/s/${encodeURIComponent(channel)}`;
  const html = await fetchHtml(url);
  const ids = extractPostIdsFromHtml(html, channel).slice(0, limit);

  if (!ids.length) {
    throw new Error(`No post IDs found for channel "${channel}".`);
  }

  const payload = {
    channel,
    posts: ids
  };

  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  await fs.writeFile(dataPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`Updated ${path.relative(workspaceRoot, dataPath)}: ${ids.join(', ')}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

