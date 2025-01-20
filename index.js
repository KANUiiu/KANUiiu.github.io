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

 // lang switch

 let data = {
     english: {
         title: "This is Uiiu.",
         caption: "I'm here to build what you imagine.",
         fontFamily: "Righteous, serif",
         titleFontSize: "5rem",
         captionFontSize: "1.5rem"
     },
     taiwanese: {
         title: "Góa hō-chò Ûi-iū.",
         caption: "Lí siūⁿ ē tio̍h ê, góa lâi ka pìⁿ chhut-lâi.",
         fontFamily: "Noto Sans, sans-serif",
         titleFontSize: "4rem",
         captionFontSize: "1.5rem"
     },
     chinese: {
         title: "我是維佑",
         caption: '你所想像的 我來為你打造',
         fontFamily: "Noto Sans, sans-serif",
         titleFontSize: "3rem",
         captionFontSize: "1rem"
     }
 };
 
 let langs = document.querySelector('.lang-menu'),
    link = langs.querySelectorAll('a'),
    title = document.querySelector('.title'),
    cap = document.querySelector('.caption');

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
            
            // Update font family
            title.style.fontFamily = data[attr].fontFamily || 'initial';
            cap.style.fontFamily = data[attr].fontFamily || 'initial';
            
            // Update font size for title and caption separately
            title.style.fontSize = data[attr].titleFontSize || 'initial';
            cap.style.fontSize = data[attr].captionFontSize || 'initial';
        }
    });
});


// GSAP PRACTICE
