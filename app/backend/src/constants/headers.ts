import { configService } from './configService';

const HEADERS = {
  headers: {
    Authorization: `Bearer ${configService.get('GH')}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
};

export default HEADERS;
