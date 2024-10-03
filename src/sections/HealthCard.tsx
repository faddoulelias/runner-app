import { StyleSheet } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

interface HealthCardProps {
    style?: any,
    icon: keyof typeof Ionicons.glyphMap
}

export default function HealthCard(props: HealthCardProps) {
    return (
        <Card style={styles.carrouselCard}>
            <Ionicons name={props.icon} size={80} style={styles.icon} />
        </Card>
    )
}

const styles = StyleSheet.create({
    carrouselCard: {
        width: '90%',
        marginHorizontal: 12
    },
    icon: {
        color: '#fff',
        elevation: 5,
    }
})