output "s3_bucket_domain" {
  value       = aws_s3_bucket.react-pokedex-challenge.website_endpoint
  description = "The bucket hosting the SPA"
}