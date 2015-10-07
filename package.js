Package.describe({
  name: "willrbc:mssql",
  summary: "mssql wrapper: non-reactive SQL Server package without relying on settings.json (not recommended)",
  version: "1.3.4",
  git: "https://github.com/willrbc/meteor-mssql.git",
  documentation: "README.md"
});

Npm.depends({ "mssql" : "1.3.0" });

Package.onUse(function(api) {
  api.versionsFrom("1.0.3.1");
  api.versionsFrom("1.1.0.2");
  api.use('underscore', 'server');
  api.addFiles("mssql.js", "server");
  api.export("Sql", "server");
});
