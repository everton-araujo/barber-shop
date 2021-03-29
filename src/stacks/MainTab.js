import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Appointments from '../pages/Appointments';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name='Home' component={Home} />
    <Tab.Screen name='Search' component={Search} />
    <Tab.Screen name='Appointments' component={Appointments} />
    <Tab.Screen name='Favorites' component={Favorites} />
    <Tab.Screen name='Profile' component={Profile} />
  </Tab.Navigator>
);
