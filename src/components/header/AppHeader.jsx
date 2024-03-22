import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <div className="flex border-b p-2 border-slate-900 justify-between items-center w-full ">
      <h1 className="font-semibold text-slate-900 text-xl">Foodie Heaven</h1>
      <HeaderLinks />
    </div>
  );
};

export default Header;
