import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
      /*
      color: ${props => props.primary ? "white" : "palevioletred"};
       we can add some props and cases to our main block (Header)
       */
      font-size: 26px;
      :hover{
        color: cadetblue;
      }
    }
    h2{
      font-size: 1.2rem;
      color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>                              {/*<Header  as='a' href={'Some link'}> can add link prop */}
            <h1>Roman Piven</h1>
            <h2>{allPosts} posts, liked {liked}</h2>
        </Header>
    )
}
export default AppHeader;