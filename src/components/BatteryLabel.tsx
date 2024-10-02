import { View, StyleSheet } from 'react-native'
import React from 'react'
import Label from './Label';

interface IndicatorLabelProps {
    children: React.ReactNode
    value: number
}

export default function BatteryLabel(props: IndicatorLabelProps) {
    const greenFunction = (value: number) => {
        return Math.round(255 * value)
    }
    const redFunction = (value: number) => {
        return Math.round(255 * (1 - value))
    }
    const colorString = `rgb(${redFunction(props.value)}, ${greenFunction(props.value)}, 0)`

    return (
        <View style={styles.container}>
            <Label style={StyleSheet.compose(styles.indicator, { color: colorString })}>⬤</Label>
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