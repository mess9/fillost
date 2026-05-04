# Agent notes

- В `apply_patch` для rename использовать только:
  - `*** Update File: relative/path`
  - `*** Move to: relative/path`
  Не использовать абсолютные Windows-пути и не писать `Moved to:` без `***`.
- Если rename может сломать ACP, сначала делать `git mv` или `Move-Item`, потом менять содержимое отдельным patch и сразу проверять `git status`.
- В PowerShell для путей с `[` и `]` использовать `-LiteralPath`, для чтения/проверки текста `-Encoding utf8`. Текстовые правки делать через `apply_patch`, чтобы не ловить UTF-8/code-page mojibake; последовательности вроде `Р...`, `Ð...`, `Ñ...` исправлять сразу.
- Для Astro routes: `test-post.astro` для статической страницы, `[slug].astro` для параметра, `[...slug].astro` для catch-all; имя параметра внутри `[]` не должно содержать `-`.
- Предпочитать CLI из `C:\Users\mess9\scoop\shims` вместо стандартных Windows-утилит. Базовый набор: `rg`, `jq`, `fd`, `fzf`, `bat`, `git`, `gh`, `delta`, `yq`, `curl`, `7z`, `zip`, `unzip`, `grep`, `sed`, `gawk`, `make`, `less`. Если `scoop` не в `PATH`, вызывать shim напрямую.
