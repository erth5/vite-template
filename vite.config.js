import { build, defineConfig } from "vite";
export default defineConfig({
    root: "src",
    assetsInclude: ["./*.*"],
    //assetsInclude: ["./**/*.*"],
    build: {
        emptyOutDir: true,
        outDir: "../dist"
    }
})
