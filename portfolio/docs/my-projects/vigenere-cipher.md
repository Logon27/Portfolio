---
title: Vigenere Cipher
---

# [Vigenere Cipher](https://github.com/Logon27/VigenereCipher)

---

## About The Project

This program is actually one of my first few java programs I ever wrote to learn about arrays and object oriented programming. This program implements a vigenere cipher. A vigenere cipher is basically a more advanced form of a caesar cipher. In a caesar cipher each letter in the alphabet is shifted by a certain number of places. With a vigenere cipher you basically have an alphabet written out 26 different times where each alphabet is a new row in a 2d array. Each of the alphabets are shifted left by one letter compared to the previous row. This basically means you have 26 different caesar ciphers. This is considered your cipher table and is more apparent in the example below. With a vigenere cipher you have a key that is looped through letter by letter. Say we have the plaintext we want to encode `attackatdawn`. And we pick a random key `LEMONLEMONLE`. And assume that for our cipher table the first row starts with "a" (you can shift the cipher table). You basically take the first letter in attackatdawn which is "a" and the first letter in the key LEMONLEMONLE which is "L". So you go into your cipher table and go to row "A" (0) and column "L" (11). So you go to index `[0][11]` in your cipher table and get the letter there. You have just encoded the first letter of your input string. Now you just repeat with the second letter in your input string and the second letter in your key and continue the process until the encryption is complete. If the key is shorter than the input string then you just loop back around to the start of the key. You can read more about vigenere ciphers [here](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

## Executing The Program.

My vigenere cipher program has to ability to both encode and decode strings. It also has to ability to print out the cipher table for viewing. Below is an example run of the program. The program just prompts for input from stdin. The "enter an inital letter" part is so you can shift the cipher table. Where the first row will start with the letter of your choosing. For this initial run I just chose "a" so there is no shifting. The cipher in this example is your encoded string.

<img src={require('@site/static/img/my-projects/vigenere-cipher-1.png').default} />

---

As I mentioned previously you can shift the cipher table by picking which letter you want the first row to start with. An example with the same input string and key as the previous example, but a cipher table shift is shown below.

<img src={require('@site/static/img/my-projects/vigenere-cipher-2.png').default} />