# Selectal
Select box styling made simple and fun.

## Install
Run the following command:
```
npm install selectal
```

or manually download the files you need from [GitHub Releases](https://github.com/Kovee98/selectal/releases "GitHub Releases").

## Usage
Include the styling in your html:
```
<link rel="stylesheet" href="<installation_directory>/selectal.min.css">
```
Include the code as an npm package in your javascript:
```
const selectal = require('selectal');
```
... or as a script in your html:
```
<script src='<installation_directory>/selectal.min.js'>
```

Then just initialize your select box:
```
var mySelect = new Selectal('#my-select');
```

## Customize
The following classes can be used to customize your select box:

#### Classes

<img src="https://raw.githubusercontent.com/Kovee98/selectal/develop/styling_diagram.png">

* selectal-wrapper
	* ![#007FFF](https://placehold.it/15/007FFF/000000?text=+) `selectal-group`
		* ![#00cc00](https://placehold.it/15/00cc00/000000?text=+) `selectal-btn`
			* ![#FFFF33](https://placehold.it/15/FFFF33/000000?text=+) `selectal-selected-item`
		* ![#f07b27](https://placehold.it/15/f07b27/000000?text=+) `selectal-dropdown`
			* ![#ff3333](https://placehold.it/15/ff3333/000000?text=+) `selectal-dropdown-option`


## Contribute
Feature you'd like to improve? Bug you'd like to fix? Theme you'd like to share? Pull requests are more than welcome here. 
##### Here's an outline for the theme submissions:
* /themes
	* /{your-theme}-theme
		* {your-theme}.css
		* {your-theme}.png