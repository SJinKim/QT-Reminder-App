import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import { Octicons, Ionicons } from '@expo/vector-icons'
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'

import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
//logo
import hanmaumLogo from '../assets/hanmaum-logo.png'

import { StatusBar } from 'expo-status-bar'

//styles
import {
  Container,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledInputLabel,
  LeftIcon,
  RightIcon,
  StyledTextInput,
  StyledButton,
  ButtonText,
  Colors,
  MessageBox,
  Line,
} from '../appStyles/appStyles'



//Colors
const { brand, darkLight } = Colors

const TextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  )
}

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        navigation.replace("Home")
      }
    })
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingWrapper>
      <Container>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageLogo source={hanmaumLogo} resizeMode='contain' />
          <PageTitle>Quiet Time</PageTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <TextInput
                  label='Email Address'
                  icon='mail'
                  placeholder='a@gmail.com'
                  placeholderTextColor={darkLight}
                  onBlur={handleBlur('email')}
                  keyboardType='email-address'
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
                <TextInput
                  label='Password'
                  icon='lock'
                  placeholder='*********'
                  placeholderTextColor={darkLight}
                  onBlur={handleBlur('password')}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <MessageBox>...</MessageBox>
                <StyledButton onPress={handleLogin}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line />
                <StyledButton onPress={() =>
                  navigation.navigate("Signup")}>
                    <ButtonText>Sign Up</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </Container>
    </KeyboardAvoidingWrapper>
  )
}

export default Login
