
/**
* This adds {fileName} annotations to React component definitions
* and to jsx tag literals.
*
*
* == JSX Literals ==
*
* <sometag />
*
* becomes:
*
* var __jsxFileName = 'this/file.js';
* <sometag data-source={__jsxFileName}/>
*/

"use strict";

exports.__esModule = true;
var TRACE_ID = "data-source";
var FILE_NAME_VAR = "_jsxFileName";

exports["default"] = function (_ref) {
  var t = _ref.types;

  function makeTrace(fileNameIdentifier, lineNumber) {
    var fileLineLiteral = lineNumber != null ? t.numericLiteral(lineNumber) : t.nullLiteral();
    var fileNameProperty = t.objectProperty(t.identifier("fileName"), fileNameIdentifier);
    var lineNumberProperty = t.objectProperty(t.identifier("lineNumber"), fileLineLiteral);
    return t.objectExpression([fileNameProperty, lineNumberProperty]);
  }

  var visitor = {
    JSXOpeningElement: function JSXOpeningElement(path, state) {
      if (!state.fileNameIdentifier) {
        var fileName = state.file.log.filename !== "unknown" ? state.file.log.filename : null;
        var id = t.jSXIdentifier(TRACE_ID);
        path.container.openingElement.attributes.push(t.jSXAttribute(id, t.stringLiteral(fileName)));
      }
    }
  };

  return {
    visitor: visitor
  };
};

module.exports = exports["default"];
