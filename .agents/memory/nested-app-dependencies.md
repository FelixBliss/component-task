---
name: Nested app dependency installs
description: Workspace behavior to remember when an imported app keeps its package manifest below the repository root.
---

When an imported project keeps its package manifest in a nested directory, the package installation helper may resolve the workspace root rather than that nested app directory. Verify the dependency location before restarting the app workflow.

**Why:** The imported app's workflow initially failed because its nested `web` package had no local dependencies after a helper install targeted the root.

**How to apply:** For nested JavaScript apps, confirm the package manager is operating against the directory containing the app's package manifest, and keep generated root manifests out of the repository.