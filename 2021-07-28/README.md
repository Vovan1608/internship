Task 1:

Your order, please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"

"4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"

"" --> ""

Task 2:

Tic-Tac-Toe Checker
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],

[0, 1, 2],

[2, 1, 0]]

We want our function to return:

1 if "X" won,
2 if "O" won,
-1 if the board is not yet finished (there are empty spots),
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

Task 3:

Find a Chair
So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

Find the spare chairs from the array of meeting rooms. Each meeting room array will have the number of occupants as a string. Each occupant is represented by 'X'. The room array will also have an integer telling you how many chairs there are in the room.

You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

example: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

result -- > [0, 1, 3] (no chairs free in room 0, take 1 from room 1, take 3 from room 2. No need to consider room 4 as you have your 4 chairs already.

If you need no chairs, return 'Game On'. If there aren't enough spare chairs available, return 'Not enough!'

Examples:

meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]

meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]

meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'

meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4) ---> 'Not enough!'
