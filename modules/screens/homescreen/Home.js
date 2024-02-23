import React from 'react'
import Background from '../../login/components/parts/Background'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Home() {
    return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{height: '100%', width: '100%'}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
    )
}
