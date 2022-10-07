import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from "@chakra-ui/react";
import "../styles/global.css";

const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
};

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

const theme = extendTheme({ colors, config });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
