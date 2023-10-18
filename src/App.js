import Table from './Table.js';
import {} from './Dropdown.js';
import { getData } from './api.js';

export default function App($app) {
    this.state = {
        employees: [],
        pagination: 5,
        dropdown: 5,
        selectedPage: 1,
    };

    const table = new Table({
        $app,
        initialState: this.state.employees,
    });
    this.setState = (nextState) => {
        this.state = nextState;
        table.setState(this.state.employees);
    };

    this.init = async () => {
        const employees = await getData().then((res) =>
            res.sort((a, b) => {
                if (+a.name.slice(4) < +b.name.slice(4)) {
                    return -1;
                } else {
                    return 1;
                }
            })
        );
        this.setState({
            ...this.state,
            employees,
        });
    };
    this.init();
}
