import{r as o,o as r,c,a as s,e as t,F as i,d as a,b as e}from"./app.a494a74d.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var l="/angular-security-training/assets/csp-wf.42e4bd18.png",d="/angular-security-training/assets/csp-strict-dynamic.65a61b8a.png";const u={},h=a('<h1 id="_4-1-csp-overview" tabindex="-1"><a class="header-anchor" href="#_4-1-csp-overview" aria-hidden="true">#</a> 4.1 CSP Overview</h1><p><img src="'+l+'" alt="csp-workflow"></p><p>Content Security Policy (CSP) is a W3C <strong>standard</strong> introduced to <strong>prevent</strong> cross-site-scripting, click-jacking and other <strong>code injection attacks</strong> resulting of malicious inputs in the trusted web page context. CSP defines a standard methods for web application developers to <strong>declare approved origins</strong> of content that <strong>browsers should allow loading</strong>.</p><p><strong>CSP is a new browser security policy</strong> :</p><ul><li>Defines <strong>what it is allowed to happen</strong> in a page</li><li>Delivered by the server in a <strong>response header</strong> or meta tag</li></ul><p><img src="https://user-images.githubusercontent.com/1529433/174068330-0d060e3a-a1f9-4e0f-96b4-7e254658d7e0.png" alt="image"><img src="https://user-images.githubusercontent.com/1529433/174068366-ae57dff9-d2c9-44bc-be1e-b20fa18eec95.png" alt="image"><img src="https://user-images.githubusercontent.com/1529433/174069124-fee089b7-c043-4827-985c-b3731d149c84.png" alt="image"></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>CSP is not intended as a first level of defense against code injection attacks like XSS. <strong>CSP is best used as defense-in-depth.</strong> It <strong>reduces the risk</strong> that malicious injection can cause, but it is <strong>not a replacement</strong> for careful input validation and output encoding.</p></div><h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2><p>To enable CSP, you need to configure your web application to return the <code>Content-Security-Policy</code> HTTP header.</p><p><img src="https://user-images.githubusercontent.com/1529433/174067752-0b1dd582-22af-4fb2-8398-2a61fe114284.png" alt="image"></p><h2 id="csp-evolution-to-strict-csp" tabindex="-1"><a class="header-anchor" href="#csp-evolution-to-strict-csp" aria-hidden="true">#</a> CSP evolution to strict CSP</h2><p>White-list CSP properties requires a lot of customization and <strong>maintenance</strong>.</p><p>CSP evolution with <code>script-src</code> directive :</p><p><img src="https://user-images.githubusercontent.com/1529433/174065897-e3d89da5-7228-4954-a2e4-6154f878c96c.png" alt="image"></p><p>A <strong>nonce</strong> is a random number generated for single usage to mark a <code>&lt;script&gt;</code> tag as trusted.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Browsers still not support all CSP version 3 features. Most recent browsers version support CSP version 2.</p></div><h2 id="csp-common-directives" tabindex="-1"><a class="header-anchor" href="#csp-common-directives" aria-hidden="true">#</a> CSP common directives</h2><ul><li><p><code>default-src</code> : Default property if no other attributes are defined. In most cases, the value of this property is <code>default-src &#39;self&#39;</code> meaning the browser can only upload resources from the current website.</p></li><li><p><code>script-src</code> : Defines locations from which external scripts can be loaded. If your web application does not use client-side scripting, set the value to <code>script-src &#39;none&#39;</code>.</p></li><li><p><code>img-src</code> : Defines locations from which images can be retrieved.</p></li><li><p><code>media-src</code> : Defines locations from which rich media like video can be retrieved.</p></li><li><p><code>object-src</code> : Defines locations from which plugins can be retrieved.</p></li><li><p><code>manifest-src</code> : Defines locations from which application manifests can be retrieved.</p></li><li><p><code>frame-ancestors</code> : Defines locations from which another web page can be loaded using a frame, iframe, object, embed, or applet element.</p></li><li><p><code>form-action</code> : Specifies URLs that can be used as part of an action in a <code>&lt;form&gt;</code> tag, meaning the browser restricts where form results can be sent. The form action does not revert to <code>default-src</code>, so this is a mandatory property if you are using form elements on your site.</p></li><li><p><code>plugin-types</code> : Identifies the set of plugins that can be invoked via objects, embeds, or applets, defined using MIME types.</p></li><li><p><code>base-uri</code> : Allows URLs in the src attribute of any tag.</p></li><li><p><code>report-uri</code>: Instructs the browser to POST a reports of policy failures to this URI. You can also use <strong>Content-Security-Policy-Report-Only</strong> as the HTTP header name to instruct the browser to only send reports (does not block anything). This directive is deprecated in CSP Level 3 in favor of the report-to directive.</p></li></ul>',18),m={class:"custom-container warning"},g=s("p",{class:"custom-container-title"},"WARNING",-1),f=e("As of today, some CSP properties "),k=s("strong",null,"may not be supported by all browsers",-1),b=e(". IE is known to have limited support for CSP. You can verify the compatibility of CSP properties with browser with several online tools like this one: "),w={href:"https://caniuse.com/?search=csp",target:"_blank",rel:"noopener noreferrer"},v=e("https://caniuse.com/?search=csp"),_=a('<h2 id="csp-common-source-list-values" tabindex="-1"><a class="header-anchor" href="#csp-common-source-list-values" aria-hidden="true">#</a> CSP Common Source List Values</h2><ul><li><code>*</code>: Wildcard, allows any URL except data: blob: filesystem: schemes</li><li><code>none</code>: Prevents loading resources from any source, even from your own!</li><li><code>self</code> : Allows loading resources from the same origin (same scheme, host and port).</li><li><code>unsafe-inline</code> : Allows use of inline source elements such as style attribute, onclick, or script tag bodies and javascript: URIs. This value is as it says : unsafe !</li><li><code>nonce-rAnd0m</code> : Allows an inline script or CSS to execute if the script (eg: <code>&lt;script nonce=&quot;rAnd0m&quot;&gt;</code>) tag contains a nonce attribute matching the nonce specified in the CSP header. The nonce should be a secure random string, and should not be reused.</li><li><code>strict-dynamic</code> : Allows scripts to be included by any script already marked by a nonce or hash. Disables the whitelist and allows backward compatibility with CSP v1 and v2 as shown bellow: <img src="'+d+`" alt="csp-workflow"></li></ul><h2 id="common-white-list-csp-example" tabindex="-1"><a class="header-anchor" href="#common-white-list-csp-example" aria-hidden="true">#</a> Common white-list CSP example</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Content<span class="token operator">-</span>Security<span class="token operator">-</span>Policy<span class="token operator">:</span> 
  <span class="token keyword">default</span><span class="token operator">-</span>src <span class="token string">&#39;self&#39;</span><span class="token punctuation">;</span> 
  style<span class="token operator">-</span>src <span class="token string">&#39;unsafe-inline&#39;</span> <span class="token string">&#39;self&#39;</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>fonts<span class="token punctuation">.</span>googleapis<span class="token punctuation">.</span>com https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>themes<span class="token punctuation">.</span>googleusercontent<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
  frame<span class="token operator">-</span>src https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>slideshare<span class="token punctuation">.</span>net www<span class="token punctuation">.</span>youtube<span class="token punctuation">.</span>com twitter<span class="token punctuation">.</span>com<span class="token punctuation">;</span> 
  object<span class="token operator">-</span>src <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span> 
  font<span class="token operator">-</span>src <span class="token string">&#39;self&#39;</span> data<span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>themes<span class="token punctuation">.</span>googleusercontent<span class="token punctuation">.</span>com https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>fonts<span class="token punctuation">.</span>googleapis<span class="token punctuation">.</span>com<span class="token punctuation">;</span> 
  script<span class="token operator">-</span>src <span class="token string">&#39;strict-dynamic&#39;</span> <span class="token string">&#39;nonce-rAnd0m123&#39;</span> <span class="token string">&#39;unsafe-inline&#39;</span> <span class="token string">&#39;self&#39;</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>google<span class="token punctuation">.</span>com twitter<span class="token punctuation">.</span>com https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>themes<span class="token punctuation">.</span>googleusercontent<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
  base<span class="token operator">-</span>uri <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span> 
  img<span class="token operator">-</span>src <span class="token string">&#39;self&#39;</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>google<span class="token punctuation">.</span>com data<span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>pbs<span class="token punctuation">.</span>twimg<span class="token punctuation">.</span>com https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>img<span class="token punctuation">.</span>youtube<span class="token punctuation">.</span>com twitter<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,4),y={class:"custom-container tip"},S=s("p",{class:"custom-container-title"},"TIP",-1),C={href:"https://csper.io/evaluator",target:"_blank",rel:"noopener noreferrer"},P=e("This online tool"),x=e(" or "),I={href:"https://csp-evaluator.withgoogle.com/",target:"_blank",rel:"noopener noreferrer"},T=e("this one"),A=e(" can help you evaluate the strength of your CSP."),D=e("To learn further about CSP, don't hesitate to check "),N={href:"https://content-security-policy.com/",target:"_blank",rel:"noopener noreferrer"},R=e("there Quick Reference Guide"),j=e(".");function L(W,E){const n=o("ExternalLinkIcon");return r(),c(i,null,[h,s("div",m,[g,s("p",null,[f,k,b,s("a",w,[v,t(n)])])]),_,s("div",y,[S,s("p",null,[s("a",C,[P,t(n)]),x,s("a",I,[T,t(n)]),A])]),s("p",null,[D,s("a",N,[R,t(n)]),j])],64)}var B=p(u,[["render",L]]);export{B as default};