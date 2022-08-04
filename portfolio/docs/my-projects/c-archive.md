---
title: C-Archive
---

# [C-Archive](https://github.com/Logon27/C-Archive)

---

## About The Project

This is an archiving program written in C. It basically can take one or more files and zip them up into a tar ball. There are actually two programs. One to archive the file(s) and one to un-archive them. The program also has validation measures to make sure that the file it is actually trying to unzip is a valid archive created by the ctar program.

### Archiving Files

```
./ctar <-a/-d> <archive-file-name> <files...>
```
`-a flag` - Creates an empty archive if no file names are given to enter into the archive. Creates an archive with the specified files if the archive does not already exist. Appends files to an existing archive if an existing archive with that name already exists.  
`-d flag` - Deletes the files provided from the specified archive based on the file names provided.  

### Unzipping Archives

```
./utar <archive-file-name>
```
This program just unzips your tar ball into the current directory.  

## Executing The Program

In this example I created an empty archive. Then appended the `README.md` file to the archive. Deleted the original README.md file. Then I unzipped the archive. You do not have to start with an empty archive. I was just showing that the functionality to append files works. You can also specify more than one filename to archive.
<img src={require('@site/static/img/my-projects/c-archive-1.png').default}/>