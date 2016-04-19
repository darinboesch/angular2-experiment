import {uuid} from '../../util/common';

export class Alert {
    id: string;
    type: string;
    msg: string;
  
    constructor(o?: any) {
      this.id = o && o.id || uuid();
      this.type = o && o.type;
      this.msg = o && o.msg;
    }
}