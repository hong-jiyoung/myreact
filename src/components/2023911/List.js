import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  color: pink;
`;

const Photo = styled.img`
  border-radius: 50%;
`;

export function List() {
  const products = [
    { title: "Banana" },
    { title: "Apple" },
    { title: "Watermelon" },
  ];

  const user = {
    name: "Hery Lammarr",
    imageUrl:
      "https://i.imgur.com/xQHAZz4_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    imageSize: 90,
  };

  return (
    <>
      <h1>List Component</h1>
      <p>리액트 연습 코드</p>
      <u1>
        {products.map((p) => (
          <li>{p.title}</li>
        ))}
      </u1>
      <Container>
        <Title>{user.name}</Title>
        <Photo src={user.imageUrl} />
      </Container>
      {/* <wrapper>
        <Title1>
            <content>
            <Img src={}></Img>
            <Img src={}></Img>
            <Img src={}></Img>
            </content>
        </Title1>
      </wrapper> */}
    </>
  );
}
