import { Checkbox } from '@mui/material'
import React, { forwardRef } from 'react'

const CustomCheckbox = ({ ...rest }) => {
    return <Checkbox {...rest} />
}

export default forwardRef(CustomCheckbox)
