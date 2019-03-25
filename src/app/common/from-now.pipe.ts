import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

const DatetimeFormatter="YYYY-MM-dd HH:mm:ss";

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value && moment(value,DatetimeFormatter).fromNow() ;
  }

}
