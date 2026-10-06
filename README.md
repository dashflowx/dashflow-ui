# @dashflowx/ui

Layouts (page header, navbar, sidebar), not core primitives. Peer `@dashflowx/core` `>=3.0.0`. Local develop uses `file:../dashflowx-core`.

```bash
cd dashflow-ui
yarn install
yarn test
yarn storybook   # http://localhost:6010
```

No database. Storybook port **6010** (core 6006, forms 6007, datagrid 6008, auth 6009). Public npm `@dashflowx/ui@0.2.74` (U05). Further publishes need X05.

U02 adds PageHeader, EmptyState, Navbar, Footer, Sidebar. Storybook: UI/Free/* and UI/Free/Compose.

| Package | Contents |
| --- | --- |
| `@dashflowx/ui` | Free shells |
| `@dashflowx/ui-pro` | AppShell, PricingTable, AuthScreenFrame (private GitHub Packages) |

## Run locally

- Start: `yarn install && yarn test && yarn storybook` → http://localhost:6010
- Database: **none**
- Task prefix: **U**. Prompt: `docs/CURSOR_PROMPT.md`
- Publish: `docs/NPM_PUBLISH.md` (ask X05).

