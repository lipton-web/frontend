import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import styled from 'styled-components';

import Button from "../elements/Button";
import { useHistory, Link } from "react-router-dom";



const Calendar = (props) => {
  
  return (
    <Container>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        height= "100%"
        expandRows="true"
        locale="ko"
        headerToolbar= {{
          left: 'today',
          center: 'title',
          right: 'prev,next',
        }}
        dayMaxEvents= "true"
        // events={schedule_list}
        // eventClick={updateModal}
      />
      <Link to="/add">
        <AddButton>+</AddButton>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  height: 90%;
  width : 90%;
    a {
      cursor: pointer;
    }
  .fc-col-header-cell {
    background-color: #ced4da;
    color: #fff;
    &.fc-day-sat {
      background-color: #a5d8ff;
    }
    &.fc-day-sun {
      background-color: #ffa8a8;
    }
  }

`
const AddButton = styled.button`
  position: fixed;
  right: 16px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  background-color: #f9e000;
  box-sizing: border-box;
  font-weight: 800;
  font-size: 38px;
  border: none;
  border-radius: 50px;
  color: #212121;
  z-index: 2;
  transition: all 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    cursor: pointer;
  }
`;

export default Calendar
