import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {
  public title? = '';
  public user = {
    name: '',
    email: '',
  };

  sendForm(form: NgForm): void {
    if(!form.valid) {
      let errors = 'Не верно заполнена форма:';

      if (form.controls['email'].status === 'INVALID') {errors = errors + '\n Не корректный Email';}
      if (form.controls['name'].status === 'INVALID') {errors = errors + '\n Не корректное имя';}
      if (form.controls['password'].status === 'INVALID') {errors = errors + '\n Не корректный пароль или его повтор';}

      return alert(errors)
    }
    alert('Поздравляем! ' + form.controls['name'].value + ', вы зарегистрированы.')
  }

  constructor(private activatedRoute: ActivatedRoute) {
    this.title = this.activatedRoute.snapshot.data['title'];
  }
}
