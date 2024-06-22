import WeatherInfo from '@/components/weatherInfo'
import WeatherSearch from '@/components/weatherSearch'
import React, { useState } from 'react'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { API_KEY, BASE_URL } from '@/constants/Api'

const App = () => {
    const [weatherData, setWeatherData] = useState()
    const [status, setStatus] = useState('')

    const searchWeather = (location: string) => {
        setStatus('loading')
        axios
            .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
            .then((response) => {
                const data = response.data
                data.visibility /= 1000
                data.visibility = data.visibility.toFixed(2)
                data.main.temp -= 273.15
                data.main.temp = data.main.temp.toFixed(2)
                setWeatherData(data)
                setStatus('success')
            })
            .catch((error) => {
                console.log(error)
                setStatus('error')
            })
    }

    const renderComponent = () => {
        switch (status)
        {
            case 'loading':
                return <ActivityIndicator size="large" />
            case 'success':
                return <WeatherInfo weatherData={weatherData} />
            case 'error':
                return (
                    <Text>
                        Something went wrong. Please try again with a correct city name.
                    </Text>
                )
            default:
                return
        }
    }
    return (
        <View style={styles.container}>
            <WeatherSearch searchWeather={searchWeather} />
            <View style={styles.marginTop20}>{renderComponent()}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    marginTop20: {
        marginTop: 20,
    },
})

export default App