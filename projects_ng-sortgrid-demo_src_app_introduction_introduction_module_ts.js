"use strict";
(self["webpackChunkng_sortgrid_demo"] = self["webpackChunkng_sortgrid_demo"] || []).push([["projects_ng-sortgrid-demo_src_app_introduction_introduction_module_ts"],{

/***/ 7192:
/*!***********************************************************************************************************!*\
  !*** ./projects/ng-sortgrid-demo/src/app/introduction/examples/async-pipe/async-pipe-memory.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncPipeMemoryComponent": () => (/* binding */ AsyncPipeMemoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/card/card.component */ 4207);
/* harmony import */ var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../ng-sortgrid/src/lib/ngsg-item.directive */ 1018);






function AsyncPipeMemoryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Previous sort order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.previousSortOrder);
} }
function AsyncPipeMemoryComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AsyncPipeMemoryComponent_ngsg_card_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngsg-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sorted", function AsyncPipeMemoryComponent_ngsg_card_13_Template_ngsg_card_sorted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.applyOrder($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSortGridItems", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r2.item$))("item", item_r3);
} }
class AsyncPipeMemoryComponent {
    constructor() {
        this.loading = false;
    }
    ngOnInit() {
        this.previousSortOrder = [];
        this.currentSortOrder = [];
    }
    loadItems() {
        this.loading = true;
        this.item$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(1500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.loading = false));
    }
    applyOrder(orderChange) {
        this.currentSortOrder = orderChange.currentOrder;
        this.previousSortOrder = orderChange.previousOrder;
    }
}
AsyncPipeMemoryComponent.ɵfac = function AsyncPipeMemoryComponent_Factory(t) { return new (t || AsyncPipeMemoryComponent)(); };
AsyncPipeMemoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AsyncPipeMemoryComponent, selectors: [["ngsg-demo-async"]], decls: 15, vars: 6, consts: [[2, "margin-bottom", "20px"], [1, "btn", "btn-primary", 2, "margin-bottom", "20px", 3, "click"], [1, "card", "border-primary", "mb-3"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "example-container"], ["class", "spinner", 4, "ngIf"], ["ngSortgridItem", "", "ngSortGridGroup", "async-items", "class", "example-box", 3, "ngSortGridItems", "item", "sorted", 4, "ngFor", "ngForOf"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"], ["ngSortgridItem", "", "ngSortGridGroup", "async-items", 1, "example-box", 3, "ngSortGridItems", "item", "sorted"]], template: function AsyncPipeMemoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "4. Load items and use them with the async pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AsyncPipeMemoryComponent_Template_button_click_2_listener() { return ctx.loadItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Load items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AsyncPipeMemoryComponent_div_5_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Current sort order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AsyncPipeMemoryComponent_div_12_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AsyncPipeMemoryComponent_ngsg_card_13_Template, 2, 4, "ngsg-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.previousSortOrder.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentSortOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 4, ctx.item$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__.NgsgItemDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: [".spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.double-bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% { -webkit-transform: scale(0.0) }\n  50% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 50% {\n      transform: scale(1.0);\n      -webkit-transform: scale(1.0);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jLXBpcGUtbWVtb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87O0VBRVAsc0RBQXNEO0VBQ3RELDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXLDhCQUE4QjtFQUN6QyxNQUFNLDhCQUE4QjtBQUN0Qzs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDZCQUE2QjtFQUMvQixFQUFFO01BQ0UscUJBQXFCO01BQ3JCLDZCQUE2QjtJQUMvQjtBQUNKIiwiZmlsZSI6ImFzeW5jLXBpcGUtbWVtb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG59XG5cbi5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmRvdWJsZS1ib3VuY2UyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xuICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XG4gIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICB9IDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6279:
/*!******************************************************************************************************!*\
  !*** ./projects/ng-sortgrid-demo/src/app/introduction/examples/drag-handle/drag-handle.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragHandleComponent": () => (/* binding */ DragHandleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../ng-sortgrid/src/lib/ngsg-item.directive */ 1018);
/* harmony import */ var _ng_sortgrid_src_lib_ngsg_drag_handle_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../ng-sortgrid/src/lib/ngsg-drag-handle.directive */ 8549);




function DragHandleComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 7)(6, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSortGridItems", ctx_r0.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
class DragHandleComponent {
    constructor() {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
}
DragHandleComponent.ɵfac = function DragHandleComponent_Factory(t) { return new (t || DragHandleComponent)(); };
DragHandleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DragHandleComponent, selectors: [["ngsg-demo-drag-handle"]], decls: 4, vars: 1, consts: [[2, "margin-bottom", "20px"], [1, "example-container"], ["ngSortgridItem", "", "class", "example-box", 3, "ngSortGridItems", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", 1, "example-box", 3, "ngSortGridItems"], [2, "color", "darkslategray"], ["ngSortgridDragHandle", "", 1, "example-handle"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"]], template: function DragHandleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "1. Drag the items around using handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DragHandleComponent_div_3_Template, 7, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_0__.NgsgItemDirective, _ng_sortgrid_src_lib_ngsg_drag_handle_directive__WEBPACK_IMPORTED_MODULE_1__.NgsgDragHandleDirective], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWctaGFuZGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVEQUF1RDtFQUN2RDs7NkNBRTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6ImRyYWctaGFuZGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1ib3gge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1oYW5kbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IG1vdmU7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 9171:
/*!*********************************************************************************************************************!*\
  !*** ./projects/ng-sortgrid-demo/src/app/introduction/examples/getting-started/getting-started-memory.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingStartedMemoryComponent": () => (/* binding */ GettingStartedMemoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/card/card.component */ 4207);
/* harmony import */ var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../ng-sortgrid/src/lib/ngsg-item.directive */ 1018);




function GettingStartedMemoryComponent_ngsg_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngsg-card", 3);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSortGridItems", ctx_r0.items)("item", item_r1);
} }
class GettingStartedMemoryComponent {
    constructor() {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
}
GettingStartedMemoryComponent.ɵfac = function GettingStartedMemoryComponent_Factory(t) { return new (t || GettingStartedMemoryComponent)(); };
GettingStartedMemoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GettingStartedMemoryComponent, selectors: [["ngsg-demo-memory"]], decls: 4, vars: 1, consts: [[2, "margin-bottom", "20px"], [1, "example-container"], ["ngSortgridItem", "", "ngSortGridGroup", "getting-started", "class", "example-box", 3, "ngSortGridItems", "item", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "getting-started", 1, "example-box", 3, "ngSortGridItems", "item"]], template: function GettingStartedMemoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "3. Drag the items around - hold CMD or Control and click on an item to select multiple files");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, GettingStartedMemoryComponent_ngsg_card_3_Template, 1, 2, "ngsg-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__.NgsgItemDirective], encapsulation: 2 });


/***/ }),

/***/ 2953:
/*!***************************************************************************************************!*\
  !*** ./projects/ng-sortgrid-demo/src/app/introduction/examples/groups/groups-memory.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsMemoryComponent": () => (/* binding */ GroupsMemoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/card/card.component */ 4207);
/* harmony import */ var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../ng-sortgrid/src/lib/ngsg-item.directive */ 1018);




function GroupsMemoryComponent_ngsg_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngsg-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r2)("ngSortGridItems", ctx_r0.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2, " ");
} }
function GroupsMemoryComponent_ngsg_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngsg-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r3)("ngSortGridItems", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
class GroupsMemoryComponent {
    constructor() {
        this.items = [1, 2, 3, 4];
    }
}
GroupsMemoryComponent.ɵfac = function GroupsMemoryComponent_Factory(t) { return new (t || GroupsMemoryComponent)(); };
GroupsMemoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroupsMemoryComponent, selectors: [["ngsg-demo-groups-memory"]], decls: 7, vars: 2, consts: [[1, "row"], [1, "col"], [1, "example-container"], ["ngSortgridItem", "", "ngSortGridGroup", "one", "class", "example-box", 3, "item", "ngSortGridItems", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "two", "class", "example-box", 3, "item", "ngSortGridItems", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "one", 1, "example-box", 3, "item", "ngSortGridItems"], ["ngSortgridItem", "", "ngSortGridGroup", "two", 1, "example-box", 3, "item", "ngSortGridItems"]], template: function GroupsMemoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, GroupsMemoryComponent_ngsg_card_3_Template, 2, 3, "ngsg-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1)(5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, GroupsMemoryComponent_ngsg_card_6_Template, 2, 3, "ngsg-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__.NgsgItemDirective], encapsulation: 2 });


/***/ }),

/***/ 6551:
/*!***********************************************************************************************************************!*\
  !*** ./projects/ng-sortgrid-demo/src/app/introduction/examples/react-on-changes/react-on-changes-memory.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactOnChangesMemoryComponent": () => (/* binding */ ReactOnChangesMemoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/card/card.component */ 4207);
/* harmony import */ var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../ng-sortgrid/src/lib/ngsg-item.directive */ 1018);




function ReactOnChangesMemoryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Previous sort order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.previousSortOrder);
} }
function ReactOnChangesMemoryComponent_ngsg_card_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngsg-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sorted", function ReactOnChangesMemoryComponent_ngsg_card_8_Template_ngsg_card_sorted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.applyOrder($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r2)("ngSortGridItems", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2, " ");
} }
class ReactOnChangesMemoryComponent {
    constructor() {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    ngOnInit() {
        this.currentSortOrder = [...this.items];
        this.previousSortOrder = [];
    }
    applyOrder(orderChange) {
        this.currentSortOrder = orderChange.currentOrder;
        this.previousSortOrder = orderChange.previousOrder;
    }
}
ReactOnChangesMemoryComponent.ɵfac = function ReactOnChangesMemoryComponent_Factory(t) { return new (t || ReactOnChangesMemoryComponent)(); };
ReactOnChangesMemoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReactOnChangesMemoryComponent, selectors: [["ngsg-demo-react-on-changes-memory"]], decls: 9, vars: 3, consts: [[1, "card", "border-primary", "mb-3"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "example-container"], ["ngSortgridItem", "", "ngSortGridGroup", "react-on-changes", "class", "example-box", 3, "item", "ngSortGridItems", "sorted", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "react-on-changes", 1, "example-box", 3, "item", "ngSortGridItems", "sorted"]], template: function ReactOnChangesMemoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ReactOnChangesMemoryComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Current sort order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ReactOnChangesMemoryComponent_ngsg_card_8_Template, 2, 3, "ngsg-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.previousSortOrder.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentSortOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_1__.NgsgItemDirective], encapsulation: 2 });


/***/ }),

/***/ 2991:
/*!**********************************************************************************!*\
  !*** ./projects/ng-sortgrid-demo/src/app/introduction/introduction.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionComponent": () => (/* binding */ IntroductionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/nav/nav.component */ 1541);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ 5886);
/* harmony import */ var _shared_step_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/step/step.component */ 253);
/* harmony import */ var _examples_getting_started_getting_started_memory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/getting-started/getting-started-memory.component */ 9171);
/* harmony import */ var _examples_react_on_changes_react_on_changes_memory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/react-on-changes/react-on-changes-memory.component */ 6551);
/* harmony import */ var _examples_groups_groups_memory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/groups/groups-memory.component */ 2953);
/* harmony import */ var _examples_async_pipe_async_pipe_memory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/async-pipe/async-pipe-memory.component */ 7192);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _examples_drag_handle_drag_handle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/drag-handle/drag-handle.component */ 6279);










class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 40, vars: 0, consts: [[1, "container"], ["title", "Loop over your elements with *ngFor. \uD83D\uDECE\uFE0F the items needs to be an array. Alternate you can also use the async pipe - see below", "image", "gs1.png"], ["title", "Apply the ngSortgridItem directive", "image", "gs2.png"], [1, "chaptor-separator"], ["title", "Pass your items to the directive via the ngSortGridItems input.", "image", "gs3.png"], ["title", "React on the 'sorted' output events", "image", "gs4.png"], ["title", "Pass in a unique name to the ngSortGridGroup input", "image", "gs5.png"], ["title", "Use the async pipe to loop over the items and to pass in the ngSortGridItems", "image", "gs6.png"], ["routerLink", "scrolling", 1, "btn", "btn-primary", 2, "margin-bottom", "50px"], ["title", "Apply the ngSortgridDragHandle directive", "image", "gs7.png"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngsg-demo-nav")(1, "ngsg-demo-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 0)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "1. Getting started");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ngsg-demo-step", 1)(6, "ngsg-demo-step", 2)(7, "ngsg-demo-memory")(8, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "2. React on changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "In most cases you are interested in the new sort order. Often you want to store them in local storage or even send them to the backend. To do so the following two steps are needed in addition to the \"Getting started\" step.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "ngsg-demo-step", 4)(14, "ngsg-demo-step", 5)(15, "ngsg-demo-react-on-changes-memory")(16, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "3. Group sortgrids");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "In case you have more than one sortgriditem on the page you need to group the sortgriditems to avoid dropping drags from one group in another group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "ngsg-demo-step", 6)(22, "ngsg-demo-groups-memory")(23, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "4. Use the async pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "ngsg-demo-step", 7)(27, "ngsg-demo-async")(28, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "5. Scrolling");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " The scrolling demo is in a separate page because we need more items and a sticky navheader. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Check out the demo...");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "6. Customizing the drag area using a handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "ngsg-demo-step", 9)(39, "ngsg-demo-drag-handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } }, directives: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _shared_step_step_component__WEBPACK_IMPORTED_MODULE_2__.StepComponent, _examples_getting_started_getting_started_memory_component__WEBPACK_IMPORTED_MODULE_3__.GettingStartedMemoryComponent, _examples_react_on_changes_react_on_changes_memory_component__WEBPACK_IMPORTED_MODULE_4__.ReactOnChangesMemoryComponent, _examples_groups_groups_memory_component__WEBPACK_IMPORTED_MODULE_5__.GroupsMemoryComponent, _examples_async_pipe_async_pipe_memory_component__WEBPACK_IMPORTED_MODULE_6__.AsyncPipeMemoryComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _examples_drag_handle_drag_handle_component__WEBPACK_IMPORTED_MODULE_7__.DragHandleComponent], encapsulation: 2 });


/***/ }),

/***/ 8512:
/*!*******************************************************************************!*\
  !*** ./projects/ng-sortgrid-demo/src/app/introduction/introduction.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionModule": () => (/* binding */ IntroductionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ng-sortgrid/src/lib/ngsg.module */ 3275);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 5786);
/* harmony import */ var _examples_async_pipe_async_pipe_memory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/async-pipe/async-pipe-memory.component */ 7192);
/* harmony import */ var _examples_drag_handle_drag_handle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/drag-handle/drag-handle.component */ 6279);
/* harmony import */ var _examples_getting_started_getting_started_memory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/getting-started/getting-started-memory.component */ 9171);
/* harmony import */ var _examples_groups_groups_memory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/groups/groups-memory.component */ 2953);
/* harmony import */ var _examples_react_on_changes_react_on_changes_memory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/react-on-changes/react-on-changes-memory.component */ 6551);
/* harmony import */ var _introduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./introduction.component */ 2991);
/* harmony import */ var _introduction_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./introduction.routing.module */ 7120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);











class IntroductionModule {
}
IntroductionModule.ɵfac = function IntroductionModule_Factory(t) { return new (t || IntroductionModule)(); };
IntroductionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: IntroductionModule });
IntroductionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _introduction_routing_module__WEBPACK_IMPORTED_MODULE_8__.IntroductionRoutingModule,
            _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_0__.NgsgModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](IntroductionModule, { declarations: [_introduction_component__WEBPACK_IMPORTED_MODULE_7__.IntroductionComponent,
        _examples_getting_started_getting_started_memory_component__WEBPACK_IMPORTED_MODULE_4__.GettingStartedMemoryComponent,
        _examples_react_on_changes_react_on_changes_memory_component__WEBPACK_IMPORTED_MODULE_6__.ReactOnChangesMemoryComponent,
        _examples_groups_groups_memory_component__WEBPACK_IMPORTED_MODULE_5__.GroupsMemoryComponent,
        _examples_async_pipe_async_pipe_memory_component__WEBPACK_IMPORTED_MODULE_2__.AsyncPipeMemoryComponent,
        _examples_drag_handle_drag_handle_component__WEBPACK_IMPORTED_MODULE_3__.DragHandleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _introduction_routing_module__WEBPACK_IMPORTED_MODULE_8__.IntroductionRoutingModule,
        _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_0__.NgsgModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 7120:
/*!***************************************************************************************!*\
  !*** ./projects/ng-sortgrid-demo/src/app/introduction/introduction.routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionRoutingModule": () => (/* binding */ IntroductionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _introduction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction.component */ 2991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class IntroductionRoutingModule {
}
IntroductionRoutingModule.ɵfac = function IntroductionRoutingModule_Factory(t) { return new (t || IntroductionRoutingModule)(); };
IntroductionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IntroductionRoutingModule });
IntroductionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([
                { path: '', component: _introduction_component__WEBPACK_IMPORTED_MODULE_0__.IntroductionComponent }
            ])], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IntroductionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7928:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Notification.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationKind": () => (/* binding */ NotificationKind),
/* harmony export */   "Notification": () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/empty */ 6439);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/of */ 4139);
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/throwError */ 6587);



var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
class Notification {
    constructor(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    observe(observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    }
    do(next, error, complete) {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    }
    accept(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    }
    toObservable() {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return (0,_observable_of__WEBPACK_IMPORTED_MODULE_0__.of)(this.value);
            case 'E':
                return (0,_observable_throwError__WEBPACK_IMPORTED_MODULE_1__.throwError)(this.error);
            case 'C':
                return (0,_observable_empty__WEBPACK_IMPORTED_MODULE_2__.empty)();
        }
        throw new Error('unexpected notification kind value');
    }
    static createNext(value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    }
    static createError(err) {
        return new Notification('E', undefined, err);
    }
    static createComplete() {
        return Notification.completeNotification;
    }
}
Notification.completeNotification = new Notification('C');
Notification.undefinedValueNotification = new Notification('N', undefined);


/***/ }),

/***/ 6587:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwError": () => (/* binding */ throwError)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 2378);

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscriber.error(error));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => scheduler.schedule(dispatch, 0, { error, subscriber }));
    }
}
function dispatch({ error, subscriber }) {
    subscriber.error(error);
}


/***/ }),

/***/ 5843:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ 1293);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notification */ 7928);




function delay(delay, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    const absoluteDelay = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_1__.isDate)(delay);
    const delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return (source) => source.lift(new DelayOperator(delayFor, scheduler));
}
class DelayOperator {
    constructor(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    }
}
class DelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber {
    constructor(destination, delay, scheduler) {
        super(destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    static dispatch(state) {
        const source = state.source;
        const queue = source.queue;
        const scheduler = state.scheduler;
        const destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            const delay = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay);
        }
        else {
            this.unsubscribe();
            source.active = false;
        }
    }
    _schedule(scheduler) {
        this.active = true;
        const destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    }
    scheduleNotification(notification) {
        if (this.errored === true) {
            return;
        }
        const scheduler = this.scheduler;
        const message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    }
    _next(value) {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createNext(value));
    }
    _error(err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createComplete());
        this.unsubscribe();
    }
}
class DelayMessage {
    constructor(time, notification) {
        this.time = time;
        this.notification = notification;
    }
}


/***/ }),

/***/ 1293:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDate": () => (/* binding */ isDate)
/* harmony export */ });
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}


/***/ })

}]);
//# sourceMappingURL=projects_ng-sortgrid-demo_src_app_introduction_introduction_module_ts.js.map