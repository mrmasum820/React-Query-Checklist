import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/super-heroes">Td Super Heros</Link>
        </li>
        <li>
          <Link to="/rq-super-heroes">RQ Super Heros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
