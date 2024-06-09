import { FC } from 'react';

interface SearchFieldProps {
    searchTerm: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<SearchFieldProps> = props => {
    const { searchTerm, handleSearch } = props;
    return (
        <>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search" />
        </>
    );
};
export default SearchField;
