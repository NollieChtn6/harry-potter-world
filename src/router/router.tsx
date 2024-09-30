import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { StudentsPage } from "../components/Students/StudentsPage";
import { TeachersPage } from "../components/Teachers/TeachersPage";
import { SpellsPage } from "../components/Spells/SpellsPage";
import { HomePage } from "../components/Homepage/HomePage";

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
