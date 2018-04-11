import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem';

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
    const expanded = `${this.state.expanded}`;

    let wrapperClasses = 'dropdown';
    if(this.props.wrapperClasses) {
      wrapperClasses += this.props.wrapperClasses.join(' ');
    }

    const buttonText = this.state.selectedItem.name || this.props.dropdownItems[0].name;
    
    return (
      <div className={wrapperClasses}>
        <button
          className="btn dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={expanded}
          onClick={this.toggleDropDown}
        >
          {buttonText}
        </button>
        <div className="dropdown-menu">
          {this.dropdownItems.map((item, i) => {
            <DropdownItem 
              key={i} 
              name={item.name}
              onClick={this.handleItemSelected}
              active={this.state.selectedItem.name === item.name}
            />;
          })}
        </div>
      </div>
    );
  }
}

ButtonDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  wrapperClasses: PropTypes.array,
  dropdownItems: PropTypes.arrayOf(PropTypes.shape(dropdownItemShape)),
  onItemSelected: PropTypes.func.isRequired
};

export default ButtonDropdown;
