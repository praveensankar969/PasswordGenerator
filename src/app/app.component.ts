import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Dev';
  password :string ="";
  length : number = 0;
  letter :boolean = false;
  number : boolean= false;
  symbol :boolean = false;

  Generate(){
    const numbers= '1234567890';
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";
    var validChar ="";
    if(this.letter){
      validChar += letters;
    }

    if(this.number){
      validChar += numbers;
    }

    if(this.symbol){
      validChar += symbols;
    }

    var password = "";
    for(var i=0;i<this.length;i++){
      const index = Math.floor(Math.random() * validChar.length);
      password += validChar[index];
    }

    this.password = password;



    console.log(this.password)
  }

  LetterSelected(){
    this.letter = ! this.letter;
  }

  NumberSelected(){
    this.number = !this.number;
  }

  SymbolSelected(){
    this.symbol = !this.symbol;
  }
  OnChangeLength(length : Event){
    const value = parseInt((length.target as HTMLInputElement).value);
    if(length.target){
      this.length = 0;
      this.password="";
    }
    if(!isNaN(value)){
      this.length = value;
    }
    
   
  }


}
