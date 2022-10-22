---
title: Neural Network Library
---

# [Neural Network Library](https://github.com/Logon27/Neural-Network-Library)

## About The Project

In the process of making my [Digit Recognition Canvas](./digit-recognition-canvas.md) I realized I had basically built an entire neural network library in the process. Albeit a simple one, I decided to take most of the code I developed for my Digit Recognition Canvas and fork it off into its own neural network library. That is what this project is. You can use this project to experiment on your own with neural networks or use it for a project of your own. It operates a lot like most modern deep learning libraries do (except with fewer features). I plan to expand this library as I learn more about deep learning, but still keep it simple enough to understand for beginners. The entire project almost exclusively uses numpy for its implementation. The only exception being scipy which is used for special function implementations to handle computational edge cases (like log1p). Feel free to experiment with the library, suggest improvements, or utilize it to make your own projects!

## Creating A Virtual Environment

Note: There is a different activate script for Linux / MacOS.
```
python -m venv venvNeuralNetworkLibrary
venvNeuralNetworkLibrary/scripts/activate.bat
pip install -r requirements.txt
```

## Testing Out A Network

Modify the network object in **xor.py**, **mnist.py**, or **mnist_conv** to test out your own network.

```
python xor.py
```
```
python mnist.py
```
```
# Convolutional implementation for mnist
python mnist_conv.py
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
# Network layers are initalized as a list
network_layers = [
    Dense(28 * 28, 70),
    Sigmoid(),
    Dense(70, 35),
    Sigmoid(),
    Dense(35, 10),
    Softmax()
]

# Create a network object (Split on multiple lines for readability)
network = Network(network_layers, loss_function, loss_function_prime, x_train_set, y_train_set, \
                    x_test_set, y_test_set, epochs=10, learning_rate=0.1, batch_size=1)

# Train the network
network.train()

# Generate a prediction from the network given a single input array
prediction_array = network.predict(input_array)

# Save the network to a file
saveNetwork(network, "mnistNetwork.pkl")

# Load the network from a file
network = loadNetwork("mnistNetwork.pkl")
```

## CUDA Support

This simple neural network library does provide support for Cupy to gain CUDA support (You must have CUDA Toolkit installed). This can be enabled by setting enableCuda in config.py to True (It is disabled by default). HOWEVER, enabling CUDA on smaller networks can actually DECREASE performance. Because copying data over to the GPU for calculation takes time. So unless you are training very large networks I would leave CUDA disabled.

## TODO

- Package And Host The Library
- Implement More Loss Functions
- Validate Leaky Relu Activation Function
- Implement Max Pooling