# Monolith vs Micro Servers
- Monolith: API's, UI, Auth, SMS, DB all were in one single project (Same technology).
- Micro Services: 
    - Features of a project can be built using any technology and intergrated later as a single project.
    - Single responsibilty principle (Independent service has own responsibility)
    - Seperation of concerns 
    - Micro services has own ports and routes.

# Methods to make API call in UI
- Load Page => API call => Render UI
- Load Page => Render UI => Make API call => Re-render UI (React way => Use effect way)

# Use Effect Hook
- Executes after the component is rendered.

# CORS
- Browser blocks API call if there is a origin miss match.

# Why shimmer
- Better UX
- Effects the users physcology as UI is rendering something