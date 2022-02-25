module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('generate files', {
		description: 'template for algorithm',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'Enter your file name!'
		}],
		actions: [{
      type: 'add',
			path: 'src/{{camelCase name}}.js',
      templateFile: "templates/algorithm.js.hbs"
    }, {
      type: 'add',
			path: 'src/__test__/{{camelCase name}}.test.js',
      templateFile: "templates/algorithm.test.js.hbs"
    }]
	});
}