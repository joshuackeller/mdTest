import * as React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'


export default function Layout ({pageName, children}) {
  return (
    <Body>
        <title>{pageName}</title>
        <Link to="/" style={{textDecoration: 'none'}}><Header>The Website</Header></Link>
        {children}
    </Body>
  )
}

const Header = styled.div`  
    font-size: 40px;
    font-weight: bold;
    font-family: Arial, Verdana, Helvetica;
    color: gray;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    text-decoration: none;
    underline: none;
`

const Body = styled.div`
    margin: auto;
    max-width: 800px;
    font-family: Arial, Verdana, Helvetica;
`

const PageName = styled.div`
    font-size: 32px;
`

const ContentContainer = styled.div`
`

const ContentWrapper = styled.div`
  display: flex;
`

const SidebarContainer = styled.div`
  width: 20%;
`

const BodyContainer = styled.div`
  width: 80%
`