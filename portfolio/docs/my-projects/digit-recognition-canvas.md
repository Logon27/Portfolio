---
title: Digit Recognition Canvas
toc_max_heading_level: 2
---

# [Digit Recognition Canvas](https://github.com/Logon27/Digit-Recognition-Canvas)

---

## About The Project

This project is a digit recognition canvas where you can draw your own custom digits on the canvas and the program will predict what digit it thinks it is. The neural network itself does not use any mainstream framework. It uses [AeroNet](https://github.com/Logon27/AeroNet), which is a deep learning library I created myself. The current network used for this program is decent, but needs minor improvements. The network itself was trained on the mnist dataset (which I modified during training for better generalization). It achieves about a **95% accuracy** on the test dataset. The canvas now supports both traditional deep neural networks and convolutional neural networks. A video of the program in action can be found below.

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jqa0nJf_spo" title="Digit Recognition Canvas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
</div>

### Video Notes

- The percentage confidence is shown on the right.
- Red represents the network's guess and the highest prediction percentage.
- You can left click to draw and right click to erase on the canvas

## Current Network Architecture(s)

You now have the choice to train a traditional deep neural network or a convolutional neural network for the canvas to use. However, the convolutional network is far more performant.

### Traditional Deep Network
```
Dense(28 * 28, 400),
Sigmoid(),
Dense(400, 10),
Sigmoid(),
Dense(10, 10),
Softmax()
```

### Convolutional Network (Preferred)
```
Convolutional((1, 28, 28), 5, 5),
Sigmoid(),
Convolutional((3, 24, 24), 3, 5),
Sigmoid(),
Convolutional((3, 22, 22), 3, 5),
Sigmoid(),
Flatten((5, 20, 20)),
Dense(5 * 20 * 20, 40),
Sigmoid(),
Dense(40, 10),
Softmax()
```

For more information about the syntax used above, please see [AeroNet](https://github.com/Logon27/AeroNet)

## Known Limitations
- Resizing the window. You can currently resize the window, but the layout is not good unless the window is square.
- Network accuracy. The network accuracy is around 95%, but it still misclassifies digits in some edge cases.