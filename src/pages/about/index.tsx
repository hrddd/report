import React from "react"
import Header from "../../components/header"
import Container from '../../components/Container';
import * as styles from "./index.module.css"
import { graphql } from 'gatsby';
import { PagesAboutQuery } from '../../../types/graphql-types';

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About({ data }: { data: PagesAboutQuery }) {
  return (
    <Container>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" />
      <h1>About {data.site.siteMetadata.title}</h1>
      <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Daniela Dewitt"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}

export const query = graphql`
query PagesAbout {
    site {
      siteMetadata {
        title
      }
    }
  }
`