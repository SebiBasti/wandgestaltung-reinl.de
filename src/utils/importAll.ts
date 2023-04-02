// Export a generic function called `importAll` that takes a `requireContext` parameter of type `__WebpackModuleApi.RequireContext`.
export const importAll = <T>(
  requireContext: __WebpackModuleApi.RequireContext
) => {
  // Initialize an array called `importModule` to store modules with default exports of type `T`.
  const importModule: { default: T }[] = requireContext // Get all the keys in the `requireContext` object.
    .keys() // Filter out all the keys that do not match the regex `/\.\//`.
    .filter((key) => key.match(/\.\//)) // Import each module that corresponds to a key in the `requireContext` object.
    .map(requireContext) as { default: T }[] // Cast the resulting array of modules to an array of objects with a `default` property of type `T`.

  return importModule.map((el) => el.default) // Return an array of the default exports of all the modules in the `importModule` array.
}
