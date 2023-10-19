export default function DropdownNumber({ $app, initialState, onClick }) {
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'area';
    this.$target.id = '#dropdown';

    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target.innerHTML = `
        <select>
            <option value="5">5</option>
            <option value="15">15</option>
        </select>

        `;
    };
    this.render();
}
