import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-sidebar',
    templateUrl: './general-sidebar.component.html',
    styleUrls: ['./general-sidebar.component.css']
})
export class GeneralSidebarComponent implements OnInit {
 
    constructor(private router: Router,) { }
    ngOnInit(): void {
      
    }


    onLoginClickEvent(flag: any){

      if(flag == 1){
        // alert('HOME PAge Clicked')

        this.router.navigate(["/lifezee-home-page"]);

      }else{
        // alert('Login Page Clicked')

        this.router.navigate(["/login-page"]);

      }
      

    }

}
