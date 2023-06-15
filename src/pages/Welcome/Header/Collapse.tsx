import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import { useGlobalStore } from "../../../state/store";

const Collapse = () => {
  const [isCollapsed, setCollapsed] = useGlobalStore((state) => [
    state.isCollapsed,
    state.setCollapsed,
  ]);
  return (
    <div
      className="w-12 h-12 flex items-center justify-center lg:hidden rounded-full bg-gray-300 hover:cursor-pointer"
      onClick={() => setCollapsed(!isCollapsed)}
    >
      {isCollapsed ? (
        <IoMdClose className="w-8 h-8" />
      ) : (
        <MdOutlineMenu className="w-8 h-8" />
      )}
    </div>
  );
};

export default Collapse;
