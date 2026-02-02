const { spawn } = require("child_process");

const PLAYWRIGHT_PROJECT =
  "C:/Users/proficom/PlaywrightAgentContinueRealWorldApp";

console.error(
  "[wrapper] Starting Playwright MCP server from:",
  PLAYWRIGHT_PROJECT
);

const child = spawn(
  "npx",
  ["playwright", "run-test-mcp-server"],
  {
    cwd: PLAYWRIGHT_PROJECT,
    shell: true,
    stdio: ["pipe", "pipe", "inherit"], 
  }
);

process.stdin.pipe(child.stdin);
child.stdout.pipe(process.stdout);

child.on("exit", (code) => {
  console.error("[wrapper] child exited with code", code);
});

child.on("error", (err) => {
  console.error("[wrapper] child error", err);
});

process.stdin.resume();
