/**
 * @name AntiIdle
 * @author Kiano-Ksl
 * @description Prevents Discord from automatically changing your status to Idle.
 * @version 1.0.3
 * @source https://github.com/Kiano-Ksl/AntiIdle
 * @updateUrl https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/AntiIdle.plugin.js
 */

module.exports = class AntiIdle {
    constructor() {
        this.patcherId = "AntiIdle-Kiano";
    }

    start() {
        const { Webpack, Patcher, Logger, UI } = BdApi;
        const IdleStore = Webpack.getStore("IdleStore");

        if (!IdleStore) {
            Logger.error("AntiIdle", "IdleStore not found.");
            UI.showToast("AntiIdle failed to load.", { type: "error" });
            return;
        }

        try {
            if (typeof IdleStore.getIdleSince === "function") {
                Patcher.instead(this.patcherId, IdleStore, "getIdleSince", () => null);
            }
            if (typeof IdleStore.isIdle === "function") {
                Patcher.instead(this.patcherId, IdleStore, "isIdle", () => false);
            }
            if (typeof IdleStore.isAFK === "function") {
                Patcher.instead(this.patcherId, IdleStore, "isAFK", () => false);
            }
            Logger.info("AntiIdle", "Successfully patched IdleStore.");
            UI.showToast("AntiIdle started successfully.", { type: "success" });
        } catch (err) {
            Logger.error("AntiIdle", "Failed to patch IdleStore:", err);
            UI.showToast("AntiIdle encountered an error.", { type: "error" });
        }
    }

    stop() {
        BdApi.Patcher.unpatchAll(this.patcherId);
        BdApi.UI.showToast("AntiIdle stopped.", { type: "info" });
    }
};