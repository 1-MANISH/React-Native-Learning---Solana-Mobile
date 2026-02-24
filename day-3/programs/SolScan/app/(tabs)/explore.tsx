import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function explore() {
        return (
        <SafeAreaView style={s.safe} edges={["top"]}>
                  <ScrollView style={s.scroll} >
                         <Text style={s.title}>Explore</Text>
                  </ScrollView>
        </SafeAreaView>
        )
}

const s = StyleSheet.create({
        safe: {
                flex: 1,
                backgroundColor: "#0D0D12",
        },
        scroll: {
                flex: 1,
                paddingHorizontal: 24,
                paddingTop: 16,
        },
        title: {
                color: "#FFFFFF",
                fontSize: 32,
                fontWeight: "700",
                marginBottom: 8,
                letterSpacing: -0.5,
        },
})
