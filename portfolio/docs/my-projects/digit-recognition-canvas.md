---
title: Digit Recognition Canvas
toc_max_heading_level: 2
---

# Digit Recognition Canvas

---

## About The Project

This project is a digit recognition canvas where you can draw your own custom digits on the canvas and the program will predict what digit it thinks it is. The neural network itself does not use any mainstream framework. I have essentially created my own scaled down neural network framework. I will likely release this neural network framework as its own project in the near future. The current network used for this program is decent, but needs some improvements. The network itself was trained on the mnist dataset (which I modified during training for better generalization). It achieves about an 87% accuracy on the test dataset. The current network is a traditional deep neural network. However, I intend to code convolutional layers in the near future for improved accuracy. A video of the program in action can be found below. The codebase is not currently available, but I will be releasing it in the coming weeks.

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/b7AX3uBqzZ8" title="Digit Recognition Canvas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
</div>

### Video Notes

- The percentage confidence is shown on the right.
- Red represents the network's guess and the highest prediction percentage.
- You can left click to draw and right click to erase on the canvas

## Current Network Architecture

```
Dense(28 * 28, 800),
Sigmoid(),
Dense(800, 10),
Sigmoid(),
Dense(10, 10),
Softmax()
```

## Known Limitations
- Resizing the window. You can currently resize the window, but the layout is not good unless the window is square.
- Network accuracy. The network accuracy is around 87% and it still misclassifies digits in some cases.