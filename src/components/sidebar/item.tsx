"use client";
import React, { useMemo, useState } from "react";
import { LucideIcon, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import SubmenuItem from "../submenu-item";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[]; //must provide "?"
}
interface ISubItem {
  name: string;
  path: string;
}

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  // call  all  the item from the  items array
  const { name, icon: Icon, items, path } = item;
  //   expand functionality
  const [expanded, setExpanded] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }
    router.push(path);
  };

//   Checking the status of the menue items

  const isActive = useMemo(() => {
    if(items && items.length>0){
       if( items.find(item => item.path === pathname)){
        setExpanded(true);
        return true;
       }
        
    }
    return path === pathname;
  }, [path, pathname, items]);

  return (
    <>
      <div
        className={`flex items-center justify-between cursor-pointer space-x-2 p-3 rounded-lg 
        ${
          isActive
            ? "bg-sidebar-background text-sidebar-active"
            : "text-sidebar-iconColor"
        } 
        hover:bg-sidebar-background hover:text-sidebar-active`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <Icon size={20} />
          <p className="text-sm font-semibold">{name}</p>
        </div>
        {items && items.length > 0 && (
          <ChevronDown
            size={18}
            className={expanded ? "rotate-180 duration-200" : ""}
          />
        )}
      </div>

      {expanded &&
        items &&
        items.length > 0 && (<div className="flex flex-col space-y-3 ml-10 ">
            {items.map((item) => <SubmenuItem key={item.path} item={item} />)}
        </div>)
        }
    </>
  );
};

export default SidebarItem;
