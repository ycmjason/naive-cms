import apiService from '@/services/api.service';
import Page from '@/models/Page';

const DUMMY = [
  {
    id: 0,
    order: 1,
    name: 'page 1',
    component: {
      name: 'Article',
      data: {
        title: 'Page 1',
        body: 'This is page 1.',
      },
    },
  },
  {
    id: 0,
    order: 2,
    name: '你好',
    component: {
      name: 'Article',
      data: {
        title: '一二三',
        body: 'I 人地 Jason. <b>hi</b>',
      },
    },
  },
  {
    id: 0,
    order: 0,
    name: 'home',
    component: {
      name: 'Article',
      data: {
        title: 'Hello',
        body: 'I am Jason. <b>hi</b>',
      },
    },
  },
].map(o => new Page(o));

export class PagesService{
  async findAll(){
    return await Promise.resolve(DUMMY);
  }
}

export default new PagesService();
