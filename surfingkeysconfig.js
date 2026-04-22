api.map('K', 'E'); // Switch tab - left
api.map('J', 'R'); // Switch tab - right
api.map('F', 'cf'); // Open hints in new tab
api.map('H', 'S'); // Go back in history
api.map('L', 'D'); // Go forward in history

settings.scrollStepSize = 140;
settings.hintAlign = "left";
settings.tabsThreshold = 0;
api.Hints.setCharacters('asdfghjklwertpoiuvbcn');

settings.blockListPattern = /.*docs.google.com.*/i;

// macOS-native appearance: frosted glass, blur, pink/purple accents
// Base palette:
//   background:  rgba(28, 27, 34, 0.72)  — dark glass
//   surface:     rgba(40, 38, 54, 0.80)  — slightly lighter pane
//   border:      rgba(255,255,255,0.10)  — subtle hairline
//   text:        #e2e0f0
//   muted:       #9893b0
//   accent pink: #e88fc7  (used sparingly — focused/active only)
//   accent purple: #c4a7e7 (URLs, mild highlights)

const hintsCss =
  "font-size: 12pt; font-family: 'JetBrains Mono', 'JetBrainsMonoNL Nerd Font', 'JetBrainsMono NF Regular'; " +
  "border: 0px; color: #f0eeff !important; " +
  "background: rgba(40, 36, 62, 0.82); " +
  "backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); " +
  "border-radius: 4px; padding: 1px 4px;";
api.Hints.style(hintsCss);
api.Hints.style(hintsCss, "text");

settings.theme = `
  /* ── Base ───────────────────────────────────────────────── */
  .sk_theme {
    background: rgba(26, 24, 38, 0.72);
    color: #e2e0f0;
    backdrop-filter: blur(20px) saturate(1.4);
    -webkit-backdrop-filter: blur(20px) saturate(1.4);
  }
  input {
    font-family: 'SF Pro', 'JetBrains Mono', 'JetBrainsMonoNL Nerd Font', 'JetBrainsMono NF Regular';
  }
  .sk_theme input {
    color: #e2e0f0;
  }
  .sk_theme .url {
    color: #c4a7e7;
  }
  .sk_theme .annotation {
    color: #9893b0;
  }
  .sk_theme kbd {
    background: rgba(255, 255, 255, 0.07);
    color: #e2e0f0;
    border-color: rgba(255, 255, 255, 0.12);
  }
  .sk_theme .frame {
    background: rgba(36, 33, 54, 0.72);
  }
  .sk_theme .omnibar_highlight {
    color: #e88fc7;  /* pink — only for matched text */
  }
  .sk_theme .omnibar_folder {
    color: #e2e0f0;
  }
  .sk_theme .omnibar_timestamp {
    color: #9893b0;
  }
  .sk_theme .omnibar_visitcount {
    color: #9893b0;
  }
  .sk_theme .prompt, .sk_theme .resultPage {
    color: #c4a7e7;
  }
  .sk_theme .feature_name {
    color: #e2e0f0;
  }
  .sk_theme .separator {
    color: rgba(255, 255, 255, 0.10);
  }

  /* ── Body ───────────────────────────────────────────────── */
  body {
    margin: 0;
    font-family: 'SF Pro', 'JetBrains Mono', 'JetBrainsMonoNL Nerd Font', 'JetBrainsMono NF Regular';
    font-size: 16px;
  }

  /* ── Omnibar ────────────────────────────────────────────── */
  #sk_omnibar {
    overflow: hidden;
    position: fixed;
    width: 68%;
    max-height: 80%;
    left: 16%;
    text-align: left;
    background: rgba(24, 22, 36, 0.72);
    backdrop-filter: blur(28px) saturate(1.5);
    -webkit-backdrop-filter: blur(28px) saturate(1.5);
    border: 1px solid rgba(255, 255, 255, 0.09);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45), 0 1px 0 rgba(255,255,255,0.06) inset;
    z-index: 2147483000;
  }
  .sk_omnibar_middle {
    top: 12%;
    border-radius: 12px;
  }
  .sk_omnibar_bottom {
    bottom: 0;
    border-radius: 12px 12px 0 0;
  }
  #sk_omnibar span.omnibar_highlight {
    text-shadow: 0 0 0.01em;
  }
  #sk_omnibarSearchArea .prompt, #sk_omnibarSearchArea .resultPage {
    display: inline-block;
    font-size: 24px;
    width: auto;
  }
  #sk_omnibarSearchArea>input {
    display: inline-block;
    width: 100%;
    flex: 1;
    font-size: 24px;
    margin-bottom: 0;
    padding: 0 0 0 0.5rem;
    background: transparent;
    border-style: none;
    outline: none;
    color: #e2e0f0;
  }
  #sk_omnibarSearchArea {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .sk_omnibar_middle #sk_omnibarSearchArea {
    margin: 1rem 1.5rem;
  }
  .sk_omnibar_bottom #sk_omnibarSearchArea {
    margin: 0.5rem 1.5rem;
  }
  .sk_omnibar_middle #sk_omnibarSearchResult>ul {
    margin-top: 0;
  }
  .sk_omnibar_bottom #sk_omnibarSearchResult>ul {
    margin-bottom: 0;
  }
  #sk_omnibarSearchResult {
    max-height: 60vh;
    overflow: hidden;
    margin: 0 0.6rem;
  }
  #sk_omnibarSearchResult:empty {
    display: none;
  }
  #sk_omnibarSearchResult>ul {
    padding: 0;
  }
  #sk_omnibarSearchResult>ul>li {
    padding: 0.5rem 0.5rem;
    display: block;
    max-height: 600px;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 14px;
  }
  .sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: rgba(255, 255, 255, 0.025);
  }
  .sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: rgba(232, 143, 199, 0.10); /* faint pink tint on focus */
    border-left: 2px solid #e88fc7;
    padding-left: 6px;
  }
  .sk_theme #sk_omnibarSearchResult>ul>li.window {
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 8px;
    margin: 4px 0;
  }
  .sk_theme #sk_omnibarSearchResult>ul>li.window.focused {
    border: 1px solid rgba(196, 167, 231, 0.5); /* purple border on focused window */
  }
  .sk_theme div.table {
    display: table;
  }
  .sk_theme div.table>* {
    vertical-align: middle;
    display: table-cell;
  }
  #sk_omnibarSearchResult li div.title {
    text-align: left;
  }
  #sk_omnibarSearchResult li div.url {
    font-weight: bold;
    white-space: nowrap;
  }
  #sk_omnibarSearchResult li.focused div.url {
    white-space: normal;
  }
  #sk_omnibarSearchResult li span.annotation {
    float: right;
  }
  #sk_omnibarSearchResult .tab_in_window {
    display: inline-block;
    padding: 5px;
    margin: 5px;
    background: rgba(255,255,255,0.04);
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  /* ── Status bar ─────────────────────────────────────────── */
  #sk_status {
    position: fixed;
    bottom: 0;
    right: 20%;
    z-index: 2147483000;
    padding: 7px 16px 3px 16px;
    border-radius: 8px 8px 0 0;
    background: rgba(24, 22, 36, 0.80);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-bottom: none;
    font-size: 15px;
    color: #e2e0f0;
  }
  #sk_status>span {
    line-height: 22px;
  }

  /* ── Rich hints ─────────────────────────────────────────── */
  .expandRichHints span.annotation {
    padding-left: 4px;
    color: #9893b0;
  }
  .expandRichHints .kbd-span {
    min-width: 30px;
    text-align: right;
    display: inline-block;
  }
  .expandRichHints kbd>.candidates {
    color: #e88fc7; /* pink for candidate key chars */
    font-weight: bold;
  }
  .expandRichHints kbd {
    padding: 1px 2px;
  }

  /* ── Find / Keystroke ───────────────────────────────────── */
  #sk_find {
    border-style: none;
    outline: none;
  }
  #sk_keystroke {
    padding: 8px 14px;
    position: fixed;
    float: right;
    bottom: 0;
    z-index: 2147483000;
    right: 0;
    background: rgba(24, 22, 36, 0.82);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 8px 0 0 0;
    color: #e2e0f0;
    font-size: 15px;
  }

  /* ── Usage / Popup ──────────────────────────────────────── */
  #sk_usage, #sk_popup {
    overflow: auto;
    position: fixed;
    width: 80%;
    max-height: 80%;
    top: 10%;
    left: 10%;
    text-align: left;
    background: rgba(24, 22, 36, 0.82);
    backdrop-filter: blur(24px) saturate(1.4);
    -webkit-backdrop-filter: blur(24px) saturate(1.4);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 12px;
    box-shadow: 0 12px 48px rgba(0,0,0,0.5);
    z-index: 2147483298;
    padding: 1.4rem;
    color: #e2e0f0;
  }

  /* ── Editor (vim insert mode — I key) ───────────────────── */
  #sk_editor {
    overflow: auto;
    position: fixed;
    width: 80%;
    max-height: 80%;
    top: 10%;
    left: 10%;
    text-align: left;
    background: rgba(18, 16, 30, 0.72) !important;
    backdrop-filter: blur(28px) saturate(1.5) !important;
    -webkit-backdrop-filter: blur(28px) saturate(1.5) !important;
    border: 1px solid rgba(196, 167, 231, 0.20) !important;
    border-radius: 12px;
    box-shadow: 0 12px 48px rgba(0,0,0,0.6);
    z-index: 2147483298;
    padding: 1.4rem;
    color: #e2e0f0 !important;
  }
  /* Force all text inside the editor to be legible */
  #sk_editor * {
    color: #e2e0f0 !important;
    background-color: transparent !important;
  }
  /* Ace editor inside vim insert mode */
  #sk_editor .ace_editor {
    background: rgba(18, 16, 30, 0.0) !important;
    color: #e2e0f0 !important;
  }
  #sk_editor .ace_gutter {
    background: rgba(255,255,255,0.04) !important;
    color: #9893b0 !important;
    border-right: 1px solid rgba(255,255,255,0.08) !important;
  }
  #sk_editor .ace_gutter-active-line {
    background: rgba(232, 143, 199, 0.10) !important;
  }
  #sk_editor .ace_cursor {
    color: #e88fc7 !important;
    border-left-color: #e88fc7 !important;
  }
  #sk_editor .ace_selection, #sk_editor .ace_selected-word {
    background: rgba(196, 167, 231, 0.20) !important;
    border: 1px solid rgba(196, 167, 231, 0.35) !important;
  }
  #sk_editor .ace_active-line {
    background: rgba(255,255,255,0.04) !important;
  }
  #sk_editor .ace_line {
    color: #e2e0f0 !important;
  }
  #sk_nvim {
    position: fixed;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 30%;
  }
  #sk_popup img {
    width: 100%;
  }
  #sk_usage>div {
    display: inline-block;
    vertical-align: top;
  }
  #sk_usage .kbd-span {
    width: 80px;
    text-align: right;
    display: inline-block;
  }
  #sk_usage .feature_name {
    text-align: center;
    padding-bottom: 4px;
  }
  #sk_usage .feature_name>span {
    border-bottom: 2px solid rgba(196, 167, 231, 0.4); /* subtle purple underline */
  }
  #sk_usage span.annotation {
    padding-left: 32px;
    line-height: 26px;
  }
  #sk_usage * {
    font-size: 12pt;
  }

  /* ── Kbd ────────────────────────────────────────────────── */
  kbd {
    white-space: nowrap;
    display: inline-block;
    padding: 4px 7px;
    font: 13px 'JetBrains Mono', 'JetBrainsMonoNL Nerd Font', 'JetBrainsMono NF Regular';
    line-height: 13px;
    vertical-align: middle;
    background: rgba(255,255,255,0.07);
    border: solid 1px rgba(255,255,255,0.12);
    border-bottom-color: rgba(255,255,255,0.06);
    border-radius: 5px;
    box-shadow: inset 0 -1px 0 rgba(0,0,0,0.3);
    color: #e2e0f0;
  }

  /* ── Banner ─────────────────────────────────────────────── */
  #sk_banner {
    padding: 0.5rem;
    position: fixed;
    left: 10%;
    top: -3rem;
    z-index: 2147483000;
    width: 80%;
    border-radius: 0 0 10px 10px;
    background: rgba(24, 22, 36, 0.82);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.09);
    border-top: none;
    text-align: center;
    color: #e2e0f0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  /* ── Tabs overlay ───────────────────────────────────────── */
  #sk_tabs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    overflow: auto;
    z-index: 2147483000;
  }
  div.sk_tab {
    display: inline-block;
    border-radius: 10px;
    padding: 10px 18px;
    margin: 5px;
    background: rgba(28, 26, 44, 0.80);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.09);
    box-shadow: 0 4px 16px rgba(0,0,0,0.35);
  }
  div.sk_tab_wrap {
    display: inline-block;
  }
  div.sk_tab_icon {
    display: inline-block;
    vertical-align: middle;
  }
  div.sk_tab_icon>img {
    width: 18px;
  }
  div.sk_tab_title {
    width: 150px;
    display: inline-block;
    vertical-align: middle;
    font-size: 10pt;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 5px;
    color: #e2e0f0;
  }
  div.sk_tab_url {
    font-size: 10pt;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #c4a7e7; /* purple for URLs */
  }
  div.sk_tab_hint {
    display: inline-block;
    float: right;
    font-size: 10pt;
    font-weight: bold;
    padding: 0 3px;
    background: rgba(232, 143, 199, 0.15); /* faint pink badge */
    color: #e88fc7;
    border: solid 1px rgba(232, 143, 199, 0.30);
    border-radius: 4px;
  }

  /* ── Bubble (hover info) ────────────────────────────────── */
  #sk_bubble {
    position: absolute;
    padding: 10px;
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 10px;
    background: rgba(24, 22, 36, 0.82);
    backdrop-filter: blur(20px) saturate(1.4);
    -webkit-backdrop-filter: blur(20px) saturate(1.4);
    box-shadow: 0 4px 24px rgba(0,0,0,0.4);
    color: #e2e0f0;
    z-index: 2147483000;
    font-size: 14px;
  }
  #sk_bubble .sk_bubble_content {
    overflow-y: scroll;
    background-size: 3px 100%;
    background-position: 100%;
    background-repeat: no-repeat;
  }
  .sk_scroller_indicator_top {
    background-image: linear-gradient(rgba(24,22,36,0.9), transparent);
  }
  .sk_scroller_indicator_middle {
    background-image: linear-gradient(transparent, rgba(24,22,36,0.6), transparent);
  }
  .sk_scroller_indicator_bottom {
    background-image: linear-gradient(transparent, rgba(24,22,36,0.9));
  }
  #sk_bubble * {
    color: #e2e0f0 !important;
  }

  /* ── Arrows ─────────────────────────────────────────────── */
  div.sk_arrow>div:nth-of-type(1) {
    left: 0;
    position: absolute;
    width: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    background: transparent;
  }
  div.sk_arrow[dir=down]>div:nth-of-type(1) {
    border-top: 12px solid rgba(255,255,255,0.10);
  }
  div.sk_arrow[dir=up]>div:nth-of-type(1) {
    border-bottom: 12px solid rgba(255,255,255,0.10);
  }
  div.sk_arrow>div:nth-of-type(2) {
    left: 2px;
    position: absolute;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    background: transparent;
  }
  div.sk_arrow[dir=down]>div:nth-of-type(2) {
    border-top: 10px solid rgba(24,22,36,0.90);
  }
  div.sk_arrow[dir=up]>div:nth-of-type(2) {
    top: 2px;
    border-bottom: 10px solid rgba(24,22,36,0.90);
  }

  /* ── Ace editor autocomplete ────────────────────────────── */
  .ace_editor.ace_autocomplete {
    z-index: 2147483300 !important;
    width: 80% !important;
    background: rgba(20, 18, 32, 0.90) !important;
    color: #e2e0f0 !important;
    border: 1px solid rgba(255,255,255,0.10) !important;
    border-radius: 8px !important;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  /* Ace editor — vim insert mode */
  .ace_editor {
    background: rgba(20, 18, 32, 0.88) !important;
    color: #e2e0f0 !important;
  }
  .ace_gutter {
    background: rgba(16, 14, 28, 0.85) !important;
    color: #9893b0 !important;
  }
  .ace_gutter-active-line {
    background: rgba(232, 143, 199, 0.08) !important;
  }
  .ace_marker-layer .ace_active-line {
    background: rgba(196, 167, 231, 0.07) !important;
  }
  .ace_cursor {
    color: #e88fc7 !important;
    border-left-color: #e88fc7 !important;
  }
  .ace_selection {
    background: rgba(196, 167, 231, 0.20) !important;
  }
  /* Insert mode status indicator */
  #sk_editor {
    background: rgba(20, 18, 32, 0.88);
    color: #e2e0f0;
  }
  /* Vim insert / visual mode banner shown at bottom */
  #sk_banner, .sk_insert_mode {
    background: rgba(20, 18, 32, 0.84) !important;
    color: #e2e0f0 !important;
    border-color: rgba(255,255,255,0.09) !important;
  }

  /* ── Mobile ─────────────────────────────────────────────── */
  @media only screen and (max-width: 767px) {
    #sk_omnibar {
      width: 100%;
      left: 0;
      border-radius: 0;
    }
    #sk_omnibarSearchResult {
      max-height: 50vh;
      overflow: scroll;
    }
    .sk_omnibar_bottom #sk_omnibarSearchArea {
      margin: 0;
      padding: 0.2rem;
    }
  }

  /* ── Vim insert mode indicator (the bar shown when pressing I) ── */
  /* SurfingKeys renders this as #sk_status with mode text,         */
  /* or as an <input> inside a themed container. Force dark styles  */
  /* on any element that may carry white backgrounds in insert mode. */
  #sk_status[style*="background"],
  #sk_status {
    background: rgba(20, 18, 32, 0.86) !important;
    color: #e2e0f0 !important;
  }
  /* The insert-mode edit field rendered by sk_editor */
  #sk_editor textarea,
  #sk_editor input {
    background: rgba(20, 18, 32, 0.88) !important;
    color: #e2e0f0 !important;
    caret-color: #e88fc7 !important;
    border: 1px solid rgba(196, 167, 231, 0.25) !important;
    border-radius: 6px !important;
    outline: none !important;
  }
  /* Override any injected inline white backgrounds on iframes/containers */
  .sk_theme[style],
  #sk_frame {
    background: rgba(20, 18, 32, 0.86) !important;
    color: #e2e0f0 !important;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
`;
