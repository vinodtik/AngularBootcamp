import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReverseStringPipe implements PipeTransform {

    transform(value) {
        let newstr = ''
        for(let i=value.length-1; i>=0; i--){
            newstr += value.charAt(i);
            // console.log(value.charAt(i));
        }
        return newstr;
    }

}