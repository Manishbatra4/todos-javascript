const filters = {
    searchText: '',
    hide: false
};

const getFilters = () => filters;

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string'){
        filters.searchText = updates.searchText;
    }
    if (typeof updates.hide === 'boolean'){
        filters.hide = updates.hide;
    }
};

export {getFilters, setFilters}