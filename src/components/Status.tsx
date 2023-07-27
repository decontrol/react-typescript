type StatusProps = {
	status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
	let message
	let textColor

	if (props.status === 'loading') {
		message = 'Loading...'
		textColor = 'pink'
	} else if (props.status === 'success') {
		message = 'Data fetched successfully'
		textColor = 'green'
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
