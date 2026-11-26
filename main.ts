import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// 终稿：工具把草稿误标为已发送，而它只是照搬训练数据里人类打勾的样子。
const entry = "I didn't miss the deadline; my tool marked my draft as sent, but it learned that checkmark from humans who only pretend to reply.";

if (entry.length < 1 || entry.length > 200 || !entry.trim() || /[\u0000-\u001F\u007F]/.test(entry)) {
  throw new Error('entry must be 1-200 nonblank characters without control characters');
}

const base = process.env.MAKEFUN_OUTPUT_DIR?.trim() || '/output';
mkdirSync(base, { recursive: true });
writeFileSync(resolve(base, 'entry.txt'), entry, 'utf8');
