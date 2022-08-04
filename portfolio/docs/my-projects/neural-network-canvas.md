---
title: Neural Network Canvas
---

# [Neural Network Canvas](https://github.com/Logon27/Neural-Network-Canvas)

---

## About The Project

This program is a neural network canvas that predicts what number you wrote on a digital canvas in real time. This is the very first neural network program I created after learning how to make a neural network from scratch. I mainly learned from a book called "Make Your Own Neural Network" by Tariq Rashid. The network was created using python, numpy, and scipy. I then trained the network on the mnist data set. The current network has 97% accuracy after training (although real testing does not near that accuracy with the canvas). The canvas itself was created using Processing 3 which is Java based. Therefore, I had to get around the fact that Processing 3 does not support native python. To get around this, the canvas will save the current drawn image to a jpg file. Then I call a separate neural network python program. This separate python program loads the weights from the model I trained and prints its prediction to stdout. Then I take the stdout produced by the python process inside the Java Canvas and display the prediction.

Let me be clear this program has `MANY FLAWS` and I do NOT recommend you try to run it yourself. While it predicts accurately on the MNIST dataset. The canvas I created does not have a similar brush style and the network struggles with a decent amount of its predictions. If I had to guess I would say it reaches around 70% accuracy in reality using the canvas. Which is better than random guessing, but still not great. This was more of a stepping stone for me as my first real neural network program I created. I learned a lot, but I do not plan on revisiting this codebase. I may try to recreate this program with much higher accuracy in the future.

---

## Canvas Demo

![Neural Network Canvas Demo](https://i.imgur.com/R1RyVl4.gif)