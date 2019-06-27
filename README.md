# Selectal
Select box styling made simple and fun.

## Install
Run the following command:
```
npm install selectal
```

or manually download the files you need from [here](https://github.com/Kovee98/selectal/releases "Releases").

## Usage
In the javascript files where you need it:
```
const selectal = require('selectal');
var mySelect = new Selectal('#my-select');
```
or include
```
<script src='<installation_directory>/dist/selectal.min.js'>
```
in your html.
and include the base styling by including the script in your html:
```
<link rel="stylesheet" href="<installation_directory>/dist/selectal.min.css" crossorigin="anonymous">
```

## Customize
Use the following classes to customize to your hearts content.

#### Classes
![[Style Diagram](https://github.com/Kovee98/selectal/releases "style_diagram.png")](https://github.com/Kovee98/selectal/blob/develop/styling_diagram.png)
* selectal-wrapper
	* ![#007FFF](https://placehold.it/15/007FFF/000000?text=+) `selectal-group`
		* ![#00cc00](https://placehold.it/15/00cc00/000000?text=+) `selectal-btn`
			* ![#FFFF33](https://placehold.it/15/FFFF33/000000?text=+) `selectal-selected-item`
		* ![#f07b27](https://placehold.it/15/f07b27/000000?text=+) `selectal-dropdown`
			* ![#ff3333](https://placehold.it/15/ff3333/000000?text=+) `selectal-dropdown-option`
