type StatusProps = {
	status: string
}

const Status = (props: StatusProps) => {
	let message
	let textColor

	if (props.status === 'loading') {
		message = 'Loading...'
		textColor = 'green'
	} else if (props.status === 'success') {
		message = 'Data fetched successfully'
		textColor = 'blue'
	} else if (props.status === 'error') {
		message = 'Error fetching data '
		textColor = 'red'
	}
	return (
		<div>
			<h1 style={{ color: `${textColor}` }}>Status: {message}</h1>
		</div>
	)
}
export default Status
