"use client"

import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo } from 'react'


interface ISubItem {
    name: string;
    path: string;
  }
const SubmenuItem = ({item}:{item: ISubItem}) => {
    const {name, path} = item;
    const router = useRouter();
    const pathname = usePathname();

    const onClick = () => {
        router.push(path);
    }

    const isActive = useMemo(() => {
        return path === pathname;
      }, [path, pathname]);

  return (
    <div className={`text-sm hover:text-sidebar-active hover:font-semibold cursor-pointer ${
          isActive
            ? " text-sidebar-active font-semibold"
            : "text-sidebar-iconColor"
        }`} 
    onClick={onClick}>
      {name}
    </div>
  )
}

export default SubmenuItem
