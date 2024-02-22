import React from "react";
import { House, DeviceMobile, Watch, Laptop } from 'phosphor-react';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <House size={32} />,
        cName: 'nav-text',
    },
    {
        title: 'Smartphones',
        path: '/smartphones',
        icon: <DeviceMobile size={32} />,
        cName: 'nav-text',
    },
    {
        title: 'Watches',
        path: '/watches',
        icon: <Watch size={32} />,
        cName: 'nav-text',
    },
    {
        title: 'Laptops',
        path: '/laptops',
        icon: <Laptop size={32} />,
        cName: 'nav-text',
    },
];