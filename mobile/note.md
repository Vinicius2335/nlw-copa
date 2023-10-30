# Bash

- `npx create-expo-app mobile`
- `npm i @gluestack-ui/themed @gluestack-style/react react-native-svg@13.4.0` 
  - pacote de componentes - gluestack - estilos através de propriedades
  - OBS:  [Site](https://gluestack.io/)
- `npx expo install expo-font @expo-google-fonts/roboto` - para poder usar as fontes do google

# Passos

- muda o projeto para typescript
  1.  mudar App.js -> App.tsx
  2. criar file tsconfig.json
  3. `npx expo start` - configura tudo automaticamente

# Obs

- React Native Trabalha com Independencia de pixel, por isso não utiliza pixel.
- [Exemplo](https://github.com/gluestack/ui-examples/blob/main/kitchensink-components/Banner.tsx) de uso GlueStack

# Erros

- Erro - `500 Internal Server Error - GET https://registry.npmjs.org/@react-aria%2fvisually-hidden - KV GET failed: 401 Unauthorized`
- Soluçao - `npm cache clean --force`
- npm uninstall native-base