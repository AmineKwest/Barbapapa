import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class Filters extends React.Component {
  constructor() {
    super();
 
    this.state = {
      status: '',
      statusAge: '',
      statusTime: '',
			statusPrice: '',
			statusVictims: '',
			statusCapacity: ''
    };
 
  }

	/*
	componentWillMount() {
    fetch('/attractions')
    .then(res => res.json())
    .then(json => this.setState({attractions: json}))
  };
*/
	handleChange = event => {

    this.setState({
      status: event.target.value,
    });

	};

  handleChange2 = event => {

    this.setState({statusAge: event.target.value
    });
  };
  
  handleChange3 = event => {
    this.setState({statusTime: event.target.value
    });
  };
  
  handleChange4 = event => {
    this.setState({statusPrice: event.target.value
    });
  };
  
  handleChange5 = event => {
    this.setState({statusVictims: event.target.value
    });
	};

  handleChange6 = event => {
    this.setState({statusCapacity: event.target.value
    });
    };

  render() {
    return (
      <div>


    <form className='form' autoComplete="off" 
    style={{ display: 'inline', flexWrap: 'wrap' }} >

				<FormControl className='formControl' style={{margin: '10px', minWidth: 120}}  >
					<InputLabel htmlFor="Status">Types</InputLabel>
					<Select value={this.state.status} onChange={this.handleChange} input={<Input name="status" id="Status"/>}>
						<MenuItem value="">
							<em>Aucun</em>
						</MenuItem>
						<MenuItem  value='horreur'>Horreur</MenuItem>
						<MenuItem value='famille'>Famille</MenuItem>
						<MenuItem  value='sensation'>Sensations fortes</MenuItem>
						<MenuItem value='viking'>Petit Viking</MenuItem>
					</Select>
				</FormControl>
		</form>

        <form className='form' autoComplete="off" 
    style={{ display: 'inline', flexWrap: 'wrap' }} >

				<FormControl className='formControl' style={{margin: '10px', minWidth: 120}}  >
					<InputLabel htmlFor="Status">Ages</InputLabel>
					<Select value={this.state.statusAge} onChange={this.handleChange2} input={<Input name="status" id="Status"/>}>
						<MenuItem value="">
							<em>Aucun</em>
						</MenuItem>
						<MenuItem value='10 ans'>inférieur à 10 ans</MenuItem>
						<MenuItem value='15 ans'>entre 10 et 15 ans</MenuItem>
						<MenuItem value='18 ans'>entre 15 et 18 ans</MenuItem>
						<MenuItem value='adultes'>Adultes</MenuItem>
					</Select>
				</FormControl>
		</form>

        <form className='form' autoComplete="off" 
    style={{ display: 'inline', flexWrap: 'wrap' }} >

				<FormControl className='formControl' style={{margin: '10px', minWidth: 120}}  >
					<InputLabel htmlFor="Status">Attente</InputLabel>
					<Select value={this.state.statusTime} onChange={this.handleChange3} input={<Input name="status" id="Status"/>}>
						<MenuItem value="">
							<em>Aucun</em>
						</MenuItem>
						<MenuItem value='5 mn'>inférieur à 5 mn</MenuItem>
						<MenuItem value='10 mn'>inférieur à 10 mn</MenuItem>
						<MenuItem value='15 mn'>inférieur à 15 mn</MenuItem>
						<MenuItem value='20 mn'>inférieur à 20 mn</MenuItem>
					</Select>
				</FormControl>
		</form>

        <form className='form' autoComplete="off" 
    style={{ display: 'inline', flexWrap: 'wrap' }} >

				<FormControl className='formControl' style={{margin: '10px', minWidth: 120}}  >
					<InputLabel htmlFor="Status">Prix</InputLabel>
					<Select value={this.state.statusPrice} onChange={this.handleChange4} input={<Input name="status" id="Status"/>}>
						<MenuItem value="">
							<em>Aucun</em>
						</MenuItem>
						<MenuItem value='5 euros'>inférieur à 5 euros</MenuItem>
						<MenuItem value='10 euros'>inférieur à 10 euros</MenuItem>
						<MenuItem value='15 euros'>inférieur à 15 euros</MenuItem>
						<MenuItem value='20 euros'>inférieur à 20 euros</MenuItem>
					</Select>
				</FormControl>
		</form>


        <form className='form' autoComplete="off" 
    style={{ display: 'inline', flexWrap: 'wrap' }} >

				<FormControl className='formControl' style={{margin: '10px', minWidth: 120}}  >
					<InputLabel htmlFor="Status">Victimes</InputLabel>
					<Select value={this.state.statusVictims} onChange={this.handleChange5} input={<Input name="status" id="Status"/>}>
						<MenuItem value="">
							<em>Aucun</em>
						</MenuItem>
						<MenuItem value='5 victimes'>inférieur à 5</MenuItem>
						<MenuItem value='10 victimes'>inférieur à 10</MenuItem>
						<MenuItem value='15 victimes'>inférieur à 15</MenuItem>
						<MenuItem value='20 victimes'>inférieur à 20</MenuItem>
					</Select>
				</FormControl>
		</form>

        <form className='form' autoComplete="off" 
    style={{ display: 'inline', flexWrap: 'wrap' }} >

				<FormControl className='formControl' style={{margin: '10px', minWidth: 120}}  >
					<InputLabel htmlFor="Status">Capacité</InputLabel>
					<Select value={this.state.statusCapacity} onChange={this.handleChange6} input={<Input name="status" id="Status"/>}>
						<MenuItem value="">
							<em>Aucun</em>
						</MenuItem>
						<MenuItem value='5 personnes'>5 personnes</MenuItem>
						<MenuItem value='10 personnes'>10 personnes</MenuItem>
						<MenuItem value='15 personnes'>15 personnes</MenuItem>
						<MenuItem value='20 personnes'>20 personnes</MenuItem>
					</Select>
				</FormControl>
		</form>

      </div>
    );
  }
}
export default Filters;