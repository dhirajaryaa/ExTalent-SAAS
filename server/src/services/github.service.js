import axios from "axios";

const api = "https://api.github.com/graphql";
const githubInfoExtractor = async (token) => {
  const query = `{
  viewer {
    # 1. User basic profile info
    login
    name
    bio
    company
    location
    email
    url
    avatarUrl

    followers {
      totalCount
    }
    following {
      totalCount
    }

    sponsorshipsAsMaintainer(first: 10) {
      totalCount
    }
    sponsorshipsAsSponsor(first: 10) {
      totalCount
    }

    contributionsCollection {
      totalCommitContributions
      totalIssueContributions
      totalPullRequestContributions
      totalRepositoryContributions
    }

    # 2. User repositories (recently updated)
    repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        name
        description
        url
        primaryLanguage {
          name
        }
        languages(first: 5) {
          nodes {
            name
          }
        }
        stargazerCount
        forkCount
        createdAt
        updatedAt
        pushedAt
        isFork

        refs(refPrefix: "refs/heads/") {
          totalCount
        }
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    }

    # 3. Pinned repositories
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
              }
            }
          }
          refs(refPrefix: "refs/heads/") {
            totalCount
          }
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
  try {
    const response = await axios.post(
      api,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    //   log error
    if (response.data.errors) {
      console.error("GraphQL Errors:", response.data.errors);
    }
    return response.data.data;
  } catch (error) {}
  console.error(error);
};

export default githubInfoExtractor;
