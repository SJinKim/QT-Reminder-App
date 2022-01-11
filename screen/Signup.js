import React, { useState, useContext } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Formik } from 'formik'
import { Octicons, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import RNPickerSelect from 'react-native-picker-select'

import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import firebase from 'firebase'

//logo
import hanmaumLogo from '../assets/hanmaum-logo.png'
import { StatusBar } from 'expo-status-bar'

//DropdownMenu
import { churches, cells } from '../components/DropdownMenus'

//authcontext
import { AuthContext } from '../context'

//styles
import {
  Container,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFormArea,
  StyledInputLabel,
  LeftIcon,
  RightIcon,
  StyledTextInput,
  StyledButton,
  ButtonText,
  Colors,
  MessageBox,
  StyledView,
  StyledDropdownContainer,
} from '../appStyles/appStyles'

//Colors
const { brand, darkLight } = Colors

const TextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isChurch,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        {isChurch ? (
          <FontAwesome5 name={icon} size={30} color={brand} />
        ) : (
          <Octicons name={icon} size={30} color={brand} />
        )}
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

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true)

  //authcontext
  const { signUp } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [church, setChurch] = useState('')
  const [cell, setCell] = useState('')

  const navigation = useNavigation()

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            email,
            church,
            cell,
            password,
          })
        console.log('user added')
        //signup
        signUp()
        navigation.push('Main')
      })
      .catch((error) => alert(error.message))
  }

  return (
    <Container>
      <InnerContainer>
        <PageLogo source={hanmaumLogo} resizeMode='contain' />
        <PageTitle>Sign Up</PageTitle>

        <Formik
          initialValues={{ email: '', password: '', church: '', cell: '' }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ handleBlur }) => (
            <StyledFormArea>
              <TextInput
                label='Email Address'
                icon='mail'
                placeholder='email'
                placeholderTextColor={darkLight}
                onBlur={handleBlur('email')}
                keyboardType='email-address'
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                label='Password'
                icon='lock'
                placeholder='password'
                placeholderTextColor={darkLight}
                onBlur={handleBlur('password')}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <View>
                <LeftIcon>
                  <FontAwesome5 name='church' size={28} color={brand} />
                </LeftIcon>
                <StyledInputLabel>Church</StyledInputLabel>
                <StyledView>
                  <StyledDropdownContainer>
                    <RNPickerSelect
                      onValueChange={(value) => setChurch(value)}
                      items={churches}
                      placeholderTextColor={darkLight}
                      value={church}
                    />
                  </StyledDropdownContainer>
                </StyledView>
              </View>
              <View>
                <LeftIcon>
                  <FontAwesome5 name='link' size={28} color={brand} />
                </LeftIcon>
                <StyledInputLabel>Cell</StyledInputLabel>
                <StyledView>
                  <StyledDropdownContainer>
                    <RNPickerSelect
                      onValueChange={(value) => setCell(value)}
                      items={cells}
                      placeholderTextColor={darkLight}
                      value={cell}
                    />
                  </StyledDropdownContainer>
                </StyledView>
              </View>
              <MessageBox></MessageBox>
              <StyledButton onPress={handleSignup}>
                <ButtonText>Sign Up</ButtonText>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </Container>
  )
}

export default Signup
