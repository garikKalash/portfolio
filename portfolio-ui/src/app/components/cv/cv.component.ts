import {Component, OnInit} from '@angular/core';
import {CvService} from '../../services/cv.service';
import {CV} from '../../models/cv.model';
import {Skill} from '../../models/skill.model';
import {Experience} from '../../models/experience.model';
import {Education} from '../../models/education.model';
import {Language} from '../../models/language.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cv: CV = null;
  itsMe = false;

  newSkill: Skill = new Skill();
  showNewSkill = false;

  newExperience: Experience = new Experience();
  showNewExperience = false;

  newEducation: Education = new Education();
  showNewEducation = false;

  newLanguage: Language = new Language();
  showNewLanguage = false;

  constructor(private cvService: CvService,
              private userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar) {
    if (!this.userService.userValue) {
      this.router.navigate(['/login']);
    }
    this.itsMe = this.userService.userValue.role === 'me';
  }

  ngOnInit(): void {
    this.cvService.getCv().subscribe(value => {
      this.cv = value;
      this.cv.experiences = this.cv.experiences.reverse();
    });
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3 * 1000,
    });
  }

  addSkill() {
    this.cvService.addSkill(this.newSkill).subscribe(value => {
      this.cv.skills.push(value);
      this.finishAddSkill();
    });
  }

  finishAddSkill() {
    this.showNewSkill = false;
    this.newSkill = new Skill();
  }

  removeSkill(skill) {
    this.cvService.removeSkill(skill.id).subscribe(value => {
        const index = this.cv.skills.indexOf(skill, 0);
        if (index > -1) {
          this.cv.skills.splice(index, 1);
        }
      },
      error => {
        this.openSnackBar(`Error in during of removing skill ${skill.name}`, '');
      }
    );
  }

  addEducation() {
    this.cvService.addEducation(this.newEducation).subscribe(value => {
      this.cv.educations.push(value);
      this.finishAddEducation();
    });
  }

  finishAddEducation() {
    this.showNewEducation = false;
    this.newEducation = new Education();
  }

  removeEducation(education) {
    this.cvService.removeEducation(education.id).subscribe(value => {
        const index = this.cv.educations.indexOf(education, 0);
        if (index > -1) {
          this.cv.educations.splice(index, 1);
        }
      },
      error => {
        this.openSnackBar(`Error in during of removing education ${education.name}`, '');
      }
    );
  }

  addLanguage() {
    this.cvService.addLanguage(this.newLanguage).subscribe(value => {
      this.cv.languages.push(value);
      this.finishAddLanguage();
    });
  }

  finishAddLanguage() {
    this.showNewLanguage = false;
    this.newLanguage = new Language();
  }

  removeLanguage(language) {
    this.cvService.removeLanguage(language.id).subscribe(value => {
        const index = this.cv.languages.indexOf(language, 0);
        if (index > -1) {
          this.cv.languages.splice(index, 1);
        }
      },
      error => {
        this.openSnackBar(`Error in during of removing language ${language.name}`, '');
      }
    );
  }

  addExperience() {
    this.cvService.addExperience(this.newExperience).subscribe(value => {
      this.cv.experiences.push(value);
      this.finishAddExperience();
    });
  }

  finishAddExperience() {
    this.showNewExperience = false;
    this.newExperience = new Experience();
  }

  removeExperience(experience) {
    this.cvService.removeExperience(experience.id).subscribe(value => {
        const index = this.cv.experiences.indexOf(experience, 0);
        if (index > -1) {
          this.cv.experiences.splice(index, 1);
        }
      },
      error => {
        this.openSnackBar(`Error in during of removing experience ${experience.company}`, '');
      }
    );
  }

}
