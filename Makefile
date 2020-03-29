install:
	cd ./ui && npm i

.PHONY: start
start:
	cd ./ui && npm run start

build:
	cd ./ui && npm run build

deploy: build
	cd ./ui && aws s3 sync ./build/ s3://react-pokedex-challenge-tw --delete --acl public-read
	cd ./infrastructure && terraform output
	# TODO setup s3 bucket as env var derived from terraform outputs