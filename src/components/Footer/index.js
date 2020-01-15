import React from 'react';
import {
  Row,
  Column,
  Heading,
  Link,
  themeColor,
  themeSpacing,
} from '@datapunt/asc-ui';
import styled from 'styled-components';

const Disclaimer = styled.div`
  background-color: ${themeColor('tint', 'level5')};
  padding-top: 28px;
  padding-bottom: 28px;

  * {
    color: ${themeColor('bright', 'main')};
  }
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-family: Avenir Next LT W01 Demi, arial, sans-serif;

  span {
    align-self: center;
  }
`;

const Privacy = styled.div`
  background: ${themeColor('bright', 'main')};
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 ${themeSpacing(3)} 0;
`;

const StyledText = styled.span`
  font-size: 16px;
  line-height: 22px;
`;

const FooterWrapper = styled.div`
  & {
    display: flex;
    flex-direction: column;
    flex: 0 1 auto !important;
    padding-bottom: 0 !important;
  }
`;

const Footer = () => (
  <FooterWrapper className="app-container no-print" data-testid="siteFooter">
    <Disclaimer>
      <Row>
        <Column span={12}>
          <StyledHeading as="h4">Lukt het niet om een melding te doen?</StyledHeading>
        </Column>

        <Column span={12}>
          <StyledText>
            Bel het Gemeentelijk informatienummer: 14 020 <br />
            op werkdagen van 08.00 tot 18.00 uur.
          </StyledText>
        </Column>
      </Row>
    </Disclaimer>

    <Privacy>
      <Row>
        <Column span={12}>
          <StyledLink size={5} href="https://www.amsterdam.nl/privacy/" variant="with-chevron">Privacy</StyledLink>
        </Column>
      </Row>
    </Privacy>
  </FooterWrapper>
);

export default Footer;
