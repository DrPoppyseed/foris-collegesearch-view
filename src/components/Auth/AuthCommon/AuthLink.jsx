// @flow
import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Typography } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  default: {
    textDecoration: 'none',
  },
  toLegalText: {
    color: fade(theme.palette.common.black, 0.5) + ' !important',
    paddingLeft: theme.spacing(2),
  },
}))

const AuthLink = ({
  variant = 'caption',
  to,
  text,
  type = 'default',
}: {
  variant: string,
  to: string,
  text: string,
  type: string,
}): React.Element<any> => {
  const c = useStyles()

  return (
    <Typography variant={variant}>
      <Link
        component={RouterLink}
        to={to}
        className={type === 'legal' ? c.toLegalText : c.default}>
        {text}
      </Link>
    </Typography>
  )
}

export default AuthLink