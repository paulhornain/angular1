import{d as e}from"./app.a494a74d.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const i={},a=e('<h1 id="_6-2-vulnerable-components-detection" tabindex="-1"><a class="header-anchor" href="#_6-2-vulnerable-components-detection" aria-hidden="true">#</a> 6.2 Vulnerable Components Detection</h1><h2 id="how-do-i-know-if-my-application-has-vulnerable-components" tabindex="-1"><a class="header-anchor" href="#how-do-i-know-if-my-application-has-vulnerable-components" aria-hidden="true">#</a> How do I know if my application has vulnerable components ?</h2><p><strong>Software composition Analysis</strong> (SCA) tools enable you to <strong>perform automated scan</strong> of all client-side and server-side components, and their dependencies used in your web application. These SCA tools continuously <strong>monitor</strong> vulnerabilities databases like NVD or OSS Index and alert you of potential threats in your project. Here is a list of SCA tools we recommend to use: Dependency-Track, Dependency-Check</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>SCA reports requires further analysis from your end in order to identify the real impact based on your context and <strong>filter out false positives</strong>.</p></div><h2 id="detecting-known-vulnerable-javascript-libraries-with-npm-audit" tabindex="-1"><a class="header-anchor" href="#detecting-known-vulnerable-javascript-libraries-with-npm-audit" aria-hidden="true">#</a> Detecting known vulnerable JavaScript libraries with npm audit</h2><p>npm provides an embedded dependency scanning during each compilation and provides an overview of vulnerable components present in your application. You can decide to upgrade the component as suggested by npm during the compilation.</p><h2 id="detecting-known-vulnerable-maven-dependencies-with-dependency-check" tabindex="-1"><a class="header-anchor" href="#detecting-known-vulnerable-maven-dependencies-with-dependency-check" aria-hidden="true">#</a> Detecting known vulnerable maven dependencies with Dependency-Check</h2><ul><li><p>Dependency-Check: Open source, maven plugin</p></li><li><p>Features:</p><ul><li>Scan all maven dependencies</li><li>Access to the NVD and check CVE</li><li>Generate a complete report (HTML format): vulnerabilities, criticality level, CVE code, patched versions ...</li></ul></li><li><p>Execute the maven command mvn org.owasp:dependency-check-maven:check</p></li><li><p>See usage &amp; configuration</p></li></ul><h2 id="tracking-project-vulnerabilities-with-dependency-track" tabindex="-1"><a class="header-anchor" href="#tracking-project-vulnerabilities-with-dependency-track" aria-hidden="true">#</a> Tracking project vulnerabilities with Dependency-Track</h2><p>Dependency-Track is an <strong>Open source</strong> tool provided by OWASP which allows continuous component analysis.</p><p>Features:</p><ul><li>CycloneDX and SPDX bill-of-material formats</li><li>Dependency-Check XML</li><li>Jenkins and gitlab-ci integration</li></ul>',12);function t(o,r){return a}var s=n(i,[["render",t]]);export{s as default};