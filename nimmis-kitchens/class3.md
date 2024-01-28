# NPM scripts
- npm run start is same as npm start

# React Foundations

- JSX is html like syntax which helps to create a React elements.
- JSX is not part of react 
- JSX is a convention to merge HTML and JS
- JSX is not a valid JS / Pure JS (Ecma Script 6). JS engine cannot execte it. It will throw syntax error.
- JSX is a compiled or transpiled by babel (JS compiler => It also polyfills the features, Maintained by Github, Node library)
- JSX attributes are in camcel casing
- We can write any JS expression with in curly braces.
- Multiple line JSX is enclosed in paranthesis.
- JSX makes react readable.


# React validation of tags

- React does not validate the tag name in JSX it throws the warning in console when executed (rendered) - Tag <TagValue> is unrecognized in this browser. 
The above case is seen when tagname is in lowercase.
- If the tagname is capitalized it throws reference error stating Tagname Not defined.

# React components

- Class based and Functional component.
- Funciton which returns a react element / JSX code.
- React component name should start with capitalized letter else react treats it as a browser tag and throws warning.
- Printing the defination of react functional component returns a function kind of syntax which when executed returns a react object. //TODO: Learn More

## Component composition

- Composing two components into one another. i.e using a react component in react component.

# React Keynotes

- When we are using a JS expression in JSX, Cross site scripting (Injection attacks) are sanitized by JSX. //TODO: Read more.