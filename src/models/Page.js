import assignProps from '@/utils/assignProps';

export default class Page{
  constructor(p){
    assignProps(this, p, ['id', 'order', 'name', 'component']);
  }
}
