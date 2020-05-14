module.exports = async (req, res) => {
    res.send(`
    You need to provide repo name with request params in url :)<br>
    Example: <a href="https://issue-tracker-rss.now.sh/mattermost/mattermost-server?labels=Help%20Wanted,Tech%2FGo">https://issue-tracker-rss.now.sh/mattermost/mattermost-server?labels=Help%20Wanted,Tech%2FGo</a>
    `)
}
