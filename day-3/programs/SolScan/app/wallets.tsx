import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
export default function wallets() {

        const router = useRouter()
        return (
        <SafeAreaView style={s.safe} edges={["top"]}>
                  <ScrollView style={s.scroll} >
                        <View style={s.flexRow}>
                                <TouchableOpacity
                                        style={s.backButton}
                                        onPress={()=>{
                                                router.back()
                                        }}
                                >
                                        <Ionicons name="arrow-back" size={24} color="#fff" />
                                                                <Text style={s.backText}>Back</Text>
                                </TouchableOpacity>
                                <Text style={s.title}>Wallets Setting</Text>
                        </View>
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
        backButton: {
                flexDirection: "row",
                alignItems: "center",
                // marginBottom: 20,
        },
        backText: {
                color: "#fff",
                fontSize: 16,
                marginLeft: 8,
        },
        flexRow:{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
        }
})
