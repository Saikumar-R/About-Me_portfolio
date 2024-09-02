import data from '../assets/data/navigationPannel.json' with { type: 'json' };

const removeBlackScreen = ()=>{
    setTimeout(()=>{
        document.getElementById("preloader").remove();
    },1000)
}
export const navigationPannel = ()=>{
    const header = document.querySelector("header");
    let path = window.location.pathname;

    //navigation pannel for large devices
    const lgNavigation = ()=>{
        const lgNavPannel = document.createElement("ul");
        lgNavPannel.classList.add("icon-menu","d-none","d-lg-block","revealator-slideup","revealator-once","revealator-delay1");

        header.appendChild(lgNavPannel);
        
        dynamicMenuItems(false,lgNavPannel,"h2","icon-box");
    }

    //navigation pannel for small devices
    const smNavigation = ()=>{
        const smNavPannel = document.createElement("nav"),
              menuToggle = document.createElement("div"),
              inputField = document.createElement("input"),
              ulElm = document.createElement("ul")
        
    
        smNavPannel.classList.add("d-block", "d-lg-none");
        smNavPannel.setAttribute("role","navigation");
    
        menuToggle.setAttribute("id","menuToggle");

        inputField.setAttribute("type","checkbox");

        ulElm.setAttribute("id","menu");
        ulElm.classList.add("list-unstyled");

        smNavPannel.appendChild(menuToggle);
        header.appendChild(smNavPannel);
        menuToggle.appendChild(inputField);

        for(let i=0; i<3; i++){
            const spanElm = document.createElement("span");
            menuToggle.appendChild(spanElm);
        }

        menuToggle.appendChild(ulElm);

        dynamicMenuItems(true,ulElm,"span","sm-list");
    }

    //create dynamic list for navigation pannel
    const dynamicMenuItems = (isMobile,navPannel,textElm,listClass)=>{
        data.navigation.forEach((el)=>{
            const listElm = document.createElement("li"),
                  icon = document.createElement("i"),
                  link = document.createElement("a"),
                  text = document.createElement(textElm);

            if(isMobile === true){
                listElm.appendChild(link);
                link.appendChild(icon);
                link.appendChild(text);
            }else{
                listElm.appendChild(icon);
                listElm.appendChild(link);
                link.appendChild(text);
            }

            listElm.classList.add(listClass,el.id);

            icon.classList.add(el.icon[0],el.icon[1]);
            link.setAttribute("href",el.url);
            text.innerText = el.text;
    
            navPannel.appendChild(listElm);
        });
    }

    const setActiveTab = ()=>{
        const homeIcon = document.querySelector(".homeIcon"),
             contactIcon = document.querySelector(".contactIcon"),
             aboutIcon = document.querySelector(".aboutIcon");

        if(path.includes("index") || path === "/"){
            homeIcon.classList.add("active");
            deactivateTab(".homeIcon");
        }else if(path.includes("contact")){
            contactIcon.classList.add("active");
            deactivateTab(".contactIcon");
        }else if(path.includes("about")){
            aboutIcon.classList.add("active");
            deactivateTab(".aboutIcon");
        }
    }

    const deactivateTab = (selector)=>{
        document.querySelectorAll(`${selector} a`).forEach(el => el.setAttribute("href","javascript:void(0)"));
    }

    lgNavigation();
    smNavigation();
    setActiveTab();
}

removeBlackScreen();
navigationPannel();