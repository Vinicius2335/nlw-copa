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
  - `npx expo install react-native-screens react-native-safe-area-context` - complementos necessário para o navigate 
  - `npm install @react-navigation/bottom-tabs` - para a navegaçao por tab
  - `npm i country-list` - biblioteca para pegar o nome do pais pelo código
  - `npm i react-native-country-flag` - biblioteca com a bandeira dos países

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

- Como trabalhar com o navigate
  0. [Documentação](https://reactnavigation.org/docs/tab-based-navigation)
  1. instalar a dependencia e seus complementos
  2. criando as rotas
    1. criar a pasta routes
    2. criar o arquivo app.routes.tsx
    3. criar o arquivo index.tsx
  3. adicionar o routes em App.tsx
  4. criar uma tipagem para as rotas
    1. criar em @types o arquivo -> navigation.d.ts

# 👀 Obs

- React Native Trabalha com Independencia de pixel, por isso não utiliza pixel.
- [Exemplo](https://github.com/gluestack/ui-examples/blob/main/kitchensink-components/Banner.tsx) de uso GlueStack
- Icones com o lucide/phosphor react native - fuuncionam

# ⛔ Erros

- **Erro** - `500 Internal Server Error - GET https://registry.npmjs.org/@react-aria%2fvisually-hidden - KV GET failed: 401 Unauthorized`
- **Soluçao** - `npm cache clean --force`
- é uma biblioteca antiga que não é mais mantida
- npm uninstall native-base

<br />

- **Erro** - `fontFamily "Roboto_400Regular" is not a system font and has not been loaded through Font.loadAsync.`
- Não funcionou `rm -rf ./node_modules/expo/node_modules/expo-font/`
- Não carrega a fonte roboto
- **Solução** - desistir

<br />

- **Erro** - `Invariant Violation: requireNativeComponent: "RNSVGSvgView" was not found in the UIManager`
- Não funciona o svg msm tudo sendo instalado corretamente
- **Soulução** - atualizar o react-native-svg

<br />

- Num dia o expo está funcionando e no outro
- `TypeError: Cannot read properties of undefined (reading 'bodyStream')`
- `FetchError: request to https://api.expo.dev/v2/sdks/49.0.0/native-modules failed, reason: son: socket hang up`
- `FetchError: request to https://api.expo.dev/v2/sdks/49.0.0/native-modules failed, reason: Client network socket disconnected before secure TLS connection was established`
- **Solução** - `npx expo start -c`