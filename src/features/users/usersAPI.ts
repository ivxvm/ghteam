const API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const lookupByUsername = (username: string) => fetch(`https://api.github.com/users/${username}`, {
    headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${API_TOKEN}`,
    }
});
