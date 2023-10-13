import { Module } from '@nestjs/common';
import { GithubChService } from './services/github-ch.service';
import { GithubChController } from './controllers/github-ch.controller';

@Module({
  controllers: [GithubChController],
  providers: [GithubChService],
})
export class GithubChModule {}
