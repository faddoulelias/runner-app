import { View, StyleSheet } from 'react-native'
import React from 'react'

interface SectionProps {
    children?: React.ReactNode
}

export default function Section(props: SectionProps) {
    return (
        <View style={styles.section}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        margin: 20,
        padding: 20,
        backgroundColor: '#23232399',
        borderRadius: 10,
    }
});