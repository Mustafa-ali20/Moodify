import { RouterProvider } from "react-router-dom";
import "./App.css";
import FaceExpression from "./Features/Expressions/Components/FaceExpression";
import { router } from "./app.routes";
import { AuthProvider } from "./Features/Auth/auth.context";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
