import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({event,selectEvent,deleteEvent}){
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL}></Item.Image>
                        <Item.Content>
                            <Item.Header content='Event Title'></Item.Header>
                            <Item.Description>
                                Hosted by {event.title}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'></Icon>{event.date}
                    <Icon name='marker'></Icon>{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee=>(
                        <EventListAttendee key={attendee.id} attendee={attendee}/>
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <span>{event.description}</span>
                <Button onClick={()=>deleteEvent(event.id)} color='red' floated='right' content='Delete'></Button>
                <Button onClick={()=>selectEvent(event)} color='teal' floated='right' content='View'></Button>
            </Segment>
        </Segment.Group>
    )
}