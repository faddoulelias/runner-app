import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import React from 'react'

interface LabelProps {
    children: React.ReactNode
    style?: StyleProp<TextStyle>
}

export default function Label(props: LabelProps) {
    return (
        <Text style={StyleSheet.flatten([styles.label, props.style])}> {props.children}</Text >
    )
}

const styles = StyleSheet.create({
    label: {
        color: 'white',
        fontSize: 18,
    },
});