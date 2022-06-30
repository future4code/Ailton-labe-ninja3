import React from "react";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Infos

} from "./styled.js";

const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "black", 
                   textAlign: "left", 
                   marginTop: "-70px",
                    }}>
        LabeNinjas
      </h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>Serviços</Heading>
            <FooterLink href="#">Assistência Técnica</FooterLink>
            <FooterLink href="#">Aulas</FooterLink>
            <FooterLink href="#">Autos</FooterLink>
            <FooterLink href="#">Tecnologia</FooterLink>
          </Column>
          <Column>
            <Heading>Contate-nos</Heading>
            <FooterLink href="https://www.instagram.com/jardimdomundo/">Larissa</FooterLink>
            <FooterLink href="https://www.instagram.com/joclelsonr/">Joclelson</FooterLink>
            <FooterLink href="https://www.instagram.com/alinedoamaral_/">Aline</FooterLink>
            <FooterLink href="https://www.instagram.com/vinnie_castro/">Vinicius</FooterLink>
            <FooterLink href="https://www.instagram.com/rafael.tj18/">Rafael</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://github.com/future4code/Ailton-labe-ninja3">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  GitHub
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://pt-br.facebook.com/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
          {/* <Column>
            <Heading>Downloads</Heading>
           <Playstore /> 

          </Column> */}
        </Row>
      </Container>
      <Infos>
        ©2022, LabeNinjas Serviços de Internet. CNPJ 12.265.787/0001-00 -
        Address: 7007 Sea World Dr, Orlando, Fl 32821, Estados Unidos.
      </Infos>

    </Box>
  );
};
export default Footer;
