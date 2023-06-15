import { RouterProvider } from "react-router";

import { Loader } from "./components";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
