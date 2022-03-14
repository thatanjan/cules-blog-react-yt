import Link from 'next/link'

import {
	Link as ChakraLink,
	Text,
	Button,
	Box,
	LinkOverlay,
	useColorMode,
} from '@chakra-ui/react'

const ChakraNextLink = ({
	href,
	ChakraComponent = Box,
	children,
	chakraLinkProps = {},
	noUnderline,
	overlay,
	...props
}) => {
	const LinkComponent = overlay ? LinkOverlay : ChakraLink

	if (noUnderline) {
		chakraLinkProps._hover = chakraLinkProps._hover || {}
		chakraLinkProps._hover.textDecoration = 'none'
	}

	return (
		<Link href={href} passHref>
			<LinkComponent {...chakraLinkProps}>
				<ChakraComponent {...props}>{children}</ChakraComponent>
			</LinkComponent>
		</Link>
	)
}

const ChakraButtonLink = (props) => (
	<ChakraNextLink ChakraComponent={Button} noUnderline {...props} />
)

export { ChakraButtonLink }

export default ChakraNextLink
