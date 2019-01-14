var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name Navigation Bar Color
 * @description
 * Manage the appearance of the native navigation bar.
 *
 * Requires Cordova plugin: `cordova-plugin-navigationbar-color`. For more info, please see the [NavigationBarColor plugin docs](https://github.com/apache/cordova-plugin-navigationbar).
 *
 * @usage
 * ```typescript
 * import { NavigationBarColor } from 'ionic-plugin-navigation-bar-color';
 *
 * constructor(private navigationBarColor: NavigationBarColor) { }
 *
 * ...
 *
 *
 * // set navigation bar to white
 * this.navigationBarColor.backgroundColorByHexString('#000000');
 * ```
 *
 */
var NavigationBarColor = (function (_super) {
    __extends(NavigationBarColor, _super);
    function NavigationBarColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set the navigation bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call NavigationBarColor.overlaysWebView(false) to enable color changing.
     *
     * @param {string} hexString  The hex value of the color.
     */
    /**
       * Set the navigation bar to a specific hex color (CSS shorthand supported!).
       *
       * iOS note: you must call NavigationBarColor.overlaysWebView(false) to enable color changing.
       *
       * @param {string} hexString  The hex value of the color.
       */
    NavigationBarColor.prototype.backgroundColorByHexString = /**
       * Set the navigation bar to a specific hex color (CSS shorthand supported!).
       *
       * iOS note: you must call NavigationBarColor.overlaysWebView(false) to enable color changing.
       *
       * @param {string} hexString  The hex value of the color.
       */
    function (hexString) { };
    
    NavigationBarColor.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], NavigationBarColor.prototype, "backgroundColorByHexString", null);
    /**
     * @name Status Bar
     * @description
     * Manage the appearance of the native navigation bar.
     *
     * Requires Cordova plugin: `cordova-plugin-navigationbar-color`. For more info, please see the [NavigationBarColor plugin docs](https://github.com/fagundes/cordova-plugin-navigationbar).
     *
     * @usage
     * ```typescript
     * import { NavigationBarColor } from 'ionic-plugin-navigation-bar-color';
     *
     * constructor(private navigationBarColor: NavigationBarColor) { }
     *
     * ...
     *
     *
     * // set navigation bar to white
     * this.navigationBarColor.backgroundColorByHexString('#ffffff');
     * ```
     *
     */
    NavigationBarColor = __decorate([
        Plugin({
            pluginName: 'NavigationBar',
            plugin: 'cordova-plugin-navigationbar-color',
            pluginRef: 'NavigationBar',
            repo: 'https://github.com/fagundes/cordova-plugin-navigationbar',
            platforms: ['Android']
        })
    ], NavigationBarColor);
    return NavigationBarColor;
}(IonicNativePlugin));
export { NavigationBarColor };
//# sourceMappingURL=index.js.map