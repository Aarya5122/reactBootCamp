# Testing UI

- Developer Testing
    - Manual
    - Unit - Test react component in isolation.
    - Integration - Testing integration of component example Menu and cart, Search and restroCard - We test flow of actions
    - End to end - e2e - Testing all the flow - Complete user interactive flow (User usuage simulation) - Cypress, Selinium, Puppeter

# Libraries used for testing

- React testing library - built on top of DOM testing library - Wrapper around DOM testing library and adds additional features
- JEST - Simple Delightful JS Testing Framework

# NOTE:
- (--) Dunder method
- Check for the nesting level of describe - test / describe - it

# ACT and Mimick fetch API.
- As browsers provide the fetch API. jest-dom does not have inbuilt fetch API suuport hence we should mimick this feature to test API calls.

global.fetch = jest.fn(
    ()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve(data)
            }
        })
    }
) 

- When state updates are dependent under a async operation like fetch in the above example. Then we have to wrap render in act function.
- act function  is a utility provided by react-dom/test-utils
- act utility is responsible for updating the UI / jest-dom while testing based on state updates.

it("", async () => {
    await act(
        async() => {
            return render(<Component/>)
        }
    )
})

- getByTestId from screen of jest-dom => we need to add a param to jSX element i.e data-testid

- beforeAll(callBack), beforeEach(callBack), afterAll(callback), afterEach(callback)