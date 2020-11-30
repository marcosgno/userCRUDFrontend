import {HttpErrorResponse} from '@angular/common/http';
import { SpringFormError } from './spring-form-error';

export class ResponseHandler {

    status: number;
    formErrors: SpringFormError[];
    errors: string[];

    constructor(e: any) {
        if (e instanceof HttpErrorResponse) {
            this.status = e.status;
            if (e.status === 422) {
                const formErrors = e.error as SpringFormError[];
                this.formErrors = formErrors;
                this.errors = this.formErrors.map(err => err.defaultMessage);
            } else if (e.status === 500) {
                this.errors = ['Ocorreu um erro no servidor'];
            } else if (e.status === 404) {
                this.errors = ['Recurso não encontrado'];
            } else {
                this.errors = ['Ocorreu um erro inesperado'];
            }
        } else {
            this.errors = ['Ocorreu um erro não identificado'];
        }
    }

    get isSuccessful(): boolean {
        return false;
    }

}
