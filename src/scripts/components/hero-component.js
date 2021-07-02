class HeroComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
        <section class="hero">
            <div class="hero__overlay">
                <div class="hero__inner">
                    <h1 class="hero__title">Foodies welcome</h1>
                    <p class="hero__tagline">
                        We’ve got something for everyone!
                    </p>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('hero-component', HeroComponent);
