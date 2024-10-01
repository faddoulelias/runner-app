import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Section from './Section';

interface TitledSectionProps {
    title: string;
    children?: React.ReactNode;
}

export default function TitledSection(props: TitledSectionProps) {
    return (
        <Section>
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