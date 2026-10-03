<div align="center">
  <img src="https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/preview.gif" alt="AntiIdle Preview" width="100%">
  
  # AntiIdle
  
  [![Version](https://img.shields.io/badge/version-1.0.3-blue.svg)](https://github.com/Kiano-Ksl/AntiIdle)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
</div>

AntiIdle is a BetterDiscord plugin that prevents your account from automatically changing its status to Idle (the moon icon) when you step away from your keyboard. 

Instead of simulating fake mouse movements or keystrokes, it safely patches Discord's internal `IdleStore`. This means Discord completely ignores your actual AFK time and keeps your status green (Online) seamlessly without spamming the API.

## Installation

> **Note:** You need to have [BetterDiscord](https://betterdiscord.app/) installed first before using this plugin.

1. Download the latest release of [`AntiIdle.plugin.js`](https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/AntiIdle.plugin.js).
2. Open your Discord and go to **User Settings** > **Plugins**.
3. Click the **Open Plugin Folder** button at the top.
4. Drop the `.plugin.js` file you just downloaded into that folder.
5. Turn on the switch for AntiIdle in the plugin list.

## Changelog

**v1.0.3**
- Switched from surface-level `isIdle` patching to directly hooking into `IdleStore`.
- Added `isAFK` and `getIdleSince` hooks for better stability.

## License

This project is open-source and available under the [MIT License](https://choosealicense.com/licenses/mit/).