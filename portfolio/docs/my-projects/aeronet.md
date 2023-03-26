---
title: AeroNet (Neural Network Library)
---

# [AeroNet](https://github.com/Logon27/AeroNet)

---

## About The Project

In the process of making my [Digit Recognition Canvas](./digit-recognition-canvas.md) I realized I had basically built an entire neural network library in the process. Albeit a simple one, I decided to take most of the code I developed for my Digit Recognition Canvas and fork it off into its own neural network library. That is what AeroNet is. AeroNet is a simple neural network library. It is written entirely using python, numpy, and scipy. This is an educational neural network library made with the hope of demystifying some of these modern deep learning libraries. Many modern deep learning libraries do not fundamentally differ from AeroNet all that much (minus automatic differentiation). Most of the code in modern libraries is just dedicated to efficiency and optimization of the algorithms used. Feel free to play around with AeroNet and see what deep learning projects you can make.

For a full list of functionality and usage, please check out the project on [GitHub](https://github.com/Logon27/AeroNet).

## Installing AeroNet

AeroNet is now hosted on [PyPi](https://pypi.org/project/aeronet-learn/#description) for your convenience. The only dependencies are numpy, scipy, and dill which are all installed automatically when AeroNet is installed. Python 3.10 is recommended for using AeroNet.

```bash
pip install aeronet-learn
```

## Running From The Source Code

### Creating A Virtual Environment

You may want to run AeroNet directly from the source code. Or maybe you want to directly run the training examples hosted on github. This can be done by cloning the code from [github](https://github.com/Logon27/AeroNet). You can then create a virtual enviroment with the following code.

```
python -m venv venvNeuralNetworkLibrary
venvNeuralNetworkLibrary/scripts/activate.bat
pip install -r requirements.txt
```

You will then be able to run training examples directly. As seen in the next section.

## Testing Out A Network

Test your network against one of these datasets...
```bash
# move into the training examples directory
cd training_examples
# then execute one of the scripts below...
```

```bash
# Simple xor example with dense layers
python xor.py

# Mnist with dense layers
python mnist.py

# Convolutional neural network implementation for mnist
python mnist_conv.py

# Fully convolutional network implementation for mnist
python mnist_fcn.py

# Convolutional neural network implementation for mnist with max pooling
python mnist_maxpooling.py
```

---

## AeroNet Example Usage

```python
# Import all neural network classes.
from nn import *

# Network layers are initialized as a list of objects
network_layers = [
    Dense(28 * 28, 70),
    Sigmoid(),
    Dense(70, 35),
    Sigmoid(),
    Dense(35, 10),
    Softmax()
]

# Create a network object
network = Network(
    network_layers,
    TrainingSet(input_train, output_train, input_test, output_test, post_processing),
    loss_function,
    loss_function_prime,
    epochs=10,
    batch_size=1
)

# Train the network
network.train()

# Generate a prediction from the network given a single input array
prediction_array = network.predict(input_array)

# Save the network to a file
save_network(network, "network_filename.pkl")

# Load the network from a file
network = load_network("network_filename.pkl")
```

---

## Supported Neural Layers

```python
# Layers
Dense(num_input_neurons, num_output_neurons) # For weight manipulation
Convolutional((input_depth, input_height, input_width), kernel_size, num_kernels, stride=(int, int), padding=((int, int), (int, int)))
Reshape() # Modifies the shape of the numpy arrays passed between layers
Flatten() # Flattens a numpy array into a 2D matrix with a single column
Dropout(probability) # Randomly drops layer outputs based on a probability to prevent overfitting. A probability of 0.25 would drop 25% of connections.
MaxPooling2D((input_depth, input_height, input_width), kernel_size, stride=(int, int), padding=((int, int), (int, int)))

# Activation Functions
Sigmoid()
Tanh()
Relu()
LeakyRelu() # Leaky Relu not validated
Softmax() # For output percentage predictions
```

## Supported Optimizers

```python
SGD() # Stochastic Gradient Descent
MomentumSGD() # Stochastic Gradient Descent with Momentum
```

## Supported Initializers

```python
Uniform() # Uniform between -1 and 1 only (at the moment)
Normal(mean=0, std=1)
Zero() # Zero initialized array for biases
Xavier()
```