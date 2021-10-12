import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import styled from 'styled-components';



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


export default Calendar
