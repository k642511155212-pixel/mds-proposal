/* MDS Proposal Visit Tracking v1.1
 * Add near the end of the website JS, or load as a separate JS file.
 * Replace YOUR_WEB_APP_URL with the Apps Script Web App URL ending in /exec.
 */
(function () {
  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwmUYa-8ArJf_z8hmTgSRWQ5k-sq4m2bNSLXC8o-Lr7dvUw0iiBVs14NunYpyzPUfFvNg/exec';
  const params = new URLSearchParams(window.location.search);
  const rid = (params.get('rid') || '').trim().toUpperCase();

  // v1.1 supports MDS0001 ... MDS9999 and beyond.
  if (!/^MDS\d{4,}$/.test(rid)) return;
  if (!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/i.test(WEB_APP_URL)) {
    console.warn('[MDS tracking] WEB_APP_URL has not been configured.');
    return;
  }

  // Count at most once per browser tab/session per Tracking_ID.
  const sessionKey = 'mds_proposal_visit_' + rid;
  if (sessionStorage.getItem(sessionKey)) return;
  sessionStorage.setItem(sessionKey, '1');

  const trackingUrl =
    WEB_APP_URL +
    '?action=visit' +
    '&rid=' + encodeURIComponent(rid) +
    '&page=' + encodeURIComponent(window.location.pathname) +
    '&_=' + Date.now();

  const pixel = new Image(1, 1);
  pixel.alt = '';
  pixel.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;';
  pixel.src = trackingUrl;
  document.body.appendChild(pixel);
})();
