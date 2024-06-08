import { FC } from 'react';

interface SearchFieldProps {
    searchTerm: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<SearchFieldProps> = props => {
    const { searchTerm, handleSearch } = props;
    return (
        <div className="">
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search" />
        </div>
    );
};
export default SearchField;
