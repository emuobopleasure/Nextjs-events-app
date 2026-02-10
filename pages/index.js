import EventList from "@/components/events/event-list"
import { getFeaturedEvents } from "@/helpers/api-util"

const HomePage = (props) => {


  console.log(props.events)
  return (
    <div>
      <h1>
        HomePage
      </h1>
      <EventList items={props.events} />      
    </div>
  )
}


export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents()

  return {
    props : {
      events: featuredEvents
    },
    revalidate: 1800
  }
}



export default HomePage