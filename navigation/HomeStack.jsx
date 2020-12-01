import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Favoris from '../screens/Favoris'
import Search from '../screens/Search'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createStackNavigator()

const HomeStack = navigation => {

    return (
        <Tab.Navigator       
        >
            <Tab.Screen name="Home" component={Home}  options={{
                headerLeft : () => (
                    <Ionicons name="ios-menu" size={25} style={{marginLeft : 20}}/> 
                ),
                headerRight : () => (
                    <View style={{flexDirection : 'row', marginRight : 20}}>
                        <Ionicons name="ios-heart" size={25} onPress={() => navigation.navigate('Favoris')}/>
                        <Ionicons name="ios-search" size={25} style={{marginLeft : 20}} onPress={() => navigation.navigate('Search')}/>
                    </View>
                ),
                             
            }}/>
            <Tab.Screen name="Favoris" component={Favoris} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    )
}

export default HomeStack
