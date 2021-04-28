import React from 'react';
import {Wrapper, InputWrapper, FilterWrapper, Input, Button, Select, Option, Label} from './searchBar.style';
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function SearchBar(props) {
    let tabletDevice = useMediaQuery('(min-width: 601px)');

    return (
        <Wrapper>
            <InputWrapper>
                <Input placeholder="search by country or city"/>
                <Button>
                    <SearchIcon 
                        style={{
                            color: "grey",
                        }} 
                        fontSize={
                            tabletDevice? "medium": "small"
                        }/>
                </Button>
            </InputWrapper>
            
            <FilterWrapper>
                <Select>
                    <Option>lang</Option>
                    <Option>koo</Option>
                </Select>
                <Select>
                    <Option>unit</Option>
                    <Option>koo</Option>
                </Select>
            </FilterWrapper>
        </Wrapper>
    );
}

export default SearchBar;