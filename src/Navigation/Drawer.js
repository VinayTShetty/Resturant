import React from 'react'
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import { About, Contact, AboutApp,Detailsscreen} from '../Screens'



const MainNavigator = createStackNavigator(
    {
        Home: About,
      conatctacreen: Contact,
      Recipe: AboutApp,
      RecipesList: Detailsscreen,
      
    },
    {
      initialRouteName: 'Home',
      // headerMode: 'float',
      defaulfNavigationOptions: ({ navigation }) => ({
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        }
      })
    }
  ); 

  const DrawerStack = createDrawerNavigator(
    {
      Main: MainNavigator
    },
    {
      drawerPosition: 'left',
      initialRouteName: 'Main',
      drawerWidth: 250,
      contentComponent: DrawerContainer
    }
  );
  
  
   
  export default AppContainer = createAppContainer(DrawerStack);
  
  console.disableYellowBox = true;

// const Drawer = createDrawerNavigator();
// export default DrawerNavigator = () => {
//     return(
//         <Drawer.Navigator
//             drawerPosition= "right" >
//             <Drawer.Screen name="Contact" component={Contatct} />
//             <Drawer.Screen name="AboutApp" component={AboutApp} />
//             <Drawer.Screen name="About" component={About} />
//             <Drawer.Screen name="Detailsscreen" component={Detailsscreen} />
//         </Drawer.Navigator>
//     )
// }