import { Injectable } from '@angular/core';
import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';

@Plugin({
    pluginName: 'NavigationBar', // should match the name of the wrapper class
    plugin: 'cordova-plugin-navigationbar-color', // NPM package name
    pluginRef: 'NavigationBar', // name of the object exposed by the plugin
    repo: 'https://github.com/cranberrygame/cordova-plugin-navigationbar', // plugin repository URL
    platforms: ['Android'] // supported platforms
})
@Injectable()
export class NavigationBarColor extends IonicNativePlugin {

    @Cordova()
    backgroundColorByHexString(hexString: string): Promise<string> { return; }

}
