import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from "react-navigation";

import Login from "../screens/Login";
import Register from "../screens/Register";
import LeaderBoards from "../screens/Leaderboards";
import Home from "../screens/Home";
import CustomDrawer from '../components/CustomDrawer'

// const AuthNavigator = createStackNavigator({
//     Login,
//     Register
// }, {
//     initialRouteName: 'Login',
//     headerMode: 'none'
// })

const HomeNavigator = createStackNavigator({
    Home,
    LeaderBoards
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
})

// const SwitchNavigator = createSwitchNavigator({
//     Auth: AuthNavigator,
//     Home: HomeNavigator
// },{
//     initialRouteName: 'Auth',
// })

const DrawerNavigation = createDrawerNavigator({
    Menu: {
        screen: HomeNavigator
    },
    LeaderBoards,
    Login,
    Register
}, {
    contentComponent: CustomDrawer,
})

export default createAppContainer(DrawerNavigation )