import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS, TEXT_STYLES, SIZES } from '../../constants/Typography';
import { useRouter } from 'expo-router';

export default function SignUp() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/login');
    };

    const handleSignUp = () => {
        // Handle sign up logic here
        router.push('/(tabs)');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={[TEXT_STYLES.h2, styles.title]}>Hello User!</Text>
                    <Text style={[TEXT_STYLES.body2, styles.subtitle]}>Welcome to our app</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text style={[TEXT_STYLES.h3, styles.formTitle]}>Sign Up</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Mobile no</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0123456789"
                            placeholderTextColor={COLORS.text.secondary}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email id</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="example@gmail.com"
                            placeholderTextColor={COLORS.text.secondary}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Must have at least 8 characters"
                            placeholderTextColor={COLORS.text.secondary}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={handleSignUp}
                    >
                        <Text style={[TEXT_STYLES.button, styles.signUpButtonText]}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.loginLink}>Already have an account? Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>Or continue with</Text>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require('../../assets/images/google.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require('../../assets/images/facebook.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
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
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 32,
    },
    title: {
        color: COLORS.text.primary,
        marginBottom: 8,
    },
    subtitle: {
        color: COLORS.text.secondary,
    },
    formContainer: {
        backgroundColor: COLORS.background.secondary,
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formTitle: {
        color: COLORS.text.primary,
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        ...TEXT_STYLES.body2,
        color: COLORS.text.secondary,
        marginBottom: 8,
    },
    input: {
        backgroundColor: COLORS.background.primary,
        borderRadius: 12,
        padding: 12,
        fontSize: SIZES.base,
        color: COLORS.text.primary,
    },
    signUpButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 16,
    },
    signUpButtonText: {
        color: COLORS.text.white,
    },
    loginLink: {
        ...TEXT_STYLES.body2,
        color: COLORS.primary,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 32,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.border.light,
    },
    dividerText: {
        ...TEXT_STYLES.body2,
        color: COLORS.text.secondary,
        marginHorizontal: 16,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: COLORS.background.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    socialIcon: {
        width: 24,
        height: 24,
    },
}); 