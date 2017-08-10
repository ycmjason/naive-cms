import apiService from '@/services/api.service';
import Page from '@/models/Page';

const DUMMY = [
  {
    id: 0,
    title: 'Todo list',
    description: 'Make a todo list',
    tags: ['website', 'app'],
    author: { name:  'Jason Yu' },
    upvotes: [{ name: 'Jason Yu' }],
  },
  {
    id: 1,
    title: 'Happy Dragon',
    description: 'Dragon is happy if it can fly.',
    tags: ['website', 'dragon'],
    author: { name:  'Anson Liu' },
    upvotes: [{ name: 'Jason Yu' }, { name: 'Anson Liu' }],
  },
].map(o => new Project(o));

export class PagesService{
  async findAll(){
    return await Promise.resolve(DUMMY);
  }
}

export default new PagesService();
