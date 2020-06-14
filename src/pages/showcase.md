---
title: "Projects"
date: "2020-06-14"
author: "krishankant_ray"
path: "/projects"
---
***
### 📌 CSV to MySQL upload utility
***
This app allows users to import a .csv file and save it in MySQL. The .csv file needs to be in a specified format, something like this .
Once the data is saved we can see and delete the table data on the front-end.

 **Whats there on back-end and front-end ?**

  - Back-End :
    - NodeJS
    - ExpressJS
    - MySQL
  - Front-End :
    - ReactJS


Detailed blog : [Click Here](https://krishankantray.com/CSV-to-SQL-import)   


![line-break](https://raw.githubusercontent.com/krishankantray/krishankantray-3/master/src/images/Vintage-Decorative-Divider.svg | height=30)



***
### 📌 Portfolio Site
***


This is the same site that you are currently viewing.
It is a JAM stack site build using Gatsby, React, GraphQL etc...
Basically, I just cloned [this](https://github.com/panr/gatsby-starter-hello-friend) gatsby starter template.  







***
### 📌 Gesture Recognition to use it as a virtual mouse
***
The project “Gesture Recognition using colour segmentation to use it as a virtual mouse”, is
based on identifying a particular coloured object and use the movement of that object to
perform mouse operations. There are two mouse operations possible through this project i.e.
mouse pointer movement and mouse left click operation.

The idea is based on converting a each frame of the webcam real-time video stream and
convert it into equivalent HSV (Hue, Saturation, Value) format in a Numpy array. And filter
out the HSV value that lies in the range of the colour that that we are going to detect. Once
the filtered frame is obtained thereafter we can apply some morphological operations to make
the filtered mask even more sharper. Once filtering is done, then we find the all the contours
and store it in list of contours. 

Here is a screenshot :


![screesnhot of gesture](https://raw.githubusercontent.com/krishankantray/Gesture-Recognisation-using-color-segmentation-to-use-it-as-virtual-mouse/master/gesture.092fdf8a.jpg)

