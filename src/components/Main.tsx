import React from 'react';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { IoMdCalendar } from 'react-icons/io';

import { IMenuItem } from '../@types/main.dto';

import '../styles/components/main.scss';

class Main extends React.Component<
    {},
    { menu: JSX.Element[]; statusMenu: 'opened' | 'closed' }
> {
    menuItems: IMenuItem[] = [
        {
            icon: <AiOutlineSearch className="icon" />,
            route: '/search',
            label: 'Pesquisar',
        },
        {
            icon: <BsPerson className="icon" />,
            route: '/',
            label: 'Resumo',
        },
        {
            icon: <IoMdCalendar className="icon" />,
            route: '/calendar',
            label: 'Calendario',
        },
    ];

    constructor(props: { children: any }) {
        super(props);
        this.state = {
            menu: this.renderMenuItems('closed'),
            statusMenu: 'closed',
        };
    }

    updateManu() {
        setTimeout(() => {
            this.setState({
                menu: this.renderMenuItems(this.state.statusMenu),
            });
        }, 5);
    }

    renderMenuItems(statusMenu: 'opened' | 'closed') {
        console.log(statusMenu);
        return this.menuItems.map((menuItem, i) => {
            return (
                <Link to={menuItem.route} key={i}>
                    <button
                        className="menu-item"
                        onClick={() => this.updateManu()}
                        data-status={statusMenu}
                        data-active={location.pathname === menuItem.route}
                    >
                        {menuItem.icon}
                        {statusMenu === 'opened' && menuItem.label}
                    </button>
                </Link>
            );
        });
    }

    changeStatusMenu() {
        if (this.state.statusMenu === 'closed') {
            this.setState({
                statusMenu: 'opened',
                menu: this.renderMenuItems('opened'),
            });
        } else {
            this.setState({
                statusMenu: 'closed',
                menu: this.renderMenuItems('closed'),
            });
        }
    }

    render() {
        return (
            <div className="container" data-statusMenu={this.state.statusMenu}>
                <div className="toolbar">
                    <button
                        className="menu-burguer"
                        onClick={() => this.changeStatusMenu()}
                    >
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
