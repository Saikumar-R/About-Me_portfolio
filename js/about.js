import data from "../assets/about.json" with {type: "json"};

const titleElm = document.getElementById("title"),
      titleBgElm = document.querySelector(".title-bg")

titleElm.innerHTML = data.title;
titleBgElm.innerText = data.titleBg;

const appendRoleAndYears = ()=>{
    const yearsDigitElm = document.getElementById("yearsDigit"),
          yearsTextElm = document.getElementById("yearsText"),
          inTextElm = document.getElementById("inText"),
          domainTextElm = document.getElementById("domainText");

    yearsDigitElm.innerHTML = data.experience[0],
    yearsTextElm.innerHTML = data.experience[1],
    inTextElm.innerHTML = data.experience[2],
    domainTextElm.innerHTML = data.experience[3]
}

const appendTechnicalSkills = ()=>{
    
}


appendRoleAndYears();
appendTechnicalSkills();