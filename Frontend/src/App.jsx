import { RouterProvider } from "react-router-dom";
import "./App.css";
import FaceExpression from "./Features/Expressions/Components/FaceExpression";
import { router } from "./app.routes";
import { AuthProvider } from "./Features/Auth/auth.context";
import { SongContextProvider } from "./Features/Home/song.context";

function App() {
  return (
    <>
      <AuthProvider>
        <SongContextProvider>
          <RouterProvider router={router} />
        </SongContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
