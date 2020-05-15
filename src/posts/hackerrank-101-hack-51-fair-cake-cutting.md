---
title: 'HackerRank - 101 Hack 51 -  Fair Cake Cutting '
path: '2017-08-08'
date: "2017-08-08"
coverImage:"../images/netlify-image.jpg"
author: "krishankant_ray"
excerpt: '...another problem solving example'
tag:["blogspot", "cp"]
---

**Problem: Fair Cake Cutting**  
  
Leha is a young man from Belarus. He loves cakes really much. In Leha's country, cakes are always evenly divided between people.  
Leha wants to know how many people he should invite to his party if he has a cake whose size is equal to units and he wants each person to get _exactly_ units of cake. Note that Leha doesn't take a piece for himself; in other words, the cake is only divided among the people he invited to the party.  
  
  

**Input Format**

The first line contains three space-separated integers describing the respective values of , , and .

  
**Constraints**

  

*   It is guaranteed that the answer is an integer.

  
**Output Format**

  
Print a single integer denoting , the number of people he should invite to his party.

  
  
Sample Input 0

```
5 10 1  

```

  
Sample Output 0

```
2  

```

  
****Explanation** 0**

In this sample case, , and . Leha wants each person to get units of cake. He has a cake whose size is unit, so if he invites people and the cake is distributed evenly among them, each person gets units of cake. Therefore, the answer is b=2 .  
  
**Solutions :**  
  
```
#include <cmath>  
#include <cstdio>  
#include <vector>  
#include <iostream>  
#include <algorithm>  
using namespace std;  
  
  
int main() {  
    unsigned long int A,B,a,x;  
    double p;  
    cin>>A>>B>>a;  
    p=((B\*a)/A);  
      
    x\= floor(p);  
    cout<<x;  
    return 0;  
}
```
