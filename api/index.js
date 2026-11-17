// Vercel serverless entry: every request is rewritten here (see vercel.json).
// `npm run vercel-build` compiles src/ -> dist/ first.
module.exports = require("../dist/app").default;
