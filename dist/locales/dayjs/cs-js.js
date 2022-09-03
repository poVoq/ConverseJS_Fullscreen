(self["webpackChunkconverse_js"] = self["webpackChunkconverse_js"] || []).push([[7400],{

/***/ 9280:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (e, n) {
   true ? module.exports = n(__webpack_require__(8570)) : 0;
}(this, function (e) {
  "use strict";

  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }

  var t = n(e);

  function s(e) {
    return e > 1 && e < 5 && 1 != ~~(e / 10);
  }

  function r(e, n, t, r) {
    var d = e + " ";

    switch (t) {
      case "s":
        return n || r ? "pár sekund" : "pár sekundami";

      case "m":
        return n ? "minuta" : r ? "minutu" : "minutou";

      case "mm":
        return n || r ? d + (s(e) ? "minuty" : "minut") : d + "minutami";

      case "h":
        return n ? "hodina" : r ? "hodinu" : "hodinou";

      case "hh":
        return n || r ? d + (s(e) ? "hodiny" : "hodin") : d + "hodinami";

      case "d":
        return n || r ? "den" : "dnem";

      case "dd":
        return n || r ? d + (s(e) ? "dny" : "dní") : d + "dny";

      case "M":
        return n || r ? "měsíc" : "měsícem";

      case "MM":
        return n || r ? d + (s(e) ? "měsíce" : "měsíců") : d + "měsíci";

      case "y":
        return n || r ? "rok" : "rokem";

      case "yy":
        return n || r ? d + (s(e) ? "roky" : "let") : d + "lety";
    }
  }

  var d = {
    name: "cs",
    weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
    weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
    weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
    months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
    monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
    weekStart: 1,
    yearStart: 4,
    ordinal: function (e) {
      return e + ".";
    },
    formats: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd D. MMMM YYYY H:mm",
      l: "D. M. YYYY"
    },
    relativeTime: {
      future: "za %s",
      past: "před %s",
      s: r,
      m: r,
      mm: r,
      h: r,
      hh: r,
      d: r,
      dd: r,
      M: r,
      MM: r,
      y: r,
      yy: r
    }
  };
  return t.default.locale(d, null, !0), d;
});

/***/ })

}]);
//# sourceMappingURL=cs-js.js.map