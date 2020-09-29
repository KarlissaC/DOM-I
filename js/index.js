const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// TOP NAV LINKS

// Accessed Nav & child links
const nav = document.querySelector('nav');
const allNavLinks = nav.querySelectorAll('a');

// Created first and last links
const firstLink = document.createElement("a");
firstLink.innerText = "Happy"
firstLink.style.color = "green"
nav.prepend(firstLink);

const secondLink = document.createElement("a");
secondLink.innerText = "Days"
secondLink.style.color = "green"
nav.appendChild(secondLink);

// Populate all the rest of the links from the object list, and changes color of them.
for (let i = 0; i < allNavLinks.length; i++){
  allNavLinks[i].textContent=siteContent.nav["nav-item-"+(i+1)];
  allNavLinks[i].style.color = "green";
}


// CTA

// Used innerHtml to replicate the <br> of the original.
const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = "DOM<br>IS<br>AWESOME"

// Added the button
const ctaButton = document.querySelector(".cta-text button")
ctaButton.innerText = siteContent.cta.button;

// Image SRC is updated
const ctaImg = document.querySelector("#cta-img");
ctaImg.src=siteContent.cta["img-src"];

// Two arrays populated with the names of the item headings
const topList = ["features", "about"];
const bottomList = ["services", "product", "vision"];

modifyItem(".top-content", topList);
modifyItem(".bottom-content", bottomList);

// Function to automatically populate the item lists
function modifyItem (topOrBottom, itemList){

  // Gets all the divs inside the parent
  console.log(topOrBottom);
  const curParent = document.querySelector(topOrBottom);
  const numChildren = curParent.querySelectorAll("div");

  // Modifies all the children items using their property in the array.
  for (let i = 0; i < numChildren.length; i++){

    // Gets the appropriate child
    const curItem = document.querySelector(topOrBottom +" .text-content:nth-child("+(i+1)+")");
    console.log(curItem);

    // Modifies the correct item
    curItem.querySelector("h4").innerText = siteContent["main-content"][itemList[i]+"-h4"];
    curItem.querySelector("p").innerText = siteContent["main-content"][itemList[i]+"-content"];
  }

}

// Adds the correct src to middle img.
const middleImg = document.querySelector("#middle-img");
middleImg.src=siteContent["main-content"]["middle-img-src"];

// Coverts the contact object values into an array, since all the values just have to populate through all the items
const contactArray = Object.values(siteContent["contact"]);
const contactChildren = document.querySelector(".contact").children;

// Populates the child elements with the correct text.
for (let i = 0; i < contactChildren.length; i ++){
  contactChildren[i].innerText = contactArray[i];
}

// Adds inner text of the footer
const footer = document.querySelector("footer p");
footer.innerText = siteContent.footer.copyright;