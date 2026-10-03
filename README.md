<div align="center">
  <img src="https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/preview.gif" alt="AntiIdle Preview" width="100%">
  
  # AntiIdle
</div>

A simple BetterDiscord plugin that stops your account from going Idle (moon icon) when you are away from your keyboard. 
It works by patching the internal `IdleStore` so Discord always thinks you are active.

## Installation
> **Note:** You must have [BetterDiscord](https://betterdiscord.app/) installed first.

1. Download [`AntiIdle.plugin.js`](https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/AntiIdle.plugin.js).
2. Open your Discord Settings -> Plugins.
3. Click **Open Plugin Folder**.
4. Move the downloaded file into that folder.
5. Enable the plugin.

## Changelog
**v1.0.3**
- Changed patching method to target `IdleStore` directly.

## License
MIT