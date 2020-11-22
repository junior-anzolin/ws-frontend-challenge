import React from 'react';
import { IMenuItem } from '../@types/home.dto';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { IoMdCalendar } from 'react-icons/io';

import '../styles/pages/home.scss';

const menuItems: IMenuItem[] = [
    {
        icon: <AiOutlineSearch className="icon" />,
    },
    {
        icon: <BsPerson className="icon" />,
    },
    {
        icon: <IoMdCalendar className="icon" />,
    },
];

function renderMenuItems() {
    return menuItems.map((menuItem) => {
        return <div className="menu-item">{menuItem.icon}</div>;
    });
}

function Home() {
    return (
        <div className="container">
            <div className="toolbar">
                <FaBars className="menu-icon" />
            </div>
            <div className="sidenav">{renderMenuItems()}</div>
            <div className="content"></div>
        </div>
    );
}

export default Home;
