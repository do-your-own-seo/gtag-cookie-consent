# gtag-cookie-consent.js

This is a tiny script in plain JavaScript that prompts the user for permission to set analytical cookies from GA4.

The approach is GDPR-compliant because no cookies are set by default. The logic is <b>not</b> region-specific.

The script sets its own cookie, 'cookie_consent', which expires after 90 days. The allowed values are 'denied' and 'granted', which refer to the user's consent to set analytics cookies. (We assume that GA only sets cookies named like _ga****.)

If the user rejects GA cookies, but they were set before gtag-cookie-consent.js was implemented, the script erases them.

## Usage
    <head>
      <script defer src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
      <script defer src=".../path/to/gtag-init.js"></script>
      
      /* The standard init script for gtag.js was modified according to 
          https://developers.google.com/tag-platform/devguides/consent
      */  
      ...
      <style>
        #modal {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background-color: #ccc;
          padding: 20px;
          box-sizing: border-box;
          z-index: 101;
          width: 80%;
          max-width: 600px;
        }
        .hidden {
          display: none;
        }
      </style>
    </head>
    <body>
      ...
      <script src=".../path/to/gtag-cookieconsent.js"></script>
    </body>
    
The gtag-cookieconsent script was needed for a [multilingual site](https://do-your-own-seo.com/en/). So, in order not to complicate things with language settings, I abandoned the idea of creating a modal dynamically. The hidden modal pane is embedded in the HTML and contains two buttons only:

    <div id="modal" class="hidden" data-role="cookieconsent">
      <h2>Here are some cookies</h2>
      <p>This site uses two types of cookies: analytical and those needed for this dialog to work.</p>
      <p>
         <button id="accept-necessary">Reject Analytics</button>
         <button id="accept-all" autofocus>Accept All</button>
      </p>
    </div>
    
  ## Acknowledgement
  The coding work was done by ChatGPT. I just described what the JS file should do, and then fixed some bugs in the code.
  
  For example, the condition `(consentCookie && consentCookie === 'denied')` was not considered in `checkConsent()` function. That should have caused the banner to appear on every page of the site if the user initially rejected the cookie.
