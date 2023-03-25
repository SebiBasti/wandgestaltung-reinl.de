export const importAll = <T>(requireContext: __WebpackModuleApi.RequireContext ) => {
  const module: { default: T }[] = requireContext.keys().map(requireContext) as  { default: T }[]
  return module.map((el) => el.default)
}