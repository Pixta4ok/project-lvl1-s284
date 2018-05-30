install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish: clean build
	npm publish

clean:
	rm -rf dist

build:
	npm run build
