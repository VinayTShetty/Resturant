import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { About, Contatct, AboutApp } from '../Screens'

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
    return(
        <Drawer.Navigator
            drawerPosition= "right"
        >
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Contact" component={Contatct} />
            <Drawer.Screen name="AboutApp" component={AboutApp} />
        </Drawer.Navigator>
    )
}