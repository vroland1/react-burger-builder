import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import moreClasses from '../SideDrawer/DrawerToggle/DrawerToggle.css'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={moreClasses.DrawerToggle} onClick={props.drawerToggleClicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className={classes.Logo}>
        <Logo height="80%"/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar