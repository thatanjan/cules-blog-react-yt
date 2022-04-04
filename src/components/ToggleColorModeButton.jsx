import React from 'react'

import { IconButton, useColorMode } from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ToggleColorModeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<IconButton
			icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			size='lg'
			colorScheme='teal'
			sx={{
				pos: 'fixed',
				bottom: '3rem',
				right: '2rem',
				zIndex: 1,
			}}
			onClick={toggleColorMode}
		/>
	)
}

export default ToggleColorModeButton
