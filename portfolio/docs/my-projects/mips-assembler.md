---
title: MIPS Assembler
hide_title: true
---

import GithubIcon from '@site/src/components/GithubIcon';

<header>
    <GithubIcon title="MIPS Assembler" link="https://github.com/Logon27/Mips-Assembler"/>
</header>

---

## About The Project

This program takes in a MIPS `.asm` file from standard input and writes the machine code to standard output. MIPS is an assembly language for MIPS microprocessors. MIPS stands for "Microprocessor without Interlocked Pipelined Stages". Assemblers are very intriguing programs, but they are pretty boring to actually code. Both this assembler and the accompanying simulator were assignments for a computer architecture class I took in college. Ideally, you should really program assemblers like this in C. But for whatever reason I chose Java so the programs are technically cross platform.

## Supported Directives:
* .text (switch to the text segment)
* .data (switch to the data segment)
* .word w1, ... , wn (store n 32-bit integer values in successive memory words)
* .space n (allocate n words)

## Supported Instructions:
* addiu
* addu
* and
* beq
* bne
* div
* j
* lw
* mfhi
* mflo
* mult
* or
* slt
* subu
* sw
* syscall

## Example Input File:

<img src={require('@site/static/img/my-projects/assembler-1.png').default}/>

## Example Output File:

<img src={require('@site/static/img/my-projects/assembler-2.png').default}/>
