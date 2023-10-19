import Table from './Table.js';
import DropdownNumber from './DropdownNumber.js';
import Pagination from './Pagination.js';
import { getData } from './api.js';

export default function App($app) {
    this.state = {
        employees: {},
        pageindex: 1,
        dropdown: 5,
    };
    const dropdownNumber = new DropdownNumber({
        $app,
        initialState: this.dropdown,
        onClick: (value) => {
            this.setState({
                ...this.state,
                dropdown: value,
            });
        },
    });

    const table = new Table({
        $app,
        initialState: this.state.employees,
    });

    const pagination = new Pagination({
        $app,
        initialState: [this.state.pageindex, this.state.dropdown],
        onClick: (value) => {
            this.setState({
                ...this.state,
                pageindex: value,
            });
        },
    });

    this.setState = (nextState) => {
        this.state = nextState;
        table.setState(
            this.state.employees[this.state.dropdown][this.state.pageindex]
        );
        dropdownNumber.setState(this.state.dropdown);
        pagination.setState([this.state.pageindex, this.state.dropdown]);
    };

    this.init = async () => {
        try {
            const employees = await getData();
            this.setState({
                ...this.state,
                employees,
            });
        } catch (error) {
            throw new Error(error);
        }
    };
    this.init();
}
