import React from 'react';
import{StackNavigator,TabNavigator , DrawerNavigator} from 'react-navigation';
import Home from './screens/Home';
import User from './screens/User';
import Detail from './screens/Detail';
import Menu from './screens/Menu';


export const HomeStack = StackNavigator({
  ManHinh_Home:{
    screen:Home,
    navigationOptions:{
      tabBarVisible:true,
      title:'Trang chu'
    }
  },
  ManHinh_Detail:{
    screen:Detail,
    navigationOptions:{
      tabBarVisible:false,
      title:'Chi tiet'
    }
  }
})

export const UserStack = StackNavigator({
  ManHinh_User:{
    screen:User,
    navigationOptions:{
      title:'User'
    }
  },
})

export const Tabs = TabNavigator({
  Home:{
    screen:HomeStack
  },
  User:{
    screen:UserStack
  }
}, {
  swipeEnabled:true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
})

export const SideMenu = DrawerNavigator({
  Tabbar:{
    screen:Tabs
  },
},
{
  drawerWidth:300,
  drawerPosition:'left',
  contentComponents:props=><Menu><DrawerItems {...props} /></Menu>
}

)
