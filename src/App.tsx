import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import Status from './components/Status'

function App() {
	const personName = {
		first: 'Michael',
		last: 'Jackson',
	}

	const nameList = [
		{
			first: 'Bruce',
			last: 'Wayne',
		},
		{
			first: 'Clark',
			last: 'Kent',
		},
		{
			first: 'Princess',
			last: 'Diana',
		},
	]

	return (
		<div className='App'>
			<Greet name='JTA' messageCount={125} isLoggedIn={true} />
			<Person name={personName} />
			<PersonList names={nameList} />
			<Status status='error' />
		</div>
	)
}

export default App
