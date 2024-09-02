import data from "../assets//data/contact.json" with {type:"json"};

const titleElm = document.getElementById("title"),
      titleBgElm = document.querySelector(".title-bg"),
      subtitleElm = document.getElementById("subtitle"),
      subTitleContentElm = document.getElementById("subTitleContent"),
      pageContentElm = document.querySelector(".pageContent");


titleElm.innerHTML = data.title;
titleBgElm.innerText = data.titleBg;
subtitleElm.innerText = data.subTitle;
subTitleContentElm.innerText = data.subTitleContent;


const appendPageContent = ()=>{
    data.contactPrefrences.forEach((el)=>{
        const paraElm = document.createElement("p"),
              iconElm = document.createElement("i"),
              spanElm1 = document.createElement("span"),
              spanElm2 = document.createElement("span");
        
        paraElm.classList.add("open-sans-font", "custom-span-contact", "position-relative");
        iconElm.classList.add(el.icon[0],el.icon[1],el.icon[2]);
        spanElm1.classList.add("d-block");
        spanElm2.classList.add("d-block","text-lowercase");
    
        spanElm1.innerText = el.header;
        spanElm2.innerText = el.value;
    
        paraElm.appendChild(iconElm);
        paraElm.appendChild(spanElm1);
        paraElm.appendChild(spanElm2);
        pageContentElm.appendChild(paraElm);
    });
}


const appendSocialMediaIcons = ()=>{
    const socialMediaListElm = document.createElement("ul");

    socialMediaListElm.setAttribute("id","social-media_icons");
    socialMediaListElm.classList.add("social", "list-unstyled", "pt-1", "mb-5");

    pageContentElm.appendChild(socialMediaListElm);

    data.socialMedia.forEach((el)=>{
        const listElm = document.createElement("li"),
              linkElm = document.createElement("a"),
              iconElm = document.createElement("i"),
              socialMediaList = document.getElementById("social-media_icons");

        listElm.classList.add(el.class);
        linkElm.setAttribute("title",el.title);
        linkElm.setAttribute("href",el.url);
        linkElm.setAttribute("target","_blank");
        iconElm.classList.add(el.icon[0],el.icon[1]);
    
        socialMediaList.appendChild(listElm);
        listElm.appendChild(linkElm);
        linkElm.appendChild(iconElm);
    });
}


appendPageContent();
appendSocialMediaIcons();