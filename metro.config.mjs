// Learn more https://docs.expo.io/guides/customizing-metro
import { getDefaultConfig } from "expo/metro-config";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

export default config;
