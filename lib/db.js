// Tiny JSON-file database (free, no external service). Writes are atomic.
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', 'data', 'db.json');
const EMPTY = { users: [], sessions: {}, orders: [], payouts: [], usedMails: [], resets: {} };
let state;
function load() {
  try { state = { ...EMPTY, ...JSON.parse(fs.readFileSync(FILE, 'utf8')) }; }
  catch { state = JSON.parse(JSON.stringify(EMPTY)); }
  return state;
}
let timer = null;
function save() {
  clearTimeout(timer);
  timer = setTimeout(flush, 50);
}
function flush() {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  const tmp = FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(state, null, 2));
  fs.renameSync(tmp, FILE);
}
load();
process.on('exit', flush);
module.exports = { get data() { return state; }, save, flush };
