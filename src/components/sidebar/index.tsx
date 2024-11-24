"use client"

import Image from 'next/image'
import React from 'react'
import {
    LucideIcon,
    LayoutDashboard,
    BadgeDollarSign,
    CircleUserRound,
    Settings,
    WalletCards,
    HandHelping ,
  } from "lucide-react";
import SidebarItem from './item';

  interface ISidebarItem {
    name: string;
    path: string;
    icon: LucideIcon;
    items?:ISubItem[];  //must provide "?"
  }

  interface ISubItem {
    name: string;
    path: string;
  }

const items: ISidebarItem[]=[
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
      },
      {
        name: "Transaction",
        path: "/transaction",
        icon: BadgeDollarSign,
      },
      {
        name: "Payment",
        path: "/payment",
        icon: WalletCards,
      },
      {
        name: "Accounts",
        path: "/accounts",
        icon: CircleUserRound,
      },
      {
        name: "Settings",
        path: "/settings",
        icon: Settings,
        items: [
            {
              name: "General",
              path: "/settings",
            },
            {
              name: "Security",
              path: "/settings/security",
            },
            {
              name: "Notifications",
              path: "/settings/notifications",
            },
          ],
      },
      {
        name: "Help",
        path: "/help/faqs",
        icon: HandHelping,
        items: [
            {
                name: "FAQs",
                path: "/help/faqs",
            },
            {
                name: "Support",
                path: "/help/support",
            },
            {
                name: "Contact Us",
                path: "/help/contact-us",
            },
        ]
      }
];

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4 select-none overflow-y-auto'>
        <div className="flex flex-col space-y-10 ">
        <Image src="/Google Drive.jpg" alt='' width={200} height={10} className='rounded-2xl'/>
        <div className="flex flex-col space-y-2">
            {items.map((item)=>(
                <SidebarItem 
                key={item.path}
                item={item}
                
                />
            ))}
        </div>
        </div>
      
    </div>
  )
}

export default Sidebar
