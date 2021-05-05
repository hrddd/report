# GraphQL
## ふんわり
https://zenn.dev/yoshii0110/articles/2233e32d276551
wip
## mutationなど通信方式
wip
## gatsbyでのgraphql
### 適当
- プラグインでなんか変わる。
- build時にのみ、queryだけ使う？
- ベースになるschemaが入ってる？（枠だけ。使わなくても。。）
- ↑ Gatsby Node APIs というのがベースになってる？
- edges配下のnodeとnodesの違いがわからない
- gatsbyのgraphqlと素のgraphqlの違いが分からない、、
### options reference
https://www.gatsbyjs.com/docs/graphql-reference/
#### ソートできる
```
{
  allMarkdownRemark(
    sort: {
      fields: [frontmatter___date]
      order: DESC
    }
  ) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date
        }
      }
    }
  }
}
```

