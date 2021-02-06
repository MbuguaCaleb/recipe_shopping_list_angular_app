import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dropDown]'
})

export class DropdownDirective {

/*{Binds open to the class attribute of my element}*/
@HostBinding('class.open')isOpen = false;

/*{listener for my custom diretive}*/
@HostListener('click') toggleOpen(){

this.isOpen = !this.isOpen;
}

}
