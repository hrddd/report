# プラグイン

## gatsby-plugin-graphql-codegen
`graphql`してるところの型を自動生成してくれる。
名前(型の名前の元になる)は、テンプレートリテラル内にこう書く
```
query {
    site {
      siteMetadata {
        title
      }
    }
  }
```
↓（queryと{の間に書く）
```
query PagesAbout {
    site {
      siteMetadata {
        title
      }
    }
  }
```
## gatsby-source-filesystem
ファイルシステムにアクセスできるようにする
```
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
```
### 入れる前
```
data: {
   allFile: {
     edges: [] // 空
   }
}
```
### 入れた後
```
{
  "allFile": {
    "edges": [
      {
        "node": {
          "relativePath": "utils/typography.js",
          "prettySize": "224 B",
          "extension": "js",
          "birthTime": "3 days ago"
        }
      },
      {
        "node": {
          "relativePath": "styles/global.css",
          "prettySize": "43 B",
          "extension": "css",
          "birthTime": "3 days ago"
        }
      },
      ...
    ]
  }
}
```
