<!-- Type guard -->

# Type Guard

Basically, **Type Guard** is a way to prevent unnecessary behaviour and improve the performance of your application or code blocks. It is a way to get information about the type of a variable. It's a normal function that returns a boolean and is most of the time used in a conditional block to tell TypeScript if it can be narrowed down or something more specific. Based on the return, different code is executed, which makes the application more versatile and enhances performance and code readability.

There are basically three operators used in Type Guard:

- `instanceof`
- `typeof`
- `in` operator

Usually, in **functional programming** and with **primitive types**, we use the `typeof` operator. In **OOP (Object-Oriented Programming)**, we use the `instanceof` operator. To check whether an object has certain properties, we use the `in` operator. Let's understand it more thoroughly with the example below.

## `typeof` operator

The `typeof` operator is used to check the type of a variable or expression. It helps ensure that the variable is of the expected type before performing operations on it. Here is an example:

<p align="center">
  <img src="./assets/typeGuardEx.jpeg" alt="in operator getAnimal">
</p>
Here, **`add`** function receives two parameters. They can either be a **string** or a **number**. We want that if they are both numbers, we will **add** them; otherwise, we will **concatenate** them.

This function will return either a **string** or a **number**. Without the `typeof` operator, it would mess up the whole thing and return an **unexpected result** that we definitely do not expect. To prevent this, we are using the `typeof` operator.

Here, in **`if`** blocks, we can check the parameters' type, and if they are both **numbers**, we will add them and return a **number**. Otherwise, we will return a **string** by concatenating them. This will prevent misbehavior in the **`add`** function.

<!-- in operator -->

**In operator used in object to check if the property is a key of that object**.

<p align="center">
  <img src="./assets/inGuardEx.jpeg" alt="in operator getAnimal">
</p>
in above , we have to type that is **NormalUser** and **AdminUser** . and we're gonna create function that will check if the params we're recieving is a NormalUser or AdminUser.

<p align="center">
  <img src="./assets/inGuardEx2.jpeg" alt="in operator getAnimal">
</p>
Look above, we got a function **`getUser`** that will receive **`user`** as a parameter and return whether the user is an **admin** by logging the **username** or **role** (for admin).

In this function, in the **`if`** block, we're checking if the **`"role"`** property is part of the user by using the **`in`** operator. If it is, we will log the **username** and **role**; otherwise, we're going to log only the **username**.

<!-- instanceof -->

**instanceof operator use in class to check whether the params we're recieving is instance of certain Class**

<p align="center">
  <img src="./assets/animalClass.jpeg" alt="in operator getAnimal">
</p>
In the above example, we got an **`Animal`** class that has **`name`** and **`species`** as properties and **`makeSound`** as a method.

We're going to create two more classes: **`Cat`** and **`Dog`**, respectively, by using inheritance.

<p align="center">
  <img src="./assets/dogClass.jpeg" alt="in operator getAnimal">
</p>
<p align="center">
  <img src="./assets/catClass.jpeg" alt="in operator getAnimal">
</p>
In the **`Dog`** class, we added properties and methods from the **`Animal`** class, and we've introduced a new method: **`makeBark`**. Similarly, for the **`Cat`** class, we've added a method called **`makeMeaw`**.

Now, we want to create a function **`getAnimal`** that will receive an animal (either a **dog** or **cat**) and will:

- Use the method **`makeBark`** if it's a dog.
- Use the method **`makeMeaw`** if it's a cat.
- Use the common method **`makeSound`** if it's neither a dog nor a cat.

To check if the parameter is a **dog** or a **cat**, we need to use the **`instanceof`** operator.

<p align="center">
  <img src="./assets/getAniamalFunc.jpeg" alt="in operator getAnimal">
</p>

Here above, we are checking if the parameter is an instance of the **`Dog`** class and using the method **`makeBark`** if it is. If it's **not** a **`Dog`** class instance, we are checking if the parameter is an instance of the **`Cat`** class and using the method **`makeMeaw`**.

If it's neither a **`Dog`** nor a **`Cat`**, we are using the **`makeSound`** method from the parent class **`Animal`**.
