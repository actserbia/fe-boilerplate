### Fe-boilerplate

- Fe-boilerplate is made as a base for standalone projects, not depending of vagrant sceleton.
- It consists minification and concatenation for SCSS and JS.
- Public folder is a destination folder for production files.

### Dev/Build Setup

- git clone
- cd to repository
- npm install
- gulp

### Live Reload

- In order to use it, please install extension here https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
- Make sure you can view it in your tool bar and that the circle is filled in with black. This is important or else it won’t work.

### How to use this boilerplate

- In gulpfile.js you will see variables which declares paths for you development phase and production phase. Just define them before you start using gulp
- Also there is web font generator in which you also must put path for you OTF or TTF font and run task 'fontgen' in order to generate them. Once you've done that, you can locate in scss/mixin/_mixin.fontFace.scss an example of how to use this fonts in your project
