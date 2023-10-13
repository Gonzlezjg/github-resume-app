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

interface IRepo {
  sha: string;
  commit: Commit;
  author: User;
}

export default IRepo;
