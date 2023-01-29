import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'
import { useSelector } from '../../Store/Store'
import { Port } from '../../Types/Data/Port'
import { PortDirection } from '../../Types/PortDirection/PortDirection'

interface IPortField {
  direction: PortDirection
  currentSelectedPorts: (Port | null)[]
  setPort: (port: Port | null) => void
  getPort: () => Port | null
}

export const PortField: React.FC<IPortField> = (props) => {
  const { direction, currentSelectedPorts, setPort, getPort } = props
  const port = getPort()

  const options = useSelector((state) => state.search.ports) ?? []

  return (
    <Autocomplete
      isOptionEqualToValue={() => true}
      autoSelect={true}
      value={port}
      onChange={(_event, newPort: Port | null) => {
        setPort(newPort)
      }}
      onInputChange={(event, newInputValue) => {
        if (
          event && //
          (!newInputValue.includes(port?.code ?? '') || !newInputValue.includes(`(${port?.name})` ?? ''))
        ) {
          setPort(null)
        }
      }}
      options={options}
      getOptionLabel={(port) => `${port.name} (${port.code})`}
      getOptionDisabled={(option) => currentSelectedPorts.some((port) => port?.code === option.code)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} size='small' label={PortDirection[direction]} />}
    />
  )
}
