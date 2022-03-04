export const initGTag = () => {
  const body = document.getElementsByTagName('body')[0];

  const gtagScript = document.createElement('script');

  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-222088630-1';

  gtagScript.async = true;

  body.appendChild(gtagScript);

  const awScript = document.createElement('script');

  awScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-222088630-1');
    `;

  gtagScript.onload = () =>
    document.getElementsByTagName('body')[0].appendChild(awScript);
};

export default {
  initGTag,
};
