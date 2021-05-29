import { Pipe, PipeTransform } from '@angular/core';
import { Docs } from './docservice.service';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(docs: Docs[], searchValue: string): Docs[] {
    if(!docs || !searchValue){
      return docs;
    }
    return docs.filter(doc =>
      doc.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      doc.category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      doc.docName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      doc.docType.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
