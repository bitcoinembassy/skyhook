var Language = (function (globals) {
  var debug = false;
  var gt = new Gettext({domain: 'secondary'});
  var lastLangChange = (new Date()).getTime();
  var currentLang = "";

  globals._ = function (msgid, opt_arg_array) {
    if (debug) { return "### DEBUG TEXT ###"; }
    if (typeof opt_arg_array === "undefined") {
      return gt.gettext(msgid);
    } else {
      return gt.strargs(msgid, opt_arg_array);
    }
  };
	
  return {
    load : function load(lang) {
      currentLang = lang;
      lastLangChange = (new Date()).getTime();         
      gt.try_load_lang_po('/locales/' + lang + '/LC_MESSAGES/secondary.po');
    },

    getLastLangChange: function() {
      return lastLangChange;
    },

    getCurrentLang: function() {
      return currentLang;
    },

    enableTesting: function() { debug = true; }
  }
}(this));


