import { Link } from "react-router-dom";

export const Header = () => {
  const linkStyle =
    "box-border hover:border-2 hover:border-red-200 p-[8px] rounded-[15px] hover:text-[18px] transition-all";

  return (
    <div className="bg-[white]">
      <header className="container h-[80px] text-[red] flex justify-around items-center">
        <Link to="/" className={linkStyle}>
          Beans
        </Link>
        <Link to="/facts" className={linkStyle}>
          Facts
        </Link>
        <Link to="/recipes" className={linkStyle}>
          Recipes
        </Link>
        <Link to="/combinations" className={linkStyle}>
          Combinations
        </Link>
        <Link to="/history" className={linkStyle}>
          History
        </Link>
      </header>
    </div>
  );
};
