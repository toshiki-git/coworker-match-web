PHONY: gen-type-file

# Variables
OPENAPI_URL=https://raw.githubusercontent.com/toshiki-git/coworker-match-openapi/main/dist/combined-from-ci.yml
GENERATOR_IMAGE=openapitools/openapi-generator-cli
OUTPUT_DIR=/local/gen/typescript

define GENERATE_CMD
    docker run --rm \
        -v ${CURDIR}:/local ${GENERATOR_IMAGE} generate \
        -i ${OPENAPI_URL} \
        -g typescript-fetch \
        -o ${OUTPUT_DIR} \
        --additional-properties=supportsES6=true
endef

gen-type-file:
	$(GENERATE_CMD)
