import React from "react";
import styled from "styled-components";
// import { Button, Grid, Input } from "../elements";
import { signUpDB } from "../redux/modules/user";

const Signup = (props) => {
  const [userid, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const [job, setJob] = React.useState("");
  const [salary, setSalary] = React.useState("");

  const _Signup = () => {
    if (userid === "") {
      alert("please enter your username");

      return;
    }
    if (pwd === "") {
      alert("please enter your password");
      return;
    }
    if (pwd_check === "") {
      alert("please enter your password");
      return;
    }
    if (gender === "") {
      alert("please enter your gender");
      return;
    }
    if (age === "") {
      alert("please enter your age");
      return;
    }
    if (job === "") {
      alert("please enter your job");
      return;
    }
    if (salary === "") {
      alert("please enter your salary");
      return;
    }

    if (pwd !== pwd_check) {
      alert("please check the password one more");
      return;
    }

    signUpDB(userid, pwd, gender, age, job, salary);
  };
  return (
    <Box>
      <H1>Join</H1>

      <Input
        label="username"
        placeholder="please enter your username."
        value={userid}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />

      <Input
        label="password"
        type="password"
        placeholder="please enter your password."
        value={pwd}
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      />

      <Input
        label="password"
        type="password"
        placeholder="please check the password"
        value={pwd_check}
        onChange={(e) => {
          setPwdCheck(e.target.value);
        }}
      />

      <Input
        label="gender"
        placeholder="please enter your jender."
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />

      <Input
        label="age"
        placeholder="please enter your age."
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <Input
        label="job"
        placeholder="please enter your job."
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />

      <Input
        label="salary"
        placeholder="please enter your salary."
        value={salary}
        onChange={(e) => {
          setSalary(e.target.value);
        }}
      />

      <Button text="회원가입하기" onClick={_Signup}>
        Join
      </Button>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: red;
  // width: 500px;
  // margin: auto;
`;

// const Container = styled.div`
//   height: 300px;
//   width: 500px;
//   border: 1xp solid;
//   border-radius: 10px;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const Input = styled.input`
  width: 300px;
  height: 50px;
  margin: 10px 0px;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  margin: 10px 0px;
  border-width: 0px;
  border-radius: 10px;
`;

const H1 = styled.h1`
  font-size: 32px;
`;

export default Signup;
