---
title: Digit Recognition Canvas
toc_max_heading_level: 2
---

# [Digit Recognition Canvas](https://github.com/Logon27/Digit-Recognition-Canvas)

---

## About The Project

This project is a digit recognition canvas where you can draw your own custom digits on the canvas and the program will predict what digit it thinks it is. The neural network itself does not use any mainstream framework. I have essentially created my own scaled down neural network framework. I will likely release this neural network framework as its own project in the near future (if I have not already). The network itself was trained on the mnist dataset (which I modified during training for better generalization). It achieves about an **95% accuracy** on the test dataset. The canvas program now supports both traditional deep neural networks and convolutional neural networks. A video of the program in action can be found below (the model has improved since the video below was made). The codebase is now [available](https://github.com/Logon27/Digit-Recognition-Canvas).

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/b7AX3uBqzZ8" title="Digit Recognition Canvas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
</div>

### Video Notes

- The percentage confidence is shown on the right.
- Red represents the network's guess and the highest prediction percentage.
- You can left click to draw and right click to erase on the canvas

## Current Network Architecture(s)

You now have the choice to train a traditional deep neural network or a convolutional neural network for the canvas to use.

Traditional Deep Network
```
Dense(28 * 28, 800),
Sigmoid(),
Dense(800, 10),
Sigmoid(),
Dense(10, 10),
Softmax()
```

Convolutional Network
```
Convolutional((1, 28, 28), 5, 2),
Sigmoid(),
Convolutional((2, 24, 24), 3, 2),
Sigmoid(),
Convolutional((2, 22, 22), 3, 2),
Sigmoid(),
Flatten((2, 20, 20)),
Dense(2 * 20 * 20, 40),
Sigmoid(),
Dense(40, 10),
Softmax()
```

## Known Limitations
- Window layout when resizing. You can currently resize the window, but the layout is not good unless the window is square.