(function() {
  var storageKey = 'theme';
  var root = document.documentElement;
  var mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {}
  }

  function getPreferredTheme() {
    if (mediaQuery && mediaQuery.matches) {
      return 'dark';
    }
    return 'light';
  }

  function updateMetaThemeColor(theme) {
    var metaThemeColor = document.querySelector('meta[data-theme-color]');
    if (!metaThemeColor) {
      return;
    }
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#111827' : '#ffffff');
  }

  function updateButtons(theme) {
    var buttons = document.querySelectorAll('.theme-toggle');
    var isDark = theme === 'dark';
    var isChinese = root.lang.indexOf('zh') === 0;
    var label = isChinese ? (isDark ? '切换到浅色模式' : '切换到深色模式') : (isDark ? 'Switch to light mode' : 'Switch to dark mode');

    Array.prototype.forEach.call(buttons, function(button) {
      button.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
    });
  }

  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    updateButtons(theme);
    updateMetaThemeColor(theme);

    if (persist) {
      setStoredTheme(theme);
    }
  }

  function toggleTheme() {
    var currentTheme = root.getAttribute('data-theme') || getPreferredTheme();
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
  }

  document.addEventListener('DOMContentLoaded', function() {
    updateButtons(root.getAttribute('data-theme') || getPreferredTheme());
    updateMetaThemeColor(root.getAttribute('data-theme') || getPreferredTheme());

    Array.prototype.forEach.call(document.querySelectorAll('.theme-toggle'), function(button) {
      button.addEventListener('click', toggleTheme);
    });
  });

  if (mediaQuery && mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', function(event) {
      if (getStoredTheme()) {
        return;
      }
      applyTheme(event.matches ? 'dark' : 'light', false);
    });
  } else if (mediaQuery && mediaQuery.addListener) {
    mediaQuery.addListener(function(event) {
      if (getStoredTheme()) {
        return;
      }
      applyTheme(event.matches ? 'dark' : 'light', false);
    });
  }
})();
