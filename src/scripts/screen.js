const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUserData(user) {
        this.userProfile.innerHTML = `<div class='info'>
                                            <img src=${user.avatarUrl} alt="User's profile picture" />
                                            <div class='data'>
                                                <h1><a href='${user.profileUrl}' target='_blank'>${user.name ?? 'Does not have a profile name!</a></h1>'}
                                                <p>${user.bio ?? 'Does not have a profile bio!</p>'}
                                            </div>
                                        </div>`;
        this.userProfile.innerHTML += `<div class="repositories">
                                            <h2>Repositories</h2>
                                            <ul>${user.repositories}</ul>
                                         </div>`
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<div class='info'>
                                        <h3>User not found!</h3>
                                    </div>`
    }
}

export { screen }