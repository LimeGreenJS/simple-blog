# simple-blog
LimeGreenJS-enabled simple blog example

## Notes for GraphCMS setup

### Create a model

- Display Name: Article
- API ID: Article
- Description: (can be empty)
- Primary Field: ID

### Create fields

- Field type: Text, Single Line
- Diplay Name: Title
- API ID: title

- Field type: Content, Multi Line
- Diplay Name: Content
- API ID: content

- Field type: Date, Date & Time
- Diplay Name: Date
- API ID: date

- Field type: Asset, Asset Grid
- Diplay Name: Cover
- API ID: cover

You need to "connect" the cover to assets.
You also need to enable "Read" permission for the entire model.
