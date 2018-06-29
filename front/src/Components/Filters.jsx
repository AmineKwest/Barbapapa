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
			statusCapacity: '',
			statusDangerosity: '',
			keyValues : [],
    };

  }

	/*
	componentWillMount() {
    fetch('/attractions')
    .then(res => res.json())
    .then(json => this.setState({attractions: json}))
  };
*/

	sendFilters (filters) {
		this.props.selectFilters(filters)
	}
	handleChange = event => {
		let table = this.state.keyValues;
		table.push('type=' + event.target.value)
    this.setState({
			status: event.target.value,
			keyValues :  table,
		});
		this.sendFilters(this.state.keyValues);

	};

  handleChange2 = event => {
		
		let table = this.state.keyValues;
		table.push('age=' + event.target.value)
    this.setState({
			statusAge: event.target.value,
			keyValues :  table,
    });

		this.sendFilters(this.state.keyValues);
	};
  
  handleChange3 = event => {
		
		let table = this.state.keyValues;
		table.push('waitingtime=' +event.target.value)
    this.setState({
			statusTime: event.target.value,
			keyValues :  table,
    });

		this.sendFilters(this.state.keyValues);
	};
  handleChange4 = event => {
		
		let table = this.state.keyValues;
		table.push('price=' + event.target.value)
    this.setState({
			statusPrice: event.target.value,
			keyValues : table,
    });

		this.sendFilters(this.state.keyValues);
	};
  
  handleChange5 = event => {
		
		let table = this.state.keyValues;
		table.push('victims=' +event.target.value)
    this.setState({
			statusVictims: event.target.value,
			keyValues : table,
    });

		this.sendFilters(this.state.keyValues);
	};

  handleChange6 = event => {
		
		let table = this.state.keyValues;
		table.push('capacity='+event.target.value)
    this.setState({
			statusCapacity: event.target.value,
			keyValues : table,
    });

		this.sendFilters(this.state.keyValues);
	};

	handleChange7 = event => {
		
		let table = this.state.keyValues;
		table.push('capacity='+event.target.value)
    this.setState({
			statusDangerosity: event.target.value,
			keyValues : table,
    });

		this.sendFilters(this.state.keyValues);
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
						<MenuItem  value='spectacle'>Spéctacle</MenuItem>
						<MenuItem value='restaurant'>Restaurant</MenuItem>
						<MenuItem value='sensation-fortes'>Sensations Fortes</MenuItem>
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
						<MenuItem value='0-99'>Tout public</MenuItem>
						<MenuItem value='10-99'>Interdit aux moins de 10 ans</MenuItem>
						<MenuItem value='16-99'>Interdit aux moins de 16 ans</MenuItem>
						<MenuItem value='18-99'>Interdit aux moins de 18 ans</MenuItem>
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
						<MenuItem value='0-4'>inférieur à 5 mn</MenuItem>
						<MenuItem value='0-9'>inférieur à 10 mn</MenuItem>
						<MenuItem value='0-14'>inférieur à 15 mn</MenuItem>
						<MenuItem value='0-20'>inférieur à 20 mn</MenuItem>
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
						<MenuItem value='0-4'>inférieur à 5 euros</MenuItem>
						<MenuItem value='0-9'>inférieur à 10 euros</MenuItem>
						<MenuItem value='0-14'>inférieur à 15 euros</MenuItem>
						<MenuItem value='0-1000'>M'en branle ! J'suis blindé !</MenuItem>
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
						<MenuItem value='0-29'>inférieur à 30</MenuItem>
						<MenuItem value='0-79'>inférieur à 80</MenuItem>
						<MenuItem value='0-149'>inférieur à 150</MenuItem>
						<MenuItem value='0-199'>inférieur à 200</MenuItem>
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
						<MenuItem value='0-5'>5 personnes max</MenuItem>
						<MenuItem value='0-10'>10 personnes max</MenuItem>
						<MenuItem value='0-20'>20 personnes max</MenuItem>
						<MenuItem value='0-50'>50 personnes max</MenuItem>
						<MenuItem value='0-1000'>Au delà de 50 personnes</MenuItem>
					</Select>
				</FormControl>
		</form>

				<form className='form' autoComplete="off" 
			style={{ display: 'inline', flexWrap: 'wrap' }} >

					<FormControl className='formControl' style={{margin: '10px', minWidth: 120}}  >
						<InputLabel htmlFor="Status">Risque</InputLabel>
						<Select value={this.state.statusCapacity} onChange={this.handleChange7} input={<Input name="status" id="Status"/>}>
							<MenuItem value="">
								<em>Aucun</em>
							</MenuItem>
							<MenuItem value='tranquille'>Tranquille</MenuItem>
							<MenuItem value='dangereux'>Dangereux</MenuItem>
							<MenuItem value='mortel'>Mortel</MenuItem>
						</Select>
					</FormControl>
			</form>

      </div>
    );
  }
}
export default Filters;