import { View, Text, StyleSheet, Image, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import CircleButton from '../components/CircleButton'

export default function TopBar() {
    return (
        <View style={styles.container}>
            <CircleButton image={require('../../data/images/profile.png')} />
            <SearchBar style={styles.searchBar} />
            <CircleButton icon="settings" />
            <CircleButton icon="radio-outline" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#000',
        padding: 15,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    searchBar: {
        width: '60%',
    }
})