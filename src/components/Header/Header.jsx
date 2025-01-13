import {
  ButtonHeader,
  ActiveButtonHeader,
  HeaderList,
  HeaderListAyth,
  HeaderListAythButtonLogin,
  HeaderListAythButtonRegiste,
  HeaderListItem,
  HeaderWraper,
  ButtonHeaderWraper,
  HeaderWraperSection,
  Logo,
} from "./Header.styled";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/container.styled";
import { ReactComponent as LogoIcon } from "../../img/logo.svg";

const Header = ({ headerStyles }) => {


  return (
    <HeaderWraperSection style={{ backgroundColor: headerStyles.backgroundColorHeader }}>
      <Container>
        <HeaderWraper>
          <Logo style={{ color: headerStyles.colorlogoText }}>
            <LogoIcon style={{ fill: headerStyles.colorlogo }} />
            E-Pharmacy
          </Logo>
          <HeaderList>
            <HeaderListItem>
              <NavLink to="/" end>
                {({ isActive }) =>
                  isActive ? (
                    <ButtonHeaderWraper>
                      <ActiveButtonHeader>Home</ActiveButtonHeader>
                    </ButtonHeaderWraper>
                  ) : (
                    <ButtonHeaderWraper>
                      <ButtonHeader>Home</ButtonHeader>
                    </ButtonHeaderWraper>
                  )
                }
              </NavLink>
            </HeaderListItem>
            <HeaderListItem>
              <NavLink to="/Store">
                {({ isActive }) =>
                  isActive ? (
                    <ButtonHeaderWraper>
                      <ActiveButtonHeader>Medicine store</ActiveButtonHeader>
                    </ButtonHeaderWraper>
                  ) : (
                    <ButtonHeaderWraper>
                      <ButtonHeader>Medicine store</ButtonHeader>
                    </ButtonHeaderWraper>
                  )
                }
              </NavLink>
            </HeaderListItem>
            <HeaderListItem>
              <NavLink to="/Medicine">
                {({ isActive }) =>
                  isActive ? (
                    <ButtonHeaderWraper>
                      <ActiveButtonHeader>Medicine</ActiveButtonHeader>
                    </ButtonHeaderWraper>
                  ) : (
                    <ButtonHeaderWraper>
                      <ButtonHeader>Medicine</ButtonHeader>
                    </ButtonHeaderWraper>
                  )
                }
              </NavLink>
            </HeaderListItem>
          </HeaderList>

          <HeaderListAyth>
            <li>
              <HeaderListAythButtonRegiste style={{ color: headerStyles.colorlogo }}>
                Register
              </HeaderListAythButtonRegiste>
            </li>
            <li>
              <HeaderListAythButtonLogin style={{ color: headerStyles.colorlogo }}>Login</HeaderListAythButtonLogin>
            </li>
          </HeaderListAyth>
        </HeaderWraper>
      </Container>
    </HeaderWraperSection>
  );
};

export default Header;
