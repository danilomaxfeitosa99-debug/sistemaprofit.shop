
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site carregado com sucesso.');
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.getAttribute('href').startsWith('http')) {
            link.addEventListener('click', (e) => {
                console.log('Redirecionando para: ' + link.href);
            });
        }
    });
});
