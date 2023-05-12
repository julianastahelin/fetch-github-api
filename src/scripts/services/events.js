import { baseUrl, numberOfEvents } from '../variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${numberOfEvents}`)
    const responseJson = await response.json();
    const responseFiltered = responseJson.filter((event) => event.type === "CreateEvent" || event.type === "PushEvent")
    return responseFiltered;
}

export { getEvents }