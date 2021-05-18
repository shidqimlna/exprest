class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <button
                        id="menu"
                        class="app-bar__menu"
                        tabindex="0"
                        aria-label="button"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="app-bar__inner">
                        <a href="/"><h1 class="app-bar__title">Exprest</h1></a>
                    </div>

                    <a class="app-bar__menu" style="visibility: hidden">☰</a>

                    <nav id="drawer" class="nav">
                        <ul class="nav__list">
                            <li class="nav__item"><h2>Exprest</h2></li>
                            <li class="nav__item"><a href="#/home">Home</a></li>
                            <li class="nav__item">
                                <a href="#/favorite">Favorite</a>
                            </li>
                            <li class="nav__item">
                                <a
                                    href="https://shidqimlna.github.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >About Us</a
                                >
                            </li>
                        </ul>
                    </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);
