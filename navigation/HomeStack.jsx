import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Favoris from '../screens/Favoris'
import Search from '../screens/Search'

const Tab = createStackNavigator()
const HomeStack = () => {
    return (
        <Tab.Navigator
        
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favoris" component={Favoris} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    )
}

export default HomeStack
