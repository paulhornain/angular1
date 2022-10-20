import{d as e}from"./app.a494a74d.js";import{_ as r}from"./uncle-pw.9679d5b2.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const t={},i=e('<h1 id="_6-5-vulnerable-components-practical-work" tabindex="-1"><a class="header-anchor" href="#_6-5-vulnerable-components-practical-work" aria-hidden="true">#</a> 6.5 Vulnerable Components Practical Work</h1><p><img src="'+r+'" alt="pw"></p><p>1 - Load a js script from Content Delivery Network (CDN) with SRI</p><ul><li>In index.html, load the minified version 3.2.1 of &quot;jquery&quot; from <code>cdnjs.cloudflare.com</code> (take care of the version number)</li><li>Implement sub resource integrity (SRI) to check the resource integrity</li></ul><p>Hints :</p><ul><li>Get resources with SRI from https://cdnjs.com or use the online tool https://www.srihash.org/ to generate SRI hash</li><li>if CSP is configured, you will have to update it in order to allow external resources from CDN (add appropriate hash in <code>script-src</code> directive - work only for Chrome)</li></ul><p>2 - Detect known vulnerable third party components</p><ul><li>execute <code>npm audit</code> and review the report.</li></ul>',8);function a(c,n){return i}var p=o(t,[["render",a]]);export{p as default};