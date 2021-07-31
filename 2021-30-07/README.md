Task 1:
Quipu Calculator
Quipu Calculator

The Quipu is the numbering system of the ancient Incas. A number is represented by knots in a string, using a positional representation (in base-10).

The representation of 123: one knot + space + two knots + space + three knots

Zeros are represented using a blank space. (leading zeros are not allowed)

@ is a knot and ~ is a space.

123 => @~@@~@@@

20 => @@~~

Create a method that calculates mathematical expressions in quipu format.

Input

A string representing a mathematical expression with operands in the quipu format above, separated by the plus [+] or minus [-] or division [/] or multiplication [*] sign.

@~@ => 11

@~~@ => 101

@~~~@ => 1001

Output

A string representing the result of the mathematical expression in quipu format.

Example:

calculate("@~@@\*@@")

=> "@@~@@@@"

calculate("@~@@+@@~~")

=> "@@@~@@"

Task 2:
Find the Partition with Maximum Product Value
You are given a certain integer, n, n > 0. You have to search the partition or partitions, of n, with maximum product value.

Let'see the case for n = 8.

Partition Product

[8] 8

[7, 1] 7

[6, 2] 12

[6, 1, 1] 6

[5, 3] 15

[5, 2, 1] 10

[5, 1, 1, 1] 5

[4, 4] 16

[4, 3, 1] 12

[4, 2, 2] 16

[4, 2, 1, 1] 8

[4, 1, 1, 1, 1] 4

[3, 3, 2] 18 <---partition with maximum product value

[3, 3, 1, 1] 9

[3, 2, 2, 1] 12

[3, 2, 1, 1, 1] 6

[3, 1, 1, 1, 1, 1] 3

[2, 2, 2, 2] 16

[2, 2, 2, 1, 1] 8

[2, 2, 1, 1, 1, 1] 4

[2, 1, 1, 1, 1, 1, 1] 2

[1, 1, 1, 1, 1, 1, 1, 1] 1

So our needed function will work in that way

findPartMaxProd(8) --> [[3, 3, 2], 18]

If there are more than one partition with maximum product value, the function should output the patitions in a length sorted way.

findPartMaxProd(10) --> [[4, 3, 3], [3, 3, 2, 2], 36]

Enjoy it!

Tests:

describe("Example Tests", function(){

it("Small Integers", function(){

    Test.assertSimilar(findPartMaxProd(8), [[3, 3, 2], 18]);

    Test.assertSimilar(findPartMaxProd(10), [[4, 3, 3], [3, 3, 2, 2], 36]);

});

});

Task 3:
Vasya - Clerk
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES

tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars

tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
