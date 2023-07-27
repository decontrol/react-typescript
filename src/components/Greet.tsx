type GreetProps = {
	name: string
	messageCount?: number //optional props
	isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
	const { messageCount = 0 } = props //assigning default value when not assigned
	return (
		<div>
			<h2>
				{props.isLoggedIn
					? `Welcome ${props.name}! You have ${messageCount} unread messages`
					: 'Welcome Guest!'}
			</h2>
		</div>
	)
}
