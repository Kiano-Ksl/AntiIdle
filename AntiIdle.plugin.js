/**
 * @name AntiIdle
 * @author Kiano-Ksl
 * @description Prevents Discord from automatically changing your status to Idle by directly patching the internal IdleStore.
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
            Logger.error("AntiIdle", "IdleStore tidak ditemukan. Struktur Discord mungkin telah berubah.");
            UI.showToast("AntiIdle gagal memuat modul inti.", { type: "error" });
            return;
        }

        try {
            // fungsi getIdleSince
            if (typeof IdleStore.getIdleSince === "function") {
                Patcher.instead(this.patcherId, IdleStore, "getIdleSince", () => null);
            }

            if (typeof IdleStore.isIdle === "function") {
                Patcher.instead(this.patcherId, IdleStore, "isIdle", () => false);
            }

            if (typeof IdleStore.isAFK === "function") {
                Patcher.instead(this.patcherId, IdleStore, "isAFK", () => false);
            }

            Logger.info("AntiIdle", "Berhasil melakukan patch pada IdleStore.");
            UI.showToast("AntiIdle Aktif: IdleStore berhasil dicegat!", { type: "success" });
            
        } catch (error) {
            Logger.error("AntiIdle", "Gagal melakukan patch pada IdleStore:", error);
            UI.showToast("AntiIdle mengalami error saat patching.", { type: "error" });
        }
    }

    stop() {
        BdApi.Patcher.unpatchAll(this.patcherId);
        BdApi.UI.showToast("AntiIdle Dimatikan.", { type: "info" });
    }
};