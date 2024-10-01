import { NavLink } from "react-router-dom";
import Button from "./Button";

export function NavBar() {
  const pages = [
    {
      id: 1,
      title: "Students",
      url: "/students",
    },
    {
      id: 2,
      title: "Teachers",
      url: "/teachers",
    },
    {
      id: 3,
      title: "Other",
      url: "/other",
    },
    {
      id: 4,
      title: "Spells",
      url: "/spells",
    },
  ];
  return (
    <>
      {pages.map((page) => (
        <NavLink to={page.url} key={page.id}>
          <Button actionType="nav" text={page.title} />
        </NavLink>
      ))}
    </>
  );
}
