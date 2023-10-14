interface User {
  login: string;
  avatar_url: string;
  id: number;
}

interface Commit {
  message: string;
  committer: {
    email: string;
    name: string;
    date: string;
  };
  tree: {
    sha: string;
    url: string;
  };
}

interface ICommits {
  sha: string;
  commit: Commit;
  author: User;
}

interface IProject {
  name: string;
  full_name: string;
  description: string;
  language: Record<string, number>;
  languages_url: string;
  visibility: string;
  owner: {
    avatar_url: string;
  };
}

export { IProject, ICommits };
