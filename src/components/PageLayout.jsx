import React from 'react'

import { Container, Center, Text } from '@chakra-ui/react'

import AppHeader from 'components/AppHeader'
import ToggleColorModeButton from 'components/ToggleColorModeButton'

const PageLayout = ({ children }) => {
	return (
		<>
			<AppHeader />

			<Container px={4} maxW='5xl'>
				{children}
			</Container>

			<Center m='2rem 0'>
				<Text>© Copyright Cules Coding 2022</Text>
			</Center>

			<ToggleColorModeButton />
		</>
	)
}

export default PageLayout
