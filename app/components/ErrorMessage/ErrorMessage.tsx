

import { Text } from '@radix-ui/themes'
import React, { PropsWithChildren } from 'react'

const ErrorMessage = ({ children }: PropsWithChildren) => {
    if (!children) return;
    return (
        <Text className='text-red-600  mb-2' as="div"  >
            {children}
        </Text>
    )
}

export default ErrorMessage
