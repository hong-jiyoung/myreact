import styled from "styled-components";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
  width: 200px;
  height: 100vh;
  background: linear-gradient(to bottom, #79a6d2, #b8d6eb);
  font-size: 2.5rem;
  padding: 50px 10px;
  color: yellow;
  font-weight: bold;
`;
const Li = styled.li`
  list-style-type: none;
  color: inherit;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export function Navbar({ setPage }) {
  return (
    <>
      <Container>
        <ul>
          <Li>
            {/* {to속성에는 route에서 선언한 url 주소를 적어준다.} */}
            <StyledLink to={"/"}>Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/contact"}>Contact</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/about"}>About</StyledLink>
          </Li>
        </ul>
      </Container>
    </>
  );
}
