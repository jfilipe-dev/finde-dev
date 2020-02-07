import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Find dev',
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil do Github',
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerStyle: {
                backgroundColor: '#FF3C38'
            },
            headerTintColor: '#fff'
        }
    })
);

export default Routes;