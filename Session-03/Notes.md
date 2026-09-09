=> Form Handling
- Two Way Binding
- React Hook Form
- useRef()

const handleSubmit = (e) => {
e.preventDefault();
};

here e is SyntheticBaseEvent

In React, a SyntheticBaseEvent (commonly referenced as SyntheticEvent) is a cross-browser wrapper around the browser’s native DOM event. When you log an event object to the console in a modern React application (e.g., console.log(e) inside an onClick or onChange handler), you will see it labeled as SyntheticBaseEvent. React intercepts native browser events and wraps them to ensure your code works identically across all web browsers.



=> The Two-Way Loop
Binding value and onChange creates a complete loop:
1. User types a key -> onChange fires -> setName(e.target.value) updates state.
2. React re-renders -> value={name} forces the <input> to display that updated state.
3. Form submits -> setName("") sets the state to an empty string.
4. React re-renders again -> value={""} forces the <input> to visually clear out.








=> Explicit Return
- You write a function body with curly braces {} and must explicitly write the return statement. If you omit return, the function returns undefined.

const numbers = [1, 2, 3];
// Explicit return with .map()
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]


=>Implicit Return
- Arrow functions allow you to omit curly braces {} if the body is a single expression. Whatever that expression evaluates to is returned automatically.

const numbers = [1, 2, 3];
// Implicit return with .map()
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]

or 


const items = ["Apple", "Banana", "Cherry"];
const list = items.map((item) => (
  <li key={item}>{item}</li> // Implicitly returned
));
