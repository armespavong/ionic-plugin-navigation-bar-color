import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class NavigationBarColor extends IonicNativePlugin {

    /**
     * Set the navigation bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call NavigationBarColor.overlaysWebView(false) to enable color changing.
     *
     * @param {string} hexString  The hex value of the color.
     */
    backgroundColorByHexString(hexString: string): void;

}
