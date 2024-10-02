import { View, StyleSheet } from 'react-native'
import React from 'react'

interface CardProps {
    children?: React.ReactNode,
    style?: any
}

export default function Card(props: CardProps) {
    return (
        <View style={StyleSheet.compose(styles.card, props.style)}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: '#23232399',
        borderRadius: 10,
    }
});