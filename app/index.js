/**================================
 * Generator NWP Theme
 **===============================*/

'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var NwpThemeGenerator = module.exports = function NwpThemeGenerator(args, options) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
	this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(NwpThemeGenerator, yeoman.generators.Base);

NwpThemeGenerator.prototype.askFor = function askFor() {
    var cb = this.async(),
	self = this;

    // have Yeoman greet the user.
    console.log(this.yeoman);

    self.themeName = 'MyTheme';
    self.themeDescription = 'Theme description.';
    self.themeURI = 'http://neutrico.pl';
    self.authorName = 'neutrico.pl';
    self.authorEmail = 'info@neutrico.pl';
    self.authorURI = 'http://neutrico.pl';

    var prompts = [
	{
	    name: 'themeName',
	    message: 'Name of the theme you want to create:',
	    default: self.themeName
	}, {
	    name: 'themeURI',
	    message: 'Theme homepage URI:',
	    default: self.themeURI
	}, {
	    name: 'themeDescription',
	    message: 'Theme Description: ',
	    default: self.themeDescription
	}, {
	    name: 'authorName',
	    message: 'Author name: ',
	    default: self.authorName
	}, {
	    name: 'authorEmail',
	    message: 'Author e-mail: ',
	    default: self.authorEmail
	}, {
	    name: 'authorURI',
	    message: 'Author URI: ',
	    default: self.authorURI
	}
    ];

    this.prompt(prompts, function (props) {
	self.someOption = props.someOption;

	self.themeName = props.themeName;
	self.themeDescription = props.themeDescription;
	self.themeURI = props.themeURI;
	self.authorName = props.authorName;
	self.authorEmail = props.authorEmail;
	self.authorURI = props.authorURI;

	cb();
    }.bind(this));
};

NwpThemeGenerator.prototype.app = function app() {

    this.mkdir('doc');
    this.copy('doc/README.txt', 'doc/README.txt');

    this.mkdir('src');
    this.mkdir('src/assets');

    this.template('_composer.json', 'composer.json');
    this.template('_package.json', 'package.json');

    this.template('_bower.json', 'bower.json');

    // this.template('bowerrc', '.bowerrc');

    this.template('_Gruntfile.js', 'Gruntfile.js');

    // Theme files
    this.template('assets/_style.css', 'src/style.css');
    this.template('assets/_editor-style.css', 'src/editor-style.css');
    this.template('assets/_rtl.css', 'src/rtl.css');

    this.template('php/_404.php', 'src/404.php');
    this.template('php/_archive.php', 'src/archive.php');
    this.template('php/_author.php', 'src/author.php');
    this.template('php/_category.php', 'src/category.php');
    this.template('php/_comments.php', 'src/comments.php');
    this.template('php/_content.php', 'src/content.php');
    this.template('php/_footer.php', 'src/footer.php');
    this.template('php/_functions.php', 'src/functions.php');
    this.template('php/_header.php', 'src/header.php');
    this.template('php/_image.php', 'src/image.php');
    this.template('php/_index.php', 'src/index.php');
    this.template('php/_page.php', 'src/page.php');
    this.template('php/_search.php', 'src/search.php');
    this.template('php/_sidebar.php', 'src/sidebar.php');
    this.template('php/_single.php', 'src/single.php');
    this.template('php/_tag.php', 'src/tag.php');
};

NwpThemeGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_jshintrc', '.jshintrc');
    this.copy('_gitignore', '.gitignore');
    // this.copy('gitattributes', '.gitattributes');
};
