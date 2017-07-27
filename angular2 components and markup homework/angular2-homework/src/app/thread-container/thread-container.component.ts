import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'threadContainer',
    template: `
    <div id='titles'>
       <button class='threads'(click)='sendInfo(0)'><h1>{{threadData[0].title}}</h1></button>
       <button class='threads' (click)='sendInfo(1)'><h1>{{threadData[1].title}}</h1></button>
       <button class='threads'  (click)='sendInfo(2)'><h1>{{threadData[2].title}}</h1></button>
       <button class='threads' (click)='sendInfo(3)'><h1>{{threadData[3].title}}</h1></button>
       <button  *ngIf='threadVisability' (click)='changeFontSize("plus")' id='plus'>+</button>
       <button  *ngIf='threadVisability'(click)='changeFontSize("minus")' id='minus'>-</button>
       <select *ngIf='threadVisability' name='select' #t id='selection'  (change)='changeColor(t.value)'>
          <option [ngValue]="black">black</option>
          <option [ngValue]="red">red</option>
          <option [ngValue]="green">green</option>
          <option [ngValue]="grey">grey</option>
          <option [ngValue]="blue">blue</option>
          <option [ngValue]="white">white</option>
       </select>

       <select *ngIf='threadVisability' name='select-background' #bg id='selection-background'  (change)='changeBackgroundColor(bg.value)'>
          <option [ngValue]="beige">beige</option>
          <option [ngValue]="white">white</option>
          <option [ngValue]="black">black</option>
          <option [ngValue]="red">red</option>
          <option [ngValue]="green">green</option>
          <option [ngValue]="grey">grey</option>
          <option [ngValue]="blue">blue</option>     
       </select>
    </div>

   

  <div id='container' [style.background]=backgroundColor>
     <img *ngIf='threadVisability&&isImageSelected' [src]="threadData[currentThread].image">
     <button [style.top]="imgTopPosition()"(click)="showHideImage()"id="show-hide-button" *ngIf='threadVisability'>{{isImageSelected===true?"hide image":"show image"}}</button>
     <p [style.color]=color *ngIf='threadVisability' [ngStyle]="{'font-size': fontSZ+'px'}">
     {{threadData[currentThread].description.slice(0,n)}}
     </p>
     <button id='showmore'(click)='increaseLength()' *ngIf='n<threadData[currentThread].description.length&&isSelected'>show more</button>
  </div> 
  `,

    styleUrls: ['./thread-container.component.css']
})
export class ThreadContainerComponent {
    fontSZ = 20
    n = 50
    color = 'black'
    backgroundColor = 'beige'
    fontSize = '22'
    currentThread = 0
    isImageSelected = true
    increaseLength() {
        this.n += 50
    }
    showHideImage(e) {
        this.isImageSelected = !this.isImageSelected
        if (!this.isImageSelected) {
            
           
           
        }
    }

    imgTopPosition(){
         if (!this.isImageSelected) {
           return 30+'px' 
        }
        else{
            return-25+'px'
        }
    }
    changeFontSize(command) {
        if (command === 'plus') {
            this.fontSZ += 5
        }
        else {
            this.fontSZ -= 5
        }
    }
    changeColor(newColor) {
        this.color = newColor
    }

    changeBackgroundColor(newBackgroundColor) {
        this.backgroundColor = newBackgroundColor
    }

    @Input() threadData: string[]
    threadVisability = false
    isSelected = false
    sendInfo(threadNumber) {
        this.threadVisability = true
        this.isSelected = true
        this.currentThread = threadNumber
        this.n = 50
    }

}
