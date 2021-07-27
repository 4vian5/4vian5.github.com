(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{386:function(e,t,o){"use strict";o.r(t);var s=o(44),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"customize"}},[e._v("Customize")]),e._v(" "),o("p",[e._v("We'll take this repo as an example to show you how to make this site as you like.")]),e._v(" "),o("p",[e._v("Don't forget to refer to official "),o("a",{attrs:{href:"https://vuepress.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress Guide"),o("OutboundLink")],1),e._v(" to find out more.")]),e._v(" "),o("h2",{attrs:{id:"structure"}},[e._v("Structure")]),e._v(" "),o("p",[e._v("Now, we care about the "),o("strong",[e._v("docs")]),e._v(" directory which includes:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docs\n├── guide\n├── projects\n├── README.md\n└── .vuepress\n    ├── components\n    │   ├── Homepage.vue\n    │   ├── MContent.vue\n    │   ├── Projects.vue\n    │   └── styles\n    │       └── config.styl\n    ├── config.js\n    ├── override.styl\n    └── public\n        ├── icons\n        ├── profile.jpg\n        └── projects\n")])])]),o("h3",{attrs:{id:"the-documents"}},[e._v("The documents")]),e._v(" "),o("p",[e._v("The entry page is "),o("code",[e._v("README.md")]),e._v(", followed by sub-pages under the directories "),o("code",[e._v("guide")]),e._v(" and "),o("code",[e._v("projects")]),e._v(".")]),e._v(" "),o("p",[e._v("You can modify, delete and create your own directory and "),o("code",[e._v("README.md")]),e._v(" files according to your needs.")]),e._v(" "),o("p",[e._v("You should have basic idea of "),o("a",{attrs:{href:"https://guides.github.com/features/mastering-markdown/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown"),o("OutboundLink")],1),e._v(" and YAML Front Matter.")]),e._v(" "),o("h3",{attrs:{id:"config-js"}},[e._v("config.js")]),e._v(" "),o("p",[e._v("The config files of this site are all placed under "),o("code",[e._v(".vuepress")]),e._v(" directory. The only two you need to concern is "),o("code",[e._v("config.js")]),e._v(" and "),o("code",[e._v("public")]),e._v(" folder.")]),e._v(" "),o("h3",{attrs:{id:"public"}},[e._v("public")]),e._v(" "),o("p",[e._v("You need to place your images under "),o("code",[e._v("docs/.vuepress/public")]),e._v(" directory, so that you can access them using "),o("code",[e._v("/profile.jpg")]),e._v(" in the yaml section of the "),o("code",[e._v("README.md")]),e._v(" file.")]),e._v(" "),o("h2",{attrs:{id:"modification"}},[e._v("Modification")]),e._v(" "),o("h3",{attrs:{id:"title"}},[e._v("Title")]),e._v(" "),o("p",[e._v("The title of the site and the navbar is in the "),o("code",[e._v("docs/.vuepress/config.js")])]),e._v(" "),o("h3",{attrs:{id:"navbar-links"}},[e._v("Navbar links")]),e._v(" "),o("p",[e._v("Still in the "),o("code",[e._v("config.js")]),e._v(", under the "),o("code",[e._v("themeConfig")]),e._v(" key.")]),e._v(" "),o("h3",{attrs:{id:"homepage"}},[e._v("Homepage")]),e._v(" "),o("p",[e._v("If you don't like the homepage, simply modify the "),o("code",[e._v("docs/README.md")]),e._v(" file to switch to another layout or just Markdown page.")]),e._v(" "),o("h3",{attrs:{id:"sidebar"}},[e._v("Sidebar")]),e._v(" "),o("p",[e._v("There are two different types of sidebars: routing between multiple Markdown files and TOC of a single page.")]),e._v(" "),o("p",[e._v("This "),o("strong",[e._v("Guide")]),e._v(" contains separate files under "),o("code",[e._v("docs/guide")]),e._v(". To enable sidebar, you have to manually set this in the "),o("code",[e._v("config.js")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"pages"}},[e._v("Pages")]),e._v(" "),o("h3",{attrs:{id:"homepage-2"}},[e._v("Homepage")]),e._v(" "),o("p",[e._v("As you can see in the "),o("code",[e._v("docs/README.md")]),e._v(", most of the contents are written in the YAML front matter. Just modify the corresponding section and you should get yours.")]),e._v(" "),o("h3",{attrs:{id:"projects"}},[e._v("Projects")]),e._v(" "),o("p",[e._v("Actually, it's a pure Markdown file. You can use the inline widget "),o("code",[e._v("<MarkdownCard>")]),e._v(" to show your project, publication or portfolio. Check the example at "),o("code",[e._v("docs/projects/README.md")]),e._v(".")]),e._v(" "),o("p",[e._v("You can even add some more sections with Markdown to make this page a resume for you.")]),e._v(" "),o("h3",{attrs:{id:"customize-page"}},[e._v("Customize Page")]),e._v(" "),o("p",[e._v("Adding a page is simple, create "),o("code",[e._v("docs/Foo/README.md")]),e._v(" and you can access it with link "),o("code",[e._v("/Foo/")]),e._v(" in the context.")]),e._v(" "),o("p",[e._v("To automatically generate the sidebar of the current page, add "),o("code",[e._v("sidebar: auto")]),e._v(" in the front matter section.")]),e._v(" "),o("p",[e._v("You can even tune the styles with "),o("code",[e._v("<style>")]),e._v(" tag. Check "),o("a",{attrs:{href:"https://vuepress.vuejs.org/guide/using-vue.html#using-pre-processors",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" for more information.")])])}),[],!1,null,null,null);t.default=r.exports}}]);