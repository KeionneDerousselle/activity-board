import React from 'react';
import PropTypes from 'prop-types';
import { bootstrapColors } from './utils';

// import {
//   ButtonDropdown as ReactstrapButtonDropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle
// } from 'reactstrap';

const dropdownItemShape = {
  name: '',
  value: ''
};

class ButtonDropdown extends React.PureComponent {
  state = {
    expanded: false,
    selectedItem: {}
  };

  toggleDropDown = () => {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
  }

  handleItemSelected = (name, value) => {
    this.setState({
      expanded: false,
      selectedItem: {
        name,
        value
      }
    }, () => this.props.onItemSelected(name, value));
  };

  render() {
    const { expanded } = this.state;
    const buttonText = this.state.selectedItem.name || this.props.dropdownItems[0].name;
    const { color } = this.props;

    const items = this.props.dropdownItems
      .map((item, i) =>
        <DropdownItem
          key={i}
          active={item.name === buttonText}
          onClick={() => this.handleItemSelected(item.name, item.value)}
        >
          {item.name}
        </DropdownItem>);

    return (      
      <div>sdsdf</div>
      // <ReactstrapButtonDropdown isOpen={expanded} toggle={this.toggleDropDown}>
      //   <DropdownToggle
      //     aria-haspopup="true"
      //     aria-expanded={expanded}
      //     caret
      //     color={color}
      //   >
      //     {buttonText}
      //   </DropdownToggle>
      //   <DropdownMenu>
      //     {items}
      //   </DropdownMenu>
      // </ReactstrapButtonDropdown>
    );
  }
}

ButtonDropdown.defaultProps = {
  color: 'primary'
};

ButtonDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  wrapperClasses: PropTypes.array,
  dropdownItems: PropTypes.arrayOf(PropTypes.shape(dropdownItemShape)),
  onItemSelected: PropTypes.func.isRequired,
  color: PropTypes.oneOf(bootstrapColors)
};

export default ButtonDropdown;
