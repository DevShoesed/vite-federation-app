// vite.config.ts
import { defineConfig } from "file:///Users/francescoscarpato/study/vite-federation-app/mfe2/node_modules/vite/dist/node/index.js";
import react from "file:///Users/francescoscarpato/study/vite-federation-app/mfe2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { federation } from "file:///Users/francescoscarpato/study/vite-federation-app/mfe2/node_modules/@module-federation/vite/lib/index.cjs";
import { createEsBuildAdapter } from "file:///Users/francescoscarpato/study/vite-federation-app/mfe2/node_modules/@softarc/native-federation-esbuild/src/index.js";
import { reactReplacements } from "file:///Users/francescoscarpato/study/vite-federation-app/mfe2/node_modules/@softarc/native-federation-esbuild/src/lib/react-replacements.js";
var __vite_injected_original_dirname = "/Users/francescoscarpato/study/vite-federation-app/mfe2";
var vite_config_default = defineConfig(async ({ command }) => ({
  server: { port: 8175 },
  plugins: [
    await federation({
      options: {
        workspaceRoot: __vite_injected_original_dirname,
        outputPath: "dist",
        tsConfig: "tsconfig.json",
        federationConfig: "module-federation/federation.config.cjs",
        verbose: false,
        dev: command === "serve"
      },
      adapter: createEsBuildAdapter({
        plugins: [],
        fileReplacements: reactReplacements.dev
      })
    }),
    react()
  ]
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZnJhbmNlc2Nvc2NhcnBhdG8vc3R1ZHkvdml0ZS1mZWRlcmF0aW9uLWFwcC9tZmUyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZnJhbmNlc2Nvc2NhcnBhdG8vc3R1ZHkvdml0ZS1mZWRlcmF0aW9uLWFwcC9tZmUyL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9mcmFuY2VzY29zY2FycGF0by9zdHVkeS92aXRlLWZlZGVyYXRpb24tYXBwL21mZTIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgZmVkZXJhdGlvbiB9IGZyb20gJ0Btb2R1bGUtZmVkZXJhdGlvbi92aXRlJztcbmltcG9ydCB7IGNyZWF0ZUVzQnVpbGRBZGFwdGVyIH0gZnJvbSAnQHNvZnRhcmMvbmF0aXZlLWZlZGVyYXRpb24tZXNidWlsZCc7XG5pbXBvcnQgeyByZWFjdFJlcGxhY2VtZW50cyB9IGZyb20gJ0Bzb2Z0YXJjL25hdGl2ZS1mZWRlcmF0aW9uLWVzYnVpbGQvc3JjL2xpYi9yZWFjdC1yZXBsYWNlbWVudHMnO1xuXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKHtjb21tYW5kfSkgPT4gKHtcbiAgc2VydmVyOiB7IHBvcnQ6IDgxNzUgfSxcbiAgcGx1Z2luczogW1xuICAgIGF3YWl0IGZlZGVyYXRpb24oe1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICB3b3Jrc3BhY2VSb290OiBfX2Rpcm5hbWUsXG4gICAgICAgIG91dHB1dFBhdGg6ICdkaXN0JyxcbiAgICAgICAgdHNDb25maWc6ICd0c2NvbmZpZy5qc29uJyxcbiAgICAgICAgZmVkZXJhdGlvbkNvbmZpZzogJ21vZHVsZS1mZWRlcmF0aW9uL2ZlZGVyYXRpb24uY29uZmlnLmNqcycsXG4gICAgICAgIHZlcmJvc2U6IGZhbHNlLFxuICAgICAgICBkZXY6IGNvbW1hbmQgPT09ICdzZXJ2ZScsXG4gICAgICB9LFxuICAgICAgYWRhcHRlcjogY3JlYXRlRXNCdWlsZEFkYXB0ZXIoe1xuICAgICAgICBwbHVnaW5zOiBbXSxcbiAgICAgICAgZmlsZVJlcGxhY2VtZW50czogcmVhY3RSZXBsYWNlbWVudHMuZGV2LFxuICAgICAgfSksXG4gICAgfSksXG4gICAgcmVhY3QoKSxcbiAgXSxcbn0pKVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VixTQUFTLG9CQUFvQjtBQUNwWCxPQUFPLFdBQVc7QUFDbEIsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyx5QkFBeUI7QUFKbEMsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhLE9BQU8sRUFBQyxRQUFPLE9BQU87QUFBQSxFQUNoRCxRQUFRLEVBQUUsTUFBTSxLQUFLO0FBQUEsRUFDckIsU0FBUztBQUFBLElBQ1AsTUFBTSxXQUFXO0FBQUEsTUFDZixTQUFTO0FBQUEsUUFDUCxlQUFlO0FBQUEsUUFDZixZQUFZO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixrQkFBa0I7QUFBQSxRQUNsQixTQUFTO0FBQUEsUUFDVCxLQUFLLFlBQVk7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsU0FBUyxxQkFBcUI7QUFBQSxRQUM1QixTQUFTLENBQUM7QUFBQSxRQUNWLGtCQUFrQixrQkFBa0I7QUFBQSxNQUN0QyxDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsRUFDUjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
