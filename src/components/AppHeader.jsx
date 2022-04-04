import React from 'react'
import Image from 'next/image'
import { Flex, Spacer, Box, IconButton, useDisclosure } from '@chakra-ui/react'

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

import AppDrawer from './AppDrawer'
import Search from './Search'
import ChakraNextLink from './ChakraLink'

const CustomIconButton = ({ Icon, ...props }) => {
	return <IconButton icon={<Icon />} {...props} size='lg' ml='1rem' />
}

const SearchButton = () => {
	const { onOpen, ...others } = useDisclosure()

	return (
		<>
			<CustomIconButton onClick={onOpen} Icon={SearchIcon} />
			<Search {...others} />
		</>
	)
}

const HamburgerNav = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()

	return (
		<>
			<CustomIconButton Icon={HamburgerIcon} onClick={onOpen} />

			{isOpen && <AppDrawer isOpen={isOpen} onClose={onClose} />}
		</>
	)
}

const Logo = () => {
	const dimension = 70
	return (
		<ChakraNextLink
			href='/'
			chakraLinkProps={{
				_focus: {
					outline: 0,
				},
			}}
		>
			<Image
				src='/logo.jpg'
				height={dimension}
				width={dimension}
				alt='Cules Coding'
			/>
		</ChakraNextLink>
	)
}

const AppHeader = () => {
	return (
		<Box px='2rem' pt='5rem'>
			<Flex alignItems='center'>
				<Logo />

				<Spacer />

				<SearchButton />
				<HamburgerNav />
			</Flex>
		</Box>
	)
}

export default AppHeader
