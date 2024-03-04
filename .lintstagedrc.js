const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

// const typeCheckCommand = 'tsc --noEmit --jsx preserve'; // or 'react' depending on your project setup

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
