import { config as defaultConfig } from "@gluestack-ui/config"

// sobrescreve os temas de default ou cria novos 
export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      gray950: "#09090A",
      gray900: "#121214",
      gray800: "#202024",
      gray600: "#323238",
      gray300: "#8D8D99",
      gray200: "#C4C4CC",
      green500: "#047C3F",
      yellow500: "#F7DD43",
      yellow600: "#BBA317",
      red500: "#DB4437",
    },
    fontSize: {
      ...defaultConfig.tokens.fontSizes,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
    },
    // Adicionamoes esse space
    space: {
      ...defaultConfig.tokens.space,
      14: 56,
      22: 87
    }

  } as const
}

type Config = typeof config
declare module "@gluestack-ui/config" {
  interface IConfig extends Config {}
}

