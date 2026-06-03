# Content collections

Profile fields (name, school, degree, dates) live in `src/consts.ts`.

Add Markdown entries as folders with `index.md`:

| Collection     | Path                         | `category` / `type` values (see `config.ts`) |
|----------------|------------------------------|-----------------------------------------------|
| Notes          | `notes/your-slug/index.md`   | `paper-review`, `numerical-methods`, `control-systems`, `manufacturing`, `ai-engineering`, `general` |
| Projects       | `projects/your-slug/index.md`| `engineering`, `hardware`, `software`, `capstone` |
| Research       | `research/your-slug/index.md`| `mechanics`, `thermodynamics`, `controls`, `manufacturing`, `materials`, `computation` |
| Publications   | `publications/your-slug/index.md` | `journal`, `conference`, `poster`, `presentation` |

List pages always show every section; new files appear under the matching category automatically.

Empty folders are fine — the site builds without any entries.
