
# Ionic 3 Plugin: Navigation Bar Color
Change color of navigation bar (Android) for your app in each page.

## Install
This plugins needs "cordova-plugin-navigationbar-color"
```npm
npm i --save cordova-plugin-navigationbar-color
```
```npm
npm i --save ionic-plugin-navigation-bar-color
```

## Config
For global config using "cordova-plugin-navigationbar-color" you can just add preference to config.xml file.
```xml
<preference name="NavigationBarBackgroundColor" value="#000000" />
```
Where "#000000" is your desired hex string color code.

Add "cordova-plugin-navigationbar-color" plugin tag to config.xml
```xml
<plugin name="cordova-plugin-navigationbar-color" spec="0.0.8" />
```
And you can use "ionic-plugin-navigation-bar-color" to set inside each Ionic module

## Import
Import to app.module.ts
```ts
import { NavigationBarColor } from 'ionic-plugin-navigation-bar-color';
```
Add "NavigationBarColor" to provider list
```ts
providers: [
    ...,
    NavigationBarColor,
    ...
]
```

Import to your component
```ts
import { NavigationBarColor } from 'ionic-plugin-navigation-bar-color';
```
## Using
Add to constructor
```ts
constructor(
    ...,
    public navigationBarColor: NavigationBarColor,
    ...
   )
```
Use this function to change color
```ts
navigationBarColor.backgroundColorByHexString('#000000');
```
Where "#000000" is your desired hex string color code.
