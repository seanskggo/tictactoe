/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main file responsible for how application will be rendered
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import { isDevice } from 'expo-device';
import { Platform, Text, View } from 'react-native';

/////////////////////////////////////////////////////////////////////////////////
// Constants
/////////////////////////////////////////////////////////////////////////////////

const productionID = Platform.select({
    ios: 'random-placeholder-ios-admob-id',
    android: 'random-placeholder-android-admob-id',
});

const testID = Platform.select({
    ios: 'ca-app-pub-3940256099942544/4411468910',
    android: 'ca-app-pub-3940256099942544/1033173712',
});

// Is a real device and running in production.
const adUnitID = isDevice && !__DEV__ ? productionID : testID;

/////////////////////////////////////////////////////////////////////////////////
// Components
/////////////////////////////////////////////////////////////////////////////////

const AdDisplay = () => {
    return (
        <View>
            <Text>{adUnitID}</Text>
        </View>
    )
}

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

export default AdDisplay