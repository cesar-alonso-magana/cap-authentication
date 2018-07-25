/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/grid/grid";
import * as i2 from "ionic-angular/components/grid/row";
import * as i3 from "ionic-angular/components/grid/col";
import * as i4 from "ionic-angular/components/list/list";
import * as i5 from "ionic-angular/config/config";
import * as i6 from "ionic-angular/platform/platform";
import * as i7 from "ionic-angular/gestures/gesture-controller";
import * as i8 from "ionic-angular/platform/dom-controller";
import * as i9 from "@angular/forms";
import * as i10 from "../../../../../../../node_modules/ionic-angular/components/item/item.ngfactory";
import * as i11 from "ionic-angular/components/item/item";
import * as i12 from "ionic-angular/util/form";
import * as i13 from "ionic-angular/components/item/item-reorder";
import * as i14 from "ionic-angular/components/item/item-content";
import * as i15 from "ionic-angular/components/label/label";
import * as i16 from "../../../../../../../node_modules/ionic-angular/components/input/input.ngfactory";
import * as i17 from "ionic-angular/components/input/input";
import * as i18 from "ionic-angular/components/app/app";
import * as i19 from "ionic-angular/components/content/content";
import * as i20 from "../../../../../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i21 from "ionic-angular/components/button/button";
import * as i22 from "./register.component";
import * as i23 from "../../authentication.service";
var styles_AuthRegisterComponent = [""];
var RenderType_AuthRegisterComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_AuthRegisterComponent, data: {} });
export { RenderType_AuthRegisterComponent as RenderType_AuthRegisterComponent };
export function View_AuthRegisterComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(1, 0, null, null, 88, "ion-grid", [["class", "grid"]], null, null, null, null, null)), i0.ɵdid(2, 16384, null, 0, i1.Grid, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n   "])), (_l()(), i0.ɵeld(4, 0, null, null, 84, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(5, 16384, null, 0, i2.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n     "])), (_l()(), i0.ɵeld(7, 0, null, null, 80, "ion-col", [["class", "col"], ["col-12", ""], ["col-lg-10", ""], ["col-xl-8", ""], ["offset-lg-1", ""], ["offset-xl-2", ""]], null, null, null, null, null)), i0.ɵdid(8, 16384, null, 0, i3.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(10, 0, null, null, 76, "ion-list", [], null, null, null, null, null)), i0.ɵdid(11, 16384, null, 0, i4.List, [i5.Config, i0.ElementRef, i0.Renderer, i6.Platform, i7.GestureController, i8.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(13, 0, null, null, 72, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i0.ɵnov(_v, 15).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i0.ɵnov(_v, 15).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(14, 16384, null, 0, i9.ɵbf, [], null, null), i0.ɵdid(15, 540672, null, 0, i9.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i0.ɵprd(2048, null, i9.ControlContainer, null, [i9.FormGroupDirective]), i0.ɵdid(17, 16384, null, 0, i9.NgControlStatusGroup, [i9.ControlContainer], null, null), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(19, 0, null, null, 19, "ion-item", [["class", "item item-block"]], null, null, null, i10.View_Item_0, i10.RenderType_Item)), i0.ɵdid(20, 1097728, null, 3, i11.Item, [i12.Form, i5.Config, i0.ElementRef, i0.Renderer, [2, i13.ItemReorder]], null, null), i0.ɵqud(335544320, 1, { contentLabel: 0 }), i0.ɵqud(603979776, 2, { _buttons: 1 }), i0.ɵqud(603979776, 3, { _icons: 1 }), i0.ɵdid(24, 16384, null, 0, i14.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n                    "])), (_l()(), i0.ɵeld(26, 0, null, 1, 2, "ion-label", [["primary", ""], ["stacked", ""]], null, null, null, null, null)), i0.ɵdid(27, 16384, [[1, 4]], 0, i15.Label, [i5.Config, i0.ElementRef, i0.Renderer, [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), i0.ɵted(-1, null, ["Email"])), (_l()(), i0.ɵted(-1, 2, ["\n                    "])), (_l()(), i0.ɵeld(30, 0, null, 3, 7, "ion-input", [["autocapitalize", "off"], ["formControlName", "email"], ["id", "email"], ["ngDefaultControl", ""], ["spellcheck", "false"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 31)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 31).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 31)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 31)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.credentials.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, i16.View_TextInput_0, i16.RenderType_TextInput)), i0.ɵdid(31, 16384, null, 0, i9.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i9.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i9.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i9.DefaultValueAccessor]), i0.ɵdid(33, 671744, null, 0, i9.FormControlName, [[3, i9.ControlContainer], [8, null], [8, null], [2, i9.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i9.NgControl, null, [i9.FormControlName]), i0.ɵdid(35, 16384, null, 0, i9.NgControlStatus, [i9.NgControl], null, null), i0.ɵdid(36, 5423104, null, 0, i17.TextInput, [i5.Config, i6.Platform, i12.Form, i18.App, i0.ElementRef, i0.Renderer, [2, i19.Content], [2, i11.Item], [2, i9.NgControl], i8.DomController], { type: [0, "type"] }, { input: "input", blur: "blur" }), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, 2, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(40, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, i10.View_Item_0, i10.RenderType_Item)), i0.ɵdid(41, 1097728, null, 3, i11.Item, [i12.Form, i5.Config, i0.ElementRef, i0.Renderer, [2, i13.ItemReorder]], null, null), i0.ɵqud(335544320, 4, { contentLabel: 0 }), i0.ɵqud(603979776, 5, { _buttons: 1 }), i0.ɵqud(603979776, 6, { _icons: 1 }), i0.ɵdid(45, 16384, null, 0, i14.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n                    "])), (_l()(), i0.ɵeld(47, 0, null, 1, 2, "ion-label", [["primary", ""], ["stacked", ""]], null, null, null, null, null)), i0.ɵdid(48, 16384, [[4, 4]], 0, i15.Label, [i5.Config, i0.ElementRef, i0.Renderer, [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), i0.ɵted(-1, null, ["Password"])), (_l()(), i0.ɵted(-1, 2, ["\n                    "])), (_l()(), i0.ɵeld(51, 0, null, 3, 5, "ion-input", [["formControlName", "password"], ["id", "password"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.credentials.password = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i16.View_TextInput_0, i16.RenderType_TextInput)), i0.ɵdid(52, 671744, null, 0, i9.FormControlName, [[3, i9.ControlContainer], [8, null], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i9.NgControl, null, [i9.FormControlName]), i0.ɵdid(54, 16384, null, 0, i9.NgControlStatus, [i9.NgControl], null, null), i0.ɵdid(55, 5423104, null, 0, i17.TextInput, [i5.Config, i6.Platform, i12.Form, i18.App, i0.ElementRef, i0.Renderer, [2, i19.Content], [2, i11.Item], [2, i9.NgControl], i8.DomController], { type: [0, "type"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, 2, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(59, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, i10.View_Item_0, i10.RenderType_Item)), i0.ɵdid(60, 1097728, null, 3, i11.Item, [i12.Form, i5.Config, i0.ElementRef, i0.Renderer, [2, i13.ItemReorder]], null, null), i0.ɵqud(335544320, 7, { contentLabel: 0 }), i0.ɵqud(603979776, 8, { _buttons: 1 }), i0.ɵqud(603979776, 9, { _icons: 1 }), i0.ɵdid(64, 16384, null, 0, i14.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n                    "])), (_l()(), i0.ɵeld(66, 0, null, 1, 2, "ion-label", [["primary", ""], ["stacked", ""]], null, null, null, null, null)), i0.ɵdid(67, 16384, [[7, 4]], 0, i15.Label, [i5.Config, i0.ElementRef, i0.Renderer, [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), i0.ɵted(-1, null, ["Repeat Password"])), (_l()(), i0.ɵted(-1, 2, ["\n                    "])), (_l()(), i0.ɵeld(70, 0, null, 3, 5, "ion-input", [["formControlName", "repassword"], ["id", "repassword"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.credentials.repassword = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i16.View_TextInput_0, i16.RenderType_TextInput)), i0.ɵdid(71, 671744, null, 0, i9.FormControlName, [[3, i9.ControlContainer], [8, null], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i9.NgControl, null, [i9.FormControlName]), i0.ɵdid(73, 16384, null, 0, i9.NgControlStatus, [i9.NgControl], null, null), i0.ɵdid(74, 5423104, null, 0, i17.TextInput, [i5.Config, i6.Platform, i12.Form, i18.App, i0.ElementRef, i0.Renderer, [2, i19.Content], [2, i11.Item], [2, i9.NgControl], i8.DomController], { type: [0, "type"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, 2, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(78, 0, null, null, 2, "button", [["block", ""], ["full", ""], ["ion-button", ""], ["primary", ""], ["type", "submit"]], [[8, "disabled", 0]], null, null, i20.View_Button_0, i20.RenderType_Button)), i0.ɵdid(79, 1097728, null, 0, i21.Button, [[8, ""], i5.Config, i0.ElementRef, i0.Renderer], { block: [0, "block"], full: [1, "full"] }, null), (_l()(), i0.ɵted(-1, 0, ["Register"])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(82, 0, null, null, 2, "button", [["block", ""], ["ion-button", ""], ["secondary", ""], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.loginAccount() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i20.View_Button_0, i20.RenderType_Button)), i0.ɵdid(83, 1097728, null, 0, i21.Button, [[8, ""], i5.Config, i0.ElementRef, i0.Renderer], { block: [0, "block"] }, null), (_l()(), i0.ɵted(-1, 0, ["Login to account"])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n     "])), (_l()(), i0.ɵted(-1, null, ["\n   "])), (_l()(), i0.ɵted(-1, null, ["\n "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.registerform; _ck(_v, 15, 0, currVal_7); var currVal_15 = "email"; var currVal_16 = _co.credentials.email; _ck(_v, 33, 0, currVal_15, currVal_16); var currVal_17 = "text"; _ck(_v, 36, 0, currVal_17); var currVal_25 = "password"; var currVal_26 = _co.credentials.password; _ck(_v, 52, 0, currVal_25, currVal_26); var currVal_27 = "text"; _ck(_v, 55, 0, currVal_27); var currVal_35 = "repassword"; var currVal_36 = _co.credentials.repassword; _ck(_v, 71, 0, currVal_35, currVal_36); var currVal_37 = "text"; _ck(_v, 74, 0, currVal_37); var currVal_39 = ""; var currVal_40 = ""; _ck(_v, 79, 0, currVal_39, currVal_40); var currVal_41 = ""; _ck(_v, 83, 0, currVal_41); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 17).ngClassUntouched; var currVal_1 = i0.ɵnov(_v, 17).ngClassTouched; var currVal_2 = i0.ɵnov(_v, 17).ngClassPristine; var currVal_3 = i0.ɵnov(_v, 17).ngClassDirty; var currVal_4 = i0.ɵnov(_v, 17).ngClassValid; var currVal_5 = i0.ɵnov(_v, 17).ngClassInvalid; var currVal_6 = i0.ɵnov(_v, 17).ngClassPending; _ck(_v, 13, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = i0.ɵnov(_v, 35).ngClassUntouched; var currVal_9 = i0.ɵnov(_v, 35).ngClassTouched; var currVal_10 = i0.ɵnov(_v, 35).ngClassPristine; var currVal_11 = i0.ɵnov(_v, 35).ngClassDirty; var currVal_12 = i0.ɵnov(_v, 35).ngClassValid; var currVal_13 = i0.ɵnov(_v, 35).ngClassInvalid; var currVal_14 = i0.ɵnov(_v, 35).ngClassPending; _ck(_v, 30, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = i0.ɵnov(_v, 54).ngClassUntouched; var currVal_19 = i0.ɵnov(_v, 54).ngClassTouched; var currVal_20 = i0.ɵnov(_v, 54).ngClassPristine; var currVal_21 = i0.ɵnov(_v, 54).ngClassDirty; var currVal_22 = i0.ɵnov(_v, 54).ngClassValid; var currVal_23 = i0.ɵnov(_v, 54).ngClassInvalid; var currVal_24 = i0.ɵnov(_v, 54).ngClassPending; _ck(_v, 51, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_28 = i0.ɵnov(_v, 73).ngClassUntouched; var currVal_29 = i0.ɵnov(_v, 73).ngClassTouched; var currVal_30 = i0.ɵnov(_v, 73).ngClassPristine; var currVal_31 = i0.ɵnov(_v, 73).ngClassDirty; var currVal_32 = i0.ɵnov(_v, 73).ngClassValid; var currVal_33 = i0.ɵnov(_v, 73).ngClassInvalid; var currVal_34 = i0.ɵnov(_v, 73).ngClassPending; _ck(_v, 70, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_38 = !_co.registerform.valid; _ck(_v, 78, 0, currVal_38); }); }
export function View_AuthRegisterComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "auth-app-register", [], null, null, null, View_AuthRegisterComponent_0, RenderType_AuthRegisterComponent)), i0.ɵdid(1, 114688, null, 0, i22.AuthRegisterComponent, [i23.AuthenticationService, i9.FormBuilder], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AuthRegisterComponentNgFactory = i0.ɵccf("auth-app-register", i22.AuthRegisterComponent, View_AuthRegisterComponent_Host_0, {}, { submit: "submit", changePage: "changePage" }, []);
export { AuthRegisterComponentNgFactory as AuthRegisterComponentNgFactory };
//# sourceMappingURL=register.component.ngfactory.js.map