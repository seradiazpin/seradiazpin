import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from './../interfaces/project';
import { Skill } from './../interfaces/skill';
import { About } from './../interfaces/about';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience } from '../interfaces/experience';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }
  getAbout(lan:number): Observable<Array<About>>{
    return this.firestore.collection('About').valueChanges() as Observable<Array<About>>;
  }

  getSkills():Observable<Array<Skill>>{
    return this.firestore.collection('Skills').valueChanges() as Observable<Array<Skill>>
  }

  storeSkill(skill){
    return this.firestore.collection('Skills').add(skill).then(res =>{
      console.log(res);
    })
  }

  getProjects():Observable<Array<Project>>{
    return this.firestore.collection('Projects').valueChanges() as Observable<Array<Project>>
  }

  getExperience():Observable<Array<Experience>>{
    return this.firestore.collection('Experience').valueChanges() as Observable<Array<Experience>>
  }
}
