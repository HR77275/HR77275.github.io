#!/usr/bin/env bash
set -euo pipefail
portfolio_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$portfolio_root"
if ! command -v node >/dev/null 2>&1; then
  local_runtime="$portfolio_root/../.portfolio-tools/node-v22.22.0-linux-x64/bin"
  if [ ! -x "$local_runtime/node" ]; then
    echo "Install Node.js 22.13+ or restore the isolated runtime in ../.portfolio-tools." >&2
    exit 1
  fi
  export PATH="$local_runtime:$PATH"
fi
exec npm run "${1:-dev}" -- "${@:2}"
