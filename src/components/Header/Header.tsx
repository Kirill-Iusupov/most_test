import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-[white]">
      <header className="container h-[80px] flex justify-between items-center">
        <Link to="/">Beans</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/combinations">Combinations</Link>
        <Link to="/history">History</Link>
      </header>
    </div>
  );
};
