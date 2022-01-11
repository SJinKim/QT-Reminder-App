import React, { useEffect, useState, useContext } from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import { Octicons, Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
//logo
import hanmaumLogo from '../assets/hanmaum-logo.png'

import { StatusBar } from 'expo-status-bar'

//authContext
import { AuthContext } from '../context'

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

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true)

  //authcontext
  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        login()
        navigation.push('Home')
      }
    })
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
      })
      .catch((error) => alert(error.message))
  }

  return (
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
                onChangeText={(text) => setEmail(text)}
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
                onChangeText={(text) => setPassword(text)}
              />
              <StyledButton style={{ marginTop: 30 }} onPress={handleLogin}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line />
              <StyledButton onPress={() => navigation.navigate('Signup')}>
                <ButtonText>Sign Up</ButtonText>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </Container>
  )
}

export default Login
