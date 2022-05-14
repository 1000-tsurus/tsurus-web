import { Checkbox } from '@mui/material'
import React, { forwardRef } from 'react'

const CustomCheckbox = ({ ...rest }) => {
    console.log(rest)
    return <Checkbox {...rest} />
}

export default forwardRef(CustomCheckbox)
