---
title: Data Cache Simulator
hide_title: true
---

import GithubIcon from '@site/src/components/GithubIcon';

<header>
    <GithubIcon title="Data Cache Simulator" link="https://github.com/Logon27/Data-Cache-Simulator"/>
</header>

---

## About The Project

This program simulates the behavior of a data cache. The program reads a trace of references from standard input and produces statistics about the trace to standard output. The trace config allows you to configure the simulator program. With the trace config you can modify the number of cache sets, the number of lines within each set (associativity level), and the size of a cache line in bytes. It also gives you useful statistics like the hit/miss ratio, number of total access, etc.

## Example Trace.config File

```
Number of sets: 8  
Set size: 1  
Line size: 8  
```

## Trace of References

The trace of references are read from stdin and have the following format:  
`<accesstype>:<size>:<hexaddress>`

`<accesstype>` can be the characters R (which indicates read access) or W (which indicates write access).  
`<size>` is the size of the reference in bytes.  
`<hexaddress>` is the starting byte address of the reference expressed as a hexadecimal number.  

## Example trace.dat Input File

```
R:4:b0  
R:4:d0  
R:4:b0  
R:4:d0  
R:4:80  
R:4:18  
R:4:80  
R:4:90  
R:4:80  
```

## Example trace.dat Output File

<img src={require('@site/static/img/my-projects/data-cache-simulator-1.png').default}/>
