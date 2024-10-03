import { View, Text, StyleSheet, ScrollView, Dimensions, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

interface CarrouselProps {
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

export default function Carrousel(props: CarrouselProps) {
    const [index, setIndex] = React.useState(0);
    const width = Dimensions.get('window').width;

    const handleScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const index = Math.floor(contentOffsetX / viewSize);
        setIndex(index);
    }

    return (
        <View style={props.style}>
            <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onScroll={handleScroll}>
                {React.Children.map(props.children, (child, i) => (
                    <View key={i} style={{ width: width }}>
                        {child}
                    </View>
                ))}
            </ScrollView>
            <View style={styles.dotsContainer}>
                {React.Children.map(props.children, (_, i) => (
                    <View
                        style={[styles.dot, i === index && styles.activeDot]}
                        key={i}
                    />
                ))}
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 7
    },
    dot: {
        width: 5,
        height: 5,
        margin: 2,
        borderRadius: 5,
        backgroundColor: '#ccc'
    },
    activeDot: {
        width: 8,
        height: 8
    }
});