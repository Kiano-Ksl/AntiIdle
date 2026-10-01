# AntiIdle
A BetterDiscord plugin that prevents your Discord status from automatically changing to Idle (moon icon) after a period of inactivity.

## Features
- Blocks Discord's internal AFK detection.
- Blocks OS-level system idle signals.
- Lightweight and clean implementation using native BdApi.Patcher.
- Safely unpatches upon plugin stop to prevent memory leaks.

## Installation
1. Download [`AntiIdle.plugin.js`](https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/AntiIdle.plugin.js).
2. Open your Discord settings and go to the **Plugins** section under BetterDiscord.
3. Click on **Open Plugin Folder** at the top.
4. Drop the downloaded `.plugin.js` file into this folder.
5. Turn on the plugin switch inside Discord.

## Changelog
**v1.0.1**
- Updated Webpack module search to use `byKeys` for compatibility with the latest BetterDiscord API.
- Added fallback method using `findModuleByProps`.

## License
[MIT](https://choosealicense.com/licenses/mit/)
