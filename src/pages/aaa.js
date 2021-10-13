import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createContents } from "../redux/modules/contents";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";

import DatePicker from "react-datepicker";
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/material_orange.css";
import { useHistory } from "react-router";


// import { useForm } from 'react-hook-form';

const AddAccount = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const date_Ref = React.useRef(null);
  // const category_Ref = React.useRef(null);
  // const cost_Ref = React.useRef(null);
  // const desc_Ref = React.useRef(null);

  // const addContentsList = () => {
  //   // 스프레드 문법! 기억하고 계신가요? :) 
  //   // 원본 배열 list에 새로운 요소를 추가해주었습니다.
  //   // setList([...list, text.current.value]);
  //   dispatch(createContents(date_Ref.current.value, category_Ref.current.value));
  // }

  // console.log(cost_Ref.current.value);

  const date = new Date().toUTCString();

  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [desc, setDesc] = useState("");

//   const recordAccount = () => {
//     console.log(startDate, category, cost, desc)
//   }

  const recordAccount = () => {
    dispatch(createContents({date: startDate, category: category, cost, desc, title: `${category} ${desc} ${cost}`}));
    history.goBack();
    console.log(startDate, category, cost, desc)
  }

  // const recordAccount = () => {
  //   dispatch(createContents({
  //     date: date_Ref.current.flatpickr.selectedDates[0].toUTCString(),
  //     category: category_Ref.current.value,
  //     cost: cost_Ref.current.value,
  //     desc: desc_Ref.current.value
  //   }))
    
  // }

     // const recordData = {
    //   date: dateRef.current.flatpickr.selectedDates[0].toUTCString(),
    //   category: categoryRef.current.value,
    //   cost: costRef.current.value,
    //   desc: descRef.current.value
    // }
  

  return (
    <React.Fragment>
      <AddWrap>
        <Title>가계부 작성하기 💸</Title>
        <TextBox>
          <Grid is_flex>
            <Text>일시</Text>
            <Flatpickr 
              ref={date_Ref}
              data-enable-time
              value={date}
              onChange={(date) => {
                setStartDate(date);
              }}
            />
          </Grid>
          <Grid is_flex padding="16px 0">
            <Text>카테고리</Text>
            <select style={{ width: "360px", padding: "10px 0" }} onChange={e => {setCategory(e.target.value)}}>
              <option value="카테고리">카테고리</option>
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
              onChange={e => {setCost(e.target.value)}}
            />
          </Grid>
          <Grid is_flex padding="16px 0">
            <Text>내용</Text>
            <Input 
              width="360px" 
              padding="10px 0"
              onChange={e => {setDesc(e.target.value)}}
            />
          </Grid>
          <Grid>
            <Button
              width="160px"
              margin="20px 0 0 0"
              padding="12px 0"
              radius="4px"
              onClick={recordAccount}
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
