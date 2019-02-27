import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';
@Directive({
    selector:'[autoGrow]'
})
export class AutoGrow {
    constructor(private el:ElementRef,private renderer:Renderer){

    }
    @HostListener("focus")
    focus(){
        this.renderer.setElementClass(this.el.nativeElement,"focus",true)
    }
    @HostListener("blur")
    blur(){
        this.renderer.setElementClass(this.el.nativeElement,"focus",false)
    }
}