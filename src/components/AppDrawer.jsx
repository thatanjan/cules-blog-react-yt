import React from 'react'
import { nanoid } from 'nanoid'

import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	List,
	ListItem,
	Heading,
} from '@chakra-ui/react'

import ChakraLink from 'components/ChakraLink'

const DrawerList = ({ onClose }) => {
	const listItems = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Categories',
			link: '/categories',
		},
		{
			name: 'About',
			link: '/about',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
	]

	return (
		<List>
			{listItems.map((item) => (
				<ChakraLink
					key={nanoid()}
					ChakraComponent={ListItem}
					sx={{
						display: 'block',
						mt: 5,
						fontSize: 'lg',
					}}
					href={item.link}
					chakraLinkProps={{
						_focus: {
							outline: 0,
						},
					}}
					onClick={onClose}
				>
					{item.name}
				</ChakraLink>
			))}
		</List>
	)
}

const AppDrawer = ({ isOpen, onClose }) => {
	return (
		<Drawer size='md' placement='left' isOpen={isOpen} onClose={onClose}>
			<DrawerOverlay />

			<DrawerContent>
				<DrawerCloseButton />

				<DrawerHeader py={8}>
					<Heading>Cules Blog</Heading>
				</DrawerHeader>

				<DrawerBody>
					<DrawerList onClose={onClose} />
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
}

export default AppDrawer
