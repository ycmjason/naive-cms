import apiService from '@/services/api.service';
import Page from '@/models/Page';

const DUMMY = [
  {
    id: 0,
    order: 0,
    name: 'home',
    component: 'Article',
  },
].map(o => new Page(o));

export class PagesService{
  async findAll(){
    return await Promise.resolve(DUMMY);
  }
}

export default new PagesService();
