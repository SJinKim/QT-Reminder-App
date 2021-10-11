import React, { useState } from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import { Octicons, Ionicons } from '@expo/vector-icons'
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
  StartButton,
  ButtonText,
  Colors,
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
                label='Email Adress'
                icon='mail'
                placeholder='a@gmail.com'
                placeholderTextColor={darkLight}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
                onChangeText={handleChange('email')}
              />
              <TextInput
                label='Password'
                icon='lock'
                placeholder='*********'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <StartButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StartButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </Container>
  )
}

export default Login
