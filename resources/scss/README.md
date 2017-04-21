### Fe-boilerplate

- Fe-boilerplate is made as a base for standalone projects.
- It consists minification and concatenation for SCSS and JS.
- Public folder is a destination folder for production files.



# Table of SCSS Contents

01. [Core](#core)
02. [Lib](#lib)
03. [Settings](#settings)
06. [Blocks](#blocks)
07. [Components](#components)
09. [Pages](#pages)
10. [Trumps](#trumps)

# <a name="core"></a>
### Core
###### *Core files prepare DOM by making HTML elements consistent across browsers and removing built-in browser styling.*

> Must be included by default.
* Reset...............Reset HTML elements.
* Box-sizing..........Build CSS layouts easier.
* Normalize...........normalize.css v4.1.1.

###### Please see [core/readme.md](core) for a full table of contents and more detailed info.



# <a name="lib"></a>
### Lib
###### *Lib folder house carefully selected mixins and functions, that can be applied to any project.*

> Can be included partially.
* Functions............Globally-available functions.
* Mixins...............Globally-available mixins.

###### Please see [lib/readme.md](lib) for a full table of contents and more detailed info.



# <a name="settings"></a>
### Settings
######  *Settings folder is the starting point for any project. It house global variables like font, color, breakpoints etc. Some of this variables can be used in every project and that`s why you can and should include only the once you need.*

>
* Can be included partially.
* Project specific globally-available variables

###### Please see [settings/readme.md](settings)  for a full table of contents and more detailed info.



# <a name="blocks"></a>
### Blocks
######  *Blocks are various type of content wrapped with div that gives final look and feel to it content.*

>
* Can be included partially.
* Wrapped with div class named b-nameoftheblock.

###### Please see [blocks/readme.md](blocks) for a full table of contents and more detailed info.



# <a name="components"></a>
### Components
######  *Components are implementation-specific bits of UI. Modifying these styles should be safe and have no side effects.*

>
* Can be included partially.
* Concrete, specific piece of UI.

###### Please see [components/readme.md](components) for a full table of contents and more detailed info.



# <a name="pages"></a>
### Pages
######  *Specific styles for certain type of pages*

>
* Can be included partially.
* Applies only to certain type of page or pages.

###### Please see [pages/readme.md](pages) for a full table of contents and more detailed info.



# <a name="trumps"></a>
### Trumps
######  *Any hacks or overwriting of the code that needs to be done, will be done here.*

>
* Can be included partially.
* Hack code or overwrite everything above

###### Please see [trumps/readme.md](trumps) for a full table of contents and more detailed info.
