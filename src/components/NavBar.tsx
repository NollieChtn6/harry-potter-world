import { NavLink } from "react-router-dom";
import Button from "./Button";

import pages from "../data/pages.json";

export function NavBar() {
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
