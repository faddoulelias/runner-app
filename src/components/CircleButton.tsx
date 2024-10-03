import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface CircleButtonProps {
    image?: ImageSourcePropType;
    icon?: keyof typeof Ionicons.glyphMap;
    onPress?: () => void;
}

export default function CircleButton(props: CircleButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            {
                props.icon &&
                <View style={styles.icon}>
                    <Ionicons name={props.icon} size={20} color={'#fff'} />
                </View>
            }
            {
                props.image &&
                <Image source={props.image} style={styles.image} />
            }
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: Number.MAX_SAFE_INTEGER,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: Number.MAX_SAFE_INTEGER,
        backgroundColor: "#555",
        justifyContent: 'center',
        alignItems: 'center',
    }
})