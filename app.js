const body = document.body;
const navlist = document.querySelector(".nav");
const navbarClose = document.querySelector(".nav-close");
const navbarOpen = document.querySelector(".fa-solid");
const balanceSum = document.querySelector(".balance-sum");
const wheelCont = document.querySelector(".wheel-container");
const wheelArrow = document.querySelector(".wheel-arrow");
const btnSpin = document.querySelector(".btn-spin");
const rewardsCont = document.querySelector(".rewards-cont");
const rewardCurrent = document.querySelector(".reward-current");
const rewardPic = document.querySelector(".reward-picture");
const rewardTitle = document.querySelector(".reward-title");
const rewardPrice = document.querySelector(".reward-price");
const btnClaim = document.querySelector(".btn-claim");
const btnSell = document.querySelector(".btn-sell");
const allRewards = document.querySelector(".all-rewards");
const allRewardsClose = document.querySelector(".all-rewards-close");
const claimedRewardsCont = document.querySelector(".claimed-rewards-cont");
const rewardsList = document.querySelector(".claimed-rewards");
const claimedRewardsClose = document.querySelector(".claim-close");
const claimedRewardsOpen = document.querySelector(".claimed-rewards-open");
const thanksCont = document.querySelector(".thanks-cont");
const btnReset = document.querySelector(".reset-btn");
const btnOdds = document.querySelector(".btn-odds");
const odds = document.querySelectorAll(".odds");
const aboutOpen = document.querySelector(".about-open");
const aboutClose = document.querySelector(".about-close");
const aboutCont = document.querySelector(".about-cont");
const contactCont = document.querySelector(".contact-cont");
const contactOpen = document.querySelector(".contact-open");
const contactClose = document.querySelector(".contact-close");
const html5 = document.querySelector(".fa-html5");
const css3 = document.querySelector(".fa-css3-alt");
const js = document.querySelector(".fa-js");
const php = document.querySelector(".fa-php");
const react = document.querySelector(".fa-react");
const messageCont = document.querySelector(".message-cont");


let buttonDisabled = false;

// Nav menu closing, background blur, button remove

function UiUpdate() {
  navlist.style.clipPath = "circle(30px at 100% -10%)";
  navlist.style.transition = "all 1.5s ease-out";
  wheelCont.style.filter = "blur(10px)";
  allRewards.style.display = "none";
  rewardsCont.style.display = "none";
}

// Nav menu open

navbarOpen.addEventListener("click", () => {
  navlist.style.clipPath = "circle(1500px)";
  navlist.style.transition = "all 1.5s ease-out";
  wheelCont.style.filter = "blur(10px)";
});

// Nav menu close

navbarClose.addEventListener("click", () => {
  navlist.style.clipPath = "circle(30px at 100% -10%)";
  navlist.style.transition = "all 1.5s ease-out";
  wheelCont.style.filter = "blur(0px)";
});

// All rewards open

allRewards.addEventListener("click", () => {
  rewardsCont.style.display = "grid";
});

// All rewards close

allRewardsClose.addEventListener("click", () => {
  rewardsCont.style.display = "none";
});

// My rewards close

claimedRewardsClose.addEventListener("click", () => {
  claimedRewardsCont.style.display = "none";
  wheelCont.style.filter = "blur(0px)";
  allRewards.style.display = "grid";
});

// My rewards open

claimedRewardsOpen.addEventListener("click", () => {
  aboutCont.style.display = "none";
  contactCont.style.display = "none";
  claimedRewardsCont.style.display = "flex";
  UiUpdate();
});

// About open

aboutOpen.addEventListener("click", () => {
  claimedRewardsCont.style.display = "none";
  contactCont.style.display = "none";
  UiUpdate();
  aboutCont.style.display = "flex";
});

// About close

aboutClose.addEventListener("click", () => {
  aboutCont.style.display = "none";
  wheelCont.style.filter = "blur(0px)";
  allRewards.style.display = "grid";
});

// Contact open

contactOpen.addEventListener("click", () => {
  UiUpdate();
  contactCont.style.display = "flex";
  aboutCont.style.display = "none";
});

// Contact close

contactClose.addEventListener("click", () => {
  contactCont.style.display = "none";
  wheelCont.style.filter = "blur(0px)";
  allRewards.style.display = "grid";
});

// Cards flip

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", () => {
    card.classList.toggle("rotate");
    card.style.transition = "all 1s ease-in-out";
  });
});
// Technologies animation

// Html
const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");

html5.addEventListener("mouseover", () => {
  h1.style.width = "100%";
  h1.style.transition = "0.15s ease-in";
  setTimeout(function () {
    h2.style.width = "100%";
    h2.style.transition = "0.15s ease-out";
  }, 150);
  setTimeout(function () {
    h3.style.width = "100%";
    h3.style.transition = "0.15s ease-out";
  }, 300);
  setTimeout(function () {
    h4.style.width = "100%";
    h4.style.transition = "0.15s ease-out";
  }, 450);
});

// CSS
const css31 = document.querySelector(".css1");
const css32 = document.querySelector(".css2");
const css33 = document.querySelector(".css3");

css3.addEventListener("mouseover", () => {
  css31.style.width = "100%";
  css31.style.transition = "0.15s ease-in";
  setTimeout(function () {
    css32.style.width = "100%";
    css32.style.transition = "0.15s ease-out";
  }, 150);
  setTimeout(function () {
    css33.style.width = "100%";
    css33.style.transition = "0.15s ease-out";
  }, 300);
});

// JS
const js1 = document.querySelector(".js1");
const js2 = document.querySelector(".js2");
const js3 = document.querySelector(".js3");

js.addEventListener("mouseover", () => {
  js1.style.width = "100%";
  js1.style.transition = "0.15s ease-in";
  setTimeout(function () {
    js2.style.width = "100%";
    js2.style.transition = "0.15s ease-out";
  }, 150);
  setTimeout(function () {
    js3.style.width = "100%";
    js3.style.transition = "0.15s ease-out";
  }, 300);
});

// PHP
const php1 = document.querySelector(".php1");

php.addEventListener("mouseover", () => {
  php1.style.width = "100%";
  php1.style.transition = "0.2s ease-in";
});

// REACT
const react1 = document.querySelector(".react1");

react.addEventListener("mouseover", () => {
  react1.style.width = "100%";
  react1.style.transition = "0.2s ease-in";
});

/*html5.addEventListener("mouseout", () => {
  h4.style.width = "0%";
  h4.style.transition = "0.15s ease-in";
  setTimeout(function () {
    h3.style.width = "0%";
    h3.style.transition = "0.15s ease-out";
  }, 150);
  setTimeout(function () {
    h2.style.width = "0%";
    h2.style.transition = "0.15s ease-out";
  }, 300);
  setTimeout(function () {
    h1.style.width = "0%";
    h1.style.transition = "0.15s ease-out";
  }, 450);
});*/

//  Odds showing

btnOdds.addEventListener("click", () => {
  odds.forEach((odd) => odd.classList.toggle("block"));
});

// Box 1 rewards

const box1 = {
  wifiHeadset: {
    title: "Wireless Headset",
    price: 300,
    imgUrl: "./img/15.jpg",
    spin: 1800,
  },
  elephantFigure: {
    title: "Elephant Figure",
    price: 15,
    imgUrl: "./img/23.jpg",
    spin: 1980,
  },
  navigation: {
    title: "Car Navigation",
    price: 90,
    imgUrl: "./img/20.jpg",
    spin: 1822.5,
  },
  psp: {
    title: "PS Portable",
    price: 35,
    imgUrl: "./img/22.jpg",
    spin: 2070,
  },
  jbl: {
    title: "JBL Speaker",
    price: 50,
    imgUrl: "./img/21.png",
    spin: 1912.5,
  },
  poker: {
    title: "Poker Set",
    price: 100,
    imgUrl: "./img/19.jpg",
    spin: 1845,
  },
  vr: {
    title: "VR Headset",
    price: 190,
    imgUrl: "./img/18.jpg",
    spin: 1935,
  },
  supreme: {
    title: "Supreme Sweatshirt",
    price: 230,
    imgUrl: "./img/17.jpg",
    spin: 2137.5,
  },
  apple: {
    title: "Apple Mouse and Keyboard",
    price: 275,
    imgUrl: "./img/16.jpg",
    spin: 2025,
  },
  goPro: {
    title: "Go Pro Camera",
    price: 380,
    imgUrl: "./img/14.jpg",
    spin: 2002.5,
  },
  hoverboard: {
    title: "Hoverboard",
    price: 450,
    imgUrl: "./img/13.jpg",
    spin: 2092.5,
  },
  sneakers: {
    title: "Nike Jordan Sneakers",
    price: 500,
    imgUrl: "./img/12.jpg",
    spin: 1890,
  },
  camera: {
    title: "Nikon Camera",
    price: 600,
    imgUrl: "./img/10.jpg",
    spin: 2115,
  },
  drone: {
    title: "Mavik Pro Drone",
    price: 900,
    imgUrl: "./img/9.jpg",
    spin: 1957.5,
  },
  galaxy: {
    title: "Galaxy Note 10+",
    price: 1100,
    imgUrl: "./img/8.jpg",
    spin: 1867.5,
  },
  iphone: {
    title: "Apple Iphone 13 Pro Max",
    price: 1500,
    imgUrl: "./img/7.png",
    spin: 2047.5,
  },
};

// Current reward object, balance,

let currentReward;
let balance = 100;

// Drawing the prize and preventing re-drawing while the previous one lasts

btnSpin.addEventListener("click", () => {
  if (buttonDisabled === false && balance >= 50) {
    balance -= 50;
    balanceSum.textContent = `$${balance}`;
    let randomNum = Math.round(Math.random() * (1001 - 1) + 1);
    if (randomNum < 221) {
      currentReward = box1.elephantFigure;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 442) {
      currentReward = box1.psp;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 663) {
      currentReward = box1.jbl;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 755) {
      currentReward = box1.navigation;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 821) {
      currentReward = box1.poker;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 874) {
      currentReward = box1.vr;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 914) {
      currentReward = box1.supreme;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 947) {
      currentReward = box1.apple;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 964) {
      currentReward = box1.wifiHeadset;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 979) {
      currentReward = box1.goPro;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 989) {
      currentReward = box1.hoverboard;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 994) {
      currentReward = box1.sneakers;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 997) {
      currentReward = box1.camera;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 999) {
      currentReward = box1.drone;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 1000) {
      currentReward = box1.galaxy;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    } else if (randomNum < 1001) {
      currentReward = box1.iphone;
      wheelArrow.style.transform = `rotate(${currentReward.spin}deg)`;
      wheelArrow.style.transition = "all 5s";
      rewardPic.src = `${currentReward.imgUrl}`;
      rewardTitle.textContent = `${currentReward.title}`;
      rewardPrice.textContent = `($${currentReward.price})`;
    }

    // Prize drawn, new spin ready

    buttonDisabled = true;
    setTimeout(function () {
      buttonDisabled = false;
      rewardCurrent.style.display = "flex";
      wheelArrow.style.transition = "all 0.01s";
      wheelArrow.style.transform = `rotate(0deg)`;
    }, 6000);
  }
});

// Selling current reward

btnSell.addEventListener("click", () => {
  balance += currentReward.price;
  rewardCurrent.style.display = "none";
  balanceSum.textContent = `$${balance}`;
  balanceSum.style.transform = "translateY(-20px)";
});

// Claiming current reward

btnClaim.addEventListener("click", () => {
  rewardCurrent.style.display = "none";
  rewardsList.innerHTML += `
            <div class="reward" id="${currentReward.price}">
              <div class="img-text-cont">
                <img src="${currentReward.imgUrl}" alt="">
                <div class="text-cont">
                  <p class="claimed-reward-title">${currentReward.title}</p>
                  <p class="claimed-reward-price">$${currentReward.price}</p>
                </div>
              </div>
              <div class="claimed-rewards-action">
                <button onclick="claimedRewardSell(this)" class="btn-sell2">Sell</button>
                <button class="btn-ship" onclick="ship()">Ship</button>
                </div>
            </div>
              `;
});

// Thanks message, ship button

function ship() {
  claimedRewardsClose.style.display = "none";
  wheelCont.style.filter = "blur(10px)";
  thanksCont.style.display = "flex";
}

// Removing rewards from chart and adding found to balance

function claimedRewardSell(element) {
  let mainEl = element.closest(".reward");
  balance += Number(mainEl.id);
  balanceSum.textContent = `$${balance}`;
  mainEl.remove();
}

// App reloading

btnReset.addEventListener("click", () => {
  window.location.reload();
});
