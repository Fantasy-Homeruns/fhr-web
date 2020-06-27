# -----------------------------------------------------------------------------
# Defaults
# -----------------------------------------------------------------------------
AWS_CREDS := $(if $(AWS_CREDS),$(AWS_CREDS),~/.aws/credentials)

# -----------------------------------------------------------------------------
# AWS
# -----------------------------------------------------------------------------
deploy:
	npm run build && \
	aws s3 sync build/ s3://fhr-web/ --acl public-read
