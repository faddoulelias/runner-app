import { StyleSheet, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Section from './components/Card'
import UserSection from './sections/UserSection'
import GiletCard from './sections/GiletCard'
import TopBar from './sections/TopBar'

export default function MainPage() {
    return (
        <ImageBackground
            source={require('../assets/images/wallpaper.jpg')}
            style={styles.container}
        >
            <TopBar />
            <UserSection style={styles.section} />
            <ScrollView style={styles.scrollView}>
                <GiletCard style={styles.section} />
                <GiletCard style={styles.section} />
                <GiletCard style={styles.section} />
                <GiletCard style={styles.section} />
                <GiletCard style={styles.section} />
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollView: {
        flex: 1,
        marginTop: 50,
        flexDirection: 'column',
        width: '100%'
    },

    section: {
        marginBottom: 20,
        marginHorizontal: 20,
    }
})