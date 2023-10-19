export default function Pagination({ $app, initialState, onClick }) {
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'area';
    this.$target.id = 'pagination';

    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        const [pageindex, dropdown] = this.state;
        const cnt = dropdown === 5 ? [1, 2, 3, 4, 5] : [1, 2];
        this.$target.innerHTML = `
        <button data-id=${0} class="arrow"><<</button>
            ${cnt
                .map(
                    (num, idx) => `
                <button 
                data-id=${idx}
                style="color:${
                    idx === pageindex - 1 ? 'red' : 'black'
                } ">${num}</button>
            `
                )
                .join('')}
        <button data-id=${cnt.length - 1} class="arrow">>></button>
        `;
    };
    this.$target.addEventListener('click', (e) => {
        const button = e.target.closest('BUTTON');
        if (!button) return;
        const { id } = button.dataset;
        onClick(parseInt(id) + 1);
    });
}
