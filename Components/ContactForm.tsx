import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import StyledTextField from './StyledComponents/StyledTextField'
import StyledSelectInputBase from './StyledComponents/StyledSelectInputBase'
import StyledButton from './StyledComponents/StyledButton'
import { m } from 'framer-motion'
import {
  contactFormCtnVariant,
  contactFormBtnVariant
} from '../animations/contactForm'
import useContact from '../hooks/useContact'
import React, { useState } from 'react'
import { ProductName, useSendEmailMutation } from '../graphql/generatedTypes'
import { OrderType } from '../hooks/ContactFormContext'
import StyledAlert from './StyledComponents/StyledAlert'

const sx: SxProps = {
  root: {
    width: { xs: 1, md: 0.5 },
    p: 4,
    border: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'primary.main'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: 3
  },
  headingCtn: {
    color: 'primary.main'
  },
  alertCtn: {
    marginY: 2
  },
  selectFields: {
    display: 'flex',
    gap: 2
  },
  quantity: {
    alignSelf: 'flex-end'
  }
}

interface Props {
  productsNames: ProductName[]
}

const ContactForm = ({ productsNames }: Props) => {
  const { fields, handleField, reset } = useContact()

  const [sendEmail, { data, loading, error }] = useSendEmailMutation({
    variables: { form: fields },
    fetchPolicy: 'no-cache'
  })

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    
    await sendEmail()
    reset()
  }

  const handleName = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    handleField('name', e.target.value)
  }
  const handleEmail = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    handleField('email', e.target.value)
  }
  const handleQuantity = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    handleField('quantity', e.target.value)
  }
  const handleMessage = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    handleField('message', e.target.value)
  }
  const handleType = (e: SelectChangeEvent<OrderType>) => {
    handleField('type', e.target.value)
  }
  const handleProduct = (e: SelectChangeEvent<string>) => {
    handleField('product', e.target.value)
  }

  console.log(data, loading, error)

  return (
    <Box
      sx={sx.root}
      component={m.form}
      variants={contactFormCtnVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
    >
      <Box sx={sx.headingCtn}>
        <Typography variant="h3" paragraph color="secondary">
          Contact Form
        </Typography>
      </Box>

      {loading && (
        <Box sx={sx.alertCtn}>
          <StyledAlert severity="info">Message Sending...</StyledAlert>
        </Box>
      )}
      {data && (
        <Box sx={sx.alertCtn}>
          <StyledAlert severity="success">Message Sent...</StyledAlert>
        </Box>
      )}
      {error && (
        <Box sx={sx.alertCtn}>
          <StyledAlert severity="error">{error.message}</StyledAlert>
        </Box>
      )}

      <Box sx={sx.form}>
        <StyledTextField
          variant="outlined"
          label="Name"
          color="secondary"
          value={fields['name']}
          onChange={handleName}
          required
        />

        <StyledTextField
          variant="outlined"
          label="Email"
          type="email"
          color="secondary"
          value={fields['email']}
          onChange={handleEmail}
          required
        />

        <Box sx={sx.selectFields}>
          <FormControl variant="standard" fullWidth>
            <Typography variant="subtitle2">Type</Typography>
            <Select
              value={fields.type}
              color="secondary"
              onChange={handleType}
              input={<StyledSelectInputBase />}
            >
              <MenuItem value={OrderType.order}>Order</MenuItem>
              <MenuItem value={OrderType.inquiry}>Inquiry</MenuItem>
            </Select>
          </FormControl>

          {fields.type === OrderType.order && (
            <FormControl variant="standard" fullWidth>
              <Typography variant="subtitle2">Product</Typography>
              <Select
                value={fields.product}
                color="secondary"
                onChange={handleProduct}
                input={<StyledSelectInputBase />}
              >
                <MenuItem value="default" selected={true} disabled={true}>
                  Please select a product
                </MenuItem>
                {productsNames.map(({ name, available }) => (
                  <MenuItem key={name} value={name} disabled={!available}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {fields.type === OrderType.order && (
            <StyledTextField
              sx={sx.quantity}
              variant="outlined"
              label="Quantity"
              color="secondary"
              value={fields['quantity']}
              onChange={handleQuantity}
              required
            />
          )}
        </Box>

        <StyledTextField
          multiline
          variant="outlined"
          label="Message..."
          color="secondary"
          value={fields['message']}
          onChange={handleMessage}
        />

        <m.div variants={contactFormBtnVariant}>
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            Send Email
          </StyledButton>
        </m.div>
      </Box>
    </Box>
  )
}

export default ContactForm
