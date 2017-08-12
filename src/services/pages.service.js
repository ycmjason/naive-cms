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
    id: 1,
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
    id: 2,
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
  {
    id: 3,
    order: 3,
    name: 'performances',
    component: {
      name: 'Youtube',
      data: {
        videos: [
          {
            title: '舞笛-沙巴崇正中學華樂團與楊偉傑',
            youtubeId: '_-FrYyyk2mM',
          },
          {
            title: '笛子獨奏：《賽馬會上》 胡結續曲',
            youtubeId: 'yGRYUmmjYMs',
          },
        ],
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
