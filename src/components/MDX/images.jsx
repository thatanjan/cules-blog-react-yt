import Image from 'next/image'

import Wrapper from './Wrapper'

const NextImage = (props) => (
	<Wrapper>
		<Image {...props} />
	</Wrapper>
)

const components = { NextImage }

components.img = (props) => (
	<Wrapper>
		<img {...props} />
	</Wrapper>
)

export default components
