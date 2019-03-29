(function(){
  "use strict";

  // include index.html for webpack to load
  require("./index.html");

  var Reveal = require("reveal.js");
  import(/* webpackPrefetch: true */ 'reveal.js/css/reveal.css');
  import(/* webpackPrefetch: true */ 'reveal.js/css/theme/night.css');


  Reveal.initialize({
    history: true,
    // More info https://github.com/hakimel/reveal.js#dependencies
   /* dependencies: [
      { src: 'plugin/markdown/marked.js' },
      { src: 'plugin/markdown/markdown.js' },
      { src: 'plugin/notes/notes.js', async: true },
      { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]*/
  });
})();
