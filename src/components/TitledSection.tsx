import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Section from './Card';

interface TitledSectionProps {
    title: string;
    children?: React.ReactNode;
    style?: any;
}

export default function TitledSection(props: TitledSectionProps) {
    return (
        <Section style={props.style}>
            <Text style={styles.sectionTitle}>{props.title}</Text>
            {props.children}
        </Section>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        color: '#eee',
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 5
    }
});