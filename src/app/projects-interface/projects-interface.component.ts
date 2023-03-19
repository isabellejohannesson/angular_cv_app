import { Component } from '@angular/core';

interface Project {
  projectTitle: string;
  projectLanguages: string;
  projectDescription: string;
  projectYear: number; 
  projectRepo: string;
}

@Component({
  selector: 'app-projects-interface',
  templateUrl: './projects-interface.component.html',
  styleUrls: ['./projects-interface.component.css']
})
export class ProjectsInterfaceComponent {

  projects: Project [] = [
    {projectTitle: "Hangman", 
    projectLanguages: "Vanilla JavaScript, HTML, CSS", 
    projectDescription: "A wordguessing game created during the Fullstack Web Developer Program at Chas Academy, solo project", 
    projectYear: 2022,
    projectRepo: "https://github.com/isabellejohannesson/Hangman_game.git",
  },

    {projectTitle: "Todo-list", 
    projectLanguages: "PHP(PDO), SQL, HTML, CSS", 
    projectDescription: "A Todo-list with CRUD in an SQL-database created during the Fullstack Web Developer Program at Chas Academy, solo project", 
    projectYear: 2022,
    projectRepo: "https://github.com/isabellejohannesson/Todo-application.git",
  },

    {projectTitle: "IMDB-clone", 
    projectLanguages: "PHP(Laravel framework), Tailwind", 
    projectDescription: "A mini-version with similar features as IMDB, created with Laravel (Breeze), an SQL database and designed with Tailwind. Group project at Chas Academy", 
    projectYear: 2023,
    projectRepo: "https://github.com/chas-academy/u05-imdb-clon-u05-grupp-3.git",
  },
  ];

}
