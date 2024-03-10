# Redux

|==========|
| SLICES |
|----------|
| |
| |
|==========|

Storing / Updating : OnCLick => dispatch an action => execute a reducer function => uddate slice
Reading : Store => Selector => UI

# Creating Store

-   From @reduxjs/toolkit import configureStore
-   Configure store - first parameter is obj with key reducer and it holds a object with key as sliceName
    Example:
    configureStore({
    reducer: {
    cart: cartReducer
    }
    })
-   Export the object returned

# Creating Slice

-   From @reduxjs/toolkit import createSlice
-   It has 3 main attributes name, initialState, reducers passed as an Object param
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
-   Action param has 2 main attributes type=> cart/action, payload
-   export reducer and actions

# Subscribing to store / slice

-   From react-redux import useSelector;
-   This expects a call back where fist param refers store.
    Example:
    const s = useSelector((store)=>store.items.length)

# Dispatching the reducer and action

-   From react-redux import useDispatch
-   This hook returns a dispatch function
-   Pass action function and payload in dispatch
    Example:
    const dispatch = useDispatch();
    dispatch(action(payload))

# Printing the state value

-   import current from @redux/toolkit
-   pass state to current function.

# Interview tips

-   Make sure we are subscribing to right portion of store as this might effect the performance of the app. As it reduces renders on update.
-   Immer library is used clone and update state by redux, compares the diff between original state, mutated stated and gives new state which is immutable
-   We have to mutate the state to update store as redux handles cloning and updating of state as it was done in older redu **OR** return new value this will be replaced with current state.
-   Immer allows us to work with immutable state.
-   Mutating the reference of state variable in sslice reducers is not supported.

# Tips:

-   In configureStore we have only one reducer where it can have slices of reducers.
-   In slice we can have multiple reducer functions (reducers) but at eend of the slice we export only a slice reducer
    -RTK query was initally middleware and thumbs in older redux. We will use this to make API call and store data in redux

# Vanilla Redux (Older Redux)

-   Don't mutate state directly, rather clone the state, update the state, return the updated cloned state.
