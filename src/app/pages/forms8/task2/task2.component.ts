import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartAdvancedService } from 'src/app/services/cart-advanced.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {
  public title = 'Title';
  public delivery = false;
  public submitted = false;

  public deliveryChecked(flag: boolean) {
    this.delivery = flag;
  }

  public checkoutForm: FormGroup = this.fb.group({
    name: ['', [
        Validators.required,
        Validators.pattern("[A-ZА-Я][a-zа-я]*( [A-ZА-Я][a-zа-я]*){1,2}"),
        ]
      ],
    phon: ['', [
        Validators.required,
        Validators.pattern("(\\+7|8)\\d{10}")
        ]
      ],
    address: this.fb.group({
      city: ['', [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
        street: ['', [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
        house: ['', [
          Validators.required,
        ]
      ],
        flat: ''
    }),
    pay: this.fb.group({
      cash: [false, Validators.requiredTrue],
      card: [false, Validators.requiredTrue]
    })
  })

  public accountSettings = {
    name: 'Асхат Багаутдинов',
    phon: '+79521103602',
    address: {
      city: 'Анапа',
      street: 'Ленина',
      house: '231',
      flat: '121',
    }
  };

  public sendForm(): void  {
    this.submitted = true;
    const controlCash = this.checkoutForm.controls['pay'].get('cash')?.errors;
    const controlCard = this.checkoutForm.controls['pay'].get('card')?.errors;
    const controlName = this.checkoutForm.controls['name'].errors;
    const controlPhon = this.checkoutForm.controls['phon'].errors;
    let delivery = false;

    if (this.delivery) {
      delivery = this.checkoutForm.controls['address'].status === 'INVALID' ? true : false;
    }

    if (controlName || controlPhon || delivery) {
      alert('Заполните корректно все поля');
    } else if (this.delivery && !delivery && controlCard) {
      alert('Выберите вид оплаты');
    } else if ( !controlCard || !controlCash ) {
      alert(`Заказ офотмлен. Сумма покупки: ${this.cartService.totalPrice} ₽`);
      this.cartService.clear();
      location.href = '/products';
    } else {
      alert('Выберите вид оплаты');
    }
  }

  get fNameControl() {
    return this.checkoutForm.get('name');
  }

  get fPhonControl() {
    return this.checkoutForm.get('phon')
  }

  get fCityControl() {
    return this.checkoutForm.controls['address'].get('city')
  }

  get fStreetControl() {
    return this.checkoutForm.controls['address'].get('street')
  }

  get fHouseControl() {
    return this.checkoutForm.controls['address'].get('house')
  }


  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private storageService: StorageService,
    private cartService: CartAdvancedService
  ) {
    this.title = this.activatedRoute.snapshot.data['title']
  }

  ngOnInit(): void {
    this.checkoutForm.valueChanges.subscribe((checkoutFormValue) =>{
      this.storageService.saveToStorage('checkout-form', JSON.stringify(checkoutFormValue));
    })
    setTimeout(() => {
      const localStorage = this.storageService.getFromStorage('checkout-form');
      if (localStorage) {
          this.checkoutForm.setValue(JSON.parse(localStorage))
      }
    }, 500)  // patchValue()
  }
}
