import { View, Text, TouchableOpacity, StyleSheet, StyleProp } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
    style?: StyleProp<any>;
}

export default function SearchBar(props: SearchBarProps) {
    return (
        <TouchableOpacity style={StyleSheet.compose(styles.container, props.style)}>
            <Ionicons name="search" size={24} color="#fff" />
            <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
        backgroundColor: '#555',
        borderRadius: Number.MAX_SAFE_INTEGER,
        padding: 5,
        paddingLeft: 10,
        gap: 5
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }
})