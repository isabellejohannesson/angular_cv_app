import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv-app';
  name = "Isabelle"
  lastName = "Johannesson"
  email = "isabelle.johannesson@outlook.com"
  github = "https://github.com/isabellejohannesson"

  description = [
    "During a course in web production at Södertörn University, I found my love for coding. I felt like my nerd brain finally found its home. Writing code and seeing the results instantly was intoxicating and I found myself thinking about code constantly. I also found coding hard, which triggered me to think and work even harder! I realised that software development will lead me to a job where I am challenged, continuously learning and have concrete goals to work towards as a part of a creative team."
  ];
}
