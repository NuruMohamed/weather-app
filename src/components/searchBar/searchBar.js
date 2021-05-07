import React from 'react';
import {Wrapper, Form, FilterWrapper, Input, Button, Select, Option, Label} from './searchBar.style';
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function SearchBar(props) {
    let largeDevice = useMediaQuery('(min-width: 601px)');

    return (
        <Wrapper>
            <Form>
                <Input type="search" placeholder="search by country or city"/>
                <Button>
                    <SearchIcon 
                        style={{
                            color: "grey",
                        }} 
                        fontSize={
                            largeDevice? "medium": "small"
                        }/>
                </Button>
            </Form>
            
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