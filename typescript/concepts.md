# TypeScript Concepts

1. **Types**: TypeScript is a statically-typed language, meaning you can specify the type of variables, function parameters, and function return values, which improves code reliability and readability.

2. **Type Annotations**: This is the explicit way to tell TypeScript what type of data a particular piece of data is. For example, `let name: string;`.

3. **Type Inference**: TypeScript can automatically determine the type of a variable based on its initial value, making type annotations optional in many cases.

4. **Interfaces**: Interfaces in TypeScript are a powerful way to define custom types, which you can use to describe objects' shape, function types, or classes.

5. **Classes**: TypeScript supports object-oriented programming and includes a `class` keyword for creating classes. You can use classes to create objects with specific methods and properties.

6. **Generics**: Generics are a tool for creating reusable components. They allow a function or a class to work over a variety of types rather than a single one.

7. **Decorators**: Decorators are a special kind of declaration that can be attached to classes, methods, and properties. They modify or add behavior to these elements without changing their source code.

8. **Modules**: TypeScript uses modules to organize and share code across files. You can `export` parts of code like classes or variables to be `import` elsewhere.

9. **Namespaces**: Namespaces are a way to logically group related code. This is especially useful when developing large applications or when bundling third-party libraries.

10. **Access Modifiers**: TypeScript supports `public`, `private`, and `protected` access modifiers which control the accessibility of the class members.

11. **Type Aliases**: Type aliases are a way to create a new name for a type. They can represent complex type definitions and make them easier to use.

12. **Union Types**: A union type allows a variable to be one of several types, using the `|` operator. This is useful when a variable could legitimately have more than one type.

13. **Intersection Types**: An intersection type allows you to combine multiple types into one, using the `&` operator. This is useful when you want an object to have the characteristics of multiple types.

14. **Enums**: Enums allow you to define a type that can have one of a few distinct values, often to represent a choice between several options.

15. **Function Types**: In TypeScript, you can specify a type that represents a function, detailing the function's parameters and return type.

16. **Type Narrowing**: Type narrowing is the process where TypeScript gets more specific about a variable's type than it was initially declared or inferred.

17. **Type Guards**: Type guards are expressions that perform a runtime check that guarantees the type in a certain scope.

18. **Type Assertions**: Type assertions are a way to tell TypeScript that you know more about a value's type than TypeScript does.

19. **Optional Chaining**: Optional chaining lets you write code where TypeScript can immediately stop running some expressions if it runs into a `null` or `undefined`.

20. **Nullish Coalescing**: The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

21. **Mapped Types**: Mapped types allow you to create new types based on old ones by transforming properties.

22. **Conditional Types**: Conditional types help to express non-uniform type mappings, that is, a type mapping that depends on a condition.

23. **Index Types**: Index types allow you to create objects that are flexible regarding the properties they can hold, while still being able to maintain the relationship between the property's name and its value.

24. **Literal Types**: Literal types allow you to specify the exact value a variable must have. In conjunction with union types, they enable a powerful way to express a finite set of possibilities.

25. **Tuples**: Tuples in TypeScript are a data type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same.

26. **Readonly Properties**: The `readonly` keyword is a modifier for properties and index signatures that makes them unchangeable after initialization.

27. **Async/Await**: TypeScript supports the async/await keywords, which simplify working with Promises (a proxy for a value not necessarily known when the Promise is created).

28. **Mixins**: Mixins are a way to build up classes from reusable components. You can create a class in TypeScript and then add in additional functionality, which can be reused across different classes.

29. **Never Type**: The `never` type represents the type of values that never occur. This can be useful when dealing with exhaustive checks in switch-case structures, for example.

30. **Unknown Type**: The `unknown` type is a type-safe counterpart of `any`. Anything is assignable to `unknown`, but `unknown` isn't assignable to anything but itself and `any` without a type assertion or a control flow based narrowing.
