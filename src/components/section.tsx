import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useState } from 'react'

export default function Section ({links, lvar}) {
    console.log(lvar)
    const [isOpen, setIsOpen] = useState(lvar == links.link || (links.subsection && links.subsection.some((sublink) => sublink.sublink == lvar)))

    const changeOpen = () => setIsOpen(!isOpen)
    
    return(
        <div>
            {!links.subsection && 
                <ItemLink to={links.link} activeStyle={{color: '#296A8C', fontWeight: 'bold'}}>{links.name}</ItemLink>
            }
            {links.subsection && 
            <div>
                <Item onClick={changeOpen}>
                <svg style={{transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'}}
                    viewBox="0 0 926.23699 573.74994"
                    version="1.1"
                    x="0px"
                    y="0px"
                    width='9'
                    height='9'>
                    <g transform="translate(904.92214,-879.1482)">
                    <path
                        d={`
                        m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
                        -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
                        0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
                        -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
                        -174.68583 0.6895,0 26.281,25.03215 56.8701,
                        55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
                        -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
                        -104.0616 -231.873,-231.248 z
                        `}
                        fill="currentColor"
                    />
                    </g>
                </svg><span> </span>
                    {links.name} Section</Item>
                {isOpen && links.subsection.map((sublink) => {
                    return(
                        <div style={{marginTop: '3px'}}>
                            <SubitemLink to={sublink.sublink} activeStyle={{color: '#296A8C', fontWeight: 'bold'}}>{sublink.subname}</SubitemLink>
                        </div>
                    )
                })

                }
            </div>
            }
        </div>
    )
}

const ItemLink = styled(Link)`
    font-size: 14px;
    color: #585454;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        color: #296A8C;
        font-weight: bold;
        text-decoration: underline;
    }
`
const Item = styled.div`
    font-size: 14px;
    color: #585454;
    text-decoration: none;
`

const SubitemLink = styled(Link)`
    font-size: 14px;
    color: #585454;
    margin: 4px 0px 4px 10px;
    text-decoration: none;

    &:hover {
        color: #296A8C;
        font-weight: bold;
        text-decoration: underline;
    }
`