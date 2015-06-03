Package.describe({
  name: 'crussi:bootstrap3-todc',
  version: '1.0.2',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap todc 3.3.4 packaged for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/crussi/bootstrap3-todc.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery');
  //api.use('nemo64:bootstrap@3.3.4');
  api.use('twbs:bootstrap@3.3.1');
  var path = Npm.require('path');
  var asset_path = path.join('todc');
  api.add_files(path.join(asset_path, 'css', 'todc-bootstrap.css'), 'client');
  // fonts
  api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.eot'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.ttf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.svg'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.woff'), 'client');
  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.
  api.add_files(path.join('bootstrap3-todc-override.css'), 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('crussi:bootstrap3-todc');
  api.addFiles('bootstrap3-todc-tests.js');
});
