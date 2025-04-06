import { View, Text } from "react-native";
import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            console.log('token', token);
            if (!token) {
                router.replace('/login');
            }
        } catch (error) {
            console.error('Error checking token:', error);
            router.replace('/login');
        }
    };

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}