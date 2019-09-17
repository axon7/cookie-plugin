const createCookieBanner = () => {
  const cookieBox = document.createElement("div");
  cookieBox.classList.add("cookiePlugin");
  cookieBox.innerHTML =
    "<h1 class='title'>GDPR consent</h1><div class='buttons'><button class='accept-button' onclick=createCookie('accept')>Accept</button><button class='cancel-button' onclick=createCookie('cancel')>Cancel</button></div>";

  const body = document.querySelector("body");
  body.appendChild(cookieBox);
};
//create cookie (cancel or accept) based on the clicked button
const createCookie = type => {
  let expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() + 24 * 60 * 60 * 1000); //add 24 hours (in miliseconds) to expires date

  document.cookie = `GDPR_agreement = ${type}; expires=${expiresDate.toString()}`;
  cookieBox = document.querySelector(".cookiePlugin");
  cookieBox.classList.toggle("hide");
  document.body.classList.toggle("disablescroll");
};

window.onload = function() {
  //when window loads it checks if cookie exists.
  //if not then cookie should pop-up and disable scrolling
  if (document.cookie.indexOf("GDPR_agreement=") < 0) {
    document.body.classList.toggle("disablescroll");
    createCookieBanner();
  }
};
