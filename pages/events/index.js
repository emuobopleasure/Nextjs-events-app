import EventList from "@/components/events/event-list"
import EventsSearch from "@/components/events/events-search"
import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/router"

const AllEventsPage = () => {
    const events = getAllEvents()
    const router = useRouter()
    // console.log(events)
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
  return (
    <section>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events} />
    </section>
  )
}

export default AllEventsPage