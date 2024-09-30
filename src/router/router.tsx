import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { StudentsPage } from "../pages/StudentsPage";
import { TeachersPage } from "../pages/TeachersPage";
import { SpellsPage } from "../pages/SpellsPage";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/students",
        element: <StudentsPage />,
      },
      {
        path: "/teachers",
        element: <TeachersPage />,
      },
      {
        path: "/spells",
        element: <SpellsPage />,
      },
    ],
  },
]);

export default router;
