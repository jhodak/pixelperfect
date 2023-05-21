import { Footer, Text, Grid, Container } from '@mantine/core'
import styles from './styles.css'

/* c8 ignore start */
export const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}
/* c8 ignore end */

export default function FooterLayout() {
  let year = new Date().getFullYear
  return (
    <Footer className="footer" height="58">
      <Container fluid>
        <Grid>
          <Grid.Col sm={4} xs={12}></Grid.Col>
          <Grid.Col sm={4} xs={12}>
            <Text
              align="center"
              component="p"
            >{`©${new Date().getFullYear()} Pixel Perfect Art Shop`}</Text>
          </Grid.Col>
          <Grid.Col sm={4} xs={12}>
            <Text component="p">Powered by: Coal and Sunshine</Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Footer>
  )
}
