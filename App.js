import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';

import AuthScreen from './src/Screens/Auth/Auth';
import SharePlaceScreen from './src/Screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/Screens/FindPlace/FindPlace';
import configureStore from './src/store/configureStore';

const store = configureStore();


//register screens
Navigation.registerComponent("awesome-places.AuthScreen", 
    () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", 
    () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", 
    () => FindPlaceScreen, store, Provider);

// starting the screen page -app
Navigation.startSingleScreenApp({
    screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login"
    }
})

