import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GameContext } from "./GameShop";
import games from "./db/Data";
import Item from "antd/es/list/Item";

const Container = styled.div`
  position: relative;
`;
const Card = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  border: 1px solid dodgerblue;
  margin: 10px 0;
  position: relative;
  background-color: khaki;
`;
const Img = styled.img`
  height: calc(100%-2);
  margin: 1px;
`;
const Text = styled.p`
  margin-left: 10px;
  font-size: 0.5rem;
`;
const DeleteBtn = styled.button`
  width: 30px;
  height: 100%;
  background-color: aquamarine;
  position: absolute;
  right: 0;
  text-align: center;
  line-height: 100px;
  border: none;
  cursor: pointer;
`;

export function Other() {
  const { checkList, setCheckList } = useContext(GameContext);
  const [totalPrice, setTotalprice] = useState(0);
  const newList = games.filter((g, i) => checkList[i].checked);
  console.log(newList);
  function onClick(e) {
    const temp = checkList.map((item) => {
      if (item.id == e.target.id) {
        return { ...item, checked: false };
      } else {
        return item;
      }
    });
    setCheckList(temp);
  }
  useEffect(() => {
    let price = 0;
    for (let i = 0; i < newList.length; i++) {
      price = price + newList[i].price;
    }
    setTotalprice(price);
  }, [checkList]);

  return (
    <>
      <Container>
        {newList.map((game) => (
          <Card key={games.id}>
            <Img src={game.image} />
            <div>
              <Text>타이틀:{games.title}</Text>
              <Text>장르 : {games.genre}</Text>
              <Text>가격 : {games.price}원</Text>
            </div>
            <DeleteBtn id={game.id} onClick={onClick}>
              X
            </DeleteBtn>
          </Card>
        ))}
      </Container>
      <h3>총결제금액 : {totalPrice} 원</h3>
    </>
  );
}
