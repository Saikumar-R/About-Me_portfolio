import data from "../assets/data/about.json" with {type: "json"};

const titleElm = document.getElementById("title"),
      titleBgElm = document.querySelector(".title-bg"),
      resumeBtnElm = document.getElementById("resumeBtn");

titleElm.innerHTML = data.title;
titleBgElm.innerText = data.titleBg;
resumeBtnElm.innerText = data.resumeBtnText;

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

const appendPersonalInfoSection = () =>{
    const personalInfoSectionElm = document.querySelector(".personal_info div"),
          sectionTitle = document.getElementById("personInfoTitle"),
          sectionDetailsElm = document.createElement("div"),
          mobileListElm = document.createElement("ul");

    sectionDetailsElm.classList.add("col-12", "row");
    mobileListElm.classList.add("about-list", "list-unstyled", "open-sans-font","mobileList");

    sectionTitle.innerText = data.personalInfoSectionTitle;
    personalInfoSectionElm.appendChild(sectionDetailsElm);

    sectionDetailsElm.appendChild(mobileListElm);

    data.personalInfo.forEach((el,index)=>{
        const divElm = document.createElement("div"),
              listElm = document.createElement("ul");

        divElm.classList.add("col-6", "d-flex","listItems");
        listElm.classList.add("about-list", "list-unstyled", "open-sans-font", `list_${index+1}`);

        sectionDetailsElm.appendChild(divElm);
        divElm.appendChild(listElm);

        el.list.forEach((details)=>{
            const listItem = document.createElement("li"),
                  labelElm = document.createElement("span"),
                  valueElm = document.createElement("span");
            labelElm.classList.add("title");
            valueElm.classList.add("value","d-inline-block");

            labelElm.innerText = details.label;
            valueElm.innerText = details.value;
            
            listItem.appendChild(labelElm);
            listItem.appendChild(valueElm);

            if((window.innerWidth - 1) <= 505){
                mobileListElm.appendChild(listItem);
            }else{
                if(index === 0){
                    document.querySelector(".list_1").appendChild(listItem);
                }else if(index === 1){
                    document.querySelector(".list_2").appendChild(listItem);
                }
            }
        })
    });
}


appendRoleAndYears();
appendTechnicalSkills();
appendPersonalInfoSection();