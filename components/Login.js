import React from 'react'
import { Formik } from 'formik'
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
} from '../appStyles/appStyles'

const Login = () => {
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
        ></Formik>
      </InnerContainer>
    </Container>
  )
}

export default Login
