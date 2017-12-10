webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'cityApp';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_authentication_login_login_component__ = __webpack_require__("../../../../../src/app/shared/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/main/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_authentication_registration_registration_component__ = __webpack_require__("../../../../../src/app/shared/authentication/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_my_issues_my_issues_component__ = __webpack_require__("../../../../../src/app/main/my-issues/my-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_create_issue_create_issue_component__ = __webpack_require__("../../../../../src/app/main/create-issue/create-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_authentication_auth_service__ = __webpack_require__("../../../../../src/app/shared/authentication/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_authentication_http_interceptors_base_url_interceptor__ = __webpack_require__("../../../../../src/app/shared/authentication/http-interceptors/base-url.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_authentication_http_interceptors_authorization_interceptor__ = __webpack_require__("../../../../../src/app/shared/authentication/http-interceptors/authorization.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_issues_issues_component__ = __webpack_require__("../../../../../src/app/main/issues/issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__main_issues_service__ = __webpack_require__("../../../../../src/app/main/issues.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__main_issue_view_issue_view_component__ = __webpack_require__("../../../../../src/app/main/issue-view/issue-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__main_home_home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__main_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/main/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__main_profile_profile_component__ = __webpack_require__("../../../../../src/app/main/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_authentication_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_top_bar_top_bar_component__["a" /* TopBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_authentication_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_my_issues_my_issues_component__["a" /* MyIssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__main_create_issue_create_issue_component__["a" /* CreateIssueComponent */],
                __WEBPACK_IMPORTED_MODULE_21__main_issues_issues_component__["a" /* IssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__main_issue_view_issue_view_component__["a" /* IssuesViewComponent */],
                __WEBPACK_IMPORTED_MODULE_27__main_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__main_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_30__main_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCo7q0OQ_G2atP-FrlEHVEIEuYk2V-PxuM',
                    libraries: ['geometry', 'places']
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_router__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_router__["c" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__shared_authentication_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_22__main_issues_service__["a" /* IssuesService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_19__shared_authentication_http_interceptors_base_url_interceptor__["a" /* BaseUrlInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_20__shared_authentication_http_interceptors_authorization_interceptor__["a" /* AuthorizationInterceptor */],
                    multi: true
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authentication_login_login_component__ = __webpack_require__("../../../../../src/app/shared/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_authentication_registration_registration_component__ = __webpack_require__("../../../../../src/app/shared/authentication/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_my_issues_my_issues_component__ = __webpack_require__("../../../../../src/app/main/my-issues/my-issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_create_issue_create_issue_component__ = __webpack_require__("../../../../../src/app/main/create-issue/create-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_issues_issues_component__ = __webpack_require__("../../../../../src/app/main/issues/issues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_issue_view_issue_view_component__ = __webpack_require__("../../../../../src/app/main/issue-view/issue-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_home_home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/main/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_profile_profile_component__ = __webpack_require__("../../../../../src/app/main/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        component: __WEBPACK_IMPORTED_MODULE_9__main_home_home_component__["a" /* HomeComponent */],
        path: ''
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_2__shared_authentication_login_login_component__["a" /* LoginComponent */],
        path: 'login'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_4__shared_authentication_registration_registration_component__["a" /* RegistrationComponent */],
        path: 'register'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */],
        path: '',
        children: [
            {
                component: __WEBPACK_IMPORTED_MODULE_5__main_my_issues_my_issues_component__["a" /* MyIssuesComponent */],
                path: 'my-issues'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_6__main_create_issue_create_issue_component__["a" /* CreateIssueComponent */],
                path: 'create-issue'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_7__main_issues_issues_component__["a" /* IssuesComponent */],
                path: 'issues'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_8__main_issue_view_issue_view_component__["a" /* IssuesViewComponent */],
                path: 'issues/:id'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_10__main_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                path: 'admin-dashboard'
            },
            {
                component: __WEBPACK_IMPORTED_MODULE_11__main_profile_profile_component__["a" /* ProfileComponent */],
                path: 'profile'
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"colored-text headline\">Admin Dashboard</h2>\n\n<div class=\"col-md-12 create-issue\">\n    <div class=\"col-md-6 users\">\n        <p>\n            <i class=\"colored-text\">Users waiting for aproval:</i>\n        </p>\n        <div class=\"user-pannel col-md-12\">\n            <p>\n                <span class=\"my-label\">Name:</span> Raul boosu</p>\n            <p>\n                <span class=\"my-label\">Email:</span> Raul@google.com</p>\n            <p>\n                <span class=\"my-label\">Gender:</span> om</p>\n            <p>\n                <span class=\"my-label\">Age:</span> 12</p>\n            <button class=\"simple-button-style\">\n                See Location\n            </button>\n            <button class=\"button-gradient\">\n                Decline\n            </button>\n            <button class=\"simple-button-style\">\n                Approve\n            </button>\n        </div>\n    </div>\n    <agm-map class=\"map col-md-6 no-padding\" [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\">\n        <agm-marker [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\" (dragEnd)=\"markerClicked($event)\"\n            [markerDraggable]=\"true\"></agm-marker>\n    </agm-map>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/admin-dashboard/admin-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-issue {\n  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n  margin-top: 50px;\n  height: 400px;\n  padding: 0px; }\n  .create-issue > div, .create-issue map {\n    display: inline-block; }\n  .create-issue .users {\n    padding: 50px; }\n    .create-issue .users .user-pannel {\n      border-bottom: 1px solid #4444f0; }\n      .create-issue .users .user-pannel .my-label {\n        color: grey;\n        font-style: italic; }\n      .create-issue .users .user-pannel button {\n        margin-top: 20px;\n        margin-bottom: 20px;\n        margin-right: 20px; }\n  .create-issue .map {\n    height: inherit;\n    width: 100%;\n    float: right; }\n\n.headline {\n  margin-top: 50px;\n  border-top: 2px solid #4444f0;\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(mapsAPILoader, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.router = router;
        // @ViewChild('search')
        // public searchElementRef: ElementRef;
        // @ViewChild(AgmMap)
        // public agmMap: AgmMap;
        this.initialLocation = {
            longitude: 21.226788,
            latitude: 45.760696
        };
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        // this.mapsAPILoader.load().then(() => {
        //     const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
        //     autocomplete.addListener('place_changed', () => {
        //         const place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //         if (place.geometry === undefined || place.geometry === null) {
        //             return;
        //         }
        //         this.initialLocation.latitude = place.geometry.location.lat();
        //         this.initialLocation.longitude = place.geometry.location.lng();
        //         this.agmMap.triggerResize();
        //         // console.log(this.agmMarker.longitude);
        //     });
        // });
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("../../../../../src/app/main/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/admin-dashboard/admin-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/create-issue/create-issue.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"colored-text headline\">Create Issue</h2>\n\n<div class=\"col-md-12 create-issue\">\n    <div class=\"col-md-4 form-create-issue\">\n        <p class=\"grey-text\">Make sure you fill the information below corectly, otherwise we will be force to ban you.</p>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && createNewIssue()\" #f=\"ngForm\" novalidate>\n            <mat-form-field class=\"full-width\">\n                <input class=\"colored-text\" name=\"title\" [(ngModel)]=\"createIssue.title\" matInput placeholder=\"Title\" required />\n                <mat-error>Please enter a valid title</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"full-width\">\n                <textarea minlength=\"150\" maxlength=\"250\" matInput name=\"description\" [(ngModel)]=\"createIssue.description\" placeholder=\"Description (150-250)\" required></textarea>\n                <mat-error>Please enter a valid description</mat-error>\n            </mat-form-field>\n            <button class=\"simple-button-style submit-btn float-right\">Submit\n                <mat-icon class=\" float-right\">arrow_forward</mat-icon>\n            </button>\n        </form>\n        <div class=\"fileUpload btn\">\n            <span>Upload Images\n                <mat-icon>file_upload</mat-icon>\n            </span>\n            <input class=\"upload\" type=\"file\" name=\"img\" accept=\"image/*\" (change)=\"submitIssue($event)\" multiple>\n        </div>\n        <mat-progress-spinner [diameter]=\"30\" class=\" spinner display-inline-block\" *ngIf=\"uploadingPhotos\" mode=\"indeterminate\"></mat-progress-spinner>\n            <p class=\"uploded-images\" *ngIf=\"noOfImages\">{{noOfImages}} images</p>\n    </div>\n    <input class=\"colored-text map-input\" #search placeholder=\"Location\" />\n    <agm-map class=\"map col-md-8 no-padding\" [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\">\n        <agm-marker [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\" (dragEnd)=\"markerClicked($event)\"\n            [markerDraggable]=\"true\"></agm-marker>\n    </agm-map>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/create-issue/create-issue.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-issue {\n  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n  margin-top: 50px;\n  height: 400px;\n  padding: 0px; }\n  .create-issue > div, .create-issue map {\n    display: inline-block; }\n  .create-issue .form-create-issue {\n    padding: 50px; }\n  .create-issue .map {\n    height: inherit;\n    width: 100%;\n    float: right; }\n  .create-issue .map-input {\n    margin-top: -200px;\n    position: absolute;\n    top: 210px;\n    left: 25%;\n    margin-left: 400px;\n    z-index: 999;\n    width: 400px;\n    padding: 10px 10px 10px 10px;\n    color: #4444f0;\n    background-color: white;\n    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n    border: none; }\n    .create-issue .map-input:focus {\n      outline: none; }\n  .create-issue .fileUpload {\n    position: relative;\n    overflow: hidden;\n    margin: 10px; }\n  .create-issue .fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .create-issue .btn {\n    border-radius: 0px;\n    border: 1px solid #4444f0;\n    color: #4444f0;\n    padding: 5px 10px 5px 10px;\n    margin: 0px; }\n  .create-issue mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n    vertical-align: bottom;\n    padding-left: 5px;\n    padding-right: 5px; }\n  .create-issue .uploded-images {\n    color: grey;\n    font-size: 14px;\n    font-style: italic; }\n  .create-issue .spinner {\n    vertical-align: bottom; }\n\n.headline {\n  margin-top: 50px;\n  border-top: 2px solid #4444f0;\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/create-issue/create-issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateIssueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__issues_service__ = __webpack_require__("../../../../../src/app/main/issues.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateIssueComponent = (function () {
    function CreateIssueComponent(router, mapsAPILoader, issuesService, snackbar) {
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.issuesService = issuesService;
        this.snackbar = snackbar;
        this.noOfImages = 0;
        this.initialLocation = {
            longitude: 21.226788,
            latitude: 45.760696
        };
        this.createIssue = {
            title: '',
            description: '',
            location: {
                longitude: null,
                latitude: null
            },
            photos: []
        };
        this.uploadingPhotos = false;
    }
    CreateIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agmMarker.longitude = this.initialLocation.longitude;
        this.agmMarker.latitude = this.initialLocation.latitude;
        this.agmMap.zoom = 15;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                console.log(place.geometry.location.lat());
                _this.initialLocation.latitude = place.geometry.location.lat();
                _this.initialLocation.longitude = place.geometry.location.lng();
                _this.agmMap.triggerResize();
                _this.agmMap.triggerResize();
                // console.log(this.agmMarker.longitude);
            });
        });
    };
    CreateIssueComponent.prototype.markerClicked = function ($event) {
        this.initialLocation.latitude = $event.coords.lat;
        this.initialLocation.longitude = $event.coords.lng;
    };
    CreateIssueComponent.prototype.submitIssue = function ($event) {
        var _this = this;
        var formData = new FormData();
        for (var i = 0; i < $event.target.files.length; i++) {
            formData.append('photos', $event.target.files[i]);
            this.noOfImages++;
        }
        this.uploadingPhotos = true;
        this.issuesService.uploadPhoto(formData).subscribe(function (res) {
            _this.createIssue.photos = res;
            _this.uploadingPhotos = false;
        });
    };
    CreateIssueComponent.prototype.createNewIssue = function () {
        var _this = this;
        this.createIssue.location.latitude = this.initialLocation.latitude;
        this.createIssue.location.longitude = this.initialLocation.longitude;
        this.issuesService.createIssue(this.createIssue).subscribe(function (res) {
            _this.handleResponse(res.message);
        });
    };
    CreateIssueComponent.prototype.notify = function (status, text) {
        this.snackbar.open(status, text, {
            duration: 3000
        });
    };
    CreateIssueComponent.prototype.handleResponse = function (text) {
        this.notify(text, ' ');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CreateIssueComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */])
    ], CreateIssueComponent.prototype, "agmMap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* AgmMarker */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* AgmMarker */])
    ], CreateIssueComponent.prototype, "agmMarker", void 0);
    CreateIssueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-issue',
            template: __webpack_require__("../../../../../src/app/main/create-issue/create-issue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/create-issue/create-issue.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_3__issues_service__["a" /* IssuesService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__["a" /* MatSnackBar */]])
    ], CreateIssueComponent);
    return CreateIssueComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"logo-cont\">\n        ala alaʻole\n    </div>\n    <input class=\"colored-text map-input\" #search placeholder=\"Location\" />\n    <agm-map class=\"map big-map no-padding\" [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\">\n        <agm-marker [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\" (dragEnd)=\"markerClicked($event)\"\n            [markerDraggable]=\"true\"></agm-marker>\n    </agm-map>\n\n    <div class=\"mask\">\n\n    </div>\n\n    <div class=\"saying\">\n        <p>For those moments when you just feel\n            <i>ala alaʻole</i>\n        </p>\n        <p>\n            <i>Become a contribuitor now.</i>\n        </p>\n    </div>\n\n    <div class=\"buttons\">\n        <button [routerLink]=\"['login']\" class=\"clickable\">Login</button>\n        <button [routerLink]=\"['register']\" class=\"clickable\">Register</button>\n    </div>\n\n    <div class=\"col-md-12 issue-container\" id=\"scrollTo\">\n        <div style=\"width:100%;text-align:center\">\n            <span *ngIf=\"boolIssues\" style=\"border: 1px solid black;padding: 20px;\">\n                There seems like you're living in the perfect area. There are no issues. #goals\n                <span style=\"color:red\">&#10084;</span>\n            </span>\n        </div>\n\n        <div class=\"col-md-12 issue no-padding\" *ngFor=\"let issue of issues\">\n            <div class=\"col-md-6 issue-info-container\">\n                <p class=\"display-inline score\">{{issue.score}}</p>\n                <h2 class=\"colored-text display-inline\">{{issue.title}}</h2>\n                <p class=\"description\">{{issue.description}}\n                </p>\n                <div class=\"col-md-12 no-padding image-container\" *ngIf=\"issue.photos.length!==0\">\n                    <div class=\"image-holder\">\n                        <img src=\"{{issue.photos[0]?.path}}\" />\n                    </div>\n                    <div class=\"image-holder float-right\">\n                        <img src=\"{{issue.photos[1]?.path}}\" />\n                    </div>\n                </div>\n                <div class=\"info-holder\">\n                    <p class=\"comments\">{{issue.commentNumber}} comments</p>\n                    <button (click)=\"navigateToIssue(issue)\" class=\"float-right go-to-issue-btn simple-button-style\">See more\n                        <mat-icon class=\" float-right\">arrow_forward</mat-icon>\n                    </button>\n                </div>\n            </div>\n            <agm-map class=\" col-md-6 map  no-padding\" [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\">\n                <agm-marker [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\" (dragEnd)=\"markerClicked($event)\"\n                    [markerDraggable]=\"true\"></agm-marker>\n            </agm-map>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  height: 100vh;\n  padding: 0px;\n  width: 100vw; }\n  .container .big-map {\n    opacity: 0.2; }\n  .container .map {\n    height: inherit;\n    width: inherit; }\n  .container .saying {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -290.5px;\n    margin-top: 55px;\n    color: white;\n    font-size: 26px;\n    text-align: center; }\n  .container .buttons {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -290.5px;\n    margin-top: 160px;\n    color: white;\n    font-size: 26px;\n    text-align: center;\n    margin-left: -203px; }\n    .container .buttons button {\n      width: 200px;\n      text-align: center;\n      font-size: 19px;\n      padding: 10px;\n      background-color: transparent;\n      border: 2px solid white;\n      color: white; }\n      .container .buttons button:focus {\n        outline: none; }\n  .container .mask {\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    background-color: black;\n    top: 0;\n    opacity: 0.2; }\n  .container .logo-cont {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -300px;\n    margin-top: -170px;\n    z-index: 999;\n    width: 600px;\n    font-size: 133px;\n    color: white; }\n  .container .map-input {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -300px;\n    z-index: 999;\n    width: 600px;\n    padding: 10px 10px 10px 10px;\n    color: #4444f0;\n    background-color: white;\n    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n    border: none; }\n    .container .map-input:focus {\n      outline: none; }\n  .container .issue-container .issue {\n    height: 375px;\n    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n    margin-top: 50px; }\n    .container .issue-container .issue > div, .container .issue-container .issue .map {\n      display: inline-block; }\n    .container .issue-container .issue:nth-child(even) .issue-info-container {\n      float: right; }\n    .container .issue-container .issue:last-child {\n      margin-bottom: 50px; }\n    .container .issue-container .issue .map {\n      float: right;\n      padding: 0px;\n      height: 375px;\n      width: 100%; }\n    .container .issue-container .issue .issue-info-container {\n      padding: 45px; }\n      .container .issue-container .issue .issue-info-container .description {\n        margin: 25px 55px 25px 55px;\n        margin-top: 25px;\n        font-size: 18px;\n        color: grey; }\n      .container .issue-container .issue .issue-info-container .score {\n        color: grey;\n        padding: 5px;\n        text-align: center;\n        margin-left: 5px;\n        margin-right: 15px;\n        font-size: 23px;\n        font-weight: bold; }\n      .container .issue-container .issue .issue-info-container .info-holder {\n        position: absolute;\n        width: 94%;\n        bottom: 17px; }\n    .container .issue-container .issue .image-container {\n      width: 100%;\n      height: 100px;\n      padding: 0px; }\n      .container .issue-container .issue .image-container .image-holder {\n        display: inline-block;\n        height: inherit;\n        padding: 0px;\n        width: 50%; }\n        .container .issue-container .issue .image-container .image-holder img {\n          -o-object-fit: cover;\n             object-fit: cover;\n          height: 100%;\n          width: 100%; }\n    .container .issue-container .issue .comments {\n      font-size: 13px;\n      font-style: italic;\n      color: grey;\n      display: inline-block;\n      margin-top: 40px; }\n    .container .issue-container .issue .go-to-issue-btn {\n      margin-top: 40px;\n      display: inline-block;\n      width: 140px;\n      padding: 2px 5px 2px 5px; }\n      .container .issue-container .issue .go-to-issue-btn mat-icon {\n        vertical-align: sub; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__issues_service__ = __webpack_require__("../../../../../src/app/main/issues.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(mapsAPILoader, router, issueService) {
        this.mapsAPILoader = mapsAPILoader;
        this.router = router;
        this.issueService = issueService;
        this.initialLocation = {
            longitude: 21.226788,
            latitude: 45.760696
        };
        this.issues = [];
        this.boolIssues = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                _this.initialLocation.latitude = place.geometry.location.lat();
                _this.initialLocation.longitude = place.geometry.location.lng();
                _this.agmMap.triggerResize();
                _this.issueService.getIssuesWithParam(_this.initialLocation).subscribe(function (res) {
                    _this.issues = res;
                    if (!_this.issues.length) {
                        _this.boolIssues = true;
                    }
                    else {
                        _this.boolIssues = false;
                    }
                    // this.scrollPage();
                });
            });
        });
    };
    // scrollPage() {
    //     const element = document.querySelector('#scrollTo');
    //     console.log(element.scrollHeight);
    // }
    HomeComponent.prototype.navigateToIssue = function (issue) {
        this.router.navigate(['issues', issue.id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomeComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */])
    ], HomeComponent.prototype, "agmMap", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/main/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__issues_service__["a" /* IssuesService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/issue-view/issue-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"colored-text headline\">Issue Viewer</h2>\n<button class=\"float-right simple-button-style save-btn\" *ngIf=\"!visitor\">Save\n    <mat-icon> check</mat-icon>\n</button>\n\n<div class=\"col-md-12 issue row \">\n    <div class=\"col-md-6 issue-info-container\">\n        <mat-icon [ngClass]=\"{'green': issue.voteStatus === 1}\" class=\"clickable upvote\" (click)=\"upVoteIssue(issue)\">keyboard_arrow_up</mat-icon>\n        <p [ngClass]=\"{'green': issue.voteStatus === 1, 'red':issue.voteStatus === -1}\" class=\"display-inline score\">{{issue.score}}</p>\n        <mat-icon [ngClass]=\"{'red': issue.voteStatus === -1, 'grey':issue.voteStatus === 0}\" class=\"clickable downvote\" (click)=\"downVoteIssue(issue)\">keyboard_arrow_down</mat-icon>\n        <h2 class=\"colored-text display-inline\">{{issue.title}}</h2>\n        <p class=\"description\"> {{issue.description}}\n        </p>\n        <div class=\"col-md-12 comments-container\">\n            <p class=\"colored-text\" *ngIf=\"!visitor\">Add comment</p>\n            <mat-form-field class=\"full-width\" *ngIf=\"!visitor\">\n                <textarea minlength=\"5\" [(ngModel)]=\"comment\" matInput name=\"description\" placeholder=\"Comment\"\n                    required></textarea>\n                <mat-error>Please enter a valid description</mat-error>\n            </mat-form-field>\n            <button class=\"button-gradient float-right\" (click)=\"postComment()\" *ngIf=\"!visitor\">\n                Post\n            </button>\n            <p class=\"colored-text\">Comments</p>\n            <div class=\"comment\" *ngFor=\"let comment of issue.comments\">\n                <p>{{comment.user.name}} - </p>\n                <p class=\"date\"> {{comment.createdAt}}</p>\n                <p class=\"text\">{{comment.text}}</p>\n                <mat-icon class=\"float-right\" *ngIf=\"!visitor\">delete</mat-icon>\n                <mat-icon class=\"float-right\" *ngIf=\"!visitor\">edit</mat-icon>\n            </div>\n        </div>\n    </div>\n\n    <!-- right column maps and images -->\n    <input class=\"colored-text map-input\" #search placeholder=\"Location\" />\n\n    <div class=\"col-md-6 no-padding\">\n        <agm-map class=\"map  no-padding\" [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\">\n            <agm-marker [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\" ></agm-marker>\n        </agm-map>\n        <div class=\" no-padding image-container\">\n            <div class=\"image-holder\" *ngFor=\"let photo of issue.photos\">\n                <img src=\"{{photo.path}}\" />\n            </div>\n        </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/issue-view/issue-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".save-btn {\n  margin-top: -45px; }\n\n.issue {\n  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n  margin: 0;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  height: auto;\n  padding: 0px; }\n  .issue > div, .issue map {\n    display: inline-block; }\n  .issue .map {\n    height: 400px;\n    width: 100%;\n    float: right; }\n  .issue .map-input {\n    display: none;\n    margin-top: -200px;\n    position: absolute;\n    top: 210px;\n    left: 25%;\n    margin-left: 400px;\n    z-index: 999;\n    width: 400px;\n    padding: 10px 10px 10px 10px;\n    color: #4444f0;\n    background-color: white;\n    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.75);\n    border: none; }\n    .issue .map-input:focus {\n      outline: none; }\n  .issue mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n    vertical-align: bottom;\n    padding-left: 5px;\n    padding-right: 5px; }\n  .issue .image-container {\n    width: 100%;\n    height: auto;\n    display: block;\n    padding: 0px; }\n    .issue .image-container .image-holder {\n      box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n      display: inline-block;\n      height: 300px;\n      padding: 0px;\n      width: 100%; }\n      .issue .image-container .image-holder:last-child {\n        margin-bottom: 50px; }\n      .issue .image-container .image-holder img {\n        -o-object-fit: cover;\n           object-fit: cover;\n        height: 100%;\n        width: 100%; }\n  .issue .issue-info-container {\n    height: inherit;\n    padding: 45px; }\n    .issue .issue-info-container .description {\n      margin: 25px 55px 25px 55px;\n      font-size: 18px;\n      color: grey; }\n    .issue .issue-info-container .score {\n      margin-right: 15px;\n      color: grey;\n      padding: 5px;\n      text-align: center;\n      font-size: 23px;\n      font-weight: bold; }\n    .issue .issue-info-container .upvote {\n      position: absolute;\n      font-size: 40px;\n      top: 15px;\n      left: 32px;\n      color: grey; }\n    .issue .issue-info-container .downvote {\n      position: absolute;\n      font-size: 40px;\n      top: 73px;\n      left: 32px;\n      color: grey; }\n  .issue .comments-container {\n    padding: 0px; }\n    .issue .comments-container .comment {\n      border-bottom: 1px solid #4444f0;\n      padding: 25px 25px 25px 25px; }\n      .issue .comments-container .comment > p {\n        display: inline; }\n      .issue .comments-container .comment .date {\n        font-style: italic;\n        color: grey; }\n      .issue .comments-container .comment .text {\n        display: block;\n        color: #4444f0; }\n      .issue .comments-container .comment mat-icon {\n        color: #4444f0;\n        cursor: pointer; }\n        .issue .comments-container .comment mat-icon:hover {\n          color: #efbcff; }\n\n.headline {\n  margin-top: 50px;\n  border-top: 2px solid #4444f0;\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/issue-view/issue-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__issues_service__ = __webpack_require__("../../../../../src/app/main/issues.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Global__ = __webpack_require__("../../../../../src/app/shared/Global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IssuesViewComponent = (function () {
    function IssuesViewComponent(router, activatedRoute, issuesService, snackbar) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.issuesService = issuesService;
        this.snackbar = snackbar;
        this.initialLocation = {
            longitude: 21.226788,
            latitude: 45.760696
        };
        this.issue = {
            id: null,
            title: '',
            description: '',
            location: {
                longitude: null,
                latitude: null
            },
            score: null,
            voteStatus: null,
            photos: [
                {
                    id: null,
                    path: ''
                }
            ],
            commentNumber: null,
            comments: [
                {
                    id: null,
                    text: '',
                    createdAt: '',
                    user: {
                        name: ''
                    }
                }
            ],
            createdAt: ''
        };
        this.visitor = false;
    }
    IssuesViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.issuesService.getIssueById(param['id']).subscribe(function (res) {
                _this.initialLocation.latitude = res.location.latitude;
                _this.initialLocation.longitude = res.location.longitude;
                res.photos.map(function (y) { return y.path = __WEBPACK_IMPORTED_MODULE_3__shared_Global__["a" /* root */] + y.path; });
                console.log(res);
                _this.issue = res;
            });
        });
        if (localStorage.length === 0) {
            this.visitor = true;
        }
    };
    IssuesViewComponent.prototype.postComment = function () {
        this.issuesService.postComment(this.issue, this.comment).subscribe(function (res) {
            console.log(res);
        });
    };
    IssuesViewComponent.prototype.notify = function (status, text) {
        this.snackbar.open(status, text, {
            duration: 3000
        });
    };
    IssuesViewComponent.prototype.handleResponse = function (text) {
        this.notify(text, ' ');
    };
    IssuesViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issue-view',
            template: __webpack_require__("../../../../../src/app/main/issue-view/issue-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/issue-view/issue-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__issues_service__["a" /* IssuesService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__["a" /* MatSnackBar */]])
    ], IssuesViewComponent);
    return IssuesViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/issues.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssuesService = (function () {
    function IssuesService(http, router) {
        this.http = http;
        this.router = router;
    }
    IssuesService.prototype.getIssues = function () {
        return this.http.get("/issues");
    };
    IssuesService.prototype.getIssuesWithParam = function (location) {
        return this.http.get("/issues?latitude=" + location.latitude + "&longitude=" + location.longitude);
    };
    IssuesService.prototype.getMyIssues = function () {
        return this.http.get("/myissues");
    };
    IssuesService.prototype.getIssueById = function (id) {
        return this.http.get("/issues/" + id);
    };
    IssuesService.prototype.uploadPhoto = function (formData) {
        return this.http.post("/issues/photo/upload", formData);
    };
    IssuesService.prototype.createIssue = function (issue) {
        return this.http.post("/issues", issue);
    };
    IssuesService.prototype.upVoteIssue = function (issue) {
        return this.http.post("/issues/" + issue.id + "/upvote", {});
    };
    IssuesService.prototype.downVoteIssue = function (issue) {
        return this.http.post("/issues/" + issue.id + "/downvote", {});
    };
    IssuesService.prototype.postComment = function (issue, comment) {
        return this.http.post("/issues/" + issue.id + "/comments", { text: comment });
    };
    IssuesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], IssuesService);
    return IssuesService;
}());



/***/ }),

/***/ "../../../../../src/app/main/issues/issues.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- my issues -->\n<h2 class=\"colored-text headline\">Issues</h2>\n<div class=\"issue col-md-12 no-padding\" *ngFor=\"let issue of issues\">\n    <div class=\"col-md-6 issue-info-container\">\n        <mat-icon [ngClass]=\"{'green': issue.voteStatus === 1}\" class=\"clickable upvote\" (click)=\"upVoteIssue(issue)\">keyboard_arrow_up</mat-icon>\n        <p [ngClass]=\"{'green': issue.voteStatus === 1, 'red':issue.voteStatus === -1}\" class=\"display-inline score\"  >{{issue.score}}</p>\n        <mat-icon [ngClass]=\"{'red': issue.voteStatus === -1, 'grey':issue.voteStatus === 0}\" class=\"clickable downvote\" (click)=\"downVoteIssue(issue)\">keyboard_arrow_down</mat-icon>\n        <h2 class=\"colored-text display-inline\" >{{issue.title}}</h2>\n        <!-- <mat-icon class=\"voted\" *ngIf=\"issue.voteStatus === 1\">check</mat-icon> -->\n        <!-- <span class=\"minus-one display-inline\">-</span>\n            <span class=\"plus-one display-inline\">+</span> -->\n        <p class=\"description\">{{issue.description}}\n        </p>\n        <div class=\"col-md-12 no-padding image-container\" *ngIf=\"issue.photos.length!==0\">\n            <div class=\"image-holder\">\n                <img src=\"{{issue.photos[0]?.path}}\" />\n            </div>\n            <div class=\"image-holder float-right\">\n                <img src=\"{{issue.photos[1]?.path}}\" />\n            </div>\n        </div>\n        <div class=\"info-holder\">\n            <p class=\"comments\">{{issue.commentNumber}} comments</p>\n            <button (click)=\"navigateToIssue(issue)\" class=\"float-right go-to-issue-btn simple-button-style\">See more\n                <mat-icon class=\" float-right\">arrow_forward</mat-icon>\n            </button>\n        </div>\n    </div>\n    <agm-map [zoom]=\"15\" class=\"map col-md-6 no-padding\" [latitude]=\"issue.location.latitude\" [longitude]=\"issue.location.longitude\">\n        <agm-marker [latitude]=\"issue.location.latitude\" [longitude]=\"issue.location.longitude\" [markerDraggable]=\"false\"></agm-marker>\n    </agm-map>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/issues/issues.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".issue {\n  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n  height: 375px;\n  margin-top: 50px; }\n  .issue > div, .issue .map {\n    display: inline-block; }\n  .issue .map {\n    height: inherit;\n    float: right; }\n  .issue:nth-child(even) .issue-info-container {\n    float: right; }\n  .issue:last-child {\n    margin-bottom: 50px; }\n  .issue .issue-info-container {\n    height: inherit;\n    padding: 25px; }\n    .issue .issue-info-container .plus-one {\n      float: right;\n      font-size: 25px;\n      background-color: #b8ffb8;\n      width: 50px;\n      text-align: center;\n      border: 1px solid #b8ffb8;\n      border-radius: 10px 0px 0px 10px;\n      color: white; }\n    .issue .issue-info-container .minus-one {\n      float: right;\n      background-color: #ffb8b8;\n      font-size: 25px;\n      width: 50px;\n      text-align: center;\n      border: 1px solid #ffb8b8;\n      border-radius: 0px 10px 10px 0px;\n      color: white; }\n    .issue .issue-info-container .description {\n      margin: 25px 55px 25px 55px;\n      margin-top: 25px;\n      font-size: 18px;\n      color: grey; }\n    .issue .issue-info-container .score {\n      color: grey;\n      padding: 5px;\n      text-align: center;\n      margin-left: 5px;\n      margin-right: 15px;\n      font-size: 23px;\n      font-weight: bold; }\n    .issue .issue-info-container .upvote {\n      position: absolute;\n      font-size: 40px;\n      top: -3px;\n      left: 20px;\n      color: grey; }\n    .issue .issue-info-container .downvote {\n      position: absolute;\n      font-size: 40px;\n      top: 55px;\n      left: 20px;\n      color: grey; }\n    .issue .issue-info-container .image-container {\n      width: 100%;\n      height: 100px;\n      padding: 0px; }\n      .issue .issue-info-container .image-container .image-holder {\n        display: inline-block;\n        height: inherit;\n        padding: 0px;\n        width: 50%; }\n        .issue .issue-info-container .image-container .image-holder img {\n          -o-object-fit: cover;\n             object-fit: cover;\n          height: 100%;\n          width: 100%; }\n    .issue .issue-info-container .comments {\n      font-size: 13px;\n      font-style: italic;\n      color: grey;\n      display: inline-block;\n      margin-top: 40px; }\n    .issue .issue-info-container .go-to-issue-btn {\n      margin-top: 40px;\n      display: inline-block;\n      width: 140px;\n      padding: 2px 5px 2px 5px; }\n      .issue .issue-info-container .go-to-issue-btn mat-icon {\n        vertical-align: sub; }\n  .issue .info-holder {\n    position: absolute;\n    width: 94%;\n    bottom: 17px; }\n\n@media screen and (max-width: 767px) {\n  .issue {\n    height: 600px; }\n    .issue:nth-child(even) .issue-info-container {\n      float: none; }\n    .issue .issue-info-container {\n      height: auto; }\n    .issue .map {\n      height: 300px !important;\n      margin-bottom: 50px; } }\n\n.headline {\n  margin-top: 50px;\n  border-top: 2px solid #4444f0;\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/issues/issues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__issues_service__ = __webpack_require__("../../../../../src/app/main/issues.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Global__ = __webpack_require__("../../../../../src/app/shared/Global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IssuesComponent = (function () {
    function IssuesComponent(router, issuesService, snackbar) {
        this.router = router;
        this.issuesService = issuesService;
        this.snackbar = snackbar;
    }
    IssuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issuesService.getIssues().subscribe(function (res) {
            console.log(res);
            res.map(function (x) {
                x.photos.map(function (y) { return y.path = __WEBPACK_IMPORTED_MODULE_3__shared_Global__["a" /* root */] + y.path; });
                console.log(x.photos);
            });
            console.log(res);
            _this.issues = res;
        });
    };
    IssuesComponent.prototype.navigateToIssue = function (issue) {
        this.router.navigate(['issues', issue.id]);
    };
    IssuesComponent.prototype.upVoteIssue = function (issue) {
        var _this = this;
        this.issuesService.upVoteIssue(issue).subscribe(function (res) {
            if (issue.voteStatus === -1) {
                issue.score += 2;
            }
            else {
                issue.score += 1;
            }
            issue.voteStatus = 1;
        }, function (err) {
            if (err.status === 304) {
                _this.handleResponse('Already Voted');
            }
            if (err.status === 400) {
                _this.handleResponse("Can't vote on your own issues");
            }
        });
    };
    IssuesComponent.prototype.downVoteIssue = function (issue) {
        var _this = this;
        this.issuesService.downVoteIssue(issue).subscribe(function (res) {
            if (issue.voteStatus === 1) {
                issue.score -= 2;
            }
            else {
                issue.score -= 1;
            }
            issue.voteStatus = -1;
        }, function (err) {
            if (err.status === 304) {
                _this.handleResponse('Already Voted');
            }
            if (err.status === 400) {
                _this.handleResponse("Can't vote on your own issues");
            }
        });
    };
    IssuesComponent.prototype.notify = function (status, text) {
        this.snackbar.open(status, text, {
            duration: 3000
        });
    };
    IssuesComponent.prototype.handleResponse = function (text) {
        this.notify(text, ' ');
    };
    IssuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issues',
            template: __webpack_require__("../../../../../src/app/main/issues/issues.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/issues/issues.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__issues_service__["a" /* IssuesService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__["a" /* MatSnackBar */]])
    ], IssuesComponent);
    return IssuesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<div class=\"col-md-12 main-holder\">\n    <router-outlet></router-outlet>        \n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/my-issues/my-issues.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- my issues -->\n<h2 class=\"colored-text headline\">My Issues</h2>\n<div class=\"issue col-md-12 no-padding\" *ngFor=\"let issue of issues\">\n    <div class=\"col-md-6 issue-info-container\">\n        <mat-icon class=\"upvote\">keyboard_arrow_up</mat-icon>\n        <p class=\"display-inline score\">{{issue.score}}</p>\n        <mat-icon class=\"downvote\">keyboard_arrow_down</mat-icon>\n\n        <h2 class=\"colored-text display-inline\">{{issue.title}}</h2>\n        <!-- <span class=\"minus-one display-inline\">-</span>\n            <span class=\"plus-one display-inline\">+</span> -->\n        <p class=\"description\">{{issue.description}}\n        </p>\n        <div class=\"col-md-12 no-padding image-container\" *ngIf=\"issue.photos.length!==0\">\n            <div class=\"image-holder\">\n                <img src=\"{{issue.photos[0]?.path}}\" />\n            </div>\n            <div class=\"image-holder float-right\">\n                <img src=\"{{issue.photos[1]?.path}}\" />\n            </div>\n        </div>\n        <div class=\"info-holder\">\n            <p class=\"comments\">{{issue.commentNumber}} comments</p>\n            <button (click)=\"navigateToIssue(issue)\" class=\"float-right go-to-issue-btn simple-button-style\">See more\n                <mat-icon class=\" float-right\">arrow_forward</mat-icon>\n            </button>\n        </div>\n    </div>\n    <agm-map [zoom]=\"15\" class=\"map col-md-6 no-padding\" [latitude]=\"issue.location.latitude\" [longitude]=\"issue.location.longitude\">\n        <agm-marker [latitude]=\"issue.location.latitude\" [longitude]=\"issue.location.longitude\" [markerDraggable]=\"false\"></agm-marker>\n    </agm-map>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/my-issues/my-issues.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".issue {\n  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n  height: 375px;\n  margin-top: 50px; }\n  .issue > div, .issue .map {\n    display: inline-block; }\n  .issue .map {\n    height: inherit;\n    float: right; }\n  .issue:nth-child(even) .issue-info-container {\n    float: right; }\n  .issue:last-child {\n    margin-bottom: 50px; }\n  .issue .issue-info-container {\n    height: inherit;\n    padding: 25px; }\n    .issue .issue-info-container .plus-one {\n      float: right;\n      font-size: 25px;\n      background-color: #b8ffb8;\n      width: 50px;\n      text-align: center;\n      border: 1px solid #b8ffb8;\n      border-radius: 10px 0px 0px 10px;\n      color: white; }\n    .issue .issue-info-container .minus-one {\n      float: right;\n      background-color: #ffb8b8;\n      font-size: 25px;\n      width: 50px;\n      text-align: center;\n      border: 1px solid #ffb8b8;\n      border-radius: 0px 10px 10px 0px;\n      color: white; }\n    .issue .issue-info-container .description {\n      margin: 25px 55px 25px 55px;\n      font-size: 18px;\n      color: grey; }\n    .issue .issue-info-container .score {\n      color: grey;\n      padding: 5px;\n      text-align: center;\n      margin-right: 15px;\n      font-size: 23px;\n      font-weight: bold; }\n    .issue .issue-info-container .upvote {\n      position: absolute;\n      font-size: 40px;\n      top: -3px;\n      left: 18px;\n      color: grey; }\n    .issue .issue-info-container .downvote {\n      position: absolute;\n      font-size: 40px;\n      top: 55px;\n      left: 18px;\n      color: grey; }\n    .issue .issue-info-container .image-container {\n      width: 100%;\n      height: 100px;\n      padding: 0px; }\n      .issue .issue-info-container .image-container .image-holder {\n        display: inline-block;\n        height: inherit;\n        padding: 0px;\n        width: 50%; }\n        .issue .issue-info-container .image-container .image-holder img {\n          -o-object-fit: cover;\n             object-fit: cover;\n          height: 100%;\n          width: 100%; }\n    .issue .issue-info-container .comments {\n      font-size: 13px;\n      font-style: italic;\n      color: grey;\n      display: inline-block;\n      margin-top: 40px; }\n    .issue .issue-info-container .go-to-issue-btn {\n      margin-top: 40px;\n      display: inline-block;\n      width: 140px;\n      padding: 2px 5px 2px 5px; }\n      .issue .issue-info-container .go-to-issue-btn mat-icon {\n        vertical-align: sub; }\n  .issue .info-holder {\n    position: absolute;\n    width: 94%;\n    bottom: 17px; }\n\n@media screen and (max-width: 767px) {\n  .issue {\n    height: 600px; }\n    .issue:nth-child(even) .issue-info-container {\n      float: none; }\n    .issue .issue-info-container {\n      height: auto; }\n    .issue .map {\n      height: 300px !important;\n      margin-bottom: 50px; } }\n\n.headline {\n  margin-top: 50px;\n  border-top: 2px solid #4444f0;\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/my-issues/my-issues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyIssuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__issues_service__ = __webpack_require__("../../../../../src/app/main/issues.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Global__ = __webpack_require__("../../../../../src/app/shared/Global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyIssuesComponent = (function () {
    function MyIssuesComponent(router, issuesService) {
        this.router = router;
        this.issuesService = issuesService;
    }
    MyIssuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issuesService.getMyIssues().subscribe(function (res) {
            res.map(function (x) {
                x.photos.map(function (y) { return y.path = __WEBPACK_IMPORTED_MODULE_3__shared_Global__["a" /* root */] + y.path; });
            });
            _this.issues = res;
        });
    };
    MyIssuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-issues',
            template: __webpack_require__("../../../../../src/app/main/my-issues/my-issues.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/my-issues/my-issues.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__issues_service__["a" /* IssuesService */]])
    ], MyIssuesComponent);
    return MyIssuesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"colored-text headline\">Profile Management</h2>\n<button class=\"float-right simple-button-style save-btn\">Save\n    <mat-icon> check</mat-icon>\n</button>\n\n<div class=\"col-md-12 create-issue\">\n    <div class=\"col-md-6 users\">\n        <p>\n            <i class=\"colored-text\">Personal Information:</i>\n        </p>\n        <div class=\"user-pannel col-md-12\">\n            <mat-form-field class=\"full-width\">\n                <input class=\"colored-text\" matInput placeholder=\"Name\" required />\n                <mat-error>Please enter a valid title</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"full-width\">\n                <input type=\"email\" class=\"colored-text\" matInput placeholder=\"Email\" required />\n                <mat-error>Please enter a valid age</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"full-width\">\n                <input type=\"number\" class=\"colored-text\" matInput placeholder=\"Age\" required />\n                <mat-error>Please enter a valid age</mat-error>\n            </mat-form-field>\n        </div>\n    </div>\n    <input class=\"colored-text map-input\" #search placeholder=\"Location\" />\n    <agm-map class=\"map col-md-6 no-padding\" [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\">\n        <agm-marker [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\" (dragEnd)=\"markerClicked($event)\"\n            [markerDraggable]=\"true\"></agm-marker>\n    </agm-map>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".save-btn {\n  margin-top: -45px; }\n\n.create-issue {\n  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n  margin-top: 50px;\n  height: 400px;\n  padding: 0px; }\n  .create-issue > div, .create-issue map {\n    display: inline-block; }\n  .create-issue .users {\n    padding: 50px; }\n    .create-issue .users .user-pannel .my-label {\n      color: grey;\n      font-style: italic; }\n    .create-issue .users .user-pannel button {\n      margin-top: 20px;\n      margin-bottom: 20px;\n      margin-right: 20px; }\n  .create-issue .map {\n    height: inherit;\n    width: 100%;\n    float: right; }\n  .create-issue .map-input {\n    margin-top: -200px;\n    position: absolute;\n    top: 210px;\n    left: 50%;\n    margin-left: 250px;\n    z-index: 999;\n    width: 400px;\n    padding: 10px 10px 10px 10px;\n    color: #4444f0;\n    background-color: white;\n    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.75);\n    border: none; }\n    .create-issue .map-input:focus {\n      outline: none; }\n\n.headline {\n  margin-top: 50px;\n  border-top: 2px solid #4444f0;\n  padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(mapsAPILoader, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.router = router;
        this.initialLocation = {
            longitude: 21.226788,
            latitude: 45.760696
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                _this.initialLocation.latitude = place.geometry.location.lat();
                _this.initialLocation.longitude = place.geometry.location.lng();
                _this.agmMap.triggerResize();
                // console.log(this.agmMarker.longitude);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ProfileComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */])
    ], ProfileComponent.prototype, "agmMap", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/main/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 top-bar-container\" *ngIf=\"!visitor\">\n    <div>\n        <ul class=\"menu-list\">\n            <li class=\"clickable logo\" style=\"margin-right:10px;\">\n                ala alaʻole\n            </li>\n            <li class=\"clickable\" [routerLink]=\"['','issues']\">\n                ISSUES\n            </li>\n            <li class=\"clickable\" [routerLink]=\"['','my-issues']\">\n                MY ISSUES\n            </li>\n            <li class=\"clickable \" [routerLink]=\"['','create-issue']\">\n                + ADD NEW ISSUE\n            </li>\n            <li class=\"clickable \" [routerLink]=\"['','admin-dashboard']\" *ngIf=\"currentUser.role === 1\">\n                ADMIN DASHBOARD\n            </li>\n        </ul>\n    </div>\n    <div class=\"profile-icons-holder float-right\">\n        <p>{{currentUser.email}}</p>\n        <mat-icon [matMenuTriggerFor]=\"appMenu\" class=\"clickable\">more_vert</mat-icon>\n        <mat-menu #appMenu=\"matMenu\">\n            <button mat-menu-item [routerLink]=\"['','profile']\"> PROFILE </button>\n            <button mat-menu-item (click)=\"signOut()\"> SIGN OUT </button>\n        </mat-menu>\n    </div>\n</div>\n\n<div class=\"col-md-12 top-bar-container\" *ngIf=\"visitor\">\n    <div>\n        <ul class=\"menu-list\">\n            <li [routerLink]=\"['']\" class=\"clickable logo\" style=\"margin-right:10px;\">\n                ala alaʻole\n            </li>\n\n        </ul>\n    </div>\n    <div class=\"profile-icons-holder float-right\">\n        <ul class=\"menu-list-visitor\">\n            <li [routerLink]=\"['','login']\" class=\"clickable \" style=\"margin-right:10px;\">\n                LOGIN\n            </li>\n            <li [routerLink]=\"['','register']\" class=\"clickable \" style=\"margin-right:10px;\">\n                REGISTER\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/top-bar/top-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-bar-container {\n  width: 100%;\n  height: 75px;\n  background: linear-gradient(to right, #4444f0, #efbcff); }\n  .top-bar-container > div, .top-bar-container img {\n    display: inline-block; }\n  .top-bar-container .profile-icons-holder {\n    margin-top: 23px; }\n    .top-bar-container .profile-icons-holder > p, .top-bar-container .profile-icons-holder div {\n      color: white;\n      display: inline; }\n    .top-bar-container .profile-icons-holder mat-icon {\n      color: white;\n      vertical-align: sub; }\n  .top-bar-container .menu-list {\n    margin-top: 20px; }\n    .top-bar-container .menu-list .logo {\n      font-size: 25px;\n      font-weight: bold; }\n    .top-bar-container .menu-list li {\n      letter-spacing: 2px;\n      display: inline;\n      color: white;\n      padding-right: 20px;\n      font-size: 18px; }\n      .top-bar-container .menu-list li:focus {\n        outline: none; }\n    .top-bar-container .menu-list .add-issue-tab {\n      border-bottom: 2px solid #efbcff;\n      padding: 0px; }\n  .top-bar-container .menu-list-visitor li {\n    letter-spacing: 2px;\n    display: inline;\n    color: white;\n    padding-right: 20px;\n    font-size: 18px; }\n    .top-bar-container .menu-list-visitor li:focus {\n      outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authentication_auth_service__ = __webpack_require__("../../../../../src/app/shared/authentication/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopBarComponent = (function () {
    function TopBarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.visitor = false;
    }
    TopBarComponent.prototype.ngOnInit = function () {
        if (localStorage.length !== 0) {
            this.currentUser = JSON.parse(localStorage.getItem('user'));
        }
        else {
            this.visitor = true;
        }
        // console.log(this.currentUser);
    };
    TopBarComponent.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut().subscribe(function (res) {
            localStorage.clear();
            _this.router.navigate(['']);
        });
    };
    TopBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-top-bar',
            template: __webpack_require__("../../../../../src/app/main/top-bar/top-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/top-bar/top-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_authentication_auth_service__["a" /* AuthService */]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/Global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return root; });
var root = 'http://dariuscostolas.me:3000';


/***/ }),

/***/ "../../../../../src/app/shared/authentication/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (_a) {
        var email = _a.email, password = _a.password;
        return this.http.post("/auth/login", {
            email: email, password: password
        });
    };
    AuthService.prototype.signOut = function () {
        return this.http.post("/auth/logout", {});
    };
    AuthService.prototype.register = function (registerUser) {
        return this.http.post("/auth/register", registerUser);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('AuthToken');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/authentication/http-interceptors/authorization.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/shared/authentication/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorizationInterceptor = (function () {
    function AuthorizationInterceptor(injector, router) {
        this.injector = injector;
        this.router = router;
    }
    AuthorizationInterceptor.prototype.intercept = function (req, next) {
        if (req.url.indexOf('login') > -1) {
            return next.handle(req);
        }
        if (req.url.indexOf('register') > -1) {
            return next.handle(req);
        }
        if (this.router.url.length === 1) {
            return next.handle(req);
        }
        if (req.url.indexOf('issues') > -1 && localStorage.length === 0) {
            return next.handle(req);
        }
        var auth = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]);
        var authRequest = req.clone({
            headers: req.headers.set('x-api-token', auth.getToken())
        });
        return next.handle(authRequest);
    };
    AuthorizationInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthorizationInterceptor);
    return AuthorizationInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/authentication/http-interceptors/base-url.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrlInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseUrlInterceptor = (function () {
    function BaseUrlInterceptor() {
        this.baseUrl = 'http://dariuscostolas.me:3000';
    }
    BaseUrlInterceptor.prototype.intercept = function (req, next) {
        var reqUrl = "" + this.baseUrl + req.url;
        return next.handle(req.clone({ url: reqUrl }));
    };
    BaseUrlInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BaseUrlInterceptor);
    return BaseUrlInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n  <div class=\"col-md-12\">\n    <p class=\"display-inline col-sm-8 col-8 colored-text logo clickable\" [routerLink]=\"['']\"> ala alaʻole</p>\n    <p class=\"display-inline col-sm-8 col-8 colored-text\"> - Login</p>\n    <div class=\"login-form-group\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginForm.valid && login()\">\n        <mat-form-field class=\"full-width\" style=\"margin-top:60px;\">\n          <input class=\"colored-text\" matInput formControlName=\"email\" placeholder=\"Email\" />\n          <mat-error>Please enter a valid email address</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n          <input type=\"password\" class=\"colored-text\" matInput formControlName=\"password\" placeholder=\"Password\" />\n          <mat-error>This field is required</mat-error>\n        </mat-form-field>\n        <button type=\"submit\" md-button class=\"full-width button-gradient clickable\">Sign in\n          <mat-icon class=\" float-right\">arrow_forward</mat-icon>\n        </button>\n      </form>\n    </div>\n    <!-- <p class=\"colored-text forgot-password-text \">Forgot Password?</p> -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/authentication/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  height: 400px;\n  margin-top: -200px;\n  font-family: 'Ubuntu', sans-serif;\n  margin-left: -200px;\n  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n  padding: 30px; }\n  .login-box .mat-form-field {\n    margin-top: 20px; }\n  .login-box .forgot-password-text {\n    margin-top: 10px;\n    font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/shared/authentication/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, router, authService, snackbar) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.snackbar = snackbar;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.bindForm();
    };
    LoginComponent.prototype.bindForm = function () {
        this.loginForm = this.formBuilder.group({
            email: [this.credentials.email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])],
            password: [this.credentials.password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]
        });
    };
    // login method on login form submited
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginForm.value)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res));
            localStorage.setItem('AuthToken', res.token);
            _this.router.navigate(['issues']);
        }, function (err) {
            console.log(err);
            _this.handleResponse("Error! " + err.statusText);
        });
    };
    LoginComponent.prototype.notify = function (status, text) {
        this.snackbar.open(status, text, {
            duration: 3000
        });
    };
    LoginComponent.prototype.handleResponse = function (text) {
        this.notify(text, ' ');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/shared/authentication/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/authentication/login/login.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__["a" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/authentication/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n    <div class=\"col-md-12\">\n        <p class=\"display-inline col-sm-8 col-8 colored-text logo clickable\" [routerLink]=\"['/']\"> ala alaʻole</p>\n        <p class=\"display-inline col-sm-8 col-8 colored-text\"> - Register</p>\n        <div class=\"login-form-group\">\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                <mat-form-field class=\"full-width cl\">\n                    <input class=\"colored-text\" matInput [(ngModel)]=\"registerUser.email\" name=\"email\" placeholder=\"Email\" required/>\n                    <mat-error>Please enter a valid email address</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                    <input type=\"password\" class=\"colored-text\" matInput [(ngModel)]=\"registerUser.password\" name=\"password\" placeholder=\"Password\"\n                        required />\n                    <mat-error>This field is required</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"full-width cl\">\n                    <input class=\"colored-text\" matInput [(ngModel)]=\"registerUser.name\" name=\"name\" placeholder=\"Name\" required />\n                    <mat-error>Please enter a valid name</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                    <mat-select [(ngModel)]=\"selectedGender\" name=\"gender\" placeholder=\"Gender\" required>\n                        <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.name\">{{gender.name}}</mat-option>\n                    </mat-select>\n                    <mat-error>Please select a gender</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"full-width cl\">\n                    <input class=\"colored-text\" matInput [(ngModel)]=\"registerUser.age\" name=\"age\" placeholder=\"Age\" required type=\"number\" />\n                    <mat-error>Please enter a valid age</mat-error>\n                </mat-form-field>\n                <button type=\"submit\" md-button class=\"full-width button-gradient\">Sign up\n                    <mat-icon class=\" float-right\">arrow_forward</mat-icon>\n                </button>\n            </form>\n        </div>\n        <p class=\"colored-text forgot-password-text clickable\" [routerLink]=\"['/login']\">Already have an acount? Back to Login</p>\n    </div>\n</div>\n<input class=\"colored-text map-input\" #search placeholder=\"Location\" />\n<agm-map class=\"map\" [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\">\n    <agm-marker [latitude]=\"initialLocation.latitude\" [longitude]=\"initialLocation.longitude\" (dragEnd)=\"markerClicked($event)\"\n        [markerDraggable]=\"true\"></agm-marker>\n    <agm-circle (dragEnd)=\"radiusMoved($event)\" (radiusChange)=\"radiusChanged($event)\" [latitude]=\"initialLocation.latitude\"\n        [longitude]=\"initialLocation.longitude\" [radius]=\"500\" [circleDraggable]=\"true\" [editable]=\"true\"></agm-circle>\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/shared/authentication/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-box {\n  position: absolute;\n  top: 50%;\n  left: 33.33%;\n  width: 400px;\n  height: 650px;\n  margin-top: -200px;\n  margin-left: -100px;\n  margin-bottom: 200px;\n  font-family: 'Ubuntu', sans-serif;\n  box-shadow: -2px 0px 15px -5px rgba(0, 0, 0, 0.5);\n  padding: 30px;\n  margin-top: -325px; }\n  .login-box .mat-form-field {\n    margin-top: 20px; }\n  .login-box .forgot-password-text {\n    margin-top: 10px;\n    font-size: 12px; }\n\n.map {\n  margin-top: -325px;\n  position: absolute;\n  top: 50%;\n  left: 33.33%;\n  margin-left: 300px;\n  width: 400px;\n  height: 650px;\n  box-shadow: 2px 0px 15px -5px rgba(0, 0, 0, 0.5); }\n\n.map-input {\n  margin-top: -318px;\n  position: absolute;\n  top: 50%;\n  left: 28%;\n  margin-left: 415px;\n  z-index: 999;\n  width: 370px;\n  padding: 10px 10px 10px 10px;\n  color: #4444f0;\n  background-color: white;\n  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);\n  border: none; }\n  .map-input:focus {\n    outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/authentication/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core_directives_circle__ = __webpack_require__("../../../../@agm/core/directives/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core_directives_marker__ = __webpack_require__("../../../../@agm/core/directives/marker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/shared/authentication/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegistrationComponent = (function () {
    function RegistrationComponent(mapsAPILoader, formBuilder, router, cd, authService, snackbar) {
        this.mapsAPILoader = mapsAPILoader;
        this.formBuilder = formBuilder;
        this.router = router;
        this.cd = cd;
        this.authService = authService;
        this.snackbar = snackbar;
        this.genders = [{
                id: 1,
                name: 'Male'
            },
            {
                id: 2,
                name: 'Female'
            }];
        this.registerUser = {
            email: '',
            password: '',
            name: '',
            location: {
                longitude: 0,
                latitude: 0
            },
            age: null,
            gender: null,
            radius: null
        };
        this.initialLocation = {
            longitude: 21.226788,
            latitude: 45.760696
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agmMarker.longitude = this.initialLocation.longitude;
        this.agmMarker.latitude = this.initialLocation.latitude;
        this.agmMap.zoom = 15;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                console.log(place.geometry.location.lat());
                _this.initialLocation.latitude = place.geometry.location.lat();
                _this.initialLocation.longitude = place.geometry.location.lng();
                _this.agmMap.triggerResize();
                _this.agmMap.triggerResize();
                // console.log(this.agmMarker.longitude);
            });
        });
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.registerUser.radius = this.agmCircle.radius / 1000;
        this.registerUser.location.longitude = this.initialLocation.longitude;
        this.registerUser.location.latitude = this.initialLocation.latitude;
        this.genders.map(function (x) {
            if (x.name === _this.selectedGender) {
                _this.registerUser.gender = x.id;
            }
        });
        this.authService.register(this.registerUser)
            .subscribe(function (res) {
            _this.handleResponse('Registration completed, wait for aproval!');
            _this.router.navigate(['/']);
        }, function (err) {
            _this.handleResponse("Error! " + err.statusText);
        });
    };
    RegistrationComponent.prototype.markerClicked = function ($event) {
        this.initialLocation.latitude = $event.coords.lat;
        this.initialLocation.longitude = $event.coords.lng;
    };
    RegistrationComponent.prototype.radiusChanged = function ($event) {
        this.agmCircle.radius = $event;
        this.registerUser.radius = $event;
    };
    RegistrationComponent.prototype.radiusMoved = function ($event) {
        this.initialLocation.latitude = $event.coords.lat;
        this.initialLocation.longitude = $event.coords.lng;
    };
    RegistrationComponent.prototype.notify = function (status, text) {
        this.snackbar.open(status, text, {
            duration: 3000
        });
    };
    RegistrationComponent.prototype.handleResponse = function (text) {
        this.notify(text, ' ');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], RegistrationComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('images'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], RegistrationComponent.prototype, "imagesElRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* AgmMap */])
    ], RegistrationComponent.prototype, "agmMap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__agm_core_directives_marker__["a" /* AgmMarker */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__agm_core_directives_marker__["a" /* AgmMarker */])
    ], RegistrationComponent.prototype, "agmMarker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__agm_core_directives_circle__["a" /* AgmCircle */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__agm_core_directives_circle__["a" /* AgmCircle */])
    ], RegistrationComponent.prototype, "agmCircle", void 0);
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/shared/authentication/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/authentication/registration/registration.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material_snack_bar__["a" /* MatSnackBar */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map