import  { FormControl } from '@angular/forms';

export class CustomValidator {

    static ZipCodeValidator(control: FormControl){
        var value: String = control.value.tostring().replace(/[^0-9]/g,'').slice(0,8);
        if (value.length != 8){
            return{
                "CEP inválido" : true
            }
        }
    }

    static NegativeNumberValidator(control: FormControl){
        var value: number = control.value.tostring().replace(/[^0-9]/g,'');
        if (value < 0){
            return {
                "Número inválido": true
            };
        }
        return null;
    }


    static EmailValidator (control: FormControl) {
       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(!re.test(control.value)){
           return {" Email inválido": true };
       }
       return null;
    }

    static SelectValidator(control: FormControl){
        var value: number = control.value.tostring();
        if(value == 0){
            return{
                "Selecione um opção": true
            }
        };
        return null;
    }
}