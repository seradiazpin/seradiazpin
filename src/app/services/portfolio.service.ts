import { Firestore , collectionData, collection } from '@angular/fire/firestore';
import { Skill } from './../interfaces/skill';
import { About } from './../interfaces/about';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from '../interfaces/experience';
import { Information } from '../interfaces/Information/Information';
import { Project } from '../interfaces/Projects/Project';
import { Education } from '../interfaces/Education/Education';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private firestore: Firestore) { }
  getAbout(lan:number): Observable<Array<About>>{
    const itemCollection = collection(this.firestore, 'About');
    return collectionData(itemCollection) as Observable<Array<About>>
  }

  getInfo(): Observable<Array<Information>> {
    const itemCollection = collection(this.firestore, 'Information');
    return collectionData(itemCollection) as Observable<Array<Information>> 
  }

  getSkills():Observable<Array<Skill>>{
    const itemCollection = collection(this.firestore, 'Skills');
    return collectionData(itemCollection) as Observable<Array<Skill>>
  }


  getProjects():Observable<Array<Project>>{
    const itemCollection = collection(this.firestore, 'Projects');
    return collectionData(itemCollection) as Observable<Array<Project>>
  }

  getEducation():Observable<Array<Education>>{
    const itemCollection = collection(this.firestore, 'Education');
    return collectionData(itemCollection) as Observable<Array<Education>>
  }

  getCertifications():Observable<Array<Education>>{
    const itemCollection = collection(this.firestore, 'Certifications');
    return collectionData(itemCollection) as Observable<Array<Education>>
  }
  getExperience():Observable<Array<Experience>>{
    const itemCollection = collection(this.firestore, 'Experience');
    return collectionData(itemCollection) as Observable<Array<Experience>>

  }
}
