import styled from "styled-components";

const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 200px;
  background-color: ${(props) => props.bgcolor};
  box-shadow: 1px 2px 5px gray;
  padding: 10px;
  margin-bottom: 20px;
`;

const Bold = styled.p`
  font-weight: 700;
  font-size: 3rem;
  background: linear-gradient(
    to right,
    #f00 10%,
    #00f 15%,
    #0f0 35%,
    #f0f 50%,
    #0ff 60%,
    #ff5800 75%,
    #f05 87%,
    #ff7fd3 95%,
    #326d18 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 30px;
  background: linear-gradient(to right bottom, #f00, #00f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Word = styled.p`
  font-weight: 700;
  font-size: 30px;
  font-size: 30px;
  background: linear-gradient(to right top, #861657, #ffa69e);
  color: transparent;
  -webkit-background-clip: text;
`;

export function Avatar({ bgcolor, person: { name, job, country } }) {
  return (
    <>
      <StyledDiv bgcolor={bgcolor}>
        <StyledDiv>
          <Bold>{name}</Bold>
          <Text>Job : {job}</Text>
          <Word>Country : {country}</Word>
          <hr />
        </StyledDiv>
      </StyledDiv>
    </>
  );
}
