const license = `/*!
 * three-icosa
 * https://github.com/icosa-gallery/three-icosa
 * Copyright (c) 2021-2022 Icosa Gallery
 * Released under the Apache 2.0 Licence.
 */`;

export default {
	input: 'src/index.js',
	external: [
		'three'
	],
	output: [
		{
			format: 'umd',
			name: 'three-icosa',
			file: 'dist/three-icosa.js',
			banner: license,
			indent: '\t',
		},
		{
			format: 'es',
			file: 'dist/three-icosa.module.js',
			banner: license,
			indent: '\t',
		}
	]
};
