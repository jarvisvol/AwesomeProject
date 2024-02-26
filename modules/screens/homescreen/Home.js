import React, { useState } from 'react'
import Background from '../../login/components/parts/Background'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { View } from 'react-native';
import AtuoCompleteInput from '../SearchComponents/AtuoCompleteInput';

export default function Home() {

    const [origin, setOrigin] = useState('');

    const [destination, setDestination] = useState('');

    const positionSelected = (details, flag) => {
        const setCordinatios = flag === 'origin' ? setOrigin : setDestination
        const position = {
            latitude: details?.geometry.location.lat || 0,
            longitude: details?.geometry.location.lng || 0
        }
        setCordinatios(position);
    }

    return (
        <View style={{ height: '100%', width: '100%' }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ height: '60%', width: '100%' }}
                initialRegion={{
                    latitude: origin.latitude ? origin.latitude : 37.78825,
                    longitude: origin.longitude ? origin.longitude : -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            {
                origin && destination && 
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey='AIzaSyA7aF-FfY110rFxwuRHXqpkWz8KhoHg99Q'
                /> 
            }
            {origin && <Marker coordinate={origin}/>}
            {destination && <Marker coordinate={destination}/>}
            <AtuoCompleteInput
                style={{ height: 30, width: 50 }}
                lable={'origin'}
                onPressFunction={(details) => positionSelected(details, 'origin')}
            />
            <AtuoCompleteInput
                style={{ height: 30, width: 50 }}
                lable={'destination'}
                onPressFunction={(details) => positionSelected(details, 'destination')}
            />
        </View>
    )
}
