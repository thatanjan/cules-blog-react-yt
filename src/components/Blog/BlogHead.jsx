import React from 'react'
import Image from 'next/image'

import { Box, HStack, VStack, Text, Heading, LinkBox } from '@chakra-ui/react'

const BlogHead = ({
	banner,
	title,
	altText,
	createdAt,
	readingTime,
	totalViews,
	customID,
}) => {
	return (
		<>
			<VStack as={LinkBox} spacing='1rem' align='center' m='2rem 0'>
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

				<Heading
					fontSize={{
						base: '4xl',
						md: '6xl',
					}}
					align='center'
				>
					{title}
				</Heading>

				<HStack spacing='1rem' wrap='wrap' textTransform='uppercase'>
					<Text>{createdAt}</Text>
					<Text>{totalViews} views</Text>
					<Text>{readingTime}</Text>
				</HStack>
			</VStack>
		</>
	)
}

export default BlogHead
