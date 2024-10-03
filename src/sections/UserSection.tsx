import { Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import TitledSection from '../components/TitledSection';
import Label from '../components/Label';

interface UserSectionProps {
    style?: any
}

export default function UserSection(props: UserSectionProps) {
    const userDetail = require('../../data/jsons/user.json');
    return (
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
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#00000088',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 40,
        padding: 20
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileDetails: {
        marginLeft: 20,
        fontSize: 20,
    }
});