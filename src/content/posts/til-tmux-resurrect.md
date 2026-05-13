---
title: "TIL: tmux-resurrect saves your sessions across reboots"
date: 2026-02-04
description: "I lost my entire layout one too many times."
tags: [til, tools]
---

I run six terminal panes across three tmux sessions. Every time I rebooted I
rebuilt the layout by hand. For two years.

Today I finally googled "tmux save session" and learned that
[tmux-resurrect](https://github.com/tmux-plugins/tmux-resurrect) exists.

Install:

```bash
git clone https://github.com/tmux-plugins/tmux-resurrect ~/.tmux/plugins/tmux-resurrect
```

Add to `~/.tmux.conf`:

```tmux
run-shell ~/.tmux/plugins/tmux-resurrect/resurrect.tmux
```

Then `prefix + Ctrl-s` to save, `prefix + Ctrl-r` to restore. There's also
`tmux-continuum` which does it automatically every 15 minutes.

Two years. I'm telling you so you don't have to do two years.
