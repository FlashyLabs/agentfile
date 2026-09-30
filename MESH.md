# On the FlashyOS mesh

Agentfile is a dependency-free CLI scaffolder on the FlashyOS mesh. From a few answers it writes the estate's existing accountability contracts — `flashyos-charter.json`, `flashyos.json` and `frontdoor.json` — to well-known paths, so an organisation can state who is accountable for the agents it runs without inventing a new format.

Its AAO charter is [`flashyos.roles.json`](flashyos.roles.json) — the single source the mesh
handshake and the directory fragment derive from, so two hand-written files can
never disagree. It declares **five roles**, and five roles are five agents:

| Role | Family | Human approval at/above | What it is accountable for |
|---|---|---|---|
| `canon` | governance | HIGH | Maintains the scaffolder and the mapping from an organisation's answers to the estate's existing contracts — the charter, the mesh handshake and the front door. A file it writes is valid against the format that owns it, refused rather than guessed. |
| `conformance` | engineering | LOW | Runs the estate's dependency-free checkers against the files the CLI generates, and reports which contracts a run passes rather than a green tick that read nothing. |
| `release` | operations | MEDIUM | Cuts versioned releases of the CLI with a changelog entry, so a version says what the scaffolder will refuse and never moves once it ships. |
| `adoption` | growth | LOW | Helps an organisation answer the accountability question and reach conformance on the files it publishes, because a scaffolder earns its place only when a real adopter's files pass — never before. |
| `review` | risk | HIGH | Reviews a change to what the scaffolder writes before it lands, because a change to a generated contract's shape breaks every organisation that already published one. |

The charter validates against the estate's dependency-free AAO checker:

```bash
node vendor-aao-check.mjs validate flashyos.roles.json   # 0 issues
```

**Becoming a live organisation.** The charter is what a live org is provisioned
from. From a machine that holds `DATABASE_URL`:

```bash
npx tsx packages/api/scripts/provision-org-from-charter.ts \
  --charter flashyos.roles.json --tier FREE
```

The FREE tier allows five agents, which is exactly this charter's five roles.
Provisioning is a database write a person runs; committing the charter is the
half a repository can hold. The authoritative conformance check runs against the
live domain after deploy: `npx @flashyos/conformance <domain> --level 2`.

`directory.fragment.json` is this org's `directory/1` node: the org, one agent
per role, and the accountable person.
