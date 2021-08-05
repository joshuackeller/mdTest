import React from 'react'
import { Link } from 'gatsby'
import sidebarData from '../content/files.yml'
import styled from 'styled-components'
import Section from './section'

export default function Sidebar ({lvar}) {
    
    return(
        <div>
            {sidebarData.navigation.map((section) => {
                return(
                    <div>
                    <SectionTitle>{section.section}</SectionTitle>
                    {section.links.map((links) => {
                        return(
                            <SectionDiv >
                                <Section links={links} lvar={lvar}/>
                            </SectionDiv>
                        )
                    })}
                    </div>
                )
                
            }
            )}
        </div>
    )
}

const SectionDiv = styled.div`
    margin-bottom: 6px;
`

const SectionTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #585454;
    margin: 25px 0px 10px 0px;
`



