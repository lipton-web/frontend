import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";

const AddAccount = () => { 

  return (
    <React.Fragment>
      <AddWrap>
      </AddWrap>
    </React.Fragment>
  );
};
const AddWrap = styled.div`
  margin: 100px 10vh;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const TextBox = styled.div`
  width: 450px;
  margin: 50px auto 0;
`;
export default AddAccount;