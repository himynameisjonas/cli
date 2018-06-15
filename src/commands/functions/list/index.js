
const {Command, flags} = require('@oclif/command')
const AsciiTable = require('ascii-table')

class FunctionsListCommand extends Command {
  async run() {
    const {flags} = this.parse(FunctionsListCommand)
    this.log(`list function`)
    var table = new AsciiTable('Netlify Functions')
    table.setHeading('Name', 'Url', 'id')
    .addRow('function-abc', 'site.com/.netlify/function-abc', '124123-ddhshs1212-1211')
    .addRow('send-email-function', 'site.com/.netlify/send-email-function', 'x3123-22345-1211')
    .addRow('lol-function-cool', 'site.com/.netlify/lol-function-cool', 'weyhfd-hjjk-67533')

    console.log(table.toString())
  }
}

FunctionsListCommand.description = `list sites
...
Extra documentation goes here
`

FunctionsListCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = FunctionsListCommand