---
title: AeroNet (Neural Network Library)
---

# [AeroNet](https://github.com/Logon27/AeroNet)

## About The Project

In the process of making my [Digit Recognition Canvas](./digit-recognition-canvas.md) I realized I had basically built an entire neural network library in the process. Albeit a simple one, I decided to take most of the code I developed for my Digit Recognition Canvas and fork it off into its own neural network library. That is what this AeroNet is. AeroNet is an educational neural network library made with the hope of demystifying some of these modern deep learning libraries.  It is written entirely using python, numpy, and scipy. You can use this library to learn and experiment on your own with neural networks. It operates a lot like most modern deep learning libraries do (except with fewer features). I plan to expand this library as I learn more about deep learning, but still keep it simple enough to understand for beginners. Feel free to experiment with the library, suggest improvements, or utilize it to make your own projects!

For a full list of functionality and usage, please check out the project on [github](https://github.com/Logon27/AeroNet).

## Creating A Virtual Environment

Python 3.10 is recommended for using this neural network library

```
python -m venv venvNeuralNetworkLibrary
venvNeuralNetworkLibrary/scripts/activate.bat
pip install -r requirements.txt
```

## Testing Out A Network

Test your network against one of these datasets...
```
# move into the training examples directory
cd training_examples
# then execute one of the scripts below...
```

```
python xor.py
```

```
python mnist.py
```

```
# Convolutional neural network implementation for mnist
python mnist_conv.py
```

```
# Fully convolutional network implementation for mnist
python mnist_fcn.py
```

---

## Supported Neural Layers

```python
Dense(numInputNeurons, numOutputNeurons) # For weight manipulation
Convolutional((inputDepth, inputWidth, inputHeight), kernelSize, numKernels)
Softmax() # For output percentage predictions
Reshape() # Modifies the shape of the numpy arrays passed between layers
Flatten() # Flattens a numpy array into a 2D matrix with a single column
Dropout(probability) # Randomly drops layer outputs based on a probability to prevent overfitting

# Activation Functions
Sigmoid()
Tanh()
Relu()
LeakyRelu() # Leaky Relu not validated
```
## Network Class Usage

```python
# Import all neural network classes.
from nn import *

# Network layers are initalized as a list
network_layers = [
    Dense(28 * 28, 70),
    Sigmoid(),
    Dense(70, 35),
    Sigmoid(),
    Dense(35, 10),
    Softmax()
]

# Create a network object
network = Network(network_layers, TrainingSet(input_train, output_train, input_test, output_test), \
    loss_function, loss_function_prime, epochs=10, batch_size=1)

# Train the network
network.train()

# Generate a prediction from the network given a single input array
prediction_array = network.predict(input_array)

# Save the network to a file
saveNetwork(network, "mnist_network.pkl")

# Load the network from a file
network = loadNetwork("mnist_network.pkl")
```