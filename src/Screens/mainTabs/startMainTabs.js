import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("md-share", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: 'Find place',
                    title: "Find Place Top",
                    icon: sources[0]
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: 'Share place',
                    title: "Share Place top",
                    icon: sources[1]
                }
            ]
        });
    })

}

export default startTabs;
