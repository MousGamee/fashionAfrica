import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Acceuil from '../screens/Acceuil'
import Categorie from '../screens/Categorie'
import Nouveaute from '../screens/Nouveaute'

const Tab = createMaterialTopTabNavigator()
const HomeTopTab = () => {
    return (
        <Tab.Navigator
            style={{}}
        >
            <Tab.Screen name="Acceuil" component={Acceuil} />
            <Tab.Screen name="Categorie" component={Categorie} />
            <Tab.Screen name="Nouveaute" component={Nouveaute} />
        </Tab.Navigator>
    )
}

export default HomeTopTab
