import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  courseList: Course[] = [
    {
      urlImg: './assets/courses/img1.png',
      title: 'Business Analytics',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 48,
      nbrCourses: 20,
      nbrEtudiants: 1900,
      rate: 4.9
    },
    {
      urlImg: './assets/courses/img2.png',
      title: 'Data Strategy',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 6,
      nbrCourses: 3,
      nbrEtudiants: 930,
      rate: 4.9
    },
    {
      urlImg: './assets/courses/img3.png',
      title: 'Data Driven Marketing',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 36,
      nbrCourses: 46,
      nbrEtudiants: 10043,
      rate: 4.9
    },
    {
      urlImg: './assets/courses/img4.png',
      title: 'Predective Analytics ',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 14,
      nbrCourses: 13,
      nbrEtudiants: 900,
      rate: 4.8
    },
    {
      urlImg: './assets/courses/img5.png',
      title: 'Data Visualization Basics',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 2,
      nbrCourses: 5,
      nbrEtudiants: 909
    },
    {
      urlImg: './assets/courses/img6.png',
      title: 'Business Intelligence',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 12,
      nbrCourses: 25,
      nbrEtudiants: 1550,
      rate: 4.7
    },
    {
      urlImg: './assets/courses/img7.png',
      title: 'Data Governance Essentials',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 48,
      nbrCourses: 50,
      nbrEtudiants: 1430
    },
    {
      urlImg: './assets/courses/img8.png',
      title: 'Big Data',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 18,
      nbrCourses: 24,
      nbrEtudiants: 505,
      rate: 4.4
    },
    {
      urlImg: './assets/courses/img9.png',
      title: 'Machine Learning',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 7,
      nbrCourses: 17,
      nbrEtudiants: 200,
      rate: 4.8
    },
    {
      urlImg: './assets/courses/img1.png',
      title: 'Business Analytics',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 48,
      nbrCourses: 20,
      nbrEtudiants: 1900,
      rate: 4.9
    },
    {
      urlImg: './assets/courses/img2.png',
      title: 'Data Strategy',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 6,
      nbrCourses: 3,
      nbrEtudiants: 930,
      rate: 4.9
    },
    {
      urlImg: './assets/courses/img3.png',
      title: 'Data Driven Marketing',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 36,
      nbrCourses: 46,
      nbrEtudiants: 10043,
      rate: 4.9
    },
    {
      urlImg: './assets/courses/img4.png',
      title: 'Predective Analytics ',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 14,
      nbrCourses: 13,
      nbrEtudiants: 900,
      rate: 4.8
    },
    {
      urlImg: './assets/courses/img5.png',
      title: 'Data Visualization Basics',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 2,
      nbrCourses: 5,
      nbrEtudiants: 909
    },
    {
      urlImg: './assets/courses/img6.png',
      title: 'Business Intelligence',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 12,
      nbrCourses: 25,
      nbrEtudiants: 1550,
      rate: 4.7
    },
    {
      urlImg: './assets/courses/img7.png',
      title: 'Data Governance Essentials',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 48,
      nbrCourses: 50,
      nbrEtudiants: 1430
    },
    {
      urlImg: './assets/courses/img8.png',
      title: 'Big Data',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 18,
      nbrCourses: 24,
      nbrEtudiants: 505,
      rate: 4.4
    },
    {
      urlImg: './assets/courses/img9.png',
      title: 'Machine Learning',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 7,
      nbrCourses: 17,
      nbrEtudiants: 200,
      rate: 4.8
    },
    {
      urlImg: './assets/courses/img1.png',
      title: 'Business Analytics',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 48,
      nbrCourses: 20,
      nbrEtudiants: 1900,
      rate: 4.9
    },
    {
      urlImg: './assets/courses/img2.png',
      title: 'Data Strategy',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 6,
      nbrCourses: 3,
      nbrEtudiants: 930,
      rate: 4.9
    },
    {
      urlImg: './assets/courses/img3.png',
      title: 'Data Driven Marketing',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 36,
      nbrCourses: 46,
      nbrEtudiants: 10043,
      rate: 4.9
    },
    {
      urlImg: './assets/courses/img4.png',
      title: 'Predective Analytics ',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 14,
      nbrCourses: 13,
      nbrEtudiants: 900,
      rate: 4.8
    },
    {
      urlImg: './assets/courses/img5.png',
      title: 'Data Visualization Basics',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 2,
      nbrCourses: 5,
      nbrEtudiants: 909
    },
    {
      urlImg: './assets/courses/img6.png',
      title: 'Business Intelligence',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 12,
      nbrCourses: 25,
      nbrEtudiants: 1550,
      rate: 4.7
    },
    {
      urlImg: './assets/courses/img7.png',
      title: 'Data Governance Essentials',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 48,
      nbrCourses: 50,
      nbrEtudiants: 1430
    },
    {
      urlImg: './assets/courses/img8.png',
      title: 'Big Data',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 18,
      nbrCourses: 24,
      nbrEtudiants: 505,
      rate: 4.4
    },
    {
      urlImg: './assets/courses/img9.png',
      title: 'Machine Learning',
      description:
        'Lorem ipsum is simply dummy textof the printing and typesetting industry',
      duration: 7,
      nbrCourses: 17,
      nbrEtudiants: 200,
      rate: 4.8
    }
  ];
  constructor() {}

  getData() {
    return of(this.courseList);
  }
}
