# 💬 Bash

- `npx create-expo-app mobile`
- `npm i @gluestack-ui/themed @gluestack-style/react react-native-svg` 
  - pacote de componentes - gluestack - estilos através de propriedades
  - OBS:  [Site](https://gluestack.io/)
- `npx expo install expo-font @expo-google-fonts/roboto` - para poder usar as fontes do google
- `npm i react-native-svg-transformer` - biblioteca para trabalhar com svg
- `npx expo install expo-auth-session expo-crypto` - OAuth2
- `npx expo install expo-web-browser` - Para cuidar do processo de abrir o browser / voltar para o app
- `npx expo install @react-native-google-signin/google-signin`
- `npm install @react-navigation/native` - navegação

> Falta arrumar Guesses
> Participants
> PollCard
> PollHeader
  

# 📝 Lembretes

- Como mudar o projeto para typescript
  1.  mudar App.js -> App.tsx
  2. criar file tsconfig.json
  3. `npx expo start` - configura tudo automaticamente

- Como trabalhar com svg
  1. adicionar a biblioteca react-native-svg-transformer
  2. criar o arquivo metro.config.js
  3. criar a pasta @types para todas as tipagens
  4. criar o arquivo svg.d.ts

# 👀 Obs

- React Native Trabalha com Independencia de pixel, por isso não utiliza pixel.
- [Exemplo](https://github.com/gluestack/ui-examples/blob/main/kitchensink-components/Banner.tsx) de uso GlueStack
- Icones com o lucide dá certo

# ⛔ Erros

- Erro - `500 Internal Server Error - GET https://registry.npmjs.org/@react-aria%2fvisually-hidden - KV GET failed: 401 Unauthorized`
- Soluçao - `npm cache clean --force`
- é uma biblioteca antiga que não é mais mantida
- npm uninstall native-base

<br />

- Erro - `fontFamily "Roboto_400Regular" is not a system font and has not been loaded through Font.loadAsync.`
- Não funcionou `rm -rf ./node_modules/expo/node_modules/expo-font/`
- Não carrega a fonte roboto
- Solução - desistir

<br />

- Erro - `Invariant Violation: requireNativeComponent: "RNSVGSvgView" was not found in the UIManager`
- Não funciona o svg msm tudo sendo instalado corretamente
- Soulução - atualizar o react-native-svg
