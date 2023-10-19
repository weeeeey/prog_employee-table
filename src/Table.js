export default function Table({ $app, initialState }) {
    this.state = initialState; //사원?
    this.$target = document.createElement('div');
    this.$target.className = 'area';
    this.$target.id = 'table';

    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };
    this.render = () => {
        console.log(initialState);
        // this.$target.innerHTML = `
        // <table>
        //     <tr>
        //         <th class="th-table heading">name</th>
        //         <th class="th-table heading">title</th>
        //         <th class="th-table heading">email</th>
        //         <th class="th-table heading">role</th>
        //     </tr>
        //     ${this.state
        //         .map(
        //             (employee) =>
        //                 `
        //         <tr style="text-align: center;">
        //             <td>${employee.name}</td>
        //             <td>${employee.title}</td>
        //             <td>${employee.email}</td>
        //             <td>${employee.role}</td>
        //         </tr>
        //         `
        //         )
        //         .join('')}
        // </table>
        // `;
    };
}
