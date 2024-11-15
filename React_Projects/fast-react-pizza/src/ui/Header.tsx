import { Link } from "react-router-dom";
import { SearchOrder } from "../features/order/SearchOrder";
import { UserName } from "../features/user/UserName";

export const Header = () => {
  return (
    <header className=" flex items-center justify-between border-b border-stone-500 bg-yellow-400 px-4 py-4 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast Pizza Co.
      </Link>

      <SearchOrder />

      <UserName />
    </header>
  );
};
