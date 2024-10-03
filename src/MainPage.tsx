import { StyleSheet, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import UserSection from './sections/UserSection'
import GiletCard from './sections/GiletCard'
import TopBar from './sections/TopBar'
import Carrousel from './components/Carrousel'
import HealthCard from './sections/HealthCard'

export default function MainPage() {
    return (
        <ImageBackground
            source={require('../assets/images/wallpaper.jpg')}
            style={styles.container}
        >
            <TopBar />
            <UserSection />
            <ScrollView style={styles.scrollView}>
                <Carrousel style={styles.carrousel}>
                    <HealthCard style={styles.carrouselCard} icon='heart' />
                    <HealthCard style={styles.carrouselCard} icon='speedometer' />
                    <HealthCard style={styles.carrouselCard} icon='water' />
                    <HealthCard style={styles.carrouselCard} icon='thermometer' />
                </Carrousel>
                <GiletCard style={styles.card} />
                <GiletCard style={styles.card} />
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
        width: '100%',
        flexDirection: 'column'
    },

    card: {
        width: '90%',
        margin: 12
    },

    carrouselCard: {
        width: '90%',
        marginHorizontal: 12
    },

    carrousel: {
        marginTop: 10
    }
})