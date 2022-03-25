# 4.1 CSP Overview

TO_DO: add graph

Content Security Policy (CSP) is a standard introduced to prevent cross-site-scripting, click-jacking and other code injection attacks resulting of malicious inputs in the trusted web page context.
CSP defines a standard methods for web application developers to declare approved origins of content that browsers should allow loading.

::: warning
CSP is not intended as a first level of defense against code injection attacks like XSS. CSP is best used as defense-in-depth. 
It reduces the risk that malicious injection can cause, but it is not a replacement for careful input validation and output encoding.
:::

To enable CSP, you need to configure your web application to return the `Content-Security-Policy` HTTP header.

## CSP common white-list properties


- `default-src` : Optional property if no other attributes are defined. In most cases, the value of this property is `default-src 'self'`  meaning the browser can only upload resources from the current website. 
  
- `script-src` : Defines locations from which external scripts can be loaded. If your web application does not use client-side scripting, set the value to `script-src 'none'`.
    
- `img-src` : Defines locations from which images can be retrieved.
    
- `media-src` : Defines locations from which rich media like video can be retrieved.
    
- `object-src` : Defines locations from which plugins can be retrieved.
    
- `manifest-src` : Defines locations from which application manifests can be retrieved.
    
- `frame-ancestors` : Defines locations from which another web page can be loaded using a frame, iframe, object, embed, or applet element.
    
- `form-action` : Specifies URLs that can be used as part of an action in a `<form>` tag, meaning the browser restricts where form results can be sent. The form action does not revert to `default-src`, so this is a mandatory property if you are using form elements on your site.
    
- `plugin-types` : Identifies the set of plugins that can be invoked via objects, embeds, or applets, defined using MIME types.
    
- `base-uri` : Allows URLs in the src attribute of any tag.

::: warning
As of today, some CSP properties may not be supported by recent browsers.
You can verify the compatibility of CSP properties with browser with several online tools like this one: [https://caniuse.com/?search=csp](https://caniuse.com/?search=csp)
:::

## Common white-list CSP example

``` typescript
Content-Security-Policy: default-src 'self'; style-src 'unsafe-inline' 'self' https://fonts.googleapis.com https://themes.googleusercontent.com; frame-src https://www.slideshare.net www.youtube.com twitter.com; object-src 'none'; font-src 'self' data: https://themes.googleusercontent.com https://fonts.googleapis.com; script-src 'strict-dynamic' 'nonce-rAnd0m123' 'unsafe-inline' 'self' https://www.google.com twitter.com https://themes.googleusercontent.com; base-uri 'none'; img-src 'self' https://www.google.com data: https://pbs.twimg.com https://img.youtube.com twitter.com
```

::: tip
[This online tool](https://csp-evaluator.withgoogle.com/) can help you evaluate the strength of your CSP.
:::

## CSP evolution to strict CSP

white-list CSP properties requires a lot of customization and maintenance.

CSP evolution with `script-src` directive :

| version 1 | version 2 | version 3 |
| `http: ... https: ...` | `nonce-{random}` | `strict-dynamic` |
| white-list strategy | random id associated with `<script>` tag | propagates trust to `nonced` blocks |
| Unsecure, can be easily bypassed | restrictive with trusted external resources | with nonce, security & flexibility |

A **nonce** is a random number generated for single usage to mark a `<script>` tag as trusted.

::: warning
Browsers still not support all CSP version 3 features.
Most recent browsers version support CSP version 2.
:::