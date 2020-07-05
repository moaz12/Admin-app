import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/interfaces/category.interface';
import { from } from 'rxjs';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
categories:category[]=
[
  {name:'samsung',parentCat:'telephone', summry:'good telephone',lgImgUrl:'src/assets/img/OPPO.jpg'},
  {name:'oppo',parentCat:'telephone', summry:'very good telephone',lgImgUrl:'src/assets/img/samsung-galaxy-s10-lite-pakistan-priceoye-fmbkz.jpg'},
  {name:'apple',parentCat:'telephone', summry:'bad telephone', lgImgUrl:'src/assets/img/ApplePhone.jpg'},
  {name:'vivo',parentCat:'telephone', summry:'bad telephone', lgImgUrl:'src/assets/img/vivo-u3.jpg'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
