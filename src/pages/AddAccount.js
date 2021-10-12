import React, { useState, useRef } from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";

import DatePicker from "react-datepicker";
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/material_orange.css";

const AddAccount = (props) => {
  let dateInfo = React.useRef();
  const date = new Date().toUTCString();

  const [startDate, setStartDate] = useState(new Date());
  const [contents, setContents] = useState("");

  return (
    <React.Fragment>
      <AddWrap>
        <Title>가계부 작성하기 💸</Title>
        <TextBox>
          <Grid is_flex>
            <Text>일시</Text>
            <Flatpickr 
              data-enable-time
              value={date}
              onChange={(date) => {
                setStartDate(date);
              }}
            />
          </Grid>
          <Grid is_flex padding="16px 0">
            <Text>카테고리</Text>
            <select style={{ width: "360px", padding: "10px 0" }}>
              <option value="">카테고리</option>
              <option value="식비">식비</option>
              <option value="교통비">교통비</option>
              <option value="주거비">주거비</option>
              <option value="뷰티 및 패션">뷰티 및 패션</option>
              <option value="취미활동">취미활동</option>
            </select>
          </Grid>
          <Grid is_flex padding="16px 0">
            <Text>지출액</Text>
            <Input
              width="360px"
              padding="10px 0"
              onChange={(e) =>
                console.log(e.target.value)
              }
            />
          </Grid>
          <Grid is_flex padding="16px 0">
            <Text>내용</Text>
            <Input width="360px" padding="10px 0" />
          </Grid>
          <Grid>
            <Button
              width="160px"
              margin="20px 0 0 0"
              padding="12px 0"
              radius="4px"
            >
              기록하기
            </Button>
          </Grid>
        </TextBox>
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
  text-align: center;
`;

const TextBox = styled.div`
  width: 450px;
  margin: 50px auto 0;
`;
export default AddAccount;
