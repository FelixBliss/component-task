---
name: Nested web app validation
description: Validation constraints for the imported component-task web package
---

The imported web app is intentionally outside the root pnpm workspace package list, so root dependency installation does not provide its Vite and TypeScript binaries.

**Why:** Treating the nested app as a root workspace package caused dependency installation to target the wrong manifest and blocked validation.

**How to apply:** For local validation only, install the web package in isolation with the existing package manifest and without generating a nested lockfile; do not alter root workspace dependencies or configuration.