import React, { useState, useEffect } from 'react'
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native'
import { Formik } from 'formik'
import { Octicons, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import DropdownSelect from '../components/DropdownSelect'

import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import firebase from 'firebase'

//logo
import hanmaumLogo from '../assets/hanmaum-logo.png'
import { StatusBar } from 'expo-status-bar'

//DropdownMenu
import { churches, belong } from '../components/DropdownMenus'

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

const DropdownMenu = ({ isChurch, label, icon, menuSelect }) => {
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
      <StyledView>
        <StyledDropdownContainer>
          <DropdownSelect menuSelect={menuSelect} />
        </StyledDropdownContainer>
      </StyledView>
    </View>
  )
}

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [church, setChurch] = useState('')
  const [cell, setCell] = useState('')

  const navigation = useNavigation()

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            email,
            church,
            cell
          })
        console.log("user added")
        navigation.replace("Home")
      })
      .catch(error => alert(error.message))

    
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageLogo source={hanmaumLogo} resizeMode='contain' />
          <PageTitle>Sign Up</PageTitle>

          <Formik
            initialValues={{email: '', password: '', church: '', cell: '' }}
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
                <DropdownMenu
                  isChurch={true}
                  label='교회'
                  icon='church'
                  menuSelect={churches}
                  placeholderTextColor={darkLight}
                  onBlur={handleBlur('church')}
                  //value={values.church}
                  keyboardType='email-address'
                  //onChangeText={handleChange('church')}
                  value={church}
                  onChangeText={text => setChurch(text)}
                ></DropdownMenu>
                <DropdownMenu
                  isChurch={false}
                  label='순'
                  icon='link'
                  menuSelect={belong}
                  placeholderTextColor={darkLight}
                  //value={values.church}
                  keyboardType='email-address'
                  //onChangeText={handleChange('church')}
                  value={cell}
                  onValueChange={value => setCell(value)}
                ></DropdownMenu>
                <MessageBox></MessageBox>
                <StyledButton onPress={handleSignup}>
                  <ButtonText>Sign Up</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </Container>
    </SafeAreaView>
  )
}

export default Signup
