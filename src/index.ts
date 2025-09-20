import type { ErrorMeta } from '@interfaces/index'

/**
 * Application metadata and version information
 * @description Contains version number and last modification date for the TypeScript Helper library
 */
export const metaData: ErrorMeta = {
  version: '5.9.2',
  lastModified: '2025-09-20'
}

/**
 * Re-export core functionality
 * @description Exports the TypeScriptHelper class and all core utilities for error parsing and data loading
 */
export * from '@core/index'
export { default as TypeScriptHelper } from '@core/index'

/**
 * Re-export all type definitions
 * @description Exports all TypeScript interfaces and type definitions used throughout the library
 */
export * from '@interfaces/index'
