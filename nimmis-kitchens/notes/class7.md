# useEffect
- No dependency array => Is invoked in every render
- Empty dependency array => Only once i.e on initial render
- If states are added in dependency array => When dependency item changes it is invoked

# useState
- Never create state variables outside components.
- Creates local state variable inside component.
- Never create state variables in conditional, loops, internal functions defined within the component. It creates inconsistency for react to maintain state variables.


# Routing
- createBrowserRouter => Creates a routing configuration.
- RouterProvider => Provides routing config to APP.
- useRouteError => hook to get more info on error encountered while routing.
Example:   {status: 404, statusText: 'Not Found', internal: true, data: 'Error: No route matches URL "/about/12"', error: Error: No route matches URL "/about/12" ...}
- Outlet => Will pick children (replace / append) from children array of routing config based on routes.
- Child route here can be replaced by having Outlet element in Applayout component.
- Link => This component is used to route / navigate to different routes.

# React 
- It is a SPA => Single Page Application i.e on navigation page wont get refreshed or make external call to fetch pages. It only replaces the components. 

# Types of routing
- Client Side Routing: Here components is replaced. It does not make any network call as all the components are loaded in initial network call to fetch this webpage
- Server Side Routing: Make network call, Fetch the files, Render the UI by refreshing the browser page.
