import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseHandler } from 'src/app/models/responses/response-handler';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/entities/user';
import { UserService } from 'src/app/services/user.service';
import { GenericValidator } from 'src/app/validators/generic-validator';


providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
@Component({
  selector: 'app-form-admin',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id;
  loading = false;
  errorsText: string[] = [];
  submitted = false;
  form: FormGroup;
  image: File;
  urlPreview = null;
  keys = [];
  user: User;
  date: Date;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.date = new Date;
    this.id = this.route.snapshot.params.id;
    this.createForm();
    if (this.id != 'new') {
      this.load();
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      cpf: ['', [GenericValidator.isValidCpf(), Validators.required]],
      birthDate: ['', Validators.required]
    });
  }

  private async load() {
    try {
      this.loading = true;
      this.spinner.show();

      const user = await this.userService.show(this.id)
      this.user = user;
      this.form.controls.name.setValue(this.user.name);
      this.form.controls.cpf.setValue(this.user.cpf);
      this.form.controls.birthDate.setValue(this.user.birthDate);
    } catch (e) {
      this.errorsText = new ResponseHandler(e).errors;
    } finally {
      this.loading = false;
      this.spinner.hide();
    }

  }

  save() {
    if (this.id != 'new') {
      this.update();
    } else {
      this.create();
    }
  }


  async create() {
    this.submitted = true;
    if (this.form.valid && !this.loading) {
      try {
        this.loading = true;
        this.spinner.show();

        var content = this.form.getRawValue() as User;
        let user = await this.userService.cpfSearch(content.cpf);
        if (user != null) {
          alert('Ja existe um usuário cadastrado com este CPF.')
        } else {
          await this.userService.create(content);
          this.router.navigate(['']);
        }      
        
      } catch (e) {
        this.errorsText = new ResponseHandler(e).errors;
      } finally {
        this.loading = false;
        this.spinner.hide();
      }
    }

  }


  async update() {
    this.submitted = true;
    if (this.form.valid && !this.loading) {
      try {
        this.loading = true;
        this.spinner.show();

        var content = this.form.getRawValue() as User;
        await this.userService.update(content, this.user.id);

        this.router.navigate(['']);
      } catch (e) {
        this.errorsText = new ResponseHandler(e).errors;
      } finally {
        this.loading = false;
        this.spinner.hide();
      }
    }
  }

}


