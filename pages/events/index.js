import EventList from "@/components/events/event-list"
import EventsSearch from "@/components/events/events-search"
import { getAllEvents } from "@/helpers/api-util"
import Head from "next/head"
// import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/router"

const AllEventsPage = (props) => {
  // const events = getAllEvents()
  const router = useRouter()
  // console.log(events)
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <section>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve..." />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </section>
  )


}


export const getStaticProps = async () => {
  const events = await getAllEvents()

  return {
    props : {
      events: events
    },
    revalidate: 60
  }
}

export default AllEventsPage