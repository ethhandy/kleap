import { Dropdown } from "Elements/Dropdown";
import Collapse from "./Collapse";
import { pageMenus } from "Utils/constant";

const PageMenu = () => {
  return (
    <>
      <div className="flex gap-8 items-center max-lg:hidden">
        {pageMenus.map((menu, index) => (
          <Dropdown items={menu.items} key={index} />
        ))}
      </div>

      <Collapse />
    </>
  );
};

export default PageMenu;
