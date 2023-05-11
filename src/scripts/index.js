import { getUser } from "/src/scripts/services/user.js";
import { getRepositories } from "/src/scripts/services/repositories.js";

import { user } from "/src/scripts/objects/user.js";
import { screen } from "/src/scripts/screen.js";

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
    console.log(userResponse)
    const repositoriesResponse = await getRepositories(userName);
    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);

    screen.renderUserData(user);
}