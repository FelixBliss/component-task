---
name: Nested app dependency installs
description: Workspace behavior to remember when an imported app keeps its package manifest below the repository root.
---

When an imported project keeps its package manifest in a nested directory, the package installation helper may resolve the workspace root rather than that nested app directory. Verify the dependency location before restarting the app workflow. Also check that generated lockfiles do not retain Replit-internal registry URLs when the project is built by an external CI provider.

**Why:** The imported app's workflow initially failed because its nested `web` package had no local dependencies after a helper install targeted the root. Its first lockfile also recorded an internal package host that external Vercel builders could not resolve.

**How to apply:** For nested JavaScript apps, confirm the package manager is operating against the directory containing the app's package manifest, keep generated root manifests out of the repository, and validate lockfile URLs from a public-registry environment before external publishing.