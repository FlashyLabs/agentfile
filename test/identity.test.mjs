// agentfile once gave three different answers about what it is: the README
// called it a CLI scaffolder for organisational accountability, the charter
// called it "a wire format ... with a dependency-free checker [and] conformance
// corpus", and the npm keywords called it a per-agent manifest / A2A agent
// card. This pins the one identity they now share — the README's: a
// dependency-free CLI that answers the accountability question by generating
// the estate's EXISTING contracts, never by minting a new format.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const charter = JSON.parse(readFileSync(new URL('../flashyos.roles.json', import.meta.url), 'utf8'));
const directory = JSON.parse(readFileSync(new URL('../directory.fragment.json', import.meta.url), 'utf8'));

test('the structured identity sources agree on name and slug', () => {
  assert.equal(pkg.name, 'agentfile');
  assert.equal(charter.slug, 'agentfile');
  assert.equal(charter.name, 'Agentfile');
  assert.equal(directory.org, 'org/agentfile');
});

// The retired keywords each asserted the per-agent-manifest / A2A identity the
// README does not claim. Their absence is the fix, not their replacement.
const RETIRED_KEYWORDS = ['manifest', 'agent-card', 'a2a', 'agents-txt'];
test('keywords no longer claim the per-agent manifest / A2A identity', () => {
  for (const k of RETIRED_KEYWORDS) {
    assert.ok(
      !pkg.keywords.includes(k),
      `keyword "${k}" contradicts the CLI-scaffolder identity`,
    );
  }
});

test('keywords carry the scaffolder identity', () => {
  for (const k of ['scaffolder', 'accountability']) {
    assert.ok(pkg.keywords.includes(k), `expected identity keyword "${k}"`);
  }
});

// The charter's identity prose lives in `description`, and this repo's own
// rule (CONTRIBUTING.md) is to assert on data, not on a file containing a
// string — so the machine-readable identity signals above are the guard, and
// the description is left to prose review rather than a grep of an explanation.
