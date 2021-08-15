// @flow
import * as React from 'react'
import { Typography, Link } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  signUpText: {
    color: fade(theme.palette.common.black, 0.5) + ' !important',
  },
  signInLink: {
    textDecoration: 'none',
  },
}))

const BottomText = ({
  before,
  link,
  to,
  after,
}: {
  before: string,
  link: string,
  to: string,
  after: string,
}): React.Element<any> => {
  const c = useStyles()

  return (
    <Typography variant="caption" className={c.signUpText}>
      {before}
      <Link component={RouterLink} to={to} className={c.signInLink}>
        {link}
      </Link>
      {after}
    </Typography>
  )
}

export default BottomText