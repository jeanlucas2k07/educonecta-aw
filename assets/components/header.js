class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="links">
                    <a href="">
                        <i class="fa-solid fa-question"></i>
                    </a>
                </div>

                <nav>
                    <ul>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="./pages/donation.html">Doar</a></li>
                        <li><a href="#">Metas</a></li>
                        <li><a href="#">Relatos</a></li>
                    </ul>
                </nav>

                <div class="links">
                    <a href="./pages/sign_in.html">
                        <i class="fa-regular fa-user"></i>
                    </a>
                </div>
        </header>
        `;
    }
}
customElements.define('app-header', Header);