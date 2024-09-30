import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <NavLink to={"/students"}>
        <button type="button">Students</button>
      </NavLink>
      <NavLink to={"/teachers"}>
        <button type="button">Teachers</button>
      </NavLink>
      <NavLink to={"/spells"}>
        <button type="button">Spells</button>
      </NavLink>
    </>
  );
}
