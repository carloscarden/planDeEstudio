import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-autorizado',
  templateUrl: './no-autorizado.component.html',
  styleUrls: ['./no-autorizado.component.scss']
})
export class NoAutorizadoComponent implements OnInit {
  myForm!: FormGroup;
  hide = true;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitHandler(): void {
    const formValue = this.myForm.value;
    console.log(formValue.email, formValue.password);
    /*this.authService.login(formValue.email, formValue.password).subscribe(
      (d: any) => {
        // this.authService.currentUserRoles;
        this.authService.emitirCambiarEstadoDeSesion(true);
        this.router.navigateByUrl('/roles');
      },
      error => {
        console.log('error');
      }
    );*/
  }


}
