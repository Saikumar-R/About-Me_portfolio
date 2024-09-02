import data from "../assets/data/about.json" with {type: "json"};

const titleElm = document.getElementById("title"),
      titleBgElm = document.querySelector(".title-bg"),
      resumeBtnElm = document.getElementById("resumeBtn"),
      expSection = document.querySelector("div.exp_edu");

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

const appendExpAndEdu = ()=>{
    const titleElm = document.querySelector(".exp_edu h3")

    titleElm.innerText = data.expAndEduTitle;

    data.experiencedRoles.forEach((el)=>{
        const divElm = document.createElement("div"),
              childDivElm = document.createElement("div"),
              listElm = document.createElement("ul");

        divElm.classList.add("col-lg-6", "m-15px-tb");
        childDivElm.classList.add("resume-box")

        expSection.appendChild(divElm);
        divElm.appendChild(childDivElm);
        childDivElm.appendChild(listElm);

        el.details.forEach((detail)=>{
            const listItem = document.createElement("li"),
                  divElm = document.createElement("div"),
                  iconElm = document.createElement("i"),
                  spanElm = document.createElement("span"),
                  headingElm = document.createElement("h5"),
                  paraElm = document.createElement("p");

            divElm.classList.add("icon");
            iconElm.classList.add("fa", detail.icon);
            spanElm.classList.add("time", "open-sans-font", "text-uppercase");
            headingElm.classList.add("poppins-font", "text-uppercase");
            paraElm.classList.add("open-sans-font");

            spanElm.innerText = detail.years;
            headingElm.innerHTML = detail.organisation;
            paraElm.innerText = detail.role;

            listElm.appendChild(listItem);
            listItem.appendChild(divElm);
            divElm.appendChild(iconElm);
            listItem.appendChild(spanElm);
            listItem.appendChild(headingElm);
            listItem.appendChild(paraElm);
        })
    })
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
appendExpAndEdu();
appendPersonalInfoSection();