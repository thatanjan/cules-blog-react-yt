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

const BlogPreviewCard = ({
	banner,
	title,
	description,
	slug,
	altText,
	createdAt,
	readingTime,
	totalViews,
	customID,
}) => {
	const link = `/blog/${slug}`

	return (
		<>
			<VStack as={LinkBox} align='start' spacing='1rem' mb='2rem'>
				<Box w='100%'>
					<Image
						src={banner}
						width={16}
						height={9}
						layout='responsive'
						alt={altText}
						objectFit='cover'
					/>
				</Box>

				<ChakraNextLink ChakraComponent={Heading} href={link} overlay>
					{title}
				</ChakraNextLink>

				<HStack spacing='1rem' wrap='wrap' textTransform='uppercase'>
					<Text>{createdAt}</Text>
					<Text>{totalViews} views</Text>
					<Text>{readingTime}</Text>
				</HStack>

				<Text noOfLines={3}>{description}</Text>

				<ChakraButtonLink textTransform='uppercase' href={link}>
					Read more
				</ChakraButtonLink>
			</VStack>
		</>
	)
}

export default BlogPreviewCard
