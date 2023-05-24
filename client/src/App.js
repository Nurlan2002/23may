import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import  "./App.css"

const routes=createBrowserRouter(ROUTES)
function App() {
  return (
<RouterProvider router={routes}/>
  );
}

export default App;
