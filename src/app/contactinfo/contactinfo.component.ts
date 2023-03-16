import { Component } from '@angular/core';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent {

  name = "Isabelle"
  lastName = "Johannesson"
  email = "isabelle.johannesson@outlook.com"
  github = "https://github.com/isabellejohannesson"

}
