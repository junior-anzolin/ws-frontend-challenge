import React from 'react';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { IoMdCalendar } from 'react-icons/io';

import { IMenuItem } from '../@types/main.dto';

import '../styles/components/main.scss';

class Main extends React.Component<{}, { menu: JSX.Element[] }> {
    menuItems: IMenuItem[] = [
        {
            icon: (active: boolean) => (
                <AiOutlineSearch className="icon" data-active={active} />
            ),
            route: '/search',
        },
        {
            icon: (active: boolean) => (
                <BsPerson className="icon" data-active={active} />
            ),
            route: '/',
        },
        {
            icon: (active: boolean) => (
                <IoMdCalendar className="icon" data-active={active} />
            ),
            route: '/calendar',
        },
    ];

    constructor(props: { children: any }) {
        super(props);
        this.state = { menu: this.renderMenuItems() };
    }

    updateManu() {
        setTimeout(() => {
            this.setState({
                menu: this.renderMenuItems(),
            });
        }, 100);
    }

    renderMenuItems() {
        return this.menuItems.map((menuItem, i) => {
            return (
                <Link to={menuItem.route} key={i}>
                    <button
                        className="menu-item"
                        onClick={() => this.updateManu()}
                    >
                        {menuItem.icon(location.pathname === menuItem.route)}
                    </button>
                </Link>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="toolbar">
                    <button className="menu-burguer">
                        <FaBars className="menu-icon" />
                    </button>
                </div>
                <div className="sidenav">{this.state.menu}</div>
                <div className="content">{this.props.children}</div>
            </div>
        );
    }
}

export default Main;
