# Selectal
Select elements made pretty and simple.

## Install
Run the following from a command line:
```
npm install selectal
```

or manually download the files you need from github.

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
Use the following classes to customize your select to your hearts content.

#### Classes
* selectal-wrapper
	* selectal-group
		* selectal-btn
			* selectal-selected-item
		* selectal-dropdown
			* selectal-dropdown-option