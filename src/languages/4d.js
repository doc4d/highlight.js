/*
Language: 4D
Description: 4D
Author: GUillaume Kotulski <guillaume.kotulski@4d.com>
Category: Scripting
Website: https://www.4d.com
*/



function(hljs) {

  var KEYWORDS = {
    className: 'keyword',
    begin: '[\\s]*\\b(Begin SQL|End SQL|For each|End for each|If|Else|End if|Case of|End case|For|End for|Use|End use|While|End while|Repeat|Until)\\b'
  };
  
  var LITERALS = {
    className: 'literals',
    begin: '\\b(False|True|Null|Undefined|NaN|Infinity)',
  };

  var FUNCTIONS = {
    className: 'function',
    begin: '([\\w ]+((?=\\()|$))',
    end: '$|(?!\\w|\\s)'
  }

  var NUMBERS = {
    className: 'number',
    begin: '(0[xX])?[0-9]+(\\.?,?\\^?[eE]?)[0-9]*',
  };

  var VARIABLE = {
    className: 'variable',
    begin: '[\\w]+',
    end: '(?!\\w)|$'
  }

  var LOCAL_VARIABLE = {
    className: 'variable',
    begin: '\\$',
    end: VARIABLE.end
  }

  var INTERPROCESS_VARIABLE = {
    className: 'variable',
    begin: '<>',
    end: VARIABLE.end
  }

  var STRINGS = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [ hljs.BACKSLASH_ESCAPE ],
    relevance: 0
  }


  var VARIABLE_ARRAY = {
    className: 'variable',
    begin: '\\[{2}',
    end: '\\]{2}'
  }


  var INLINE_COMMENT = hljs.COMMENT('//', '[^\\\\]$');

  return {
    aliases: [ '4d' ],
    keyword:KEYWORDS,
    contains: [
      INLINE_COMMENT, // single-line comments
      hljs.C_BLOCK_COMMENT_MODE, // comment blocks
      {
        begin: 'Begin SQL', end: 'End SQL',
        subLanguage: 'sql',
        relevance: 0
      },
      NUMBERS,
      LITERALS,
      KEYWORDS,
      INTERPROCESS_VARIABLE,
      LOCAL_VARIABLE,
      VARIABLE_ARRAY,
      STRINGS,
      FUNCTIONS
    ]
  };
}

