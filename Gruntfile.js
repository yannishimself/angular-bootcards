// Generated on 2015-01-21 using generator-angular-component 0.2.3
'use strict';

module.exports = function (grunt) {

	// Configurable paths
	var yoConfig = {
		livereload: 35729,
		app: 'example',
		src: 'src',
		dist: 'dist',
		docs: 'docs'
	};

	// Livereload setup
	var lrSnippet = require('connect-livereload')({port: yoConfig.livereload});
	var mountFolder = function (connect, dir) {
		return connect.static(require('path').resolve(dir));
	};

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		yo: yoConfig,
		meta: {
			banner: '/**\n' +
			' * <%= pkg.name %>\n' +
			' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
			' * @link <%= pkg.homepage %>\n' +
			' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
			' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
			' */\n'
		},
		open: {
			server: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yo.dist %>/*',
						'!<%= yo.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			html: {
				files: ['<%= yo.src %>/{,**/}*.html'],
				tasks: ['build']
			},
			less: {
				files: ['<%= yo.src %>/{,*/}*.less'],
				tasks: ['less:dist']
			},
			app: {
				files: [
					'<%= yo.app %>/{,*/}*.html',
					'<%= yo.src %>/{,*/}*.html',
					'{.tmp,<%= yo.src %>}/{,*/}*.css',
					'{.tmp,<%= yo.src %>}/{,*/}*.js'
				],
				options: {
					livereload: yoConfig.livereload
				}
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'qunit']
			}
		},
		connect: {
			options: {
				port: 9000,
				open: true,
				hostname: 'localhost' // Change this to '0.0.0.0' to access the server from outside.
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, 'bower_components'),
							mountFolder(connect, yoConfig.app),
							mountFolder(connect, yoConfig.dist),
							mountFolder(connect, '.tmp'),
							mountFolder(connect, yoConfig.src)
						];
					}
				}
			},
			docs: {
				options: {
					middleware: function (connect) {
						return [
						lrSnippet,
						mountFolder(connect, 'bower_components'),
						mountFolder(connect, yoConfig.docs),
						mountFolder(connect, '.tmp')
						];
					}
				}
			}
		},
		less: {
			options: {
				// dumpLineNumbers: 'all',
				paths: ['<%= yo.src %>']
			},
			dist: {
				files: {
					'<%= yo.src %>/<%= yo.name %>.css': '<%= yo.src %>/<%= yo.name %>.less'
				}
			}
		},
		jshint: {
			gruntfile: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: 'Gruntfile.js'
			},
			src: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: ['<%= yo.src %>/{,*/}*.js']
			},
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/**/*.js']
			}
		},
		karma: {
			options: {
				configFile: 'karma.conf.js',
				browsers: ['PhantomJS']
			},
			unit: {
				singleRun: true
			},
			server: {
				autoWatch: true
			}
		},
		ngmin: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				src: [
					'<%= yo.src %>/**/*.js',
					'<%= yo.src %>/<%= pkg.name %>.js'
				],
				dest: '<%= yo.dist %>/<%= pkg.name %>.js'
			}
			// dist: {
			//   files: {
			//     '/.js': '/.js'
			//   }
			// }
		},

		//Combine the ngmin with the templates
		concat: {
			options: {
				banner: '<%= meta.banner %>',
				stripBanners: true
			},
			dist: {
				src: [
					'<%= yo.dist %>/<%= pkg.name %>.js',
					'<%= ngtemplates.bootcards.dest %>'
				],
				dest: '<%= yo.dist %>/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: '<%= yo.dist %>/<%= pkg.name %>.min.js'
			}
		},
		ngtemplates: {
			bootcards: {
				src: '<%= yo.src %>/**/*.tmpl.html',
				dest: '<%= yo.dist %>/templates.js',
				options: {
					url: function (url) {
						return url.replace('src/', '');
					}
				}
			}
		},
		ngdocs: {
			options: {
				dest: 'docs',
				scripts: [
					'//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
					'//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular.min.js',
					'//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-animate.min.js',
					'//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/js/bootstrap.min.js',
					'//cdnjs.cloudflare.com/ajax/libs/bootcards/1.1.0/js/bootcards.min.js',
					'dist/angular-bootcards.js'
				],
				styles: [
				'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/css/bootstrap.css',
				'https://cdnjs.cloudflare.com/ajax/libs/bootcards/1.1.0/css/bootcards-desktop.min.css'
				],
				html5Mode: false,
				startPage: '/api',
				title: "Angular Bootcards",
				titleLink: "/api",
				analytics: {
					account: 'UA-08150815-0',
					domainName: 'my-domain.com'
				}
			},/*
			tutorial: {
				src: ['content/tutorial/*.ngdoc'],
				title: 'Tutorial'
			},*/
			api: {
				src: ['src/**/*.js', '!src/**/*.spec.js'],
				title: 'API Documentation'
			}
		}
	});

	grunt.registerTask('serve', [
		'connect:livereload',
		'watch'
	]);
	grunt.registerTask('docs', [
	'ngdocs',
	'connect:docs',
	'watch'
	]);

	grunt.registerTask('test', [
		'jshint',
		'karma:unit'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'ngtemplates',
		'less:dist',
		'ngmin:dist',
		'concat:dist',
		'uglify:dist'
	]);

	grunt.registerTask('release', [
		'test',
		'bump-only',
		'dist',
		'bump-commit'
	]);


	grunt.registerTask('default', ['build']);

};
