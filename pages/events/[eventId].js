// import Button from '@/ui/button'
import EventContent from '@/components/event-detail/event-content'
import EventLogistics from '@/components/event-detail/event-logistics'
import EventSummary from '@/components/event-detail/event-summary'
import { getFeaturedEvents } from '@/dummy-data'
import { getAllEvents, getEventById } from '@/helpers/api-util'
import React, { Fragment } from 'react'

const EventDetailPage = (props) => {
    
    const event = props.selectedEvent
    // console.log(router.query)

    if (!event) {
        return (
        <div>
        <p className='center'>Loading...</p>
        </div>
        )
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export const getStaticProps = async (context) => {
    const { params } = context

    const eventId = params.eventId

    const event = await getEventById(eventId)

    return {
        props : {
            selectedEvent: event
        },
        revalidate: 30 
    }

}

export const getStaticPaths = async () => {
    const events = await getFeaturedEvents()

    const paths = events.map((event) => ({ params: {eventId: event.id}}))

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export default EventDetailPage