import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filterSlice';

import { FilterLabel, FilterInput, WrapperFilter } from './Filter.styled';

const Filter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);

    const filterChange = event => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <WrapperFilter>
            <FilterLabel>
                Find contacts by name
                <FilterInput
                    type="text"
                    value={filter}
                    onChange={filterChange}
                />
            </FilterLabel>
        </WrapperFilter>
    );
};

export default Filter;
