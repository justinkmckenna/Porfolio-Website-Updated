(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/justin/Projects/SideProjects/Porfolio-Website-Updated/src/main.ts */"zUnb");


/***/ }),

/***/ "09+m":
/*!**************************************************!*\
  !*** ./src/app/biography/biography.component.ts ***!
  \**************************************************/
/*! exports provided: BiographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiographyComponent", function() { return BiographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BiographyComponent {
    constructor() { }
    ngOnInit() {
    }
}
BiographyComponent.ɵfac = function BiographyComponent_Factory(t) { return new (t || BiographyComponent)(); };
BiographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BiographyComponent, selectors: [["app-biography"]], decls: 14, vars: 0, consts: [[1, "grid"], [1, "img"], [1, "biography"], [1, "flex"], [1, "material-icons"]], template: function BiographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Justin Mckenna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Full stack developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "justin.k.mckenna@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I'm a passionate developer with a B.S. in Computer Science from Kent State University, class of 2020.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n.material-icons[_ngcontent-%COMP%] {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  \n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  \n  -webkit-font-smoothing: antialiased;\n  \n  text-rendering: optimizeLegibility;\n  \n  -moz-osx-font-smoothing: grayscale;\n  \n  font-feature-settings: \"liga\";\n}\nsection[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  padding: 1rem;\n  font-family: \"Montserrat\", sans-serif;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.3rem;\n  padding-top: 1rem;\n  padding-bottom: 0.5rem;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n  font-size: 1rem;\n  color: #828282;\n  padding-bottom: 1rem;\n}\narticle[_ngcontent-%COMP%] {\n  color: #828282;\n  font-size: 0.9rem;\n  margin-top: 1.2rem;\n}\n.img[_ngcontent-%COMP%] {\n  background-image: url('person.png');\n  background-repeat: no-repeat;\n  background-position: 48% 76%;\n  background-size: 620px;\n  height: 15rem;\n  border-radius: 1rem;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4F4F4F;\n  margin: 0;\n  font-size: 0.9rem;\n  padding-left: 0.5rem;\n}\n.flex[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4F4F4F;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n@media only screen and (max-width: 960px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 15rem 1fr;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .biography[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL19mb250cy5zY3NzIiwiLi4vLi4vLi4vYmlvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vX3ZhcmlhYmVscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFNQUFBO0FBSVI7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQWtCLHdCQUFBO0VBQ2xCLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEseUJBQUE7RUFDQSxrQ0FBQTtFQUVBLG9CQUFBO0VBQ0EsNkJBQUE7QUNKRjtBQWpCQTtFQUNFLHNCQ0lPO0VESFAsbUJDTWtCO0VETGxCLGFDTWtCO0VETGxCLHFDQUFBO0FBb0JGO0FBakJBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBb0JGO0FBakJBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDdEJNO0VEdUJOLG9CQUFBO0FBb0JGO0FBaEJBO0VBQ0UsY0M1Qk07RUQ2Qk4saUJBQUE7RUFDQSxrQkFBQTtBQW1CRjtBQWhCQTtFQUNFLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFyQ1U7RUFzQ1YsbUJBQUE7QUFtQkY7QUFoQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFtQkY7QUFqQkU7RUFDRSxjQ2hESTtFRGlESixTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQW1CSjtBQWhCRTtFQUNFLGNDdkRJO0FEeUVSO0FBYkE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUFnQkY7QUFkRTtFQUpGO0lBS0ksZ0NBQUE7RUFpQkY7QUFDRjtBQWZFO0VBUkY7SUFTSSwwQkFBQTtFQWtCRjtBQUNGO0FBZEU7RUFERjtJQUVJLGtCQzlEZ0I7RURnRmxCO0FBQ0YiLCJmaWxlIjoiYmlvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4OyAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpcmVjdGlvbjogbHRyO1xuXG4gIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblxuICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXG4gIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbn1cbiIsIkBpbXBvcnQgXCIuLi92YXJpYWJlbHNcIjtcbkBpbXBvcnQgXCIuLi9mb250c1wiO1xuXG4kaW1nLWhlaWdodDoxNXJlbTtcblxuc2VjdGlvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlMTtcbiAgYm9yZGVyLXJhZGl1czogJGNvbXBvbmVudC1icmFkaXVzO1xuICBwYWRkaW5nOiAkY29tcG9uZW50LXBhZGRpbmc7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbmg1e1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuaDZ7XG4gIG1hcmdpbjowO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAkZ3JleTM7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuXG59XG5cbmFydGljbGV7XG4gIGNvbG9yOiAkZ3JleTM7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tdG9wOiAxLjJyZW07XG59XG5cbi5pbWd7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9wZXJzb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0OCUgNzYlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDYyMHB4O1xuICBoZWlnaHQ6ICRpbWctaGVpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgcCB7XG4gICAgY29sb3I6ICRncmV5MjtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIH1cblxuICBpIHtcbiAgICBjb2xvcjogJGdyZXkyO1xuICB9XG5cbn1cblxuLmdyaWR7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGltZy1oZWlnaHQgMWZyO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc21hbGwpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG4uYmlvZ3JhcGh5e1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpdW0pIHtcbiAgICBwYWRkaW5nLWxlZnQ6ICRjb21wb25lbnQtcGFkZGluZztcbiAgfVxufVxuIiwiJGdyZXkxOiAjRjJGMkYyO1xuJGdyZXkyOiAjNEY0RjRGO1xuJGdyZXkzOiAjODI4MjgyO1xuJGdyZXk0OiAjQzRDNEM0O1xuJGdyZXk1OiAjMzMzMzMzO1xuJGdyZXk2OiAjRTBFMEUwO1xuJGdyZXk3OiAjQTlBOUE5O1xuJGdyZXk4OiAjQkRCREJEO1xuXG5cbiR3aGl0ZTE6ICNGRkY7XG4kYmx1ZTE6IHJnYmEoNDcsIDEyOCwgMjM3LCAwLjcpO1xuXG4kY29tcG9uZW50LWJyYWRpdXM6IDFyZW07XG4kY29tcG9uZW50LXBhZGRpbmc6IDFyZW07XG5cbiRtZWRpdW06IDk2MHB4O1xuJGxhcmdlcjogMTIwMHB4O1xuJHNtYWxsOiA2MDBweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BiographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-biography',
                templateUrl: './biography.component.html',
                styleUrls: ['./biography.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1fes":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "background-image": a0 }; };
function ExperienceComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "url(" + exp_r1.experienceCompanyLogo + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.experienceDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.experienceJobPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.experienceDescription);
} }
class ExperienceComponent {
    constructor() {
        this.experiences = [
            {
                experienceDate: 'Aug 2020 - Current',
                experienceJobPosition: 'Web Developer',
                experienceCompanyLogo: 'assets/someinsurancecompany.png',
                experienceDescription: 'Working currently on creating a new Angular UI for customers, internals, and agents who service policies. Previous work includes internal software for uploading and modifying template documents for internals servicing customers.'
            },
            {
                experienceDate: 'Jan 2019 - May 2020',
                experienceJobPosition: 'Student Web Developer',
                experienceCompanyLogo: 'assets/ksu.png',
                experienceDescription: 'Assisted in development of applications for housing (to connect RAs with their students), room changes (students and change/swap rooms), student success (predict retention and GPA for each student to help with retention), and temporary keys (automating the key checkout process).'
            }
        ];
    }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 4, vars: 1, consts: [[1, "grid"], ["class", "experience", 4, "ngFor", "ngForOf"], [1, "experience"], [1, "img", 3, "ngStyle"], [1, "experience--date"], [1, "experience--position"], [1, "experience--description"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExperienceComponent_div_3_Template, 9, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 1.5rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  padding: 1rem;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #4F4F4F;\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 0;\n}\n\n.img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 5rem;\n  height: 5rem;\n  padding-top: 1rem;\n}\n\n.experience[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 6rem 1fr;\n}\n\n.experience--date[_ngcontent-%COMP%] {\n  color: #828282;\n  margin-bottom: 0.5rem;\n  font-size: 0.9rem;\n}\n\n.experience--position[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n  margin: 0 0 1rem 0;\n}\n\n.experience--description[_ngcontent-%COMP%] {\n  color: #828282;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9fdmFyaWFiZWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JDQ087RURBUCxtQkNHa0I7RURGbEIsYUNHa0I7RURGbEIscUNBQUE7QUFERjs7QUFJQTtFQUNFLGNDZk07RURnQk4saUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUVFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0NuQ007RURvQ04scUJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsY0N2Q007RUR3Q04sZ0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0MvQ007RURnRE4sZUFBQTtBQURGIiwiZmlsZSI6ImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyaWFiZWxzXCI7XG5cbi5ncmlke1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC1yb3ctZ2FwOiAxLjVyZW07XG59XG5cbnNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTE7XG4gIGJvcmRlci1yYWRpdXM6ICRjb21wb25lbnQtYnJhZGl1cztcbiAgcGFkZGluZzogJGNvbXBvbmVudC1wYWRkaW5nO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG5oM3tcbiAgY29sb3I6ICRncmV5MjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmltZ3tcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYWRkaWRhcy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cbi5leHBlcmllbmNle1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZyZW0gMWZyO1xufVxuXG4uZXhwZXJpZW5jZS0tZGF0ZXtcbiAgY29sb3I6ICRncmV5MztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmV4cGVyaWVuY2UtLXBvc2l0aW9ue1xuICBjb2xvcjokZ3JleTU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbn1cblxuLmV4cGVyaWVuY2UtLWRlc2NyaXB0aW9ue1xuICBjb2xvcjogJGdyZXkzO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cblxuIiwiJGdyZXkxOiAjRjJGMkYyO1xuJGdyZXkyOiAjNEY0RjRGO1xuJGdyZXkzOiAjODI4MjgyO1xuJGdyZXk0OiAjQzRDNEM0O1xuJGdyZXk1OiAjMzMzMzMzO1xuJGdyZXk2OiAjRTBFMEUwO1xuJGdyZXk3OiAjQTlBOUE5O1xuJGdyZXk4OiAjQkRCREJEO1xuXG5cbiR3aGl0ZTE6ICNGRkY7XG4kYmx1ZTE6IHJnYmEoNDcsIDEyOCwgMjM3LCAwLjcpO1xuXG4kY29tcG9uZW50LWJyYWRpdXM6IDFyZW07XG4kY29tcG9uZW50LXBhZGRpbmc6IDFyZW07XG5cbiRtZWRpdW06IDk2MHB4O1xuJGxhcmdlcjogMTIwMHB4O1xuJHNtYWxsOiA2MDBweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KzIc":
/*!**********************************************!*\
  !*** ./src/app/hobbies/hobbies.component.ts ***!
  \**********************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "background-image": a0 }; };
function HobbiesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hobby_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "url(" + hobby_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hobby_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hobby_r1.description);
} }
class HobbiesComponent {
    constructor() {
        this.hobbies = [
            { name: 'Music', description: 'I enjoy playing piano mostly, but also play drums and a little guitar.', image: 'assets/piano.jpg' },
            { name: 'Exercise', description: 'I lift weights and hike often.', image: 'assets/dumbbells.jpg' },
            { name: 'Reading', description: 'I mostly enjoy reading philosophy and psychology, but have recently been reading more fiction.', image: 'assets/books.jpg' }
        ];
    }
    ngOnInit() {
    }
}
HobbiesComponent.ɵfac = function HobbiesComponent_Factory(t) { return new (t || HobbiesComponent)(); };
HobbiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HobbiesComponent, selectors: [["app-hobbies"]], decls: 4, vars: 1, consts: [[1, "grid"], ["class", "hobby", 4, "ngFor", "ngForOf"], [1, "hobby"], [1, "hobby-img", 3, "ngStyle"], [1, "hobby-name"], [1, "hobby-description"]], template: function HobbiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HobbiesComponent_div_3_Template, 6, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hobbies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  background-color: #FFF;\n  padding: 1rem;\n  border-radius: 1rem;\n  font-family: \"Montserrat\", sans-serif;\n  grid-row-gap: 1.5rem;\n}\n\n.hobby-img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 1rem;\n  height: 9rem;\n  margin-bottom: 1.5rem;\n}\n\n.hobby-name[_ngcontent-%COMP%] {\n  color: #333333;\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n\n.hobby-description[_ngcontent-%COMP%] {\n  color: #828282;\n  margin: 0;\n  font-size: 1rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #4F4F4F;\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvYmJpZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9fdmFyaWFiZWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkNLTztFREpQLGFDUWtCO0VEUGxCLG1CQ01rQjtFRExsQixxQ0FBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkNIa0I7RURJbEIsWUFBQTtFQUNBLHFCQUFBO0FBREY7O0FBR0E7RUFDRSxjQ2pCTTtFRGtCTixTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQzNCTTtFRDRCTixTQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUlBO0VBQ0UsY0NuQ007RURvQ04saUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFERiIsImZpbGUiOiJob2JiaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3ZhcmlhYmVsc1wiO1xuXG4uZ3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTE7XG4gIHBhZGRpbmc6ICRjb21wb25lbnQtcGFkZGluZztcbiAgYm9yZGVyLXJhZGl1czogJGNvbXBvbmVudC1icmFkaXVzO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBncmlkLXJvdy1nYXA6IDEuNXJlbTtcbn1cblxuLmhvYmJ5LWltZ3tcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAkY29tcG9uZW50LWJyYWRpdXM7XG4gIGhlaWdodDogOXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmhvYmJ5LW5hbWV7XG4gIGNvbG9yOiAkZ3JleTU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmhvYmJ5LWRlc2NyaXB0aW9ue1xuICBjb2xvcjogJGdyZXkzO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcblxufVxuXG5oM3tcbiAgY29sb3I6ICRncmV5MjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cbiIsIiRncmV5MTogI0YyRjJGMjtcbiRncmV5MjogIzRGNEY0RjtcbiRncmV5MzogIzgyODI4MjtcbiRncmV5NDogI0M0QzRDNDtcbiRncmV5NTogIzMzMzMzMztcbiRncmV5NjogI0UwRTBFMDtcbiRncmV5NzogI0E5QTlBOTtcbiRncmV5ODogI0JEQkRCRDtcblxuXG4kd2hpdGUxOiAjRkZGO1xuJGJsdWUxOiByZ2JhKDQ3LCAxMjgsIDIzNywgMC43KTtcblxuJGNvbXBvbmVudC1icmFkaXVzOiAxcmVtO1xuJGNvbXBvbmVudC1wYWRkaW5nOiAxcmVtO1xuXG4kbWVkaXVtOiA5NjBweDtcbiRsYXJnZXI6IDEyMDBweDtcbiRzbWFsbDogNjAwcHg7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HobbiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hobbies',
                templateUrl: './hobbies.component.html',
                styleUrls: ['./hobbies.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _biography_biography_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biography/biography.component */ "09+m");
/* harmony import */ var _front_end_skills_front_end_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front-end-skills/front-end-skills.component */ "TX0U");
/* harmony import */ var _back_end_skills_back_end_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back-end-skills/back-end-skills.component */ "txDl");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "KzIc");








class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "grid"], [1, "biography-area", "component-default-styling"], [1, "fe-skill-area", "component-default-styling"], [1, "be-skill-area", "component-default-styling"], [1, "experience-area", "component-default-styling"], [1, "projects-area"], [1, "hobbies-area"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-biography", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-front-end-skills", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-back-end-skills", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-experience", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-projects", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-hobbies", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_biography_biography_component__WEBPACK_IMPORTED_MODULE_1__["BiographyComponent"], _front_end_skills_front_end_skills_component__WEBPACK_IMPORTED_MODULE_2__["FrontEndSkillsComponent"], _back_end_skills_back_end_skills_component__WEBPACK_IMPORTED_MODULE_3__["BackEndSkillsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__["HobbiesComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #F2F2F2;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"bio bio fe be\" \"bio bio projects projects\" \"bio bio projects projects\" \"experience experience projects projects\" \"experience experience projects projects\" \"hobbies blogs blogs blogs\" \"footer footer footer footer\";\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 2rem;\n  grid-row-gap: 2rem;\n  padding: 1.5rem;\n}\n\n@media only screen and (max-width: 1200px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-areas: \"bio bio experience experience\" \"fe fe be be\" \"projects projects projects projects\" \"projects projects projects projects\" \"hobbies blogs blogs blogs\" \"hoobies blogs blogs blogs\" \"footer footer footer footer\";\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-areas: \"bio bio bio bio\" \"fe fe be be\" \"experience experience experience experience\" \"projects projects projects projects\" \"projects projects projects projects\" \"hobbies hobbies blogs blogs\" \"hoobies hoobies blogs blogs\" \"footer footer footer footer\";\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-areas: \"bio bio bio bio\" \"bio bio bio bio\" \"fe fe fe fe\" \"be be be be\" \"experience experience experience experience\" \"projects projects projects projects\" \"projects projects projects projects\" \"hobbies hobbies hobbies hobbies\" \"blogs blogs blogs blogs\" \"footer footer footer footer\";\n  }\n}\n\n.biography-area[_ngcontent-%COMP%] {\n  grid-area: bio;\n}\n\n.fe-skill-area[_ngcontent-%COMP%] {\n  grid-area: fe;\n}\n\n.be-skill-area[_ngcontent-%COMP%] {\n  grid-area: be;\n}\n\n.experience-area[_ngcontent-%COMP%] {\n  grid-area: experience;\n}\n\n.projects-area[_ngcontent-%COMP%] {\n  grid-area: projects;\n}\n\n.hobbies-area[_ngcontent-%COMP%] {\n  grid-area: hobbies;\n}\n\n.footer-area[_ngcontent-%COMP%] {\n  grid-area: footer;\n}\n\n.blogs-area[_ngcontent-%COMP%] {\n  grid-area: blogs;\n}\n\n.component-default-styling[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL192YXJpYWJlbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQ0hNO0FERVI7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsME9BQ0U7RUFPRixxQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUkY7O0FBU0U7RUFkRjtJQWVJLG9PQUNBO0VBUEY7QUFDRjs7QUFjRTtFQXhCRjtJQXlCSSx3UUFDQTtFQVpGO0FBQ0Y7O0FBb0JFO0VBbkNGO0lBb0NJLHdTQUNBO0VBbEJGO0FBQ0Y7O0FBOEJBO0VBQ0UsY0FBQTtBQTNCRjs7QUE4QkE7RUFDRSxhQUFBO0FBM0JGOztBQThCQTtFQUNFLGFBQUE7QUEzQkY7O0FBOEJBO0VBQ0UscUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsbUJBQUE7QUEzQkY7O0FBNkJBO0VBQ0Usa0JBQUE7QUExQkY7O0FBNEJBO0VBQ0UsaUJBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsZ0JBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usc0JDN0VPO0VEOEVQLG1CQzNFa0I7RUQ0RWxCLGFDM0VrQjtBRGtEcEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmVsc1wiO1xuXG5ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTE7XG59XG5cbi5ncmlke1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiYmlvIGJpbyBmZSBiZVwiXG4gICAgXCJiaW8gYmlvIHByb2plY3RzIHByb2plY3RzXCJcbiAgICBcImJpbyBiaW8gcHJvamVjdHMgcHJvamVjdHNcIlxuICAgIFwiZXhwZXJpZW5jZSBleHBlcmllbmNlIHByb2plY3RzIHByb2plY3RzXCJcbiAgICBcImV4cGVyaWVuY2UgZXhwZXJpZW5jZSBwcm9qZWN0cyBwcm9qZWN0c1wiXG4gICAgXCJob2JiaWVzIGJsb2dzIGJsb2dzIGJsb2dzXCJcbiAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gIGdyaWQtcm93LWdhcDogMnJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRsYXJnZXIpIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiYmlvIGJpbyBleHBlcmllbmNlIGV4cGVyaWVuY2VcIlxuICAgIFwiZmUgZmUgYmUgYmVcIlxuICAgIFwicHJvamVjdHMgcHJvamVjdHMgcHJvamVjdHMgcHJvamVjdHNcIlxuICAgIFwicHJvamVjdHMgcHJvamVjdHMgcHJvamVjdHMgcHJvamVjdHNcIlxuICAgIFwiaG9iYmllcyBibG9ncyBibG9ncyBibG9nc1wiXG4gICAgXCJob29iaWVzIGJsb2dzIGJsb2dzIGJsb2dzXCJcbiAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJiaW8gYmlvIGJpbyBiaW9cIlxuICAgIFwiZmUgZmUgYmUgYmVcIlxuICAgIFwiZXhwZXJpZW5jZSBleHBlcmllbmNlIGV4cGVyaWVuY2UgZXhwZXJpZW5jZVwiXG4gICAgXCJwcm9qZWN0cyBwcm9qZWN0cyBwcm9qZWN0cyBwcm9qZWN0c1wiXG4gICAgXCJwcm9qZWN0cyBwcm9qZWN0cyBwcm9qZWN0cyBwcm9qZWN0c1wiXG4gICAgXCJob2JiaWVzIGhvYmJpZXMgYmxvZ3MgYmxvZ3NcIlxuICAgIFwiaG9vYmllcyBob29iaWVzIGJsb2dzIGJsb2dzXCJcbiAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImJpbyBiaW8gYmlvIGJpb1wiXG4gICAgXCJiaW8gYmlvIGJpbyBiaW9cIlxuICAgIFwiZmUgZmUgZmUgZmVcIlxuICAgIFwiYmUgYmUgYmUgYmVcIlxuICAgIFwiZXhwZXJpZW5jZSBleHBlcmllbmNlIGV4cGVyaWVuY2UgZXhwZXJpZW5jZVwiXG4gICAgXCJwcm9qZWN0cyBwcm9qZWN0cyBwcm9qZWN0cyBwcm9qZWN0c1wiXG4gICAgXCJwcm9qZWN0cyBwcm9qZWN0cyBwcm9qZWN0cyBwcm9qZWN0c1wiXG4gICAgXCJob2JiaWVzIGhvYmJpZXMgaG9iYmllcyBob2JiaWVzXCJcbiAgICBcImJsb2dzIGJsb2dzIGJsb2dzIGJsb2dzXCJcbiAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xuICB9XG59XG5cbi5iaW9ncmFwaHktYXJlYXtcbiAgZ3JpZC1hcmVhOiBiaW87XG59XG5cbi5mZS1za2lsbC1hcmVhe1xuICBncmlkLWFyZWE6IGZlO1xufVxuXG4uYmUtc2tpbGwtYXJlYXtcbiAgZ3JpZC1hcmVhOiBiZTtcbn1cblxuLmV4cGVyaWVuY2UtYXJlYXtcbiAgZ3JpZC1hcmVhOiBleHBlcmllbmNlO1xufVxuXG4ucHJvamVjdHMtYXJlYXtcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0cztcbn1cbi5ob2JiaWVzLWFyZWF7XG4gIGdyaWQtYXJlYTogaG9iYmllcztcbn1cbi5mb290ZXItYXJlYXtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG59XG5cbi5ibG9ncy1hcmVhe1xuICBncmlkLWFyZWE6IGJsb2dzO1xufVxuXG4uY29tcG9uZW50LWRlZmF1bHQtc3R5bGluZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlMTtcbiAgYm9yZGVyLXJhZGl1czogJGNvbXBvbmVudC1icmFkaXVzO1xuICBwYWRkaW5nOiAkY29tcG9uZW50LXBhZGRpbmc7XG59XG4iLCIkZ3JleTE6ICNGMkYyRjI7XG4kZ3JleTI6ICM0RjRGNEY7XG4kZ3JleTM6ICM4MjgyODI7XG4kZ3JleTQ6ICNDNEM0QzQ7XG4kZ3JleTU6ICMzMzMzMzM7XG4kZ3JleTY6ICNFMEUwRTA7XG4kZ3JleTc6ICNBOUE5QTk7XG4kZ3JleTg6ICNCREJEQkQ7XG5cblxuJHdoaXRlMTogI0ZGRjtcbiRibHVlMTogcmdiYSg0NywgMTI4LCAyMzcsIDAuNyk7XG5cbiRjb21wb25lbnQtYnJhZGl1czogMXJlbTtcbiRjb21wb25lbnQtcGFkZGluZzogMXJlbTtcblxuJG1lZGl1bTogOTYwcHg7XG4kbGFyZ2VyOiAxMjAwcHg7XG4kc21hbGw6IDYwMHB4O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TX0U":
/*!****************************************************************!*\
  !*** ./src/app/front-end-skills/front-end-skills.component.ts ***!
  \****************************************************************/
/*! exports provided: FrontEndSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontEndSkillsComponent", function() { return FrontEndSkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FrontEndSkillsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r1.percentage, "%");
} }
class FrontEndSkillsComponent {
    constructor() {
        this.skills = [
            { name: 'Angular', percentage: 95 },
            { name: 'Typescript', percentage: 90 },
            { name: 'Redux', percentage: 90 },
            { name: 'CSS', percentage: 75 },
            { name: 'React', percentage: 70 }
        ];
    }
    ngOnInit() {
    }
}
FrontEndSkillsComponent.ɵfac = function FrontEndSkillsComponent_Factory(t) { return new (t || FrontEndSkillsComponent)(); };
FrontEndSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontEndSkillsComponent, selectors: [["app-front-end-skills"]], decls: 4, vars: 1, consts: [["class", "flex", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "progress-bar"], [1, "progress-bar--fill"]], template: function FrontEndSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FrontEndSkillsComponent_div_3_Template, 5, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["section[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  padding: 1rem;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #4F4F4F;\n  font-size: 1rem;\n  padding-bottom: 1rem;\n  margin: 0;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n}\n\n.flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 8rem;\n  height: 0.4rem;\n  background-color: #C4C4C4;\n  border-radius: 1rem;\n}\n\n.progress-bar--fill[_ngcontent-%COMP%] {\n  background-color: rgba(47, 128, 237, 0.7);\n  z-index: 2;\n  height: inherit;\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250LWVuZC1za2lsbHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9fdmFyaWFiZWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkNPTztFRE5QLG1CQ1NrQjtFRFJsQixhQ1NrQjtFRFJsQixxQ0FBQTtBQURGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQ1RNO0VEVU4sZUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFLQSxpQkFBQTtBQUpGOztBQUFFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJDM0JNO0VENEJOLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0N4Qk07RUR5Qk4sVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImZyb250LWVuZC1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyaWFiZWxzXCI7XG5cbnNlY3Rpb257XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTE7XG4gIGJvcmRlci1yYWRpdXM6ICRjb21wb25lbnQtYnJhZGl1cztcbiAgcGFkZGluZzogJGNvbXBvbmVudC1wYWRkaW5nO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuaDN7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAkZ3JleTI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLmZsZXh7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgcGFkZGluZzogMC41cmVtIDA7XG59XG4ucHJvZ3Jlc3MtYmFye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4cmVtO1xuICBoZWlnaHQ6IDAuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk0O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLS1maWxse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTE7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbiIsIiRncmV5MTogI0YyRjJGMjtcbiRncmV5MjogIzRGNEY0RjtcbiRncmV5MzogIzgyODI4MjtcbiRncmV5NDogI0M0QzRDNDtcbiRncmV5NTogIzMzMzMzMztcbiRncmV5NjogI0UwRTBFMDtcbiRncmV5NzogI0E5QTlBOTtcbiRncmV5ODogI0JEQkRCRDtcblxuXG4kd2hpdGUxOiAjRkZGO1xuJGJsdWUxOiByZ2JhKDQ3LCAxMjgsIDIzNywgMC43KTtcblxuJGNvbXBvbmVudC1icmFkaXVzOiAxcmVtO1xuJGNvbXBvbmVudC1wYWRkaW5nOiAxcmVtO1xuXG4kbWVkaXVtOiA5NjBweDtcbiRsYXJnZXI6IDEyMDBweDtcbiRzbWFsbDogNjAwcHg7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontEndSkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-front-end-skills',
                templateUrl: './front-end-skills.component.html',
                styleUrls: ['./front-end-skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _biography_biography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biography/biography.component */ "09+m");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _projects_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/project/project.component */ "u4ch");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _front_end_skills_front_end_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./front-end-skills/front-end-skills.component */ "TX0U");
/* harmony import */ var _back_end_skills_back_end_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back-end-skills/back-end-skills.component */ "txDl");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "KzIc");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _biography_biography_component__WEBPACK_IMPORTED_MODULE_3__["BiographyComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
        _projects_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
        _front_end_skills_front_end_skills_component__WEBPACK_IMPORTED_MODULE_7__["FrontEndSkillsComponent"],
        _back_end_skills_back_end_skills_component__WEBPACK_IMPORTED_MODULE_8__["BackEndSkillsComponent"],
        _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_9__["HobbiesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _biography_biography_component__WEBPACK_IMPORTED_MODULE_3__["BiographyComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
                    _projects_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
                    _front_end_skills_front_end_skills_component__WEBPACK_IMPORTED_MODULE_7__["FrontEndSkillsComponent"],
                    _back_end_skills_back_end_skills_component__WEBPACK_IMPORTED_MODULE_8__["BackEndSkillsComponent"],
                    _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_9__["HobbiesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "txDl":
/*!**************************************************************!*\
  !*** ./src/app/back-end-skills/back-end-skills.component.ts ***!
  \**************************************************************/
/*! exports provided: BackEndSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackEndSkillsComponent", function() { return BackEndSkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function BackEndSkillsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r1.percentage, "%");
} }
class BackEndSkillsComponent {
    constructor() {
        this.skills = [
            { name: 'C#', percentage: 90 },
            { name: '.NET', percentage: 80 },
            { name: 'MS SQL', percentage: 75 },
            { name: 'Python', percentage: 75 },
            { name: 'Flask', percentage: 70 },
            { name: 'MongoDB', percentage: 70 }
        ];
    }
    ngOnInit() {
    }
}
BackEndSkillsComponent.ɵfac = function BackEndSkillsComponent_Factory(t) { return new (t || BackEndSkillsComponent)(); };
BackEndSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackEndSkillsComponent, selectors: [["app-back-end-skills"]], decls: 4, vars: 1, consts: [["class", "flex", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "progress-bar"], [1, "progress-bar--fill"]], template: function BackEndSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BackEndSkillsComponent_div_3_Template, 5, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["section[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  padding: 1rem;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #4F4F4F;\n  font-size: 1rem;\n  padding-bottom: 1rem;\n  margin: 0;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n}\n\n.flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 8rem;\n  height: 0.4rem;\n  background-color: #C4C4C4;\n  border-radius: 1rem;\n}\n\n.progress-bar--fill[_ngcontent-%COMP%] {\n  background-color: rgba(47, 128, 237, 0.7);\n  z-index: 2;\n  height: inherit;\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhY2stZW5kLXNraWxscy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL192YXJpYWJlbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQ09PO0VETlAsbUJDU2tCO0VEUmxCLGFDU2tCO0VEUmxCLHFDQUFBO0FBREY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGNDVE07RURVTixlQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUtBLGlCQUFBO0FBSkY7O0FBQUU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkMzQk07RUQ0Qk4sbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlDQ3hCTTtFRHlCTixVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYmFjay1lbmQtc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3ZhcmlhYmVsc1wiO1xuXG5zZWN0aW9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUxO1xuICBib3JkZXItcmFkaXVzOiAkY29tcG9uZW50LWJyYWRpdXM7XG4gIHBhZGRpbmc6ICRjb21wb25lbnQtcGFkZGluZztcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cbmgze1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJGdyZXkyO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5mbGV4e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufVxuLnByb2dyZXNzLWJhcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiAwLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5NDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLnByb2dyZXNzLWJhci0tZmlsbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUxO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4iLCIkZ3JleTE6ICNGMkYyRjI7XG4kZ3JleTI6ICM0RjRGNEY7XG4kZ3JleTM6ICM4MjgyODI7XG4kZ3JleTQ6ICNDNEM0QzQ7XG4kZ3JleTU6ICMzMzMzMzM7XG4kZ3JleTY6ICNFMEUwRTA7XG4kZ3JleTc6ICNBOUE5QTk7XG4kZ3JleTg6ICNCREJEQkQ7XG5cblxuJHdoaXRlMTogI0ZGRjtcbiRibHVlMTogcmdiYSg0NywgMTI4LCAyMzcsIDAuNyk7XG5cbiRjb21wb25lbnQtYnJhZGl1czogMXJlbTtcbiRjb21wb25lbnQtcGFkZGluZzogMXJlbTtcblxuJG1lZGl1bTogOTYwcHg7XG4kbGFyZ2VyOiAxMjAwcHg7XG4kc21hbGw6IDYwMHB4O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackEndSkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-back-end-skills',
                templateUrl: './back-end-skills.component.html',
                styleUrls: ['./back-end-skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "u4ch":
/*!*******************************************************!*\
  !*** ./src/app/projects/project/project.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProjectComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stack_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", stack_r1, "");
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class ProjectComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], inputs: { project: "project" }, decls: 16, vars: 8, consts: [[1, "grid"], [1, "img", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "flex"], ["target", "_BLANK", 3, "href"], [1, "button--demo"], [3, "href"], [1, "button--code"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectComponent_li_4_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx.project.projectImage + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.projectStack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.projectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.project.projectDemo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.project.projectRepo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".grid[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 15rem 1fr;\n  grid-column-gap: 2rem;\n  font-family: \"Montserrat\", sans-serif;\n}\n@media only screen and (max-width: 600px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-row-gap: 1rem;\n  }\n}\n.img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 1rem;\n  height: 15rem;\n}\n@media only screen and (max-width: 600px) {\n  .img[_ngcontent-%COMP%] {\n    height: 9rem;\n    margin-bottom: 1.5rem;\n    width: 20rem;\n  }\n}\nul[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\nli[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-right: 0.5rem;\n  color: #4F4F4F;\n}\nh5[_ngcontent-%COMP%] {\n  color: #333333;\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 0;\n}\narticle[_ngcontent-%COMP%] {\n  color: #828282;\n  font-size: 0.9rem;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 600px) {\n  .flex[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  width: 7rem;\n  height: 3rem;\n  border-radius: 1rem;\n  font-size: 1.1rem;\n  font-family: \"Montserrat\", sans-serif;\n  cursor: pointer;\n}\n.button--demo[_ngcontent-%COMP%] {\n  color: #FFF;\n  background-color: rgba(47, 128, 237, 0.7);\n}\n.button--code[_ngcontent-%COMP%] {\n  color: rgba(47, 128, 237, 0.7);\n  background-color: #FFF;\n  border: 1px solid rgba(47, 128, 237, 0.7);\n  margin-left: 1rem;\n}\naside[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9fdmFyaWFiZWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxzQkNNTztFRExQLG1CQ1FrQjtFRFBsQixhQ1FrQjtFRFBsQixhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0FBRkY7QUFHRTtFQVJGO0lBU0ksMEJBQUE7SUFDQSxrQkFBQTtFQUFGO0FBQ0Y7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQ1BrQjtFRFFsQixhQUFBO0FBQ0Y7QUFBRTtFQU5GO0lBT0ksWUFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtFQUdGO0FBQ0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUdGO0FBQUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0NyQ007QUR3Q1I7QUFBQTtFQUNFLGNDdENNO0VEdUNOLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBR0Y7QUFBQTtFQUNFLGNDL0NNO0VEZ0ROLGlCQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7QUFHRjtBQUZFO0VBRkY7SUFHSSx1QkFBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7QUFNRjtBQUpBO0VBQ0UsV0MzRE87RUQ0RFAseUNDM0RNO0FEa0VSO0FBTEE7RUFDRSw4QkM5RE07RUQrRE4sc0JDaEVPO0VEaUVQLHlDQUFBO0VBQ0EsaUJBQUE7QUFRRjtBQUpBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFPRiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmVsc1wiO1xuJGltYWdlLWNvbHVtbi1zaXplOiAxNXJlbTtcblxuLmdyaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUxO1xuICBib3JkZXItcmFkaXVzOiAkY29tcG9uZW50LWJyYWRpdXM7XG4gIHBhZGRpbmc6ICRjb21wb25lbnQtcGFkZGluZztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkaW1hZ2UtY29sdW1uLXNpemUgMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xuICB9XG59XG4uaW1ne1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRjb21wb25lbnQtYnJhZGl1cztcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc21hbGwpIHtcbiAgICBoZWlnaHQ6IDlyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgfVxufVxuXG51bHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5saXtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBjb2xvcjogJGdyZXkyO1xufVxuXG5oNXtcbiAgY29sb3I6ICRncmV5NTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYXJ0aWNsZXtcbiAgY29sb3I6ICRncmV5MztcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5mbGV4e1xuICBkaXNwbGF5OiBmbGV4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbCkge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5idXR0b257XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDdyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24tLWRlbW97XG4gIGNvbG9yOiAkd2hpdGUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTE7XG59XG4uYnV0dG9uLS1jb2Rle1xuICBjb2xvcjogJGJsdWUxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUxO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTE7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG5cbmFzaWRle1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xufVxuIiwiJGdyZXkxOiAjRjJGMkYyO1xuJGdyZXkyOiAjNEY0RjRGO1xuJGdyZXkzOiAjODI4MjgyO1xuJGdyZXk0OiAjQzRDNEM0O1xuJGdyZXk1OiAjMzMzMzMzO1xuJGdyZXk2OiAjRTBFMEUwO1xuJGdyZXk3OiAjQTlBOUE5O1xuJGdyZXk4OiAjQkRCREJEO1xuXG5cbiR3aGl0ZTE6ICNGRkY7XG4kYmx1ZTE6IHJnYmEoNDcsIDEyOCwgMjM3LCAwLjcpO1xuXG4kY29tcG9uZW50LWJyYWRpdXM6IDFyZW07XG4kY29tcG9uZW50LXBhZGRpbmc6IDFyZW07XG5cbiRtZWRpdW06IDk2MHB4O1xuJGxhcmdlcjogMTIwMHB4O1xuJHNtYWxsOiA2MDBweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss']
            }]
    }], function () { return []; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.component */ "u4ch");




function ProjectsComponent_app_project_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project", 3);
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r1);
} }
class ProjectsComponent {
    constructor() {
        this.projects = [
            {
                projectName: 'KSU Sports Statistics',
                projectDescription: 'This was for my Senior Project at KSU. Myself and 3 others were tasked with creating a website to showcase Sports Statistics at KSU in a more informative way than implemented currently. I was the front end developer for the group and created a more polished, mobile friendly design.',
                projectStack: ['Angular', 'TS', 'NGRX', 'MDB'],
                projectDemo: 'https://www.youtube.com/embed/0pRRadQgbEI',
                projectRepo: 'https://github.com/Capstone-Group-1/KSU-Sport-Statistics',
                projectImage: 'assets/sports-stats.png'
            },
            {
                projectName: 'Facial Recognition App',
                projectDescription: 'I found a cool facial recognition library for python and wanted to make an app with it. A user uploads a picture, it is compared against a picture of someone on the server using the library, and it outputs whether the picture is of that person or not.',
                projectStack: ['Python, Flask'],
                projectDemo: 'https://www.youtube.com/embed/Ac9AInnN80A',
                projectRepo: 'https://github.com/justinkmckenna/Facial-Recognition-App',
                projectImage: 'assets/pope.png'
            },
            {
                projectName: 'Web Scraper',
                projectDescription: 'This program scrapes the social media site VK. The program logs in, scrolls through the news feed, and grabs all words in every post. It then outputs the word count and 10 most used words in english.',
                projectStack: ['Python', 'Selenium', 'GoogleTranslateAPI'],
                projectDemo: 'https://www.youtube.com/embed/6jE3JbdOLdc',
                projectRepo: 'https://github.com/justinkmckenna/Web-Scraper',
                projectImage: 'assets/web-scraper.png'
            }
        ];
    }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 4, vars: 1, consts: [[1, "grid"], [1, "header"], [3, "project", 4, "ngFor", "ngForOf"], [3, "project"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Side Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectsComponent_app_project_3_Template, 1, 1, "app-project", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]], styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 1rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  padding: 1rem;\n  font-family: \"Montserrat\", sans-serif;\n  color: #4F4F4F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vX3ZhcmlhYmVscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHNCQ0NPO0VEQVAsbUJDR2tCO0VERmxCLGFDR2tCO0VERmxCLHFDQUFBO0VBQ0EsY0NaTTtBRFdSIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3ZhcmlhYmVsc1wiO1xuXG4uZ3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtcm93LWdhcDogMXJlbTtcbn1cblxuLmhlYWRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlMSA7XG4gIGJvcmRlci1yYWRpdXM6ICRjb21wb25lbnQtYnJhZGl1cztcbiAgcGFkZGluZzogJGNvbXBvbmVudC1wYWRkaW5nO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogJGdyZXkyO1xufVxuIiwiJGdyZXkxOiAjRjJGMkYyO1xuJGdyZXkyOiAjNEY0RjRGO1xuJGdyZXkzOiAjODI4MjgyO1xuJGdyZXk0OiAjQzRDNEM0O1xuJGdyZXk1OiAjMzMzMzMzO1xuJGdyZXk2OiAjRTBFMEUwO1xuJGdyZXk3OiAjQTlBOUE5O1xuJGdyZXk4OiAjQkRCREJEO1xuXG5cbiR3aGl0ZTE6ICNGRkY7XG4kYmx1ZTE6IHJnYmEoNDcsIDEyOCwgMjM3LCAwLjcpO1xuXG4kY29tcG9uZW50LWJyYWRpdXM6IDFyZW07XG4kY29tcG9uZW50LXBhZGRpbmc6IDFyZW07XG5cbiRtZWRpdW06IDk2MHB4O1xuJGxhcmdlcjogMTIwMHB4O1xuJHNtYWxsOiA2MDBweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map