import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, useParams } from "react-router-dom";

import { contentsActions } from "../redux/modules/contents";

const EditAccount = (props) => {
  // const { recordId } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  console.log("params", params);
  const list_index = params.id;
  console.log("list_index", list_index);
  const moneybook_list = useSelector((state) => state.contents.list);
  console.log("moneybook_list", moneybook_list);
  const moneybook_idx = moneybook_list.findIndex(
    (p) => p.id === parseInt(list_index)
  );
  console.log("moneybook_idx", moneybook_idx)
  // const moneybook = moneybook_list[0];
  let moneybook = {}
  for (let i = 0; i < moneybook_list.length; i++) {
    console.log(moneybook_list[i].recordId)
    console.log("list_index", list_index)
    if (moneybook_list[i].recordId == list_index) {
      moneybook = moneybook_list[i];
      
    }
  }
  console.log("moneybook", moneybook);
  // const cost = moneybook.cost
  // console.log(cost)
  

  const [contents, setContents] = React.useState(moneybook.contents);
  const [cost, setCost] = React.useState(moneybook.cost);
  const [category, setCategory] = React.useState(moneybook.category);
  // const [recordId, setRecordId] = React.useState(moneybook.recordId)
  // const [date, setDate] = React.useState(moneybook.date)
  const recordId = moneybook.recordId
  const date = moneybook.date
  console.log('>>>>>>>>>>>',cost)
 

  // const updateAccount = () => {
  //   dispatch(
  //     updateContents({
  //       category: category,
  //       cost,
  //       desc,
  //       title: `${category} ${desc} ${cost}`,
  //     })
  //   );
  //   history.goBack();
  //   console.log(category, cost, desc);
  // };

  const updateDictionary = () => {
    // console.log(updateData);
    console.log('수정',  recordId, date, category, cost, contents)
    dispatch(contentsActions.editContentsAPI(recordId, date, category, cost, contents));
    history.goBack();
  };

  // dispatch(userActions.signUpAPI(username, password, sex, age, job, salary))


  return (
    <React.Fragment>
      <AddWrap>
        <Title>가계부 수정하기 🔍</Title>
        <TextBox>
          <Grid is_flex padding="16px 0">
            <Text>카테고리</Text>
            <select
              style={{ width: "360px", padding: "10px 0", borderRadius: "4px" }}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
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
              type="number"
              width="360px"
              padding="10px 0"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </Grid>
          <Grid is_flex padding="16px 0">
            <Text>내용</Text>
            <Input
              width="360px"
              padding="10px 0"
              value={contents}
              onChange={(e) => {
                setContents(e.target.value);
              }}
            />
          </Grid>
          <Grid is_between>
            <Button
              bg="#f9e000"
              width="140px"
              margin="20px 0 0 0"
              padding="12px 0"
              radius="4px"
              onClick={updateDictionary}
            >
              수정
            </Button>
            <Button
              bg="#f9e000"
              width="140px"
              margin="20px 0 0 0"
              padding="12px 0"
              radius="4px"
              onClick={(e) => {
                dispatch(contentsActions.deleteContentsAPI(list_index));
                console.log("onClickevent", list_index)
                history.replace("/");
              }}
            >
              삭제
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
export default EditAccount;
