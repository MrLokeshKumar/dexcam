import React,{Component} from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import Details from './src/components/Details';
import RecordVideo from './App';

const RootStack = createStackNavigator({
    RecordVideo:{
        screen:RecordVideo
    },
    Details:{
        screen:Details
    },

})

const App = createAppContainer(RootStack);

export default App;
