import React from 'react';
import TextField from '@mui/material/TextField';
import countryList from '../country';
import Autocomplete from '@mui/material/Autocomplete';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    render() {
        return (
            <div className="App" style={styles.background}>
      <div style={styles.border}>
        <label> Type the name of a country you search.
          <div style={styles.input}>
            <Autocomplete
                onChange={(event, newInput) => {
                this.setState({input: newInput});
                }}
                options={countryList}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Type here" />}
            />
          </div>
        </label>
        <p>{this.state.input}</p>
      </div>
    </div>
        );
    }
}

const styles = {
    background: {
      backgroundColor: 'rgb(249, 250, 252)',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
    },
    input: {
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingTop: '10px',
    },
    border: {
    width: '300px',
    height:'60vh',
    flexDirection: 'column',
    border: '1px',
    borderRadius: '5px',
    boxShadow: 'rgb(0 0 0 / 10%) 0 0 10px',
    }
  }

export default InputForm;