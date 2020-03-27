output "s3_bucket_id" {
  value       = aws_s3_bucket.react-pokedex-challenge.bucket_domain_name
  description = "The bucket hosting the SPA"
}