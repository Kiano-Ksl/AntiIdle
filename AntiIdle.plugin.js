/**
 * @name AntiIdle
 * @author Kiano-ksl
 * @description Prevents Discord from automatically changing your status to Idle after a period of inactivity.
 * @version 1.0.0
 * @source https://github.com/Kiano-Ksl/AntiIdle
 * @updateUrl https://raw.githubusercontent.com/Kiano-Ksl/AntiIdle/main/AntiIdle.plugin.js
 */

module.exports = class AntiIdle {
    constructor() {
        // ID patch
        this.patcherId = "AntiIdle-Rafi";
    }

    start() {
        const { Webpack, Patcher, Logger, UI } = BdApi;


        const IdleModule = Webpack.getModule(Webpack.Filters.byProps("isIdle", "isSystemIdle"));

        if (!IdleModule) {
            Logger.error("AntiIdle", "Modul Idle tidak ditemukan! API internal Discord mungkin telah berubah.");
            UI.showToast("AntiIdle gagal dimuat. Cek console (Ctrl+Shift+I).", { type: "error" });
            return;
        }

        // Mencegah AFK di dalam aplikasi
        if (typeof IdleModule.isIdle === "function") {
            Patcher.instead(this.patcherId, IdleModule, "isIdle", () => false);
        }

        // Mencegah sinyal AFK (Windows/Mac)
        if (typeof IdleModule.isSystemIdle === "function") {
            Patcher.instead(this.patcherId, IdleModule, "isSystemIdle", () => false);
        }

        Logger.info("AntiIdle", "Plugin berhasil diaktifkan. Status akan dipertahankan Online.");
    }

    stop() {
        BdApi.Patcher.unpatchAll(this.patcherId);
        BdApi.Logger.info("AntiIdle", "Plugin dimatikan, semua patch dibersihkan.");
    }
};