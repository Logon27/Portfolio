---
title: Socket Chatroom
---

# [Socket Chatroom](https://github.com/Logon27/Socket-Chatroom)

---

## About The Project

Socket chatroom is an internet based chatroom application that utilizes sockets. This project is actually two separate programs written in C. One is the client and the other is the server. The server must be up and running because it handles messages from connected clients and forwards them to everyone in the chatroom. The server currently only supports 5 people in a chatroom, but you could easily just change it to support more. By default, the server just runs on the localhost IP which is `127.0.0.1`. The server starts on a random port which it prints in the console. These programs have a makefile for compilation. So as long as you have `gcc` and `make` installed you can easily compile the programs with `make`.

### Starting The Server

```
./cserver
```  
The server will print the assigned port in the console. The server must be started first so client can connect.


### Starting The Client

```
./cclient <ip-address> <port> <nickname>
```
IP-Address is `127.0.0.1` by default. The port you can get from the server's stdout.

## Executing The Programs

#### The Server
<img src={require('@site/static/img/my-projects/socket-chatroom-1.png').default}/>

#### Chatroom Client 1 (Logan)
<img src={require('@site/static/img/my-projects/socket-chatroom-2.png').default}/>

#### Chatroom Client 2 (Nick)
<img src={require('@site/static/img/my-projects/socket-chatroom-3.png').default}/>