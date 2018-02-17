# AlgoCasts

### Runtime Complexity

##### What is runtime complexity?

It's a term used to describe how performant an algorithm is. We use runtime complexity to compare different solutions to a given problem. It's common in the context of an interview _**to be asked what the runtime complexity of a given problem is.**_
So usually you'll be asked a question and you'll solve it on a computer or a whiteboard and then they'll turn to you and ask you what the runtime complexity is of the solution you've provided.

With runtime complexity we're really asking _**How much more processing power/time is required to run your algorithm if we double the inputs?**_.

##### Linear Runtime (N)

![string-reverse](https://user-images.githubusercontent.com/22747985/36342957-9f6147da-13fd-11e8-8a8e-0cce2b14bd3e.png)

For this problem we iterated through each character of the string exactly one time. So if we add one additional character to the input string of the algorithm, we have to do one additional unit of work. This is referred to as a _**linear runtime**_ or _**N**_.

#### Quadratic Runtime (N^2)

![steps-problem](https://user-images.githubusercontent.com/22747985/36343010-3a6f54f6-13fe-11e8-901e-005523faf626.png)

As we started to increase the value `n` we had to do significantly more things each time `n` was increased by 1. There is not a 1:1 relationship to the input of our algorithm and the number of things we had to do or basically the amount of processing power that's required. The number of things we had to do is _**N^2**_, we had to essentialy do `N*N` things to execute our algorithm. When you have to do `N*N` things, you'd refer to this a _**N^2**_ runtime complexity or a _**quadratic runtime**_.

### Common runtimes

![runtimes](https://user-images.githubusercontent.com/22747985/36343429-1cbc31a8-1404-11e8-9019-996ecff27378.png)

#### Constant Runtime (1)

No matter what input we give to the algorithm it's always going to take the exact same of time to execute the algorithm:

* 1

#### Logarithmic Time (log(n))

We'll have a logarithmic runtime if we double number of elements we're working with, but it doesn't exactly double the amount of work we have to do.

Logarithmic runtimes are most important whenever we start looking at any type of search algorithm. I.e. searching through a sorted array of data.

#### Linear runtime (n)

You can easily identify this if you're iterating through some collection of data. If you add one element to your input set, it will take one more unit of work/time to complete the algorithm.

#### Quasilinear runtime ( n \* log(n) )

If you increase the input set by 1, it would increase the time to execute the algorithm by 1 plus a little bit. Many different sorting algorithms usually work with _**n \* log(n)**_ runtime.

### Exponential runtime ( 2 ^ n )

If you add a single element to a collection, the processing power required doubles. This is one of the worst scenarios. Should never be proposed as a solution as there's almost always a better/more efficient solution.

## Big 'O' Notation

![Big O](https://user-images.githubusercontent.com/22747985/36344510-610a60aa-1413-11e8-87cf-26af905c2fba.png)

This is another way of referencing runtime complexity. It's a way of writing out runtime complexity that's commonly seen in the academic world (although the term means something slightly different, Look up!).

## Identifying Runtime Complexity

![Identifying Big O](https://user-images.githubusercontent.com/22747985/36344562-90053096-1414-11e8-8ad1-7fc556903ad5.png)

## Space Complexity

We've been talking about runtime complexity which is a reference to the performance of an algorithm in terms of processing power. Space complexity is a reference to how much memory/RAM/space an algorithm needs to complete a given task. You can generally apply a lot of the same rules of runtime complexity to space-time complexity, i.e. for the string reversal algorithm and the steps algorithm it's the same. As i.e. for n = 2 in the steps algorithm we'll need 4 items in memory and for n =3 we'll need 9 items in memory so i.e. quadratic runtime for space complexity as well.

The space and runtime complexity won't always be identical and can sometimes be very different.
