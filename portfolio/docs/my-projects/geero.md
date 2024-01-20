---
title: Geero
hide_title: true
---

import GithubIcon from '@site/src/components/GithubIcon';

<header>
    <GithubIcon title="Geero" link="https://github.com/Logon27/Geero"/>
</header>

---

## About The Project

Geero is a neural network library built using [Google Jax](https://github.com/google/jax) and inspired by [Stax](https://jax.readthedocs.io/en/latest/jax.example_libraries.stax.html). This library is mainly for educational purposes and to experiment with deep learning methods. Geero is basically the next iteration of AeroNet (my previous neural network library). The rewrite was intended to address a lot of the performance issues of the codebase by utilizing Google Jax. This enables for GPU and TPU based acceleration for training. Geero also provides more datasets and training examples to work with. As well as progress bars and accuracy metrics during training. You can checkout [Geero](https://github.com/Logon27/Geero) on GitHub to learn more.

## Geero Training Examples
| File | Dataset | Description |
| ------------- | ------------- | ----- |
| [mnist.py](https://github.com/Logon27/Geero/blob/main/training_examples/mnist.py) | MNIST | A classic MNIST training example utilizing a neural network with Dense layers |
| [mnist_conv.py](https://github.com/Logon27/Geero/blob/main/training_examples/mnist_conv.py) | MNIST | MNIST training example that utilizes a convolutional neural network |
| [mnist_aug.py](https://github.com/Logon27/Geero/blob/main/training_examples/mnist_aug.py) | MNIST | MNIST training example that utilizes data augmentation. |
| [mnist_fcnn.py](https://github.com/Logon27/Geero/blob/main/training_examples/mnist_fcnn.py) | MNIST | MNIST training example that utilizes a fully convolutional neural network |
| [fashion_mnist.py](https://github.com/Logon27/Geero/blob/main/training_examples/fashion_mnist.py) | FASHION MNIST | FASHION MNIST training example that utilizes a convolutional neural network |
| [cifar10.py](https://github.com/Logon27/Geero/blob/main/training_examples/cifar10.py) | CIFAR-10 | CIFAR-10 training example that utilizes a convolutional neural network |
| [resnet.py](./training_examples/resnet.py) | CIFAR-10 | CIFAR-10 training example that utilizes a resnet of my own creation. Test set accuracy is around 90% |

## CIFAR10 Resnet Example - 91.40% Accuracy
<img src={require('@site/static/img/my-projects/resnet-accuracy.png').default} />

## Fashion MNIST Training Example Predictions
<img src={require('@site/static/img/my-projects/fashion-mnist.png').default} />

## MNIST Training Example Predictions
<img src={require('@site/static/img/my-projects/mnist-predictions.png').default} />
