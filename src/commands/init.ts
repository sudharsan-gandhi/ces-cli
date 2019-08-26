import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'
import { createWriteStream } from 'fs';
import * as request from 'superagent';
import * as admzip from 'adm-zip'


export default class Init extends Command {
  
  static description = 'initialize the node clean architecture boilerplate with typeorm|mongoose'
  static args = [
    {name: 'project-name'}
  ]
  static flags = {
    help: flags.help({char: 'h'})
    // flag with a value (-n, --name=VALUE)
    // orm: flags.string({
    //   char: 'o', default:'typeorm',
    //   input: ['typeorm', 'mongoose'], 
    //   description: 'used to start the project with typeorm or mongoose support', 
    //   helpValue:'[typeorm|mongoose]'
    // }),
    // // flag with no value (-f, --force)
    // // force: flags.boolean({char: 'f'}),
  }

  async run() {
    const {args, flags} = this.parse(Init)
    console.log(process.cwd());
    let projectName = args['project-name'];
    let source = 'master.zip';
    let {orm} = await inquirer.prompt({
      name: 'orm',
      message: "RDBMS or ODM?", 
      type: "list", 
      choices:["typeorm", "mongoose"], 
      default: "typeorm"
    })

    switch(orm) {
      case "typeorm" : {
        console.log('downloading template...');
        request.get('https://github.com/sudharsan-gandhi/node-onion-boiler/archive/master.zip')
        .on('error',(error) => console.log('some error happened:', error.message))
        .pipe(createWriteStream(source))
        .on('finish', function() {
          console.log('finished dowloading...');
          console.log('extracting files...');
          let zip = new admzip(source);
          zip.extractEntryTo(`node-onion-boiler-master/`, `./${projectName}`, false, true);
        })
        break
      }
      case "mongoose" : {
        console.log("under development please use typeorm for now. sorry for the inconvenience")
        break
      }
    }


    // const name = flags.orm || 'world'
    // this.log(`hello ${name} from /home/sudharsan/projects/oclif/ces-cli/src/commands/init.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
