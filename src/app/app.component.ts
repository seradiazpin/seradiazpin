import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { InformationComponent } from './components/information/information.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { SkillsComponent } from './components/skills/skills.component';
import $ from 'jquery';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomepageComponent,
    NavPanelComponent,
    InformationComponent,
    CertificationsComponent,
    SkillsComponent,
    NgFor,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  toMail() {
    var mailText = "mailto:seradiazpin@unal.edu.co+?subject="+this.subject+"&body="+this.message; 
    window.location.href = mailText;
  }
  selected = 1;
  subject: any;
  message: any;

  setActiveMenuItem() {
    var me = this;
    var currentSection = null;
    var c = $('.page-wrapper .section.section-active').data("num");
    $('.section').each(function () {
      var element = $(this).attr('id');
      if ($('#' + element).is('*')) {
        if ($(window).scrollTop()! >= $('#' + element).offset()!.top - 150) {
          currentSection = element;
          me.selected = c as number;
        }
      }
    });
    $('.nav-menu ul li').removeClass('current').find('a[href*="#' + currentSection + '"]').parent().addClass('current');
    $('.page-wrapper .section').removeClass('section-active');
    $('#' + currentSection).addClass('section-active');
    if (c !== $('#' + currentSection).data("num")) {
      c = $('#' + currentSection).data("num");

      me.selected = c as number;
      $('.current-num span').animate({ "opacity": '0', "left": "-5px" }, 150, function () {
        $(this).text(c).animate({ "opacity": '1', "left": "0" }, 150);
      });
    }
  }
  ngOnInit() {
    var me = this;
    $(window).on('resize', function () {
      me.setActiveMenuItem();
    });

    $(window).on('scroll', function () {
      me.setActiveMenuItem();
    });

    var k = 1;
    $('.page-wrapper .section').each(function () {
      $(this).data('num', ('0' + k).slice(-2));
      console.log(k);
      k++;
    });

  }

}


