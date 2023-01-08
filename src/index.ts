/**
 * The main types of Cheerio objects.
 *
 * @category Cheerio
 */
export type { Cheerio } from './cheerio.js';

/**
 * Types used in signatures of Cheerio methods.
 *
 * @category Cheerio
 */
export * from './types.js';
export type {
  CheerioOptions,
  HTMLParser2Options,
} from './options.js';

/**
 * Re-exporting all of the node types.
 *
 * @category DOM Node
 */
export type { Node, AnyNode, ParentNode, Element, Document } from 'domhandler';

export type { CheerioAPI } from './load.js';
