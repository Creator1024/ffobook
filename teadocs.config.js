'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "FFO 幻想目录",
        description: "QQ自由幻想（FFO）百科全书之幻想目录",
        version: "0.0.1",
        dir: "./docs",
        outDir: "./build",
        staticDir: "./static"
    }, 
    theme: {
        dir: "", 
        title: "",
        headHtml: `
			<meta name="google-site-verification" content="Wsqv8q9RJgmtDsBQKXjGmFni9ffrhsaDGydjUyomVr8" />
		`,
        footHtml: `
			<!-- hm -->
			<script>
				var _hmt = _hmt || [];
				(function() {
				  var hm = document.createElement("script");
				  hm.src = "https://hm.baidu.com/hm.js?c397b3c9771ef07cfe2cd5f44be3e552";
				  var s = document.getElementsByTagName("script")[0]; 
				  s.parentNode.insertBefore(hm, s);
				})();
			</script>
		`,
        isMinify: true,
        rootPath: "/"
    },
    nav: {
        tree: "./tree"
    }
}