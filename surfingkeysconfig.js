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
  "background: rgba(40, 36, 62, 0.72); " +
  "backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); " +
  "border-radius: 4px; padding: 1px 4px;";
api.Hints.style(hintsCss);
api.Hints.style(hintsCss, "text");

settings.theme = `
  /* ── Base ───────────────────────────────────────────────── */
  .sk_theme {
    background: rgba(26, 24, 38, 0.78);
    color: #e2e0f0;
    backdrop-filter: blur(20px) saturate(1.4);
    -webkit-backdrop-filter: blur(20px) saturate(1.4);
  }
  input {
    font-family: 'SF Pro','JetBrains Mono', 'JetBrainsMonoNL Nerd Font', 'JetBrainsMono NF Regular';
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
    background: rgba(36, 33, 54, 0.82);
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
    font-size: 12px;
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
    font-size: 18px;
    width: auto;
  }
  #sk_omnibarSearchArea>input {
    display: inline-block;
    width: 100%;
    flex: 1;
    font-size: 18px;
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
    margin: 0.6rem 1.1rem;
  }
  .sk_omnibar_bottom #sk_omnibarSearchArea {
    margin: 0.25rem 1.1rem;
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

  /* Uniform row surface */
  .sk_theme #sk_omnibarSearchResult>ul>li {
    background: transparent;
    padding: 0.35rem 0.6rem;
    display: block;
    max-height: 600px;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 8px;
    transition: background 120ms ease, transform 120ms ease, box-shadow 120ms ease;
  }

  /* Remove zebra striping */
  .sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: transparent;
  }

  /* Subtle divider between rows */
  .sk_theme #sk_omnibarSearchResult>ul>li + li {
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  /* Focused row — refined macOS style */
  .sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: rgba(255, 255, 255, 0.08);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06);
    transform: scale(1.01); /* subtle hover lift */
  }
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
    padding: 4px 10px 0 10px;
    border-radius: 8px 8px 0 0;
    background: rgba(24, 22, 36, 0.72);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
    border-bottom: none;
    font-size: 12px;
    color: #e2e0f0;
  }
  #sk_status>span {
    line-height: 16px;
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
    padding: 6px 10px;
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
  }

  /* ── Usage / Popup / Editor ─────────────────────────────── */
  #sk_usage, #sk_popup, #sk_editor {
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
    padding: 1rem;
    color: #e2e0f0;
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
    line-height: 22px;
  }
  #sk_usage * {
    font-size: 10pt;
  }

  /* ── Kbd ────────────────────────────────────────────────── */
  kbd {
    white-space: nowrap;
    display: inline-block;
    padding: 3px 5px;
    font: 11px 'JetBrains Mono', 'JetBrainsMonoNL Nerd Font', 'JetBrainsMono NF Regular';
    line-height: 10px;
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
`;
