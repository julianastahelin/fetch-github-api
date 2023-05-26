let user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    profileUrl: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.profileUrl = gitHubUser.html_url;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },
    setRepositories(repositories) {
        let reposList = repositories.map(function(repo) {   
            return {
                url: repo.html_url,
                name: repo.name,
                forks: repo.forks_count,
                stars: repo.stargazers_count,
                watchers: repo.watchers_count,
                language: repo.language
            }
        })
        this.repositories = reposList;
    },
    setEvents(events) {
        if (events.length === 0) {
           this.events = 'No recent events'
        }
        events.forEach(event => {
            if (event.type === "CreateEvent") { var eventDescription = event.payload.description ?? 'No description available' }
            if (event.type === "PushEvent") { var eventDescription = event.payload.commits[0].message ?? 'No description available'}
            this.events += `<li><a href='https://github.com/${event.repo.name}' target="_blank">${event.repo.name}</a> - ${eventDescription}</li>`
        })
    },
    cleanRepositories() {
        this.repositories = [];
    },
    cleanEvents() {
        this.events = [];
    }
}

export { user }