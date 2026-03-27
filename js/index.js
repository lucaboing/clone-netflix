document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profiles a.profile');

    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nome = link.dataset.nome;
            const imagem = link.dataset.imagem;

            if (nome && imagem) {
                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imagem);
            }
        });
    });
});
