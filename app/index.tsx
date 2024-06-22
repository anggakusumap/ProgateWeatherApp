import WeatherInfo from '@/components/weatherInfo'
import WeatherSearch from '@/components/weatherSearch'
import React from 'react'
import { View, StyleSheet } from 'react-native'

const App = () => {
    return (
        <View style={styles.container}>
            <WeatherSearch />
            <WeatherInfo />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})

export default App