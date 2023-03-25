export const importAll = <T>(requireContext: __WebpackModuleApi.RequireContext ) => {
  const importModule: { default: T }[] = requireContext.keys().map(requireContext) as  { default: T }[]
  return importModule.map((el) => el.default)
}
