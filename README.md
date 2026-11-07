# Actions Complex Fixture

Local fixture repo for exercising GitEase Workflow Studio against a **dense GitHub Actions job DAG**.

## Design constraints

- **GitHub-hosted runners only** (`ubuntu-latest`, `windows-latest`, `macos-latest`)
- **No self-hosted runners** and **no static / public IP** assumptions
- **No inbound webhooks** to your machine — everything runs inside GitHub Actions
- Triggered by `push`, `pull_request`, and `workflow_dispatch` (you can run without opening inbound ports)

## Workflows

| File | What it stresses |
|------|------------------|
| `.github/workflows/complex-ci.yml` | Large `needs` DAG, matrix fan-out/fan-in, artifacts, conditionals |
| `.github/workflows/reusable-build.yml` | Reusable workflow called from complex-ci |
| `.github/workflows/platform-matrix.yml` | Cross-OS matrix + fail-fast off |
| `.github/workflows/release-gate.yml` | Manual dispatch gate with environment-style checks (no IP allowlist) |

Open this folder in GitEase → Actions page to inspect / edit the graph.
