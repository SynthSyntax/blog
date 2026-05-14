---
title: "A weekend with a $30 robot arm"
date: 2026-03-10
description: "what a cheap servo-driven arm teaches you that simulation never will."
tags: [projects, robotics]
---

I bought a $30 robot arm off AliExpress to see what it would take to make it
do something useful. Spoiler: more than $30 of my time. But also, less than
I expected, and the lessons cost less than a textbook.

## the setup

Four hobby servos, a 3D-printed frame, an Arduino Nano clone, a USB cable,
and a laptop running Python. Total parts list:

```
1x  SG90-style arm kit         $24
1x  Arduino Nano (clone)        $4
1x  jumper wire pack           had
```

No simulation. No URDF. No ROS. Just `pyserial` and trigonometry.

## what broke first

The servos lie about their position. You command 90° and you get something
between 84° and 95° depending on load, temperature, and the phase of the moon.
This is obvious in hindsight but I lost an evening to it.

The fix wasn't fancy: a calibration routine that has the arm touch four known
points on a piece of graph paper, and a 4-parameter affine correction for each
joint. Closed-loop in the sense that a human is in the loop, once, at startup.

## the lesson

Real hardware has a *personality* that simulation doesn't capture. The arm
sags slightly under its own weight. One servo whines under a specific torque.
The third joint backlash is just barely worse than the others. You learn the
machine like you learn a person — by spending time with it.

I think this is why I still build with my hands. Every six months I forget,
and every six months a cheap servo arm reminds me.
