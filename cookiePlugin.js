const createCookieBanner = () => {
  const cookieBox = document.createElement("div");
  cookieBox.classList.add("cookiePlugin");
  cookieBox.innerHTML =
    "<h1 class='title'>GDPR consent</h1><div class='buttons'><button class='accept-button' onclick=createCookie('accept')>Accept</button><button class='cancel-button' onclick=createCookie('cancel')>Cancel</button></div>";

  const body = document.querySelector("body");
  body.appendChild(cookieBox);
};

const createCookie = type => {
  let expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() + 24 * 60 * 60 * 1000); //add 24 hours (in miliseconds) to expires date

  document.cookie = `GDPR_agreement = ${type}; expires=${expiresDate.toString()}`;
  cookieBox = document.querySelector(".cookiePlugin");
  cookieBox.classList.toggle("hide");
  document.body.classList.toggle("disablescroll");
};

window.onload = function() {
  //when window loads it checks if cookie exists. if not then visibility should be true

  if (document.cookie.indexOf("GDPR_agreement=") < 0) {
    document.body.classList.toggle("disablescroll");
    createCookieBanner();
  }
};

//create cookie box
// when accept => create cookie and save in browser for 24h
//when

// ◦ Musi uruchomić się jak najszybciej po odczytaniu przez przeglądarkę.
// ◦ Musi wyświetlić box informacyjny na środku strony o tytule “GDPR consent”.
// jednocześnie wyłączając możliwość scrollowania (tak żeby zawsze był
// widoczny).
// ◦ Po kliknięciu w Accept lub Cancel plugin musi zapisać informację w
// przeglądarce czy użytkownik wyraził zgodę (Accept) czy nie (Cancel), a box
// powinien zniknąć włączając przy tym ponownie scrolla.
// ◦ Po odświeżeniu strony plugin powinien wyświetlić ponownie box informacyjny,
// jednak dopiero po 24 godzinach od poprzedniej decyzji użytkownika.
