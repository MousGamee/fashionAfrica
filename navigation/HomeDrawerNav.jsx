import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeDrawerContent } from './HomeDrawerContent'
import HomeStack from './HomeStack'

const Tab = createDrawerNavigator()

const HomeDrawerNav = ({ navigation, props }) => {
    return (
        <Tab.Navigator screenOptions={{
            
        }}
        drawerContent={props => <HomeDrawerContent {...props} />} >
            <Tab.Screen name="Home" component={HomeStack}/>
        </Tab.Navigator>
    )
}

export default HomeDrawerNav
