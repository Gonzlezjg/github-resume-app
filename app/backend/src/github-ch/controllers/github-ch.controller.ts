import { Controller, Get } from '@nestjs/common';
import { GithubChService } from '../services/github-ch.service';

@Controller('github-ch')
export class GithubChController {
  constructor(private readonly githubChService: GithubChService) {}

  @Get()
  async getCommits() {
    const commits = await this.githubChService.getCommits();
    return commits;
  }
}
