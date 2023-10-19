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
            <option data-id=${0} value="5" ${
            this.state === 5 ? 'selected' : ''
        }>5</option>
            <option data-id=${1} value="15" ${
            this.state === 15 ? 'selected' : ''
        }>15</option>
        `;
    };
    this.$target.addEventListener('change', (e) => {
        onClick(parseInt(e.target.value));
    });
    this.render();
}
