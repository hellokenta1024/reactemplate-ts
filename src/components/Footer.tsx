import React from "react";
import styled from "styled-components";
import media from "../utils/media";

const Container = styled.footer`
  display: flex;
  justify-content:center;
  background-color: ${({ theme: { palette } }) => palette.grey[100]};
  padding: ${({ theme: { spacing } }) => spacing(6)}px ${({ theme: { spacing } }) => spacing(2)}px;
`;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
`

const Navigation = styled.nav`
  margin-bottom: 80px;
  display: flex;
  ${media.sp`
    flex-wrap: wrap;
  `}
`;

const LinkContainer = styled.li`
  a {
    font-size: ${(props) => props.theme.typography.pxToRem(14)};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AllRightsReserved = styled.div`
  font-size: 1.2rem;
  color: ${({ theme: { palette } }) => palette.grey[500]};
  padding: ${({ theme: { spacing } }) => spacing(3)}px 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <Inner>
        <Navigation>
          <section>
            <h2>Section</h2>
            <ul>
              <LinkContainer>
                <a href="#">link</a>
              </LinkContainer>
              <LinkContainer>
                <a href="#">link</a>
              </LinkContainer>
            </ul>
          </section>
        </Navigation>
        <AllRightsReserved>
          © Your Organization All Rights Reserved.
        </AllRightsReserved>
      </Inner>
    </Container>
  );
};

export default Footer;
