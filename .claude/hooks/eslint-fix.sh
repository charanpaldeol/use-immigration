#!/bin/bash
# Purpose: Hook script that runs eslint --fix on edited JS/TS files after Claude writes them (non-blocking best-effort formatter).

# INPUT=$(cat)
# FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')
#
# [[ -z "$FILE_PATH" ]] && exit 0
#
# case "$FILE_PATH" in
#   *.ts | *.tsx | *.mjs | *.js)
#     cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
#     npm run lint -- --fix "$FILE_PATH" >/dev/null 2>&1 || true
#     ;;
# esac
#
# exit 0
