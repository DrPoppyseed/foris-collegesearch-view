/* eslint-disable jsx-a11y/iframe-has-title */
// @flow
import * as React from 'react'
import { Paper, Typography } from '@material-ui/core'

import useStyles from './styles'

const Location = (): React.Element<any> => {
  const c = useStyles()

  return (
    <Paper className={c.root}>
      <Typography variant="h6" className={c.title}>
        キャンパス
      </Typography>
      <div className={c.mapsContainer}>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345011.44365406065!2d-122.59453951215227!3d47.50156372847727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014929d8535eb%3A0x6b742c7901b82ba3!2z44Ov44K344Oz44OI44Oz5aSn5a2m!5e0!3m2!1sja!2sus!4v1587535025920!5m2!1sja!2sus"
          width="100%"
          height="350"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabIndex="0"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1588829200171!6m8!1m7!1sBSGO6DAhJcdM03jfVaXISg!2m2!1d47.65389204532318!2d-122.3071892454694!3f270!4f0!5f0.7820865974627469"
          width="100%"
          height="350"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabIndex="0"
        /> */}
      </div>
    </Paper>
  )
}

export default Location
