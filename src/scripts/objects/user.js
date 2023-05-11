let user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    profileUrl: '',
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.profileUrl = gitHubUser.html_url;
    },
    setRepositories(repositories) {
        repositories.forEach(repo => {
            this.repositories += `<li><a href='${repo.html_url}' target="_blank">${repo.name}</a></li>`
        })
    }
}

export { user }