import data from "../assets/home.json" with {type: "json"};

const moreBtn = document.getElementById("moreBtn"),
      greetingElm = document.getElementById("greet"),
      titleElm = document.getElementById("title"),
      introElm = document.getElementById("intro");
      
greetingElm.innerText = data.greet;
titleElm.innerHTML = `<span>${data.name[0]}</span> ${data.name[1]}`;
introElm.innerHTML = data.introduction;
moreBtn.setAttribute("href",data.moreBtn.url);
moreBtn.innerText = data.moreBtn.btnText;