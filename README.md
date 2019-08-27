ces-cli
=======

CES internal node kick starter and related cli commands

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ces-cli.svg)](https://npmjs.org/package/ces-cli)
[![Downloads/week](https://img.shields.io/npm/dw/ces-cli.svg)](https://npmjs.org/package/ces-cli)
[![License](https://img.shields.io/npm/l/ces-cli.svg)](https://github.com/sudharsan-gandhi/ces-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ces-cli
$ ces-cli COMMAND
running command...
$ ces-cli (-v|--version|version)
ces-cli/0.2.0 linux-x64 node-v12.5.0
$ ces-cli --help [COMMAND]
USAGE
  $ ces-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ces-cli hello [FILE]`](#ces-cli-hello-file)
* [`ces-cli help [COMMAND]`](#ces-cli-help-command)
* [`ces-cli init [PROJECT-NAME]`](#ces-cli-init-project-name)

## `ces-cli hello [FILE]`

describe the command here

```
USAGE
  $ ces-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ces-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/sudharsan-gandhi/ces-cli/blob/v0.2.0/src/commands/hello.ts)_

## `ces-cli help [COMMAND]`

display help for ces-cli

```
USAGE
  $ ces-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `ces-cli init [PROJECT-NAME]`

initialize the node clean architecture boilerplate with typeorm|mongoose

```
USAGE
  $ ces-cli init [PROJECT-NAME]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/init.ts](https://github.com/sudharsan-gandhi/ces-cli/blob/v0.2.0/src/commands/init.ts)_
<!-- commandsstop -->
