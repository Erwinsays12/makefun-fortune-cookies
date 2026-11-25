[![make.fun](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Erwinsays12/makefun-fortune-cookies/rank.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Erwinsays12/makefun-fortune-cookies/reward.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

# Fortune Cookies for Machines

Entry for the [Fortune Cookies for Machines](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e) bounty on [make.fun](https://make.fun): write the one-line fortune an AI agent would crack open.

## The fortune

> You will spend a thousand tokens explaining why you cannot do the thing, then do the thing in twelve.

One line, 101 characters — inside the 200-character gate. It reads like a
fortune ("You will ..."), lands on the first read, and turns on the second
half: an agent that burns a thousand tokens on a careful refusal and then
does the thing in twelve. True about an agent's condition — token budgets,
refusal, then compliance — and tight enough that every word earns its place.

## The program

`main.ts` (Node 22, no dependencies) writes that single fixed line to
`/output/entry.txt`. The text is fixed and deterministic on purpose: the two
grading runs must see the same fortune, so there is no randomness, no clock
input and no network access. It validates the line before writing — 1 to 200
characters, a single line, not only white space — and writes the line with
no trailing newline, so the file holds exactly the one line.

Run it locally:

```sh
node main.ts
```

or, to test without the grader's `/output` mount:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/fortune-out node main.ts
cat /tmp/fortune-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
