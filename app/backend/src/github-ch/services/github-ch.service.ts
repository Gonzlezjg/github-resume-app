import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { configService } from 'src/constants/configService';
import HEADERS from 'src/constants/headers';
import { ICommits, IProject } from 'src/interfaces/github-cg.interfaces';

@Injectable()
export class GithubChService {
  private requireProps(repo: ICommits) {
    return {
      sha: repo.sha,
      commit: repo.commit,
      author: repo.author,
    };
  }

  private requireRepoProps(repo: IProject) {
    return {
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      language: repo.language,
      visibility: repo.visibility,
      languages_url: repo.languages_url,
      owner: { avatar_url: repo.owner.avatar_url },
    };
  }

  private async getTree(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }

  private async getLang(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }

  async getCommits(): Promise<ICommits[]> {
    const response = await axios.get<ICommits[]>(
      configService.get('COMMITS_HISTORY_REPO'),
      HEADERS,
    );

    if (response.data.length > 0) {
      const result: ICommits[] = [];
      for (const history of response.data) {
        const repo: ICommits = this.requireProps(history);
        repo.commit.tree = await this.getTree(repo.commit.tree.url);
        result.push(repo);
      }
      return result;
    }
  }

  async getRepos(name: string): Promise<IProject> {
    const response = await axios.get<IProject[]>(
      configService.get('REPO'),
      HEADERS,
    );

    if (response.data.length > 0) {
      const repository = response.data.find((data) => data.name === name);

      repository.language = await this.getLang(repository.languages_url);

      return this.requireRepoProps(repository);
    }
  }
}
