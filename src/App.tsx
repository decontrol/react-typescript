import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'

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
			{/* <Greet name='JTA' messageCount={125} isLoggedIn={true} />
			<Greet name='JTA' isLoggedIn={true} />
			<Person name={personName} /> */}
			<PersonList names={nameList} />
			{/* <Status status='loading' />
			<Heading>Lalala testing!</Heading>
			<Oscar>
				<Heading>Oscar goes to the fabulous Mr. Jabroni!</Heading>
			</Oscar>
			<Button
				handleClick={(event, id) => {
					console.log('Button clicked', event, id)
				}}
			/>
			<br />
			<Input handleChange={(event) => console.log(event)} value='' /> */}
			<Container
				styles={{
					border: '1px solid black',
					padding: '1rem',
					width: '50vw',
					display: 'flex',
					margin: 'auto',
				}}
			/>
		</div>
	)
}

export default App
