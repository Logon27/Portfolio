---
title: Project Viznet
toc_max_heading_level: 2
---

# [Project Viznet](https://github.com/Logon27/Project-VizNet)

---

## About The Project

Project Viznet is a neural network visualization program. It helps beginners visualize how a neural network works in 2d and 3d space. It also provides an editor to modify the neural network architecture yourself. The program solves a classification problem for red and blue flowers based on two attributes. This makes it really easy to visualize in 2D and 3D space. More information about usage can be seen in my video below. The downloadable version of the program has a slightly different interface from the video. This is because I only released the validated functionality in the distributed version.

**WARNING:** This project currently has a decent amount of spaghetti code and is still a work in progress. But the program in its current working state I find to be valuable educationally. So I am releasing it before refactoring a lot of the code.

---

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GffIyL9l3gc" title="Project Viznet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
</div>

[Link to video if embedded video does not work.](https://youtu.be/GffIyL9l3gc)

Base network implementation is a fork from https://github.com/TheIndependentCode/ that has been largely modified to suit the flower classification problem and visuals.

---

## Downloading And Running The Program

Version 1.0.0 is now available for download! It will only run on Windows and was built with pyinstaller. You may get a warning from Windows about running the program due to it not being signed. This is just because I didn't purchase a publisher certificate to distribute the executable. However, the program itself is safe to run. You can scan it, decompile it, or view the source code on my github. You can just double click and run the executable. When running the program, it will open a console window along with the visualization program itself. This console will give you epoch and error information when the network is training.

### [Click Here To Download The Program](https://github.com/Logon27/Project-VizNet/raw/main/dist/ProjectViznet-1.0.0.exe)

---

## Supported Neural Layers
- Dense(numInputNeurons, numOutputNeurons)
- Tanh()
- Sigmoid()
- Relu()
- LeakyRelu()

**NOTE:** The first Dense layer must have 2 inputs. And the final Dense layer must have 1 output. The number of outputs of the previous Dense layer must match the number of inputs in the subsequent layer

## Known Limitations
- You cannot interact with the program window while the network is training. The program is single threaded and uses your cpu to train the network.
