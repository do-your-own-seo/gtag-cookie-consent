# gtag-cookie-consent.js
A tiny script in plain JavaScript that prompts the user for permission to set the cookies from Google Analytics.

The script was created for a [multilingual site](https://do-your-own-seo.com/en/), and in order not to complicate things with language settings, I abandoned the idea of creating a modal dynamically.
Thus, the hidden modal is embedded in the HTML and contains two buttons only:

    <div id="modal" class="hidden" data-role="cookieconsent">
      <b>Here are some cookies</b>
      <p>This site uses two types of cookies: analytical and those needed for this dialog to work.</p>
      <p><button id="accept-necessary">Reject Analytics</button>
      <button id="accept-all" autofocus>Accept All</button></p>
    </div>
      
 ## Usage
    <head>
      ...
      <script defer src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
      <script defer src="/path/to/gtag-init.js"></script>
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
      </style>
    </head>
    <body>
      ...
      <script src="/path/to/gtag-cookieconsent.js"></script>
    </body>
    
  The standard init script for gtag.js was modified according to [this guide](https://developers.google.com/tag-platform/devguides/consent)
