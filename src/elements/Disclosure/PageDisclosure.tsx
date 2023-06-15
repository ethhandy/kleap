import { ReactNode, FC, Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { AiFillCaretDown } from "react-icons/ai";
import cn from "classnames";

import { Typography } from "Elements/Typography";

interface DisclosureItemInterface {
  text: string;
  icon?: ReactNode;
  to?: string;
}

interface DisclosureInterface {
  items: Array<DisclosureItemInterface>;
  extraClass?: string;
}

const DisclosureItem: FC<DisclosureItemInterface> = ({
  text = "",
  icon = <></>,
  to = "/",
}) => {
  return (
    <li className="flex items-center justify-center gap-4 py-2 rounded-md hover:cursor-pointer w-full">
      <Typography text={text} size="lg" weight={3} />
      {icon}
    </li>
  );
};

const PageDisclosure: FC<DisclosureInterface> = ({
  items = [],
  extraClass = "",
}) => {
  const disclosureBtn = items[0];

  return (
    <Disclosure as="div" className={cn(extraClass)}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-center items-center px-4 py-2 gap-2">
            <Typography text={disclosureBtn.text} size="lg" color="black" />
            {items.length > 1 ? (
              <AiFillCaretDown
                className={`${open ? "rotate-180 transform" : ""} mt-1 h-5 w-5`}
              />
            ) : null}
          </Disclosure.Button>

          {items.length > 1 ? (
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform scale-95"
              enterTo="transform  scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform scale-100"
              leaveTo="transform scale-95"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2" as="ul">
                {items.map(
                  (item, index) =>
                    index > 0 && (
                      <DisclosureItem
                        text={item.text}
                        icon={item.icon}
                        to={item.to}
                        key={index}
                      />
                    )
                )}
              </Disclosure.Panel>
            </Transition>
          ) : null}
        </>
      )}
    </Disclosure>
  );
};

export default PageDisclosure;
