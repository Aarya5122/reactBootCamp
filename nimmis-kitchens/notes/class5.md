# File Structure

- Group based on Features
- Group based on Routes
- Group based on File types
- Colocation - Frequently changing files group


# Types of Imports and Exports

- Named 
- Default 

# React

- React is fast in DOM manipulation
- UI Layer and data remains consistent (in sync)
- Does not change the DOM 

# React Hook

- Normal JS function
- Utility functions
- useState, useEffect, useMemo etc

# React useState
When state variable changes the react changes the component and it's sub components

# React Fiber => (React 16) => React Reconciliation Algorithm

- Browser DOM (Abstract syntax tree)
- Create Virtual DOM using the copy of Browser DOM (Representation)
- Update in data (state) updates Virtual DOM (New Virtual DOM)
- Compares new Virtual DOM with old **(Diff Algo)** => (Compares the difference between VDOM's)
- Finds the updated part
- Only update those part in UI instead of rerendering the whole component.
- Incremental rendering - Splits the rendering work into chunks and spread it over multiple frames.