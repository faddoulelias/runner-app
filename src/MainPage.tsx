import { StyleSheet, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Section from './components/Section'
import UserSection from './sections/UserSection'
import GiletSection from './sections/GiletSection'

export default function MainPage() {
    return (
        <ImageBackground
            source={require('../assets/images/wallpaper.jpg')}
            style={styles.container}
        >
            <ScrollView style={styles.scrollView}>
                <UserSection />
                <GiletSection>
                </GiletSection>
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
        paddingTop: 50,
        width: '100%',
    }
})