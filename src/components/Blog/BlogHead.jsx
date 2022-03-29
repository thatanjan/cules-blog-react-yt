import React, { useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'

import { Box, HStack, VStack, Text, Heading, LinkBox } from '@chakra-ui/react'

import useGetViews from 'hooks/useGetViews'

const BlogHead = ({
	banner,
	title,
	altText,
	createdAt,
	readingTime,
	totalViews,
	customID,
}) => {
	const { data: views, mutate } = useGetViews(customID, totalViews)

	useEffect(() => {
		const url = `/api/views/${customID}`

		;(async () => {
			try {
				await axios.post(url)
				mutate()
			} catch (error) {
				console.log(error)
			}
		})()
	}, [])

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
					<Text>{views} views</Text>
					<Text>{readingTime}</Text>
				</HStack>
			</VStack>
		</>
	)
}

export default BlogHead
