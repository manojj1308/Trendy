import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [Size,setSize]=useState([])

  const toggle = () => setDropdownOpen(prevState => !prevState);
  function handleSize (e){
    setSize({...Size,[e.target.name]:e.target.value})
  };
  return (
      
    <Dropdown name="Size" onchange={handleSize} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu >
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem value="S">Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
      {JSON.stringify(Size)}
    </Dropdown>
     
  );
}
export default Example;