import { baseUrl, numberOfRepos } from "../variables.js";

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${numberOfRepos}`);
    return await response.json();
}

export { getRepositories }