"use strict";

var marko_template = module.exports = require("marko/vdom").t(),
    marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("f72432"),
    marko_node0 = marko_createElement("svg", {
        viewBox: "0 0 200 200",
        xmlns: "http://www.w3.org/2000/svg"
      }, 1, marko_const_nextId(), 1)
      .e("circle", {
          cx: "100",
          cy: "100",
          r: "100"
        }, 0, null, 1);

function render(input, out) {
  var data = input;

  out.n(marko_node0);
}

marko_template._ = render;
