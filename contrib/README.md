#### Contribution Guide

### Summary

This project follows [Semantic Versioning 2.0](https://semver.org/). In general, every release is associated with a tag and a changelog. `master` serves as the mainline branch for the project and represent the latest state of development.

### Developing

This project uses Lerna to manage multiple modules: https://github.com/lerna/lerna.
Run the following to begin development:
```bash
# install lergna globally
npm install --global lerna
# install dependencies
npm install
# install external dependencies, and link shared modules
lerna bootstrap --hoist
# build modules
lerna run build
```

New modules must be added to the `packages` directory, and `lerna bootstrap` must be ran again.

### Testing

To run tests, run:
```bash
lerna run test
```

### Publishing a New SDK version
```bash
lerna publish
./publish_bundles.sh
./publish_docs.sh
```

### Patch Versions

The work for a patch version should happen on a "support branch" (e.g. 1.2.x). The purpose of this is to be able to support a minor release while excluding changes from the mainstream (`master`) branch. If the changes in the patch are relevant to other branches, including `master`, they should be backported there. 

### Major Versions

The release on GitHub should be edited for a more readable format of key changes and include any migration steps needed to go from the last major version to this one.
