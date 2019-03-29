## Getting Started

1.Download zipped-up master template
https://github.com/jchull/reveal.js-webpack-starter/archive/master.zip

2.Unzip template files to your empty project folder
You should have index.html and app/ directly inside your project folder now

3.Install dependencies
`npm install`

4.Start Webpack Development Server
`npm run serve`

5.View Presentation
Hot Module Reloading: http://localhost:8080/webpack-dev-server/
Refresh Manually: http://localhost:8080

6.Edit presentation
When you save the presentation, webpack will automatically rebuild and load the changes into your browser.

## Distribution Build
The dist build output is the dist/ directory, you can open the index.html file
there, but it will not feature hot module reloading like the dev server configuration does

`npm build`
