import { Navigation } from 'react-native-navigation';

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "awesome-places.FindPlaceScreen",
                label: 'Find place',
                title: "Find Place"
            },
            {
                screen: "awesome-places.SharePlaceScreen",
                label: 'Share place',
                title: "Share Place"
            }
        ]
    });
}

export default startTabs;
