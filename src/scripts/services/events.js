import { baseUrl, numberOfEvents } from '../src/scripts/variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${numberOfEvents}`)
    const responseJson = await response.json();
    const responseFiltered = responseJson.filter((event) => event.type === "CreateEvent" || event.type === "PushEvent")
    console.log('events are:', responseFiltered)
    return responseFiltered
}

export { getEvents }