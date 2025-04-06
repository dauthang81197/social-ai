import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS, TEXT_STYLES, SIZES } from '../../constants/Typography';
import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/slices/authSlice';

export default function Login() {
    const [email, setEmail] = useState('Aiyana.Kemmer19@hotmail.com');
    const [password, setPassword] = useState('Admin@123');
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleSignUp = () => {
        router.push('/(auth)/signup');
    };

    const handleLogin = useCallback(() => {
        console.log('email', email);
        dispatch(login({ email, password }));
    }, [dispatch, email, password]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={[TEXT_STYLES.h2, styles.title]}>Hello Again!</Text>
                    <Text style={[TEXT_STYLES.body2, styles.subtitle]}>Welcome back to our app</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text style={[TEXT_STYLES.h3, styles.formTitle]}>Login</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email id</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="example@gmail.com"
                            placeholderTextColor={COLORS.text.secondary}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Must have at least 8 characters"
                            placeholderTextColor={COLORS.text.secondary}
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleLogin}
                    >
                        <Text style={[TEXT_STYLES.button, styles.loginButtonText]}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.signUpLink}>Don't have account? Sign up</Text>
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
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 8,
    },
    forgotPasswordText: {
        ...TEXT_STYLES.body2,
        color: COLORS.text.secondary,
    },
    loginButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 16,
    },
    loginButtonText: {
        color: COLORS.text.white,
    },
    signUpLink: {
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