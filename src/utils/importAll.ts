export const importAll = <T>(requireContext: __WebpackModuleApi.RequireContext ) => {
  const importModule: { default: T }[] = requireContext.keys().map(requireContext) as  { default: T }[]
  return importModule.map((el) => el.default)
}

/*
The importAll function is defined as a named export.
It is a generic function that takes a requireContext argument of type __WebpackModuleApi.RequireContext,
which is a type provided by the Webpack module system.
The <T> syntax is used to declare a generic type T that will be inferred
based on the type of the default export of the imported modules.
*/

/*
The importAll function allows for the dynamic importing of all modules that match a given Webpack require context
and returns an array of their default exports.
*/