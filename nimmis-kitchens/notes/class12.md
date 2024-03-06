# Redux

|==========|
|  SLICES  |
|----------|
|          |
|          |
|==========|

Storing / Updating : OnCLick => dispatch an action => execute a reducer function => uddate slice
Reading : Store => Selector  => UI


# Creating Store

- From @reduxjs/toolkit import configureStore
- Configure store - first parameter is obj with key reducer and it holds a object with key as sliceName
Example: 
configureStore({
    reducer: {
        cart: cartReducer
    }
})
- Export the object returned

# Creating Slice

- From @reduxjs/toolkit import createSlice
- It has 3 main attributes name, initialState, reducers passed as an Object param
Example: 
createSlice(
    {
        name: "name",
        initialState: {},
        reducers: {
            reducer1: (action, state)=>{}
        }
    }
)
- Action param has 2 main attributes type=> cart/action, payload
- export reducer and actions

# Subscribing to store / slice

- From react-redux import useSelector;
- This expects a call back where fist param refers store.
Example: 
const s = useSelector((store)=>store.items.length)

# Dispatching the reducer and action

- From react-redux import useDispatch
- This hook returns a dispatch function
- Pass action function and payload in dispatch
Example: 
const dispatch = useDispatch();
dispatch(action(payload))