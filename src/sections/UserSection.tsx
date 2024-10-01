import { Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import TitledSection from '../components/TitledSection';
import Label from '../components/Label';

export default function UserSection() {
    const userDetail = require('../../data/jsons/user.json');
    return (
        <TitledSection title="User Details">
            <View style={styles.profileContainer}>
                <Image
                    style={styles.profileImage}
                    source={require('../../data/images/profile.png')}
                />
                <View style={styles.profileDetails}>
                    <Label>{userDetail.name}</Label>
                    <Label>{userDetail.accountNumber}</Label>
                    <Label>{new Date(userDetail.birthDate).toLocaleDateString()}</Label>
                    <Label>{userDetail.email}</Label>
                </View >
            </View >
        </TitledSection>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileDetails: {
        marginLeft: 20,
        fontSize: 20,

    },
    sectionTitle: {
        fontSize: 24,
        color: '#eee',
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 5
    }
});