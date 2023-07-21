## Repro Environment
- macOS Ventura 13.4.1
- Webstorm 2023.1.4
- Typescript (in package.json): 5.1.6

## Repro steps
- Open `src/index.ts`
- Analyser is stuck

## Resolution
- Add `"baseUrl": "./"` to `tsconfig.json`
