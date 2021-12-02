import React, {Fragment} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import {useState} from 'react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event){
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen(){
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
    <Navbar setFormOpen={handleCreateFormOpen}/>
    <Container className="main">
    <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} 
     selectEvent={handleSelectEvent} 
     selectedEvent={selectedEvent}/>
    </Container>
    </>
  );
}

export default App;
