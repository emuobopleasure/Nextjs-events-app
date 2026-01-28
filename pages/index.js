import EventList from "@/components/events/event-list"
import { getFeaturedEvents } from "@/dummy-data"

const HomePage = () => {
  const featuredEvents = getFeaturedEvents()
  console.log(featuredEvents)
  return (
    <div>
      <h1>
        HomePage
      </h1>
      <EventList items={featuredEvents} />      
    </div>
  )
}



export default HomePage