import styled from "styled-components";
import { Avatar } from "./Avatar";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  border: 1px solid black;
  border-radius: 30px;
  background-image: url("https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTNfMTQ1/MDAxNTYzMDIyNzEyMzEy.DvseR14N-KO5egj005BptVHl9ROvCYn3187xmfuz_8Yg.pmShUUYqfep3U994_pMfMlwyOX5uv0vEIEoygziHGDUg.GIF.khses90/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1_%EB%B3%91%EB%A7%9B_%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98_%EC%B2%A0%EC%83%88_%EC%9E%91%EA%B0%80_%EC%96%84%EB%AF%B8%EC%9A%B4_%EB%8A%AC%EC%97%90%EC%8B%9C_2_(22).gif?type=w800");
  background-repeat: no-repeat;
  background-size: 300px;
`;

const persons = [
  { name: "Steve", job: "programmer", country: "대한민국" },
  { name: "Sara", job: "Teacher", country: "Korea" },
  { name: "Minji", job: "Student", country: "Korea" },
  { name: "bob", job: "engineer", country: "korea" },
];

const colors = ["lightgreen", "teal", "lightgrey", "khaki"];

export function AvatarList() {
  return (
    <>
      <StyledDiv>
        {persons.map((p, i) => {
          return <Avatar bgcolor={colors[i]} person={p} />;
        })}
      </StyledDiv>
    </>
  );
}
