import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, TEXT_STYLES, SIZES } from '../constants/Typography';

const { width, height } = Dimensions.get('window');

export default function Welcome() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.replace('/(auth)/signup');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/character.png')}
                        style={styles.illustration}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={[TEXT_STYLES.h1, styles.title]}>
                        Express your{'\n'}creativity
                    </Text>
                    <Text style={[TEXT_STYLES.body1, styles.subtitle]}>
                        Lorem ipsum dolor sit amet consectetur elit. Nulla enim laborum, nam quasi error alus nihil iusto tenetur.
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleGetStarted}
                        activeOpacity={0.8}
                    >
                        <Text style={[TEXT_STYLES.button, styles.buttonText]}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.paginationContainer}>
                    <View style={styles.paginationDot} />
                    <View style={[styles.paginationDot, styles.paginationDotActive]} />
                    <View style={styles.paginationDot} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.primary,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    imageContainer: {
        width: width * 0.8,
        height: height * 0.4,
        marginTop: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    illustration: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        width: '100%',
        marginTop: height * 0.05,
        alignItems: 'flex-start',
    },
    title: {
        color: COLORS.text.primary,
        marginBottom: SIZES.xl,
    },
    subtitle: {
        color: COLORS.text.secondary,
        marginBottom: SIZES.xl,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 'auto',
        marginBottom: SIZES.xl,
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingVertical: SIZES.base,
        alignItems: 'center',
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
    buttonText: {
        color: COLORS.text.white,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZES.xl,
        gap: SIZES.xs,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.border.light,
    },
    paginationDotActive: {
        backgroundColor: COLORS.primary,
        width: 24,
    },
}); 