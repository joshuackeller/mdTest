import * as React from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'


// markup
const IndexPage = () => {
  return (
    <Layout pageName="Index Page">
      <Link to='/food/apple'>Go to the main pages</Link>
    </Layout>
  )
}

const Header = styled.div`  
  font-size: 32px;
  font-weight: bold;
  font-family: Arial, Verdana, Helvetica;
  width: 500px;
  display: flex;
  justify-content: center;
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`

export default IndexPage
