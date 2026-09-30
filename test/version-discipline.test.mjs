// The repo's own honesty invariant: a version number is a promise about a
// release, and there is nothing to release until code lands. So while this is
// a pre-code governance shell — no `src/`, no `bin`, no entry point — the
// version must stay at 0.0.0. A published 0.1.0 over an empty tree claims a
// release that does not exist.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const lock = JSON.parse(readFileSync(new URL('../package-lock.json', import.meta.url), 'utf8'));

// "Code has landed" = anything a release could actually ship: a source or bin
// directory, a `bin` field, or a declared entry point. Any one of these means
// the package intends to run something, and a non-zero version is then honest.
function hasCode() {
  return (
    existsSync(new URL('../src', import.meta.url)) ||
    existsSync(new URL('../bin', import.meta.url)) ||
    Boolean(pkg.bin) ||
    Boolean(pkg.main) ||
    Boolean(pkg.exports)
  );
}

test('version cannot claim a release before code exists', () => {
  if (!hasCode()) {
    assert.equal(
      pkg.version,
      '0.0.0',
      'no src/, bin or entry point yet — version must stay 0.0.0 until code lands',
    );
  }
  // Once code lands this test does not force a version, only forbids the
  // pre-code repo from typing one. The estate rule is honesty, not stasis.
});

test('the lockfile version agrees with the manifest', () => {
  assert.equal(lock.version, pkg.version);
  assert.equal(lock.packages[''].version, pkg.version);
});
