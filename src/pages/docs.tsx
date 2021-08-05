import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Sidebar from "../components/sidebar"

export default function Docs({ data, location }) {

    console.log(location)
  
    const post = data.markdownRemark
  return (
    <Layout pageName="testing">
        <ContentContainer>
            <ContentWrapper>
              <SidebarContainer>
                  <Sidebar lvar={location.pathname}/>
              </SidebarContainer>
              <BodyContainer>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              </BodyContainer>
            </ContentWrapper>
          </ContentContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
    }
  }
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