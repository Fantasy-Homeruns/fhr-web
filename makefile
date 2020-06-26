# -----------------------------------------------------------------------------
# Defaults
# -----------------------------------------------------------------------------
AWS_CREDS := $(if $(AWS_CREDS),$(AWS_CREDS),~/.aws/credentials)

# -----------------------------------------------------------------------------
# AWS
# -----------------------------------------------------------------------------
deploy:
	npm run build && \
	aws s3 sync --cache-control 'max-age=604800' --exclude index.html build/ s3://fhr-front-end/ --acl public-read && \
	aws s3 sync --cache-control 'no-cache' build/ s3://fhr-front-end/ --acl public-read
