await Bun.build({
    entrypoints: ['./src/main.ts'],
    outdir: './dist',
    sourcemap: 'external',
    target: 'bun',
    format: 'esm',
    packages: 'external',
});