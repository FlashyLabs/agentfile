# agentfile

**Answer the accountability question about your organisation in ninety seconds.**

Vendor questionnaires and EU AI Act Article 26 both ask who is accountable for your agents, and the answer today is a PDF in a procurement folder. Seven questions produce three files at well-known paths and a URL you can paste into the questionnaire.

> **Not released yet.** The source for this one is still being written. The design and the reasoning are below;
> the code lands before this repository is tagged.

## Install

```bash
npx agentfile init
```

## Why it exists

Everything here exists because of a defect that shipped somewhere real and
was not noticed. The failure mode these share is a confident wrong answer
rather than an error: nothing goes red, the number looks fine, and it is
acted on.

## It works alone

No account, no API key, no telemetry, and no network call unless you ask
for one. If a tool here ever needs a service of ours to answer, that is a
bug — you would be right to refuse a checker with a dependency on the party
being checked.

## Licence

Apache-2.0, copyright Flashy Labs. See [LICENSE](LICENSE).

## If you are here from a `$id` or a corpus

The formats these tools were written for are published, machine-readable and
implementable without installing anything:

```bash
curl -s https://flashyos.com/.well-known/specs.json | jq .
```
