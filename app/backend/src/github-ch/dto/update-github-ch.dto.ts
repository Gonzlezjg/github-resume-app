import { PartialType } from '@nestjs/mapped-types';
import { CreateGithubChDto } from './create-github-ch.dto';

export class UpdateGithubChDto extends PartialType(CreateGithubChDto) {}
