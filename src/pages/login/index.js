import React, { useState } from "react";
import styled from "styled-components";
import jwt from "jsonwebtoken";
import { setCookie } from "component/Cookie";

import Phone from "assets/phone.png";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const jwt_key = process.env.REACT_APP_JWT_KEY || "";

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "id") setId(value);
    if (name === "password") setPassword(value);
  };

  function _onClick() {
    if (id === "study0610@naver.com" && password === "password") {
      // console.log("로그인 성공");
      const token = jwt.sign(
        {
          id: "study0610@naver.com",
          name: "백승엽",
          age: 30,
          phone: "010 - 8610 - 2654",
        },
        jwt_key
      );

      setCookie("jwt_token", token, 30);

      // window.location.href = "/main";
    } else {
      // console.log("로그인 실패");
      setPassword("");
    }
  }

  return (
    <Container>
      <BlockAlign>
        <Block>
          <Img src={Phone} />
        </Block>
        <Block>
          <LoginContainer>
            <AuthContainer>
              <Title>instagram</Title>
              <Input
                placeholder="id입력"
                name="id"
                value={id}
                onChange={handleInput}
              ></Input>
              <Input
                placeholder="비번입력"
                name="password"
                type="password"
                value={password}
                onChange={handleInput}
              ></Input>
              <Button onClick={_onClick}>로그인</Button>
            </AuthContainer>
          </LoginContainer>
        </Block>
      </BlockAlign>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 85vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlockAlign = styled.div`
  width: 100%;
  max-width: 800px;
  height: 85%;

  display: flex;
`;

const Block = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0px 10px;
  :nth-child(2) {
    justify-content: flex-start;
  }
`;

const LoginContainer = styled.div`
  width: 80%;
  max-width: 400px;
  height: 90%;

  border: 1px solid red;

  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  height: 90%;
`;

const AuthContainer = styled.div`
  border: 1px solid gray;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 30px 0px 30px 0px;
`;

const Input = styled.input`
  width: 80%;
  height: 2rem;
  padding: 0 7px;
  border: none;
  box-sizing: border-box;

  background-color: rgba(200, 200, 200);
  margin-bottom: 8px;
`;

const Button = styled.button`
  width: 80%;
  padding: 0;
  border: none;
  height: 1.75rem;
`;
