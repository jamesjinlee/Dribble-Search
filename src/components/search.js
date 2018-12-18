import React, { Component }from 'react';
import {Icon, Input} from 'semantic-ui-react';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {searchterm: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({ searchterm: event.target.value });
  }

  onclick = () => {
    this.props.onSearch();
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onSearch();
    }
  }

  render() {
    return (

      <div className="search">
        <Input placeholder='Search' icon={{ name: 'share', onClick:this.onclick, link:true }} onChange={this.onInputChange} onKeyPress={this._handleKeyPress} value={this.state.searchterm}/>

      </div>
    )
  }
}

export default Search;
