const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUserData(user) {
        this.userProfile.innerHTML = `  <div class='info'>
                                            <img src=${user.avatarUrl} alt="User's profile picture" />
                                            <div class='data'>
                                                <h1><a href='${user.profileUrl}' target='_blank'>${user.name ?? 'User does not have a profile name'}</a></h1>
                                                <p>${user.bio ?? 'User does not have a profile bio'}</p>
                                                <p><i class="fa-solid fa-user-group"></i> ${user.followers} followers · ${user.following} following</p>
                                            </div>
                                        </div>`;                        
        this.userProfile.innerHTML += `<div class="repositories">
                                            <h2>Repositories</h2>
                                            <ul>
                                                ${user.repositories.map(repo => 
                                                    `<li>
                                                        <a href='${repo.url}' target="_blank">
                                                        ${repo.name}
                                                            <ul class="repo-info">
                                                                <li>🍴${repo.forks}</li>
                                                                <li>⭐${repo.stars}</li>
                                                                <li>👀${repo.watchers}</li>
                                                                <li>🧑🏽‍💻${repo.language ?? 'No language'}</li>
                                                            </ul>
                                                        </a>   
                                                     </li>` 
                                                ).join(' ')}
                                            </ul>
                                        </div>`;
        this.userProfile.innerHTML += ` <div class="events">
                                            <h2>Events</h2>
                                            <ul>${user.events ?? 'No recent events'}</ul>          
                                        </div>`;
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<div class='info'>
                                        <h3>User not found</h3>
                                      </div>`
    }
}

export { screen }
