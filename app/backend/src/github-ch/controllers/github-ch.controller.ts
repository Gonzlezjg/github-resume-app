import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GithubChService } from '../services/github-ch.service';

@Controller('github-ch')
export class GithubChController {
  constructor(private readonly githubChService: GithubChService) {}

  @Get()
  async getCommits() {
    try {
      const commits = await this.githubChService.getCommits();
      return commits;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':name')
  async getRepos(@Param() params: any) {
    try {
      return await this.githubChService.getRepos(params.name);
    } catch (error) {
      console.log(error);
    }
  }
}
