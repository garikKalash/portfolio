import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CalculatorService} from '../../services/calculator.service';
import {UserService} from '../../services/user.service';
import {ProjectService} from '../../services/project.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  _expression = '';
  result: number = null;
  errorMessage = '';

  evaluatorForm: FormGroup;

  constructor(private calculatorService: CalculatorService) {
  }

  evaluateExpression() {
    this.calculatorService.getResult(this._expression).subscribe(value => {
        this.result = value;
        this.errorMessage = '';
      },
      error => {
        if ( error.status === 404) {
          this.errorMessage = 'The passed expression is incorrect, please read the rules of evaluator';
        } else {
          this.errorMessage = error.error;
          this.result = null;
        }
      });
  }

  ngOnInit(): void {
    this.evaluatorForm =  new FormGroup({
      expression: new FormControl(this._expression, [Validators.required,
        Validators.minLength(3)])
    });
  }

  get expression() {
    return this.evaluatorForm.get('expression');
  }

}
