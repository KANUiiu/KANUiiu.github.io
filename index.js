 // lang switch

 let currentLanguage = 'english';
 
 let data = {
     english: {
         title: "This is Uiiu.",
         caption: "I'm here to build what you imagine.",
         projects__title: "My Projects",
         contacts__title: "Contact",
         projects__a__tilte: "TEN THIRTY",
         projects__b__tilte: "FIND TRA",
         projects__c__tilte: "Project C",
         projects__a__description: "An easy game that I used to play with poker cards when I was little.",
         projects__b__description: "This project is designed to help users in Taiwan find nearest TRA station by searching an address.",
         projects__c__description: "This is Project C.",
         contacts__box__description: "The information will be updated soon.",
         fontFamily: "Righteous, serif",
         titleFontSize: "4rem",
         captionFontSize: "1.5rem"
     },
     taiwanese: {
         title: "Góa hō-chò Ûi-iū.",
         caption: "Lí siūⁿ ē tio̍h ê, góa lâi ka pìⁿ chhut-lâi.",
         projects__title: "Góa ê chok-phín",
         contacts__title: "Liân-lo̍k",
         projects__a__tilte: "10 TIÁM PÒAⁿ",
         projects__b__tilte: "Chhōe Tâi-thih",
         projects__c__tilte: "C chok-phín",
         projects__a__description: "Che sī gún sè-hàn sî iōng khe-chí-phang lâi teh sńg chhit-thô ê.",
         projects__b__description: "Khí chi̍t chōa tē-chí tio̍h ē-tàng chhōe tio̍h lī hia siōng kīn ê Tâi-thih hóe-chhia-thâu.",
         projects__c__description: "Che sī C chok-phín.",
         contacts__box__description: "Chia chin kín ē ū sin chū-sìn.",
         fontFamily: "Noto Sans, sans-serif",
         titleFontSize: "3.5rem",
         captionFontSize: "1.8rem"
     },
     chinese: {
         title: "我是維佑",
         caption: '你所想像的 我來為你打造',
         projects__title: "我的專案",
         contacts__title: "聯絡",
         projects__a__tilte: "十點半",
         projects__b__tilte: "找台鐵",
         projects__c__tilte: "C專案",
         projects__a__description: "一個我小時候玩的撲克牌小遊戲。",
         projects__b__description: "用地址來查詢距離最近的台鐵車站。",
         projects__c__description: "這是C專案。",
         contacts__box__description: "近期更新。",
         fontFamily: "LXGW WenKai Mono TC, sans-serif",
         titleFontSize: "4rem",
         captionFontSize: "2rem"
     }
 };
 
 let langs = document.querySelector('.lang-menu'),
    link = langs.querySelectorAll('a'),
    title = document.querySelector('.title'),
    cap = document.querySelector('.caption');
    projects = document.querySelector('.projects__title');
    contacts = document.querySelector('.contacts__title');
    projects__a__tilte = document.querySelector('.projects__a__tilte');
    projects__b__tilte = document.querySelector('.projects__b__tilte');
    projects__c__tilte = document.querySelector('.projects__c__tilte');
    projects__a__description = document.querySelector('.projects__a__description');
    projects__b__description = document.querySelector('.projects__b__description');
    projects__c__description = document.querySelector('.projects__c__description');
    contacts__box__description = document.querySelector('.contacts__box__description');
    

link.forEach(el => {
    el.addEventListener('click', () => {
        // Remove the previously active class
        let activeLink = langs.querySelector('.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }

        // Add the current selected active class
        el.classList.add('active');

        // Update content based on the selected language
        let attr = el.getAttribute('language');
        if (data[attr]) {
            title.textContent = data[attr].title;
            cap.textContent = data[attr].caption;
            projects.textContent = data[attr].projects__title;
            contacts.textContent = data[attr].contacts__title;
            projects__a__tilte.textContent = data[attr].projects__a__tilte;
            projects__b__tilte.textContent = data[attr].projects__b__tilte;
            projects__c__tilte.textContent = data[attr].projects__c__tilte;
            projects__a__description.textContent = data[attr].projects__a__description;
            projects__b__description.textContent = data[attr].projects__b__description;
            projects__c__description.textContent = data[attr].projects__c__description;
            contacts__box__description.textContent = data[attr].contacts__box__description;
            
            // Update font family
            title.style.fontFamily = data[attr].fontFamily || 'initial';
            cap.style.fontFamily = data[attr].fontFamily || 'initial';
            projects.style.fontFamily = data[attr].fontFamily || 'initial';
            contacts.style.fontFamily = data[attr].fontFamily || 'initial';
            
            // Update font size for title and caption separately
            title.style.fontSize = data[attr].titleFontSize || 'initial';
            cap.style.fontSize = data[attr].captionFontSize || 'initial';
        }
    });
});

updateTextForLanguage(currentLanguage);
// To show sidebar 

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
};

// To show lang menu

function showLangMenu(){
    const langmenu = document.querySelector('.lang-menu')
    langmenu.style.display = 'flex'
}
function hideLangMenu(){
    const langmenu = document.querySelector('.lang-menu')
    langmenu.style.display = 'none'
};

// GSAP PRACTICE
