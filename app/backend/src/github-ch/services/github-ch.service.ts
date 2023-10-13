import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { configService } from 'src/constants/configService';
import IRepo from 'src/interfaces/github-cg.interfaces';

@Injectable()
export class GithubChService {
  private requireProps(repo: IRepo) {
    return {
      sha: repo.sha,
      commit: repo.commit,
      author: repo.author,
    };
  }

  private async getTree(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }

  async getCommits(): Promise<IRepo[]> {
    const response = await axios.get<IRepo[]>(configService.get('REPO'));

    if (response.data.length > 0) {
      const result: IRepo[] = [];
      for (const history of response.data) {
        const repo: IRepo = this.requireProps(history);
        repo.commit.tree = await this.getTree(repo.commit.tree.url);
        result.push(repo);
      }
      return result;
    }
  }
}
