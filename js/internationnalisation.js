function loadLanguage(lang) {
    console.log(lang);
    document.addEventListener('DOMContentLoaded', function () {
        let fr_en = document.getElementById('fr_en');
        console.log(lang);
        if (lang === 'en') {
            console.log(lang);
            fr_en.innerHTML = `<button class="" onclick="changeLanguage('fr')" id="Français">Français</button>`
        } else if (lang === 'fr') {
            console.log(lang);
            fr_en.innerHTML = `<button class="" onclick="changeLanguage('en')" id="English">English</button>`;
        }
    });
    return fetch(`public/i18n/${lang}.json`)
        .then(response => response.json());
}

// Mettre à jour le contenu de la page en fonction de la langue
// Changer la langue et mettre à jour le contenu
function changeLanguage(lang) {
    localStorage.setItem('langue', lang);
    console.log(lang);
    let version_fr_or_en = document.getElementById('version_fr_or_en');
    if (lang === 'en') {
        version_fr_or_en.innerHTML = genereCodeHTMLEn();
        let fr_en = document.getElementById('fr_en');
        fr_en.innerHTML = `<button class="" onclick="changeLanguage('fr')" id="Français">Français</button>`
        let Personnel = document.getElementById('Personnel');
        Personnel.style.marginRight = '1rem';
        let multipleText = document.querySelector('.multiple-text');
        multipleText.style.marginLeft = '1rem';

        scriptInit();
    } else if (lang === 'fr') {
        version_fr_or_en.innerHTML = genereCodeHTMLFr();
        let fr_en = document.getElementById('fr_en');
        fr_en.innerHTML = `<button class="" onclick="changeLanguage('en')" id="English">English</button>`;

        scriptInit();
    }
    /*
    loadLanguage(lang)
        .then(data => updateContent(data))
        .catch(error => console.error('Erreur de chargement du fichier JSON', error));
        */

}
// Chargement initial en français
changeLanguage('fr');
