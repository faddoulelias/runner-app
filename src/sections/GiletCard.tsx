import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Section from '../components/Card'
import Label from '../components/Label'
import IndicatorLabel from '../components/IndicatorLabel'
import BatteryLabel from '../components/BatteryLabel'

interface GiletCardProps {
    style?: any
}

export default function GiletCard(props: GiletCardProps) {
    const giletData = {
        temperature: 20,
        battery: 1.00,
        active: true,
    }

    return (
        <Section style={props.style}>
            <View style={styles.giletCard}>
                <Image
                    style={styles.giletImage}
                    source={require('../../data/images/gilet.png')}
                />
                <View style={styles.giletData}>
                    <BatteryLabel value={giletData.battery}>Battery : {giletData.battery * 100}%</BatteryLabel>
                    <IndicatorLabel value={giletData.active}>{giletData.active ? 'Connected' : 'Not connected'}</IndicatorLabel>
                    <Label>Temperature: {giletData.temperature}°C</Label>
                </View >
            </View>
        </Section>
    )
}

const styles = StyleSheet.create({
    giletCard: {
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