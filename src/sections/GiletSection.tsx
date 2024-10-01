import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Section from '../components/Section'
import Label from '../components/Label'
import IndicatorLabel from '../components/IndicatorLabel'
import BatteryLabel from '../components/BatteryLabel'

export default function GiletSection() {
    const giletData = {
        temperature: 20,
        battery: 0.76,
        active: true,
    }

    return (
        <Section>
            <View style={styles.giletSection}>
                <Image
                    style={styles.giletImage}
                    source={require('../../data/images/gilet.png')}
                />
                <View style={styles.giletData}>
                    <BatteryLabel value={giletData.battery}>Battery : {giletData.battery * 100}%</BatteryLabel>
                    <IndicatorLabel value={giletData.active}>Connected</IndicatorLabel>
                    <Label>Temperature: {giletData.temperature}°C</Label>
                    <Label>Battery: {giletData.battery * 100}%</Label>
                </View >
            </View>
        </Section>
    )
}

const styles = StyleSheet.create({
    giletSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    giletData: {
        marginLeft: 20,
    },

    giletImage: {
        width: 150,
        height: 150,
    },

    giletDataText: {
        color: 'white',
        fontSize: 20,
    },
});