# Basic javascript algorithm

## Problem 1

Write a function that can solve the following mathematical problem:

    - Area of a rectangle = length * width
    -  Perimeter of a rectangle = 2 * ( length + width )


    for example, given;
    length= 4
    width = 2

    Area of the rectangle = 8
    perimeter of the rectangle= 12


 ## Problem 2
Convert Celsius to Fahrenheit

The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

    convertToF(0) should return a number

    convertToF(-30) should return a value of -22

    convertToF(-10) should return a value of 14

    convertToF(0) should return a value of 32

    convertToF(20) should return a value of 68

    convertToF(30) should return a value of 86


## Problem 3
Solving quardratic equation

    From the quadratic equation form and formula below, we can easily solve quadratic problems.
    ax² + bx + c = 0
    x = -b ± √(b²-4ac)/2a

    For example:
    2x² – 5x + 3 = 0
    where a= 2, b=-5 and c=3
    implementing these 3 arguments into the function respectively, the root of the equation will be 3/2 and 1.

    For 2x² + x – 300 = 0 the root of the equation will be 12 and -12.5.

    For  x² + 4x - 5=0 the root of the equation will be -5 and 1.


## Problem 4

I learnt about array manipulation and I was able to solve some basic algorithms on it.

Algorithm question:

In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a queue function which takes an array and a number as arguments.
Add the number to the end of the array, then remove the first element of the array.
The queue function should then return the new array formed

    Test:
    queue([5,6,7,8,9], 1) should return [6,7,8,9,1]
    queue([0,4,5,2], 10) should return [4,5,2,10]

## Problem 5

I was able to do some personal practice on array manipulation just to master the basics.

The function below takes out the first element of an array and the last element from an array of numbers and sum the elements together. The result of the manipulated array will be the summed element coming as the first element of the array followed by the remaining element in that array.

    for example:

    [1,2,3,4,5] = [6,2,3,4]
    [3,4,2,5]= [8,4,2]
    [2,3,5,6,10,1] = [3,3,5,6,10]

## Problem 6

I learnt about conditional logic and I wrote a code that performs basic calculations.

    The function takes in 3 arguments which are the first number, operator and second number respectively.

## Problem 7

Grading System.

Using conditional logic and comparisons, Write an algorithm that takes in a score and grade them according to the grading system provided below.

    70 - 100 : Grade A
    60 - 69  : Grade B
    50 - 59  : Grade C
    40 - 49  : Grade D
    0  - 39   : Carry Over

NB:

    * The scores should strictly be in numbers (not in string or any data type).
    * No negative numbers.
    * Number should not go beyond or below this grade range(Use conditions to take care of the excesses)

Hint:

    examination(74) should return "Grade A"

    examination("74") should return "This is not a score. We only process numbers."

    examination(-4) should return "Score can not be a negative number. Score is too low."

    examination(101) should return "Score is not part of the grading system. Score is too high."

## Problem 8


On day 6/100 I used conditional logic to write a code that performs basic calculations but my attention was drawn to the usage of switch to write the algorithm. So I took my time to study about switch statement and I looked for a way to integrate it into my existing code.

    Switch statement is suitable when you have many options to choose from. The case values are tested with strict equality (===) and the break tells JavaScript to stop executing statements.


## Problem 9

On day 4/100 I wrote an algorithm on queue which takes an array and a number as arguments and add the number to the end of the array, then removes the first element of the array.

For day 8/100 I will be adding some conditions to that algorithm which are;

* The element that will be added to the array must be strictly number and should return the original array if otherwise.

* If the value of the element added is less(smaller) than that of the first element in the array, the elements positions should be interchanged.

    For example:
    queue([1,2,4,5], "4") return [1,2,4,5]
    queue([5,2,4,5], 1) return [1,4,5,2]
    queue([5,2,4,5], 7) return [2,4,5,7]

## Problem 10

I wrote a counting card algorithm. I got the algorithm question from freecodecamp.


    Count Change: +1 Cards: 2, 3, 4, 5,6
    Count Change: 0 Cards: 7, 8, 9
    Count Change: -1 Cards: 10, 'J', 'Q', 'K', 'A'


You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
Example Outputs: -3 Hold or 5 Bet
Hint:

    Do NOT reset count to 0 when value is 7, 8, or 9.
    Do NOT return an array.
    Do NOT include quotes (single or double) in the output.

    Cards Sequence 2, 3, 4, 5, 6 should return the string 5 Bet
    Cards Sequence 7, 8, 9 should return the string 0 Hold
    Cards Sequence 10, J, Q, K, A should return the string -5 Hold

## Problem 11

Write a function that takes in an array of number and sum all the numbers in the array.

    Test cases
    [1,2,3,4] = 10
    [8,7,6] = 21
    [ ]= 0


## Problem 12

Record Collection (freecodecamp)

You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.


You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.


Your function must always return the entire record collection object.

- If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.

- If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.

- If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.

- If value is an empty string, delete the given prop property from the album.

Note: 

    A copy of the recordCollection object is used for the tests.

Test Cases:

    After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA

    After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.

    After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set

    After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.

    After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.

    After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set

    After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide

## Problem 13

In a bid to gain mastery I had to solve an algorithm I came across on freecodecamp.

Golf Code
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play.

Depending on how far above or below par your strokes are, there is a different nickname.

    Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
    Strokes Return
    1 "Hole-in-one!"
    <= par - 2 "Eagle"
    par - 1 "Birdie"
    par "Par"
    par + 1 "Bogey"
    par + 2 "Double Bogey"
    >= par + 3 "Go Home!"
    par and strokes will always be numeric and positive.

## Problem 14

We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

    Example:
    lookUpProfile("Kristian", "lastName") should return the string Vos

    lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]

    lookUpProfile("Harry", "likes") should return an array



## Problem 15

Write a function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

Hint:

    [[1,2,3], [4,2]] should return 48
    [[5,6], [1,8], [3,4] should return 2880

## Problem 16

Write a function myArray so that it returns the the last element of all the sub-arrays of  myArray.
 
Hint:

    [[1,2], [9,3,4], [5,6,7]] should return [2,4,7]
    [[3,4], [9,8,0]] should return [4,0]


## Problem 17

I wrote a JavaScript code that finds the factorial of any number.

E.g

    5!= 120
    3! = 6
    10!= 3628800


## Problem 18
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

## Problem 19

Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.

Test:

    findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

    findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

    findLongestWordLength("May the force be with you") should return 5.

    findLongestWordLength("Google do a barrel roll") should return 6.

    findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.

    findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

## Problem 20

    Remove all even numbers and all odd numbers from an array of numbers.

## Problem 22

    Sorting an array in ascending and descending order


## Problem 23

The function takes in an array of numbers and a number as an argument... the number sums up with each element in the array.And return it inside an array

Example:

    [1, 2, 3, 4, 5], 3
    [4, 5, 6, 7, 8]

## Problem 24

Re-solving algorithm day 17/100 using a higher order function.

Write a function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

Hint:

    [[1,2,3], [4,2]] should return 48
    [[5,6], [1,8], [3,4] should return 2880



## Problem 25
Re-solving algorithm day 18/100 using a higher order function.
 
Write a function lastElement so that it returns the the last element of all the sub-arrays of  lastElement.
 
Hint:

    [[1,2], [9,3,4], [5,6,7]] should return [2,4,7]
    [[3,4], [9,8,0]] should return [4,0]

## Problem 26

Total sum Of elements in an array
example 

    [1, 2, 3, 4], [5, 7, 8, 9, 10, 2]

## Problem 27

I wrote a function that replaces a word in a sentence, given that the sentence includes that word.

NB: I used regex to eliminate case sensitivity and make changes global.


## Problem 28
 The generateSentence(desc, arr) takes two parameterer: a description and an array.
 It should return a string based upon the description and array.

    Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
    it should return the string: "The 3 largest countries are China, India, USA"

    Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
    "The 2 best fruits are Apples, Bananas"

 ## Problem 29

 Problem Statement: Given an array, we have to find the largest element in the array.

 ## Problem 30

 Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.


## Problem 31

Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

    Example: [1, 2, 4, 5, 6] 
    [8, 3, 4, 9]

## Problem 32

Given an array of N integers, left rotate the array by one place.


## Problem 33

Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

    Example 1:
    Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
    Output: 6 7 1 2 3 4 5
    Explanation: array is rotated to right by 2 position .

    Example 2:
    Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
    Output: 9 10 11 3 7 8
    Explanation: Array is rotated to right by 3 position.


## Problem 34

Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present return the index of the element or return -1.

    Example 1:
    Input: arr[]= 1 2 3 4 5, num = 3
    Output: 2
    Explanation: 3 is present in the 2nd index

    Example 2:
    Input: arr[]= 5 4 3 2 1, num = 5
    Output: 0
    Explanation: 5 is present in the 0th index
















