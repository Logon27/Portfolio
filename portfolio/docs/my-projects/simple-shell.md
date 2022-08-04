---
title: Simple Shell
---

# [Simple Shell](https://github.com/Logon27/Simple-Shell)

---

## About The Project

This is a shell program written in C. My shell program supports both piping and input/output redirection. It currently does not support swapping the current working directory. However, it has the functionality to run basically any terminal based command. And combined with piping and input/output redirection functionality it operates just like a regular shell. This program has a makefile for compilation. So as long as you have `gcc` and `make` installed you can easily compile the program with `make`.

## Executing The Program

To start the program you simply execute `./simplesh`. This will open the shell in your current terminal window. In the example below I utilize multiple pipes, output redirection, and I show what happens when you do not give a valid command.

<img src={require('@site/static/img/my-projects/simple-shell-1.png').default}/>

If you try to run this program yourself it might feel odd. Because you basically have my shell program running inside another shell inside a terminal window. But this is the easiest way to display the functionality.