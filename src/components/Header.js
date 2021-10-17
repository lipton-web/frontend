import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CreateIcon from "@material-ui/icons/Create";
import { style } from "dom-helpers";


import headLogo from "../shared/headLogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  let history = useHistory();

  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const is_local = localStorage.getItem('token') ? true : false;
  console.log("토큰유무: ", is_local);


  const logout = () => {
    dispatch(userActions.logoutAPI())
    history.replace('/')
  }

  if (is_login & is_local) {
	return (
		<React.Fragment>
      <Container>
        <Div>
          <Logo></Logo>
          <H1>Everyone Money book</H1>
        </Div>

        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
          style={{
            padding: "8px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => {
              history.push("/mypage");
            }}
          >
            마이 페이지
          </Button>
          <Button
            onClick={logout}
          >
            로그아웃
          </Button>
        </ButtonGroup>
      </Container>
    </React.Fragment>
	)
  } else {
    return (
      <React.Fragment>
        <Container>
          <Div>
            <Logo></Logo>
            <H1>Everyone Money book</H1>
          </Div>

          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
            style={{
              padding: "8px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </Button>
            <Button
              onClick={() => {
                history.push("/signup");
              }}
            >
              회원가입
            </Button>
          </ButtonGroup>
        </Container>
      </React.Fragment>
    );
  }
};

export default Header;

const Container = styled.div`
  padding: 10px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Div = styled.div`
  display: flex;
`;

const H1 = styled.h1``;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-image: url("https://static.vecteezy.com/system/resources/previews/002/265/634/non_2x/payment-calendar-payday-icon-vector.jpg");
  /* background-position: center center; */
  background-repeat: no-repeat;
  background-size: cover;
`;

// https://static.vecteezy.com/system/resources/previews/002/265/634/non_2x/payment-calendar-payday-icon-vector.jpg

