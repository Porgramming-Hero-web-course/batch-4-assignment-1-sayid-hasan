<!-- Type guard -->

basically Type guard is way to prevent unnecessary behaviour and improve performance of
your application or code blocks.
it is a way to get information about the type of a variable . It's a normal function that return boolean and most of the time used on conditional block to tell typescript if it can be narrow down or something more speciifc . based on the return different code is executed which make the application more versatile and enhance performance and code readability..
there are basically three operator used in type guard . they are instanceof , typeof and in operator.
Usually in functional Programming and in primitive types we use typeof operator and in OOP (object oriented programming) we use instanceof operator . and to check whether a object has certain properties we use in operator. Let's understand it more througly with below example
typeof operator

![Alt Text](./assets/typeGuardEx.jpeg)
