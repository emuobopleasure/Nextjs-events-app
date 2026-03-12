import EventList from "@/components/events/event-list"
import NewsletterRegistration from "@/components/input/newsletter-registration"
import { getFeaturedEvents } from "@/helpers/api-util"
import Head from "next/head"

const HomePage = (props) => {


  console.log(props.events)
  return (
    <div>
      <Head>
        <title>
          Nextjs Events
        </title>
        <meta name="description" content="Find a lot of great events that allow you to evolve..." />
      </Head>
      <h1>
        HomePage
      </h1>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  )
}


export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}



export default HomePage