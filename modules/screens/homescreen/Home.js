import React from 'react'
import Background from '../../login/components/parts/Background'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Home() {
    return (
        <Background>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{height: '50%', width: '50%'}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </Background>
    )
}
