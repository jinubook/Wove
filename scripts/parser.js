// JavaScript Parser For Wove
var ho = 0;
var ht = 1;
var hth = 2;
var hf = 3;
var hf = 4;
var hs = 5;
var p = 6;
var expr = 7;
var idstr = "";
var CurTok = 0;
function lex(text) {
  // Lexer
  if (text == ":")
    return ho;
  if (text == "::")
    return ht;
  if (text == ":::")
    return hth;
  if (text == "::::")
    return hf;
  if (text == ":::::")
    return hf;
  if (text == "::::::")
    return hs;
  idstr = text;
  return expr;
}
function tok(t) {
  CurTok = lex(t);
}
function parseHeaderOne() {
  st = idstr;
  st.replace(": ", "");
  return "<h1>" + st + "</h1>"
}
function parseHeaderTwo() {
  st = idstr;
  st.replace(": ", "");
  return "<h2>" + st + "</h2>"
}
function parseExpr() {
  st = idstr.split(' ')[0];
  if (st == ":")
    return parseHeaderOne();
  if (st == "::")
    return parseHeaderTwo();
  return "<p>ERROR</p>"
}
function wove(text) {
  tok(t);
  parseExpr();
}
