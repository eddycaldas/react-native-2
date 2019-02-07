import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/Screens/Auth/Auth';

//register screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);

// starting the screen page -app
Navigation.startSingleScreenApp({
    screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login"
    }
})