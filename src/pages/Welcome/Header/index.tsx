import PageMenu from "./PageMenu";
import Toolkit from "./Toolkit";

import Logo from "Assets/logo.png";

const Header = () => {
  return (
    <header className="flex justify-center p-6 items-center">
      <div className="flex w-[1000px] items-center justify-between">
        <div className="flex gap-14 items-center">
          {/* Logo */}
          <img src={Logo} alt="Logo" width={109} />

          <div className="max-lg:hidden">
            <PageMenu />
          </div>
        </div>

        <div className="lg:hidden">
          <PageMenu />
        </div>

        <Toolkit />
      </div>
    </header>
  );
};

export default Header;
