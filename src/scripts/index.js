import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { getEvents } from "./services/events.js";

import { user } from "./objects/user.js";
import { screen } from "./screen.js";

document.getElementById('btn-search').addEventListener("click", () => {
    let userName = document.getElementById('input-search').value;
    if (validateEmptyInput(userName)) return
    getUserData(userName);
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.key
    const isEnterKeyPressed = key === 'Enter'

    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return
        getUserData(userName);
    }
})

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert("Write a GitHub's username")
        return true
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName);
    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepositories(userName);
    const eventsResponse = await getEvents(userName);

    user.cleanRepositories();
    user.cleanEvents();

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setEvents(eventsResponse);
 
    screen.renderUserData(user);
}