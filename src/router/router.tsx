import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { StudentsPage } from "../pages/StudentsPage";
import { TeachersPage } from "../pages/TeachersPage";
import { SpellsPage } from "../pages/SpellsPage";
import { HomePage } from "../pages/HomePage";
import { CharacterDetails } from "../pages/CharacterDetails";
import { SpellDetails } from "../pages/SpellDetails";
import { OtherCharactersPage } from "../pages/OtherCharactersPage";

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
        path: "/students/:encodedName",
        element: <CharacterDetails />,
      },
      {
        path: "/teachers",
        element: <TeachersPage />,
      },
      {
        path: "/teachers/:encodedName",
        element: <CharacterDetails />,
      },
      {
        path: "/other/",
        element: <OtherCharactersPage />,
      },
      {
        path: "/other/:encodedName",
        element: <CharacterDetails />,
      },
      {
        path: "/spells",
        element: <SpellsPage />,
      },
      {
        path: "/spells/:encodedName",
        element: <SpellDetails />,
      },
    ],
  },
]);

export default router;
