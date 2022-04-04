import { ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'

import { BlogText } from './texts'

const components = {
	ul: UnorderedList,
	ol: OrderedList,
	li: (props) => <BlogText as={ListItem} {...props} />,
}

export default components
