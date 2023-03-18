window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied'
});

gtag('config', 'G-YOUR_ID'); // Remember to replace G-YOUR_ID with your actual GA id.
