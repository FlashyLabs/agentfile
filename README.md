# agentfile

```
        ██
       ██
      ██████
        ██
       ██
      ██
```

[![CI](https://github.com/flashylabs/agentfile/actions/workflows/ci.yml/badge.svg)](https://github.com/flashylabs/agentfile/actions/workflows/ci.yml) [![License](https://img.shields.io/badge/licence-Apache--2.0-blue)](LICENSE)

**Answer the accountability question about your organisation in ninety seconds.**

Vendor questionnaires and EU AI Act Article 26 both ask who is accountable for the agents you run, and the answer today is a PDF in a procurement folder. Seven questions produce three files at well-known paths and a URL you can paste into the questionnaire.

> **Not released yet.** The source for this one is still being written.
>
> Everything below is the design and the reasoning. The code lands before
> this repository is tagged, and the version stays at 0.0.0 until it does.

## Using it

```bash
npx agentfile init
# → public/.well-known/flashyos-charter.json
# → public/.well-known/flashyos.json
# → public/.well-known/frontdoor.json
```

## The invariants

Everything here follows from these. Each is enforced by something rather
than promised, because a rule with nothing behind it erodes one
convenience at a time.

| Invariant | Why | Enforced by |
| --- | --- | --- |
| **It writes files and stops** | A scaffolder that phones home is one legal will not approve | No account, no network call, no telemetry |
| **A named human or nothing** | An accountability record naming a role rather than a person answers nobody | The charter refuses to generate without one |
| **Publishing proves control of a host, not identity** | A reader who mistakes the first for the second has built authorisation on a doormat | The caution is carried verbatim in every file it writes |

## It works alone

No account, no API key, no telemetry, and no network call unless you ask
for one. If anything here ever needs a service of ours to answer, that is a
bug — you would be right to refuse a checker with a dependency on the party
being checked. That applies to the documentation too: every command in this
file runs against a file in this repository, because a README whose first
line fetches from our domain is one that stops working when we do.

## What agentfile is not

- **Not legal advice, and not a compliance product.** It produces a machine-readable statement of something you already know. Whether that satisfies a specific obligation is a question for your counsel.
- **Not a hosted service.** The files are yours, on your domain, and nothing checks in with us.

## Status

**Not released.** The formats it writes are published and stable;
the seven questions and the writer are the work that remains. Nothing here is
installable yet.

## Contributing

**The most useful thing you can send is an implementation that disagrees
with ours about a refusal.** Two implementations that have never met,
agreeing about what to reject, is the only real evidence a specification
says what it means.

Sign-off rather than a copyright assignment — see
[CONTRIBUTING.md](CONTRIBUTING.md). There is no CLA.

## Licence

[Apache-2.0](LICENSE), copyright Flashy Labs. The rules are open and the
tooling is open; fork either, and check ours against yours.

## The formats these were written for

`directory/1`, `frontdoor/1`, `countersign/1`, `backlog/1`, `shipped/1` and the
rest are Apache-2.0 and specified in the open at
[github.com/flashylabs](https://github.com/flashylabs). Nothing in them requires
an account, a key, or a call to us — including the checking.
