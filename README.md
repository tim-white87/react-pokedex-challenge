# React Pokedex Challenge

Simple react application utilizing Apollo Graphql with local state management to mock a backend API. You can view the site live [here](http://react-pokedex-challenge-tw.s3-website-us-east-1.amazonaws.com/).

Code [repo](https://github.com/cecotw/react-pokedex-challenge):

To begin:

```
make install
```

```
make start
```

If you would like to deploy this to S3, ensure you have your AWS creds setup, then

```
cd ./infrastructure
terraform init
terraform apply
```

This will set up the S3 bucket and output the domain.

To deploy, run:

```
make deploy
```

## License

[ISC](https://github.com/cecotw/react-pokedex-challenge/LICENSE)
