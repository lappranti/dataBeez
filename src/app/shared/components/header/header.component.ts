import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuListLang: boolean = false;
  optionUser: boolean = false;
  menuMobile: boolean = false;
  navAdresses: any[] = [
    {
      name: 'Path',
      url: '#'
    },
    {
      name: 'Courses',
      url: '#'
    },
    {
      name: 'Dashboard',
      url: '#'
    },
    {
      name: 'help',
      url: '#'
    }
  ];

  langList: any[] = [
    {
      name: 'FR',
      val: 'Francais'
    },
    {
      name: 'EN',
      val: 'Anglais'
    }
  ];

  currentLang: {
    name: string;
    val: string;
  } = {
    name: 'EN',
    val: 'Anglais'
  };

  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit(): void {
    window.addEventListener('click', event => {
      const screnWidth = window.innerWidth;
      if (this.menuListLang) {
        if (screnWidth > 850) {
          this.handleDocumentClick(
            event,
            'list-langue',
            'btn-toggle-menu-lang'
          );
        } else {
          this.handleDocumentClick(
            event,
            'list-langue-mobile',
            'btn-toggle-menu-lang-mobile'
          );
        }
      } else {
        if (this.menuMobile) {
          this.handleDocumentClick(
            event,
            'modal-menu-mobile',
            'btn-toggle-Menu-Mobile'
          );
        } else {
          this.handleDocumentClick(event, 'option-user', 'btn-toggle-profil');
        }
      }
    });
  }

  handleDocumentClick(event: MouseEvent, classe1: string, classe2: string) {
    if (this.menuListLang || this.optionUser || this.menuMobile) {
      // Vérifie si le clic est en dehors du menu
      const menuElement = this.el.nativeElement.querySelector('.' + classe1);
      const btnToggleMenu = document.querySelector('.' + classe2);

      if (
        (!menuElement.contains(event.target as Node) &&
          event.target != btnToggleMenu &&
          !this.isChildOf(event.target, btnToggleMenu)) ||
        !this.isChildOf(event.target, btnToggleMenu)
      ) {
        this.menuListLang = false; // Masque le menu
        this.optionUser = false;
        this.menuMobile = false;
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

  handleChangeLang(selectedLang: any) {
    this.currentLang = selectedLang;
    this.handleToggleMenuLang();
  }

  handleToggleMenuLang() {
    this.menuListLang = !this.menuListLang;
    this.optionUser = false;
  }

  handleToggleOptionUSer() {
    this.optionUser = !this.optionUser;
    this.menuListLang = false;
  }

  handleLogout() {
    this.router.navigate(['/login']);
  }

  handleToggleMenuMbobile() {
    this.menuMobile = !this.menuMobile;
  }
}
