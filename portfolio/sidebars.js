/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  //category example
  // type: 'category',
  // label: 'Tutorial',
  // items: ['my-projects/huffman','my-projects/testing'],

  projectsSidebar: [
    'my-projects/project-viznet',
    'my-projects/socket-chatroom',
    'my-projects/c-archive',
    'my-projects/notepad-light',
    'my-projects/huffman',
    'my-projects/vigenere-cipher',
  ],
  aboutSidebar: [
    'about/aboutme',
  ],
};

module.exports = sidebars;
