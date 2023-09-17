import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/backend/data.service';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  menuCourses: boolean = false;
  navList: any[] = [
    {
      name: 'Categorie 1',
      url: '#'
    },
    {
      name: 'Data Analyst',
      url: '#'
    },
    {
      name: 'Cat 3',
      url: '#'
    },
    {
      name: 'Intelligence Artificielle ',
      url: '#'
    },
    {
      name: 'Cat 4',
      url: '#'
    }
  ];

  courseList!: Course[];

  constructor(private el: ElementRef, private serviceData: DataService) {}
  ngOnInit(): void {
    this.serviceData.getData().subscribe(resp => {
      this.courseList = resp;
    });
    window.addEventListener('click', event => {
      this.handleDocumentClick(event);
    });
  }

  handleDocumentClick(event: MouseEvent) {
    if (this.menuCourses) {
      // Vérifie si le clic est en dehors du menu
      const menuElement = this.el.nativeElement.querySelector('.nav');
      const btnToggleMenu = document.querySelector('.btn-toggle-menu-mobile');

      if (
        !menuElement.contains(event.target as Node) &&
        event.target != btnToggleMenu &&
        !this.isChildOf(event.target, btnToggleMenu)
      ) {
        this.menuCourses = false; // Masque le menu
      }
    }
  }

  isChildOf(child: any, parent: any) {
    let currentNode = child.parentNode;

    while (currentNode) {
      if (currentNode == parent) {
        return true;
      }
      currentNode = currentNode.parentNode;
    }

    return false;
  }

  handleShowCoursesListMobile() {
    this.menuCourses = !this.menuCourses;
  }
}
