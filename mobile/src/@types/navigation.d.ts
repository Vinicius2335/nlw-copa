export declare global {
  namespace ReactNavigation {
    interface RootParamList{
      new: undefined
      login: undefined
      polls: undefined
      find: undefined
      details: {
        id: string
      }
    }
  }
}

// undefined significa que não possui nenhum parametro, basta chamar ela