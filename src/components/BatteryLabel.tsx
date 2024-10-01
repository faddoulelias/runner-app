import { View, StyleSheet } from 'react-native'
import React from 'react'
import Label from './Label';

interface IndicatorLabelProps {
    children: React.ReactNode
    value: number
}

export default function BatteryLabel(props: IndicatorLabelProps) {
    return (
        <View style={styles.container}>
            <Label style={
                StyleSheet.flatten([styles.indicator, { color: props.value ? '#0f0' : '#f00' }])
            }>⬤</Label>
            <Label>{props.children}</Label>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    indicator: {
        marginRight: 6
    },
});