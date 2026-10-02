<div align="center">
  <img src="https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/preview.gif" alt="AntiIdle Animated Preview" width="100%">
  
  # AntiIdle
  
  [![Version](https://img.shields.io/badge/version-1.0.3-blue.svg)](https://github.com/Kiano-Ksl/AntiIdle)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
</div>

> BetterDiscord plugin that firmly prevents your Discord status from automatically changing to Idle during periods of inactivity.

## Installation Guide

> **Prerequisite:** You must have [BetterDiscord](https://betterdiscord.app/) installed on your client before using this plugin.

1. Download the latest release of [`AntiIdle.plugin.js`](https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/AntiIdle.plugin.js).
2. Open your Discord client and navigate to **User Settings**.
3. Scroll down to the BetterDiscord section and select **Plugins**.
4. Click the **Open Plugin Folder** button at the top of the interface.
5. Transfer the downloaded `.plugin.js` file into this directory.
6. Return to the Discord interface and toggle the **AntiIdle** switch to active.
## Core Features

*   **Consistent Presence:** Maintains a strict green "Online" status regardless of physical absence from the workstation.
*   **Deep State Integration:** Bypasses superficial UI checks by directly manipulating Discord's internal `IdleStore` memory states.
*   **Absolute Clean-up:** Guarantees zero memory leaks. Completely restores original functions and states upon plugin deactivation.
*   **Zero Synthetic Events:** Abandons unstable artificial mouse/keyboard simulations in favor of direct state overrides.

## Installation Guide

> **Prerequisite:** You must have [BetterDiscord](https://betterdiscord.app/) installed on your client before using this plugin.

1. Download the latest release of [`AntiIdle.plugin.js`](https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/AntiIdle.plugin.js).
2. Open your Discord client and navigate to **User Settings**.
3. Scroll down to the BetterDiscord section and select **Plugins**.
4. Click the **Open Plugin Folder** button at the top of the interface.
5. Transfer the downloaded `.plugin.js` file into this directory.
6. Return to the Discord interface and toggle the **AntiIdle** switch to active.

## Version History

### v1.0.3
*   **Overhaul:** Transitioned from surface-level `isIdle` module patching to deep `IdleStore` manipulation.
*   **Enhancement:** Hooked `getIdleSince` to return `null`, effectively breaking the internal AFK timer logic.
*   **Stability:** Hooked `isAFK` to prevent server-side idle state dispatching.

---
*This project is distributed under the [MIT License](https://choosealicense.com/licenses/mit/).*
