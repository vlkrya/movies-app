import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

const { Header } = Layout;

const HeaderComponents = () => {
    const navData = [
        { name: 'Home', link: '/' },
        { name: 'Liked', link: '/liked' },
        { name: 'WatchLater', link: '/watchlater' }
    ];

    return (
        <Header>
            <div className="logo">
                movies-app
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                {
                    navData.map((item, index) => (
                        <Menu.Item key={index + 1}>
                            <Link to={item.link}>
                                {item.name}
                            </Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Header>
    )
}

export default HeaderComponents;




