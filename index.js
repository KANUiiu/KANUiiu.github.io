 // lang switch

 let currentLanguage = 'english';
 
 let data = {
     english: {
         title: "This is Uiiu.",
         caption: "I'm here to build what you imagine.",
         projects__title: "My Projects",
         contacts__title: "Contacts",
         projects__a__tilte: "Project A",
         projects__b__tilte: "Project B",
         projects__c__tilte: "Project C",
         projects__a__description: "This is Project A.",
         projects__b__description: "This is Project B.",
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
         projects__a__tilte: "A chok-phín",
         projects__b__tilte: "B chok-phín",
         projects__c__tilte: "C chok-phín",
         projects__a__description: "Che sī A chok-phín.",
         projects__b__description: "Che sī B chok-phín.",
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
         projects__a__tilte: "A專案",
         projects__b__tilte: "B專案",
         projects__c__tilte: "C專案",
         projects__a__description: "這是A專案。",
         projects__b__description: "這是B專案。",
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
