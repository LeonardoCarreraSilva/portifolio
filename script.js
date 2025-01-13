document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('[data-lang]');
    
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.dataset.lang;
            changeLang(lang);
        });
    });
    
    function changeLang(lang) {
        // Update text content based on translations
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const keys = key.split('.');
            let value = translations[lang];
            keys.forEach(k => {
                value = value[k];
            });
            element.textContent = value;
        });
        
        // Store language preference
        localStorage.setItem('preferred-lang', lang);
    }
    
    // Set initial language
    const preferredLang = localStorage.getItem('preferred-lang') || 'pt';
    changeLang(preferredLang);
});
