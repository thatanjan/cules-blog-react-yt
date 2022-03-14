import React from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import {
	Flex,
	Box,
	HStack,
	VStack,
	Text,
	Heading,
	LinkBox,
	LinkOverlay,
	Button,
} from '@chakra-ui/react'

import ChakraNextLink, { ChakraButtonLink } from 'components/ChakraLink'

const BlogPreviewCard = () => {
	return (
		<>
			<VStack as={LinkBox} align='start' spacing='1rem' mb='2rem'>
				<Box w='100%'>
					<Image
						src='/demo.jpg'
						width={16}
						height={9}
						layout='responsive'
						alt=''
						objectFit='cover'
					/>
				</Box>

				<ChakraNextLink ChakraComponent={Heading} href='/blog' overlay>
					Amet amet nulla quae consequatur quaerat.
				</ChakraNextLink>

				<HStack spacing='1rem' wrap='wrap' textTransform='uppercase'>
					<Text>Thu 18 2000</Text>
					<Text>100 views</Text>
					<Text>4 min read</Text>
				</HStack>

				<Text noOfLines={3}>
					Consectetur facere fugit sed dolore alias. Perspiciatis quae quae
					doloremque lorem velit, adipisci. Fugit quas consequuntur aliquid possimus
					doloremque lorem velit, adipisci. Fugit quas consequuntur aliquid possimus
					possimus Libero
				</Text>

				<ChakraButtonLink textTransform='uppercase' href='/blog'>
					Read more
				</ChakraButtonLink>
			</VStack>
		</>
	)
}

export default BlogPreviewCard
