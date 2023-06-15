import React, { FC, ReactNode, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import cn from "classnames";
import { AiFillCaretDown } from "react-icons/ai";

import { Typography } from "Elements/Typography";

interface ItemInterface {
  text: string;
  icon?: ReactNode;
  to?: string;
}

interface DropdownInterface {
  items: Array<ItemInterface>;
  extraClass?: string;
}

const MenuItem: FC<ItemInterface> = ({ text = "", icon = <></>, to = "/" }) => {
  return (
    <li className="flex items-center gap-4 px-4 py-2 rounded-md hover:cursor-pointer w-64">
      <Typography text={text} size="lg" weight={3} />
      {icon}
    </li>
  );
};

const Dropdown: FC<DropdownInterface> = ({ items = [], extraClass = "" }) => {
  const menuBtn = items[0];

  return (
    <Menu
      as="div"
      className={cn(
        "relative inline-block text-left outline-none flex-none",
        extraClass
      )}
    >
      <Menu.Button className="flex items-center gap-2">
        <Typography text={menuBtn.text} size="lg" color="black" />
        {items.length > 1 ? <AiFillCaretDown className="w-4 h-4 mt-1" /> : null}
      </Menu.Button>

      {items.length > 1 ? (
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            as="ul"
            className="absolute left-0 z-10 max-w-80 mt-2 origin-top-right rounded-xl drop-shadow-lg bg-white p-2 focus:outline-none"
          >
            {items.map(
              (item, index) =>
                index > 0 && (
                  <Menu.Item key={index}>
                    <MenuItem text={item.text} icon={item.icon} to={item.to} />
                  </Menu.Item>
                )
            )}
          </Menu.Items>
        </Transition>
      ) : null}
    </Menu>
  );
};

export default Dropdown;
