(function () {
  "use strict";
  var KEY = "hydromo-lang";
  var root = document.documentElement;

  function current() {
    return root.getAttribute("data-lang") === "ko" ? "ko" : "en";
  }

  function apply() {
    var lang = current();
    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);

    var label = document.querySelector(".lang-toggle-label");
    if (label) label.textContent = lang === "ko" ? "English" : "한국어";

    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        lang === "ko" ? "Switch to English" : "한국어로 전환"
      );
    }

    var title = document.querySelector("title");
    if (title) {
      if (!title.getAttribute("data-en")) {
        title.setAttribute("data-en", title.textContent);
      }
      var titleText = title.getAttribute("data-" + lang);
      if (titleText) title.textContent = titleText;
    }

    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      if (!meta.getAttribute("data-en")) {
        meta.setAttribute("data-en", meta.getAttribute("content") || "");
      }
      var metaText = meta.getAttribute("data-" + lang);
      if (metaText) meta.setAttribute("content", metaText);
    }
  }

  function init() {
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = current() === "ko" ? "en" : "ko";
        root.setAttribute("data-lang", next);
        try {
          localStorage.setItem(KEY, next);
        } catch (e) {
          /* 저장 불가 환경에서는 이 세션에서만 전환 */
        }
        apply();
      });
    }
    apply();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
