import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {CurrencyService} from '../../services/currency.service';
import {ProjectService} from '../../services/project.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  fromCur = 'USD';
  toCur = 'USD';
  showSpinner = false;

  fromVal = 1;
  toVal = 1;
  currencies = [{value: 'GBP', flag: 'https://image.flaticon.com/icons/svg/197/197374.svg'},
    {value: 'USD', flag: 'https://image.flaticon.com/icons/svg/197/197484.svg'},
    {value: 'EUR', flag: 'https://image.flaticon.com/icons/svg/197/197615.svg'},
    {value: 'RUB', flag: 'https://image.flaticon.com/icons/svg/197/197408.svg'},
    {value: 'JPY', flag: 'https://image.flaticon.com/icons/svg/197/197604.svg'}];
  rates: any = {success: true, timestamp: 1588624208, base: 'USD', date: '2020-05-04', rates: {USD: 1}};
  itsHr = false;

  constructor(private userService: UserService,
              private router: Router,
              private currencyService: CurrencyService,
              private projectService: ProjectService,
              private snackBar: MatSnackBar) {
    if (!this.userService.userValue) {
      this.router.navigate(['/login']);
      this.itsHr = this.userService.userValue.role === 'hr';
    }
  }

  ngOnInit(): void {

  }

  calculate(event){
    this.showSpinner = true;
    this.currencyService.getRate(this.fromCur, this.toCur).subscribe(value => {
      this.rates = value;
      this.toVal = this.fromVal * this.rates.rates[this.toCur];
      this.showSpinner = false;
    });
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3 * 1000,
    });
  }

}
