import { Disclosure } from "Elements/Disclosure";
import { pageMenus } from "Utils/constant";
import { useGlobalStore } from "../../../state/store";

const PageList = () => {
  const [isCollapsed] = useGlobalStore((state) => [state.isCollapsed]);
  return isCollapsed ? (
    <div className="relative">
      <div className="w-full pr-10 lg:hidden absolute top-0 z-10 bg-white">
        {pageMenus.map((menu, index) => (
          <Disclosure items={menu.items} key={index} />
        ))}
      </div>
    </div>
  ) : null;
};

export default PageList;
