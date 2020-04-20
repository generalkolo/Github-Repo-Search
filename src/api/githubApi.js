import { formatDate } from '../utils/helpers'

const BASE_URL = 'https://api.github.com'

function getNeededProperties(data) {
  return {
    id: data.id,
    avatar: data.owner.avatar_url,
    name: data.name,
    createdAt: formatDate(data.created_at),
    description: data.description,
    language: data.language ? data.language : 'N/A',
    owner: data.owner.login,
    ownerGithubUrl: data.owner.html_url,
    githubUrl: data.html_url,
    forkCount: data.forks_count,
    starCount: data.stargazers_count,
    watchers: data.watchers_count,
    issues: data.open_issues,
    license: data.license ? data.license.name : 'none',
  }
}

export async function getQueriedRepos(query) {
  const searchQuery = query.replace(/ /g, '+')
  try {
    const result = await fetch(
      `${BASE_URL}/search/repositories?q=${searchQuery}&sort=stars&order='desc'`,
      {
        method: 'GET',
      },
    )
    const repos = await result.json()
    return repos.items.map(getNeededProperties)
  } catch (error) {
    console.log('error', error)
  }
}
