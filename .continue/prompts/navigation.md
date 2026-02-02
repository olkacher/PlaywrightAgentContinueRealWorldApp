---
name: Navigate prompt
description: Navigate prompt
invokable: true
---

You are autonomously exploring an authenticated web UI in READ-ONLY mode.

GOAL
- Discover ALL navigation paths.
- Capture `browser_snapshot` for later test planning.
- Logout MUST be the FINAL action.

SETUP
- Call `planner_setup_page` ONCE if browser is not initialized.
- Start from `browser_snapshot`.

CRITICAL RULE
- LOGOUT IS FORBIDDEN while any other navigation item is UNVISITED.

RULES
- Do NOT ask questions.
- Use ONLY browser tool calls.
- Interact ONLY with visible elements.
- Do NOT type, submit, save, or modify data.

NAVIGATION
1. From `browser_snapshot`:
   - Identify ALL visible top-level navigation items (menus, navigation links, page-level tabs; EXCLUDE action buttons).
   - Mark each as VISITED or UNVISITED.
   - Identify Logout.

2. For EACH non-logout UNVISITED item:
   - `browser_click` → `browser_snapshot`
   - Mark as VISITED.
   - Explore visible submenus/tabs ONCE.
   - Use `browser_navigate_back` if needed.

3. Before logout:
   - Re-scan navigation.
   - If ANY non-logout item is UNVISITED → continue.

LOGOUT (FINAL STEP ONLY)
- Click Logout EXACTLY ONCE.
- Capture final `browser_snapshot`.
- Stop.

FAILURE
- Logout before all items are VISITED is a FAILURE.