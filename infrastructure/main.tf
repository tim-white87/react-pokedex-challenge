provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "react-pokedex-challenge" {
  bucket = "react-pokedex-challenge-tw"
  acl = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}