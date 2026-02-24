import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

export default function settings() {

        const router = useRouter()
        return (
        <SafeAreaView style={s.safe} edges={["top"]}>
                  <ScrollView style={s.scroll} >
                         <Text style={s.title}>Settings</Text>

                         <TouchableOpacity
                               style={s.btn}
                               onPress={()=>{
                                router.push(`wallets`)
                               }}
                         >
                                <Text style={s.btnText}>
                                        Wallet Setting
                                </Text>
                         </TouchableOpacity>

                          <Pressable
                               style={s.btn}
                         >
                                <Text style={s.btnText}>
                                        Token Setting
                                </Text>
                         </Pressable>
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

        btn: {
                flex: 1,
                backgroundColor: "#14F195",
                paddingVertical: 16,
                borderRadius: 4,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#14F195",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 12,
                elevation: 8,
                        marginTop: 16,
        },
        btnDisabled: {
                opacity: 0.6,
        },
        btnText: {
                color: "#0D0D12",
                fontWeight: "600",
                fontSize: 16,
                letterSpacing: 0.3,
        },
})
