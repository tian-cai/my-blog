(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{411:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"prototype-与-proto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype-与-proto"}},[t._v("#")]),t._v(" prototype 与 "),a("strong",[t._v("proto")])]),t._v(" "),a("ul",[a("li",[t._v("prototype 是函数对象才有的属性，指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型")]),t._v(" "),a("li",[a("strong",[t._v("proto")]),t._v(" 是所有对象拥有的属性，指向对象的原型")]),t._v(" "),a("li",[t._v("对象的 "),a("strong",[t._v("proto")]),t._v(" 属性等于构造函数的prototype属性")]),t._v(" "),a("li",[a("strong",[t._v("proto")]),t._v(" 来自于 Object.prototype，可以理解成Object.getPrototypeOf()")])]),t._v(" "),a("h3",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("ul",[a("li",[t._v("对象的原型也是一个对象，也拥有自己的原型，形成原型链，原型链顶层是Object.prototype")]),t._v(" "),a("li",[t._v("当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。")])]),t._v(" "),a("h3",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lisi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// person的原型链")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// person--\x3e Person.prototype --\x3e Object.prototype")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Person的原型链")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Person ---\x3e Function.prototype --\x3e Object.prototype")]),t._v("\n")])])]),a("h3",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 JavaScript 原型"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/blog/issues/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript深入之从原型到原型链"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);