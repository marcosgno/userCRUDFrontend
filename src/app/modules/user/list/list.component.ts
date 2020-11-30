import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/entities/user';
import { ResponseHandler } from 'src/app/models/responses/response-handler';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  errorsText: string[] = [];
  loading = false;
  currentPage = 0;
  totalPages = 0;
  isLastPage = false;
  isFirstPage = false;     
  users: User[] = [];
  searchVal: string = null;

  constructor(private userService: UserService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    if (!this.loading) {
      try {
        this.spinner.show();
        this.loading = true;
        const response =  await this.userService.list(this.currentPage);
        this.users = response.content;
        this.currentPage = response.number;
        this.totalPages = response.totalPages;

      } catch (e) {
        this.errorsText = new ResponseHandler(e).errors;
      } finally {
        this.loading = false;
        this.spinner.hide();
      }
    }
  }
 
  toPage(page) {
    this.currentPage = page;
    this.load();
  } 
  
  searchValue(val) {
    this.currentPage = 0;
    this.searchVal = val;
    this.load();
  }  

  async removeUser(index){
    if (!this.loading) {
      try {
        if (confirm("Deseja remover este Usuario?")) {

          this.loading = true;
          this.spinner.show();
          await this.userService.delete(this.users[index]);
          this.users.splice(index, 1);
        }
      } catch (e) {
        this.errorsText = new ResponseHandler(e).errors;
      } finally {
        this.loading = false;
        this.spinner.hide();
      }
    }
  }
}
