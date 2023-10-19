export default function DropdownNumber({ $app, initialState, onClick }) {
    this.state = initialState;
    this.$target = document.createElement('select');
    this.$target.className = 'area';
    this.$target.className = 'dropdown';

    const pageTitle = document.createElement('h1');
    pageTitle.id = 'page_title';
    pageTitle.innerText = 'Grepp Enterprise';
    $app.appendChild(pageTitle);
    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target.innerHTML = `
            <option value="5">5</option>
            <option value="15">15</option>
        `;
    };
    this.$target.addEventListener('change', (e) => {
        onClick(e.target.value);
    });
    this.render();
}
