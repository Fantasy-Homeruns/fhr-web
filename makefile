# -----------------------------------------------------------------------------
# Defaults
# -----------------------------------------------------------------------------
AWS_CREDS := $(if $(AWS_CREDS),$(AWS_CREDS),~/.aws/credentials)
DIST_ID := $(DIST_ID)

# -----------------------------------------------------------------------------
# AWS
# -----------------------------------------------------------------------------
deploy:
	npm run build && \
	aws s3 sync build s3://fhr-web --delete --cache-control max-age=31536000,public && \
	aws s3 cp s3://fhr-web/service-worker.js s3://fhr-web/service-worker.js --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type application/javascript --acl public-read && \
	aws s3 cp s3://fhr-web/index.html s3://fhr-web/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read && \
	aws cloudfront create-invalidation --distribution-id $(DIST_ID) --paths "/*"
