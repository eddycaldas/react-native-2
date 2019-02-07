import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/Screens/Auth/Auth';
import SharePlaceScreen from './src/Screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/Screens/FindPlace/FindPlace';


//register screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen);

// starting the screen page -app
Navigation.startSingleScreenApp({
    screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login"
    }
})

